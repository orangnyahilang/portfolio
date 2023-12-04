import { Component, createRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
class Contact extends Component {
  constructor() {
    super();
    this.form = createRef();
  }
  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this.form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  render() {
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Kontak</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <div className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h2>Email</h2>
              <h5>aryasatyaibnusani@gmail.com</h5>
              <a href="mailto:aryasatyaibnusani@gmail.com">Send a message</a>
            </div>
            <div className="contact__option">
              <BsFillTelephoneFill className="contact__option-icon" />
              <h2>Telepon</h2>
              <h5>085335642150</h5>
              <a href="tel:+6285335642150">Hubungi</a>
            </div>
            <div className="contact__option">
              <RiWhatsappLine className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+62 8533 5642 150</h5>
              <a href="https://wa.me/6285335642150">
                Send a message
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
