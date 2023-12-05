// Application.jsx
import React, { Component } from "react";
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
import "./App.css"; // Mengganti nama file jika diperlukan
// Application.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

class Application extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false,
      isLightMode: false,
    };
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

  toggleLightMode = () => {
    this.setState((prevState) => ({
      isLightMode: !prevState.isLightMode,
    }));
  };

  render() {
    return (
      <div className={`app ${this.state.isLightMode ? "dark-mode" : "light-mode"}`}>
          <button
            className="btn btn-light-mode"
            onClick={this.toggleLightMode}
          >
            <FontAwesomeIcon icon={this.state.isLightMode ? faSun : faMoon} />
          </button>
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
      </div>
    );
  }
}

export default Application;
