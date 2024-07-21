import { Component } from "react";

interface WindowXBorderProps {
  resize: () => void;
}

class WindowXBorder extends Component<WindowXBorderProps> {
  private trpImg!: HTMLImageElement;

  componentDidMount() {
    this.trpImg = new Image(0, 0);
    this.trpImg.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    this.trpImg.style.opacity = "0";
  }

  render() {
    return (
      <div
        className="window-y-border border-transparent border-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onDragStart={(e) => {
          e.dataTransfer.setDragImage(this.trpImg, 0, 0);
        }}
        onDrag={this.props.resize}
      ></div>
    );
  }
}

export default WindowXBorder;