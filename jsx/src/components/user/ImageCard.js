import React from "react";

export default class ImageCard extends React.Component {
  constructor(props) {
    // with props super
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    const { description, urls } = this.props.img;
    return (
      <>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </>
    );
  }
}
