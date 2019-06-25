import React from "react";
import logo from "./logo.svg";
import "./measure.css";

import * as cocoSsd from "@tensorflow-models/coco-ssd";
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
    this.state = {
      file: "",
      imagePreviewUrl: "",
      neck: "",
      arm_width: "",
      arm_length: "",
      waist: "",
      leg_width: "",
      leg_length: ""
    };
  }

  _handleSubmit(e) {
    // e.preventDefault();
    // // TODO: do something with -> this.state.file
    // console.log("handle uploading-", this.state.file);
    this.measure();
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
  measure() {
    this.setState({
      neck: 300,
      arm_width: 40,
      arm_length: 50,
      waist: 30,
      leg_width: 60,
      leg_length: 30
    });
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

    // componentDidMount(){
    //   cocoSsd.load()
    //   .then(model => model.detect($imagePreview))
    //   .then(predictions => console.log(predictions))
    //  };

     
    return (
      <div className="previewComponent">
        <form onSubmit={e => this._handleSubmit(e)}>
          <div id="filebar">
          <input
            className="fileInput"
            type="file"
            onChange={e => this._handleImageChange(e)}
          />
          </div>
          <button
            className="submitButton"
            type="submit"
            onClick={e => this._handleSubmit(e)}
          >
            Measure
          </button>
        </form>
        <div className="imgPreview">{$imagePreview}</div>
        <div className="imageDetails">
          <h1>NECK:{this.state.neck}</h1>
          <h1>ARM WIDTH:{this.state.arm_width}</h1>
          <h1>ARM LENGTH:{this.state.arm_length}</h1>
          <h1>WAIST:{this.state.waist}</h1>
          <h1>LEG WIDTH:{this.state.leg_width}</h1>
          <h1>LEG LENGTH:{this.state.leg_length}</h1>
        </div>
      </div>
    );
  }
}

export default Measure;
