// Testimonials.jsx
import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AVTR1 from "../../assets/untagsbylogo.jpg";
import AVTR2 from "../../assets/sman1durenan.jpg";
import AVTR3 from "../../assets/smpn1durenan.jpg";

const data = [
  {
    id: 1,
    name: "Universitas 17 Agustus 1945 Surabaya",
    review:
      "Saya adalah mahasiswa semester 5 di Universitas Untag Surabaya, sedang menempuh program studi S1 Teknik Informatika.",
    image: AVTR1,
  },
  {
    id: 2,
    name: "SMAN 1 Durenan",
    review:
      "Saya aktif terlibat dalam kegiatan ekstrakurikuler dan organisasi, Posisi sebagai Ketua klub Jurnalistik (2018-2020), di mana saya berkontribusi pada pengembangan proyek-proyek inovatif.",
    image: AVTR2,
  },
  {
    id: 3,
    name: "SMPN 1 Durenan",
    review:
      "Terlibat langsung dalam kegiatan seni dan budaya sekolah, dan Aktif dalam kegiatan ekstrakurikuler seperti Band, Kesenian, dan Fotografi.",
    image: AVTR3,
  },
];

class Testimonials extends Component {
  swiperRef = React.createRef();

  handlePrev = () => {
    if (this.swiperRef.current && this.swiperRef.current.swiper) {
      this.swiperRef.current.swiper.slidePrev();
    }
  };

  handleNext = () => {
    if (this.swiperRef.current && this.swiperRef.current.swiper) {
      this.swiperRef.current.swiper.slideNext();
    }
  };

  render() {
    return (
      <section id="services" className="edu">
        <h5>Educational background</h5>
        <h2>History</h2>
        <Swiper
          ref={this.swiperRef}
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className="container testimonials__container"
        >
          {data.map(({ id, name, review, image }) => (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          ))}
        <button className="custom-button-prev" onClick={this.handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="custom-button-next" onClick={this.handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        </Swiper>
      </section>
    );
  }
}

export default Testimonials;
