import { Component } from "react";
import Modal from "react-modal";

import "./portfolio.css";
import IMG1 from "../../assets/web1.png";
import IMG2 from "../../assets/web3.png";
import AnimatedComponent from "../../AnimatedComponent";
// import IMG3 from "../../assets/portfolio3.jpg";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Pengembangan Sistem Informasi Akademik (SIAKAD)",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev"
  },
  {
    id: 2,
    image: IMG2,
    title: "Onboarding Flows",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev"
  },


  // {
  //   id: 3,
  //   image: IMG3,
  //   title: "Crypto Currency Dashboard & Financial Visualization",
  //   github: "https://github.com/inextdeve",
  //   demo: "https://inext.dev"
  // },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Crypto Currency Dashboard & Financial Visualization",
  //   github: "https://github.com/inextdeve",
  //   demo: "https://inext.dev"
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Crypto Currency Dashboard & Financial Visualization",
  //   github: "https://github.com/inextdeve",
  //   demo: "https://inext.dev"
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "CryptCurrency Dashboard & Financial Visualization",
  //   github: "https://github.com/inextdeve",
  //   demo: "https://inext.dev"
  // }
];



class Portfolio extends Component {

  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    return (
      <section id="experience" className="ptf">
        <h5>Project 3 Bulan Terakhir</h5>
        <h2>Projects</h2>
        <AnimatedComponent direction="up" duration={2000}>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a className="btn" target="_blank" onClick={this.toggleModal}>
                    Github
                  </a>
                  <a className="btn btn-primary" target="_blank" onClick={this.toggleModal}>
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        </AnimatedComponent>

        <Modal className='ReactModal__Overlay'
          isOpen={this.state.isModalOpen}
          onRequestClose={this.toggleModal}
          ariaHideApp={false}
        >
          <p>Masih dalam pemeliharaan / In maintenance</p>
          <button className="btn closeButton" onClick={this.toggleModal}>
          <i class="fa-solid fa-xmark"></i>
          </button>
        </Modal>
        
      </section>
    );
  }
}

export default Portfolio;
