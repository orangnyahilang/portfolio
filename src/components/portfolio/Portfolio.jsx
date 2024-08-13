import { Component } from "react";
import Modal from "react-modal";
import "./portfolio.css";
import IMG1 from "../../assets/web1.png";
import IMG2 from "../../assets/tokocamilan.png";
import IMG3 from "../../assets/nextjs.png";
import IMG4 from "../../assets/blog1.png";
import AnimatedComponent from "../../AnimatedComponent";

const data = [
  {
    id: 1,
    image: IMG2,
    title: "Website Reservasi Restoran (Komersial)",
    github: "",
    demo: "https://orangnyahilang.github.io/tokocamilan/",
  },
  {
    id: 2,
    image: IMG4,
    title: "Education Blog Project (ReactJS)",
    github: "",
    demo: "https://easmultimedia.vercel.app/",
  },
  {
    id: 3,
    image: IMG1,
    title: "Pengembangan Sistem Informasi Akademik (PHP)",
    github: "",
    demo: "",
  },
  {
    id: 4,
    image: IMG3,
    title: "NextJS To-Do List Project (NextJS+Tailwind)",
    github: "",
    demo: "https://ads-fe-next-js.vercel.app/",
  },
];

class Portfolio extends Component {
  state = {
    isModalOpen: false,
    currentDemoLink: "", // Menyimpan link demo dari project yang dipilih
  };

  toggleModal = (demoLink = "") => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
      currentDemoLink: demoLink, // Mengatur link demo saat modal dibuka
    }));
  };

  render() {
    return (
      <section id="experience" className="ptf">
        <h5>Project 1 Tahun Terakhir</h5>
        <h2>Projects</h2>
        <p className="p1">Versi ini adalah sampel dari project aslinya dan hanya digunakan untuk tujuan demonstrasi saja.</p>
        <AnimatedComponent direction="down" duration={2000}>
          <div className="container portfolio__container">
            {data.map(({ id, image, title, github, demo }) => {
              return (
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a
                      className="btn"
                      onClick={() => this.toggleModal(demo)} // Pass the demo link
                    >
                      Github
                    </a>
                    <a
                      className="btn btn-primary"
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </AnimatedComponent>

        <Modal
          className="ReactModal__Overlay"
          isOpen={this.state.isModalOpen}
          onRequestClose={this.toggleModal}
          ariaHideApp={false}
        >
          <button className="btn closeButton" onClick={this.toggleModal}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <p>
            Repository Github dalam perbaikan, bisa beralih ke{" "}
            <a href={this.state.currentDemoLink} target="_blank" rel="noopener noreferrer">
              LIVE DEMO
            </a>
          </p>
        </Modal>
      </section>
    );
  }
}

export default Portfolio;
