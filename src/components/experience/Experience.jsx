import { Component } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBarsStaggered, faDatabase, faCircleCheck, faC } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faReact, faBootstrap, faPhp, faSass } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs, faPython, faJava } from '@fortawesome/free-brands-svg-icons'; // for backend


class Experience extends Component {
  render() {
    return (
      <section id="about" className="exp">
        <h5>Keterampilan Apa yang Saya Miliki ?</h5>
        <h2>Pengalaman Saya</h2>
        <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FontAwesomeIcon icon={faCheck} className="experience__details-icon" />
              <div>
                <FontAwesomeIcon icon={faHtml5} size="2x" />
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FontAwesomeIcon icon={faCheck} className="experience__details-icon" />
              <div>
                <FontAwesomeIcon icon={faCss3} size="2x" />
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <FontAwesomeIcon icon={faCheck} className="experience__details-icon" />
              <div>
                <FontAwesomeIcon icon={faJs} size="2x" />
                <h4>Javascript</h4>
                <small className="text-light">LoveIt</small>
              </div>
            </article>
            <article className="experience__details">
              <FontAwesomeIcon icon={faCheck} className="experience__details-icon" />
              <div>
                <FontAwesomeIcon icon={faBarsStaggered} size="2x" />
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FontAwesomeIcon icon={faCheck} className="experience__details-icon" />
              <div>
                <FontAwesomeIcon icon={faBootstrap} size="2x" />
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <FontAwesomeIcon icon={faCheck} className="experience__details-icon" />
              <div>
                <FontAwesomeIcon icon={faReact} size="2x" />
                <h4>React</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <FontAwesomeIcon icon={faCheck} className="experience__details-icon" />
              <div>
                <FontAwesomeIcon icon={faSass} size="2x" />
                <h4>Sass</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FontAwesomeIcon icon={faCheck} className="experience__details-icon" />
              <div>
              <h5 style={{ marginBottom: '10px', fontSize: '20px',textDecoration: 'underline' }}>
                NEXT.js
              </h5>

              <h4>Next JS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
            <article className="experience__details">
              <FontAwesomeIcon icon={faCircleCheck} className="experience__details-icon" />
              <div>
                <FontAwesomeIcon icon={faNodeJs} size="2x" />
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FontAwesomeIcon icon={faCircleCheck} className="experience__details-icon" />
              <div>
                <FontAwesomeIcon icon={faPython} size="2x" />
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <FontAwesomeIcon icon={faCircleCheck} className="experience__details-icon" />
              <div>
                <FontAwesomeIcon icon={faJava} size="2x" />
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FontAwesomeIcon icon={faCircleCheck} className="experience__details-icon" />
              <div>
                <FontAwesomeIcon icon={faPhp} size="2x" />
                <h4>PHP</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <FontAwesomeIcon icon={faCircleCheck} className="experience__details-icon" />
              <div>
                <FontAwesomeIcon icon={faDatabase} size="2x" />
                <h4>SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
