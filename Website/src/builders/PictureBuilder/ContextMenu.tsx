import * as React from "react";
import { hot } from "react-hot-loader/root";
import { ActionSheetButton } from "react-onsenui";
import { Provider, Translate, Translator } from "react-translated";
import native from "../../native";
import tools from "../../misc/tools";

/**
 * Creates an context menu for the images
 */
class ContextMenu extends React.Component<{
  note?: any;
  source?: any;
  getId?: any;
}> {
  private element!: HTMLElement | null;

  public render() {
    // To get note and source url
    const { note, source, getId } = this.props;

    return (
      <Translator>
        {({ translate }: any) => (
          <>
            <ActionSheetButton
              icon="md-eye"
              onClick={() => {
                native.open(source);
              }}
            >
              <Translate text="view-image" />
            </ActionSheetButton>
            <ActionSheetButton
              icon="copy"
              onClick={() => {
                native.copyClipborad(source);
              }}
            >
              <Translate text="copy-link" />
            </ActionSheetButton>
            <ActionSheetButton
              style={{ display: "none" }}
              icon="md-refresh"
              onClick={() => {
                tools.getByElementId(getId, (e: HTMLElement) => {
                  e.setAttribute("src", source);
                });
              }}
            >
              <Translate text="reload-image" />
            </ActionSheetButton>
            <ActionSheetButton
              icon="md-link"
              onClick={() => {
                native.open(
                  `https://github.com/DerGoogler/Hentai-Web/blob/master/Website/src/misc/hmtai/images/${note.replace(
                    / /g,
                    ""
                  )}.json`
                );
              }}
            >
              <Translate text="view-hmtai-image-source" />
            </ActionSheetButton>

            <ActionSheetButton
              icon="md-download"
              onClick={() => {
                native.downloadPicture(getId, source, getId);
              }}
            >
              <Translate text="download-text" />
            </ActionSheetButton>
          </>
        )}
      </Translator>
    );
  }
}

export default hot(ContextMenu);