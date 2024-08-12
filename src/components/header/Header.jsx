import { Component } from "react";
import CTA from "./CTA";
import ME from "../../assets/lp3.png";
import ME2 from "../../assets/lp4.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import ScrollButton from "./ScrollButton";
import TypingAnimation from "./TypingAnimation";

class Header extends Component {
  render() {
    return (
      <header>
          <div className="me2">
            <img src={ME2} alt="ME" />
          </div>
        <div className="container header__container">
          <h5 className="judulatas">Hello..</h5>
          <div className="typani"><TypingAnimation/></div>
          <div className="text-light">Fullstack Developer ...</div>
          {/* <p>Mengembangkan situs web yang unik dan berfokus pada hasil dengan pendekatan kreatif dan teknis.</p> */}
          <CTA />
          <div className="pc">
          <h3 className="txtlp">Scroll untuk melihat Portfolio</h3>
          <ScrollButton />
          </div>
          <div className="me">

            <img src={ME} className="bglp" alt="ME" />
            <h3 className="txtlp">Scroll untuk melihat Portfolio</h3>
            <ScrollButton />

          </div>

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
          <HeaderSocials />
        </div>
      </header>
    );
  }
}

export default Header;
