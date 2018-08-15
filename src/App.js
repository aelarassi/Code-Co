import React, { Component } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Services from "./Components/Services";

class App extends Component {
  render() {
    return [
      <Header key="1" />,
      <Hero key="2" />,
      <Services key="3" />,
      <About key="4" />,
      <Footer key="5" />
    ];
  }
}

export default App;
