import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DataWarehouse from "../../img/dataWarehouse.png";
import Crash from "../../img/crash.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        slidesPerView={3}
        className="portfolio-slider"
        navigation={true}
        modules={[Pagination, Navigation]}
        pagination={{ type: "fraction" }}
      >
        <div className="portfolio-slider">
          <SwiperSlide>
            <a href="https://data-warehouse-project-articles.vercel.app/">
              <img src={DataWarehouse} alt="" />
              <span className="span">Data Warehouse</span>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="https://accident-project-amber.vercel.app/">
              <img src={Crash} alt="" />
              <span className="span">Accident History</span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src={MusicApp} alt="" />
              <span className="span">project</span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img src={HOC} alt="" />
              <span className="span">project</span>
            </a>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Portfolio;
