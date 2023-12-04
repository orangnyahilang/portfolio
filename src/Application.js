import React, { Component } from "react";
import AnimatedComponent from "./AnimatedComponent";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Education from "./components/education/Education.jsx";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Support from "./components/support/Support.jsx";

class Application extends Component {
  constructor() {
    super();
    this.state = { showNav: false };
  }

  handleScroll = () => {
    const headerHeight = 100;

    if (window.scrollY > headerHeight) {
      this.setState({ showNav: true });
    } else {
      this.setState({ showNav: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <>
        <Header />
        <Nav showNav={this.state.showNav} />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Support />
        <Education />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Application;
