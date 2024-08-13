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
        <span class="loaders3"></span>

          <div className="typani"><TypingAnimation/></div>
          <div class="grid-container1">
            <div class="grid-item1">
            <div class="curved-gradient-line"></div>
            <p className="ps4">Mengembangkan situs web yang unik dan berfokus pada hasil dengan pendekatan kreatif dan teknis.</p>
            </div>
            <div class="grid-item2">
              <div class="outer">
                <div class="dot"></div>
                <div class="card">
                  <div class="ray"></div>
                  <div class="text">UNTAG</div>
                  <div>University</div>
                  <div class="line topl"></div>
                  <div class="line leftl"></div>
                  <div class="line bottoml"></div>
                  <div class="line rightl"></div>
                </div>
              </div>
            </div>
          </div>
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
