import { Page } from "react-onsenui";
import BaseComponent from "./BaseComponent";

class AnimeTab extends BaseComponent<{ content: JSX.Element }> {
  public render = () => {
    return (
      <Page>
        {this.props.content}
      </Page>
    );
  }
}

export default AnimeTab;
