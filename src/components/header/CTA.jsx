import { Component } from "react";
import CV from "../../assets/cv.pdf";
import "./cta.css";
class CTA extends Component {
  render() {
    return (
      <div className="ctas1">
        <a className="btn buttons3" href={CV} download>
          Download CV
        </a>
        <a className="btn" href="#contact">
          Let's Talk
        </a>
      </div>
    );
  }
}

export default CTA;
