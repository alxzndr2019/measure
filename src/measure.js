import React from "react";
import logo from "./logo.svg";
import "./measure.css";
const white = "#FFFFFF";
const black = "#161617";
const gray = "#F8F8F9";
const themeLight = {
  background: gray,
  body: black
};
class Measure extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <div className="previewComponent">
        <form onSubmit={e => this._handleSubmit(e)}>
          <input
            className="fileInput"
            type="file"
            onChange={e => this._handleImageChange(e)}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={e => this._handleSubmit(e)}
          >
            Upload Image
          </button>
        </form>
        <div className="imgPreview">{$imagePreview}</div>
        <div className="imageDetails">
          <h1>NECK:</h1>
          <h1>ARM WIDTH:</h1>
          <h1>ARM LENGTH:</h1>
          <h1>WAIST:</h1>
          <h1>LEG WIDTH:</h1>
          <h1>LEG LENGTH:</h1>
        </div>
      </div>
    );
  }
}

export default Measure;
