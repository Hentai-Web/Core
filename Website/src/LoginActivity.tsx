import Bootloader from "@Bootloader";
import ons from "onsenui";
import React from "react";
import { Toolbar, Page, Input, Button } from "react-onsenui";
import { Provider, Translate, Translator } from "react-translated";
import native from "@Native";
import ToolbarBuilder from "@Builders/ToolbarBuilder";

class LoginActivity extends React.Component<{}, { username: string; password: string }> {
  public constructor(props: any) {
    super(props);
    this.state = { username: "", password: "" };
  }

  public componentDidMount() {
    if (native.getPref("loggedIn") === "true") {
      new Bootloader().activity.load("main");
    }
  }

  private renderToolbar() {
    return (
      <Toolbar>
        <ToolbarBuilder
          title={<Translate text="sign-in" />}
          hasBackButton={false}
          hasWindowsButtons={true}
          hasDarkMode={true}
        />
      </Toolbar>
    );
  }

  private handleClick = () => {
    if (
      this.state.username === native.getBuildMANUFACTURER() &&
      this.state.password === native.getBuildMODEL()
    ) {
      native.setPref("loggedIn", "true");
      native.reload();
    } else {
      ons.notification.alert("Username or password incorrect!");
    }
  };

  private handleUsernameChange = (e: any) => {
    this.setState({ username: e.target.value.toUpperCase() });
  };

  private handlePasswordChange = (e: any) => {
    this.setState({ password: e.target.value.toUpperCase() });
  };

  private placeholderIF(IFdata: any, return_: any, else_: any) {
    if (IFdata) {
      return return_;
    } else {
      return else_;
    }
  }

  public render() {
    return (
      <Translator>
        {({ translate }: any) => (
          <Page modifier={native.checkPlatformForBorderStyle} renderToolbar={this.renderToolbar}>
            <section
              style={{
                textAlign: "center",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <p>
                  <Input
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                    modifier="underbar"
                    float
                    placeholder={this.placeholderIF(
                      window.navigator.userAgent === "HENTAI_WEB_AGENT",
                      translate({
                        text: "MANUFACTURER",
                      }),
                      "appCodeName"
                    )}
                  />
                </p>
                <p>
                  <Input
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    modifier="underbar"
                    float
                    placeholder={this.placeholderIF(
                      window.navigator.userAgent === "HENTAI_WEB_AGENT",
                      translate({
                        text: "MODEL",
                      }),
                      "platform"
                    )}
                  />
                </p>
                <p>
                  <Button onClick={this.handleClick}>
                    <Translate text="sign-in" />
                  </Button>
                </p>
                <p>
                  <a
                    style={{ textDecoration: "none" }}
                    href={translate({
                      text: "how-to-login-link",
                    })}
                  >
                    <Translate text="how-to-login" />
                  </a>
                </p>
              </div>
            </section>
          </Page>
        )}
      </Translator>
    );
  }
}

export default LoginActivity;
