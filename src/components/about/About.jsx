import { Component } from "react";
import ME from "../../assets/profile2.jpeg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.css";
import AnimatedComponent from "../../AnimatedComponent";
import Wave from 'react-wavify'

class About extends Component {
  render() {
    return (
      <section id="about" className="abt">
        <div className="wave-container">
          <Wave
            fill="#17202a6d"
            paused={false}
            style={{ display: 'flex', position: 'relative', top: '0px', width: '100%', height: '100%' }}
            options={{
              height: 40,
              amplitude: 60,
              speed: 0.15,
              points: 3
            }}
          />
        </div>
                

        <div class="profilebackground">
        <h5>Get To Know</h5>
        <h2>Tentang Saya</h2>
        <div className="container about__container">
          <AnimatedComponent direction="down">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>
          </AnimatedComponent>
          <div className="about__content">
            <div className="about_cardshome">
            <AnimatedComponent direction="down">
            <div className="about__cards">
              <article className="about__card">
                <BsAwardFill className="about__icon" />
                <h5>Pengalaman</h5>
                <small>3+ Tahun menjadi Freelancer</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Programmer</h5>
                <small>Full-Stack Web Developer</small>
              </article>
              <article className="about__card">
                <FaProjectDiagram className="about__icon" />
                <h5>Media Sosial</h5>
                <small>Mengelola konten kreatif</small>
              </article>
            </div>
            </AnimatedComponent>
            </div>
            <AnimatedComponent direction="left">
            <p>
            Saya memiliki dedikasi tinggi terhadap pengembangan perangkat lunak
            dan desain grafis pengalaman pengguna yang baik. Saya berharap
            dapat terus meningkatkan keterampilan teknis dalam proyek-proyek inovatif berikutnya
            yang memungkinkan saya untuk terus tumbuh sebagai seorang profesional.
            </p>
            </AnimatedComponent>
            <a href="#contact" className="btn btn-primary">
              Hubungi Langsung
            </a>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default About;
