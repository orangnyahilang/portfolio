import { Component } from "react";
import CTA from "./CTA";
import ME from "../../assets/lp3.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import ScrollButton from "./ScrollButton";
import TypingAnimation from "./TypingAnimation";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container header__container">
          <h5 className="judulatas">Hello..</h5>
          <div className="typani"><TypingAnimation/></div>
          <div className="text-light">Fullstack Developer</div>
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
