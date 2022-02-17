import * as React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Card as Kard } from "react-onsenui";
import axios from "axios";
import native from "@Native/index";
import { Icon } from "react-onsenui";
import tools from "@Misc/tools";
import ActionSheetBuilder from "./ActionSheetBuilder";
import { string } from "@Strings";

class PictureBuilder extends React.Component<{
  note?: any;
  source?: any;
  getId?: any;
  isNew?: any;
}> {
  private element!: HTMLElement | null;
  private buttonDesign: string = native.getPref("enableDarkmode") === "true" ? "lilaDarkMode" : "lila";

  public state = {
    isContextOpen: false,
    isImageError: false,
  };

  /**
   * To generate an id that refresh every page reload, to avoid duplicte ids
   */
  private getID = this.props.note.replace(/\s/g, "") + this.id();
  private getNote = this.props.note.charAt(0).toUpperCase() + this.props.note.slice(1);
  private images = this.randomizer(this.props.note);

  private id() {
    const { note } = this.props;
    var id: any = note.length;
    return this.makeUUID(id);
  }

  private makeUUID(length: number) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  private randomizer(image: string): string {
    native.fs.mkDir("images");
    try {
      if (native.isAndroid || native.isWindows) {
        axios
          .get(
            "https://cdn.dergoogler.com/others/hentai-web/images/" + image.replace(/\s/g, "").toLowerCase() + ".json"
          )
          .then((res) => {
            try {
              const data = res.data;
              native.fs.writeFile("images/" + image.replace(/\s/g, "").toLowerCase() + ".json", JSON.stringify(data));
            } catch (error) {
              console.log(error);
            }
          });
      } else {
        axios
          .get(
            "https://cdn.dergoogler.com/others/hentai-web/images/" + image.replace(/\s/g, "").toLowerCase() + ".json"
          )
          .then((res) => {
            try {
              const data = res.data;
              native.setPref(image.replace(/\s/g, "").toLowerCase() + ".json", JSON.stringify(data));
            } catch (error) {
              console.log(error);
            }
          });
      }
      const data =
        native.isAndroid || native.isWindows
          ? native.fs.readFile("images/" + image.replace(/\s/g, "").toLowerCase() + ".json", {
              parse: { use: true, mode: "json" },
            })
          : // @ts-ignore
            JSON.parse(native.getPref(image.replace(/\s/g, "").toLowerCase() + ".json"));
      return data[Math.floor(Math.random() * data.length)];
    } catch (error) {
      return "error";
    }
  }

  private handleClick = () => {
    this.setState({ isContextOpen: true });
  };

  private handleCancel = () => {
    this.setState({ isContextOpen: false });
  };

  public render() {
    const { note, source, isNew } = this.props;
    return (
      <>
        {/*
                // @ts-ignore */}
        <card>
          <Kard style={{ padding: "0px", borderRadius: "8px", border: "0px" }}>
            <Card
              key={this.getID}
              style={{
                padding: "0px",
                margin: "0px",
                boxShadow: "none",
                backgroundColor: "transparent",
              }}
            >
              <Card.Header style={{ display: tools.typeIF(native.getPref("removeTitle"), "none", "block") }}>
                {/*
                // @ts-ignore */}
                <name style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                  <h4
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                    className={"searchKey> " + this.getID + "_search"}
                  >
                    {(() => {
                      if (isNew) {
                        return (
                          <>
                            <Badge style={{ fontSize: "10px" }} bg={this.buttonDesign}>
                              NEW
                            </Badge>
                            &nbsp;
                          </>
                        );
                      } else {
                        return;
                      }
                    })()}
                    {this.getNote}
                  </h4>
                  <Button
                    style={{
                      display: tools.typeIF(native.getPref("displayDownload"), "flex", "none"),
                    }}
                    onClick={this.handleClick}
                    variant={this.buttonDesign}
                  >
                    <Icon icon="md-more" />
                  </Button>
                  {/*
                  // @ts-ignore */}
                </name>
              </Card.Header>
              <Card.Body
                style={{
                  padding: tools.typeIF(native.getPref("fitImageToCard"), "0px", ""),
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <blockquote className="blockquote mb-0">
                  <p>
                    {" "}
                    <img
                      id={this.getID}
                      src={this.images}
                      alt={this.getNote}
                      onError={() => {
                        this.setState({ isImageError: true });
                      }}
                      onDoubleClick={this.handleClick}
                      style={{
                        width: "100%",
                        borderRadius: tools.typeIF(
                          native.getPref("fitImageToCard"),
                          tools.typeIF(
                            native.getPref("displayDownload"),
                            tools.typeIF(
                              native.getPref("removeTitle"),
                              "0.25rem 0.25rem 0rem 0rem",
                              "0rem 0rem 0rem 0rem"
                            ),
                            tools.typeIF(
                              native.getPref("removeTitle"),
                              "0.25rem 0.25rem 0.25rem 0.25rem",
                              "0rem 0rem 0.25rem 0.25rem"
                            )
                          ),
                          ".25rem"
                        ),
                      }}
                    />{" "}
                    <ActionSheetBuilder
                      options={{
                        title: this.getNote + "'s options",
                        onCancel: this.handleCancel,
                        isOpen: this.state.isContextOpen,
                        modifier: native.checkPlatformForBorderStyle,
                      }}
                      data={[
                        {
                          text: string.viewImageInBrowser,
                          icon: "md-eye",
                          onClick: () => {
                            native.open(source);
                            this.handleCancel();
                          },
                        },
                        {
                          text: string.copyLink,
                          icon: "md-copy",
                          onClick: () => {
                            native.copyClipborad(source);
                            this.handleCancel();
                          },
                        },
                        {
                          text: string.viewImageSource,
                          icon: "md-link",
                          onClick: () => {
                            native.open(
                              `https://github.com/DerGoogler/cdn/blob/master/others/hentai-web/images/${note
                                .toLowerCase()
                                .replace(/ /g, "")}.json`
                            );
                            this.handleCancel();
                          },
                        },
                        {
                          text: string.download,
                          icon: "md-download",
                          onClick: () => {
                            native.downloadPicture(source, this.getID, this.getID);
                            this.handleCancel();
                          },
                        },
                        {
                          text: string.cancel,
                          icon: "md-close",
                          modifier: native.checkPlatformForBorderStyle,
                          onClick: this.handleCancel,
                        },
                      ]}
                    />
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Kard>
          {/*
                // @ts-ignore */}
        </card>
      </>
    );
  }
}

export default PictureBuilder;