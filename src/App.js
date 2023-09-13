/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Clarifai from "clarifai";

import Navigation from "./components/Navigation";
import ImageLinkForm from "./components/ImageLinkForm.js";
import Rank from "./components/Rank";
import FaceRecognition from "./components/FaceRecognition";
// import Footer from "./components/Footer";

const app = new Clarifai.App({
  apiKey: "865519d7f0e844b6a7272714a98c81df",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    };
  }

  calculateFaceLocation = (data) => {
    this.response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
  };

  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.calculateFaceLocation(response))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <ParticlesBg type="thick" bg={true} />
        <Navigation />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
