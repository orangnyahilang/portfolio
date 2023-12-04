import { Component } from "react";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube
} from "react-icons/io";
import "./footer.css";
import CV from "../../assets/cv.pdf";
import Wave from 'react-wavify'

class Footer extends Component {
  render() {
    return (
      <>
          <Wave fill='#6171cc'
            paused={false}
            style={{ display: 'flex' }}
            options={{
              height: 40,
              amplitude: 60,
              speed: 0.15,
              points: 5
            }}
            />
      <footer>
        <a href="#" className="footer__logo">
          Portfolio
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#aboutexperience">Experience</a>
          </li>
          <li>
            <a href="#servicesexperience">Services</a>
          </li>
          <li>
            <a href={CV}>Portfolio</a>
          </li>
          <li>
            <a href="#services">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.facebook.com" target="_blank">
            <IoLogoFacebook />
          </a>
          <a href="https://instagram.com" target="_blank">
            <IoLogoInstagram />
          </a>
          <a href="https://twitter.com" target="_blank">
            <IoLogoTwitter />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <IoLogoYoutube />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Arya Satya Ibnu Sani. All rights reserved</small>
        </div>
      </footer>
      </>
    );
  }
}

export default Footer;
