import { Component } from "react";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./socials.css";

class HeaderSocials extends Component {
  render() {
    return (
      <div className="socials" >
        <a href="https://www.tiktok.com/@freya.lumina" target="_blank">
          <FaTiktok />
        </a>
        <a href="https://www.youtube.com/@dramainaja" target="_blank">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/orangnya_.hilang/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    );
  }
}
export default HeaderSocials;
