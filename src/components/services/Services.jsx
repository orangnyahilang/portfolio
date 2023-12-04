import { Component } from "react";
import "./services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

class Services extends Component {
  render() {
    return (
      <section id="experience" className="svc">
        <div id="servicesexperience"></div>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service__list">
              <li>
                <FontAwesomeIcon icon={faCircleCheck} className="service__list-icon" />
                <p>Menciptakan desain UI yang menarik dan sesuai dengan kebutuhan proyek.</p>
              </li>
              <li>
              <FontAwesomeIcon icon={faCircleCheck} className="service__list-icon" />
                <p>Pengalaman Pengguna UX yang Optimal.</p>
              </li>
              <li>
              <FontAwesomeIcon icon={faCircleCheck} className="service__list-icon" />
                <p>Penggunaan prototipe interaktif, membantu klien memvisualisasikan desain.</p>
              </li>
              <li>
              <FontAwesomeIcon icon={faCircleCheck} className="service__list-icon" />
                <p>Memastikan keseragaman desain di seluruh platform.</p>
              </li>
              <li>
              <FontAwesomeIcon icon={faCircleCheck} className="service__list-icon" />
                <p>Pemahaman Mendalam tentang Trend Desain Terkini.</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
              <FontAwesomeIcon icon={faCircleCheck} className="service__list-icon" />
                <p>Pengembangan Frontend yang Responsif.</p>
              </li>
              <li>
              <FontAwesomeIcon icon={faCircleCheck} className="service__list-icon" />
                <p>Backend yang Kuat dan Terkelola.</p>
              </li>
              <li>
              <FontAwesomeIcon icon={faCircleCheck} className="service__list-icon" />
                <p>Optimisasi Kinerja dan Keamanan.</p>
              </li>
              <li>
              <FontAwesomeIcon icon={faCircleCheck} className="service__list-icon" />
                <p>Mengintegrasikan fitur real-time untuk meningkatkan interaksi pengguna.</p>
              </li>
              <li>
              <FontAwesomeIcon icon={faCircleCheck} className="service__list-icon" />
                <p>Menerapkan sistem manajemen konten (CMS) yang efisien.</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    );
  }
}

export default Services;
