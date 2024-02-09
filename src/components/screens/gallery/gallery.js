import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import React, {useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './gallery.scss';

let easing = [0.6, -0.05, 0.01, 0.99];
const transition = {duration: 1, ease: [0.6, 0.01, -0.05, 0.9]};

const stagger = {
  animate: {
    transition:{
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

const header = {
    initial: {
      y: -60,
      opacity: 0,
      transition: {duration: 0.05, ease: easing}
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        delay: 0.8,
        duration: 0.6,
        ease: easing
      }
    }
  };

  const bottom = {
    initial: {
      opacity: 0,
      y: 160
    },
    animate: {
      opacity: 1,
      y:0,
      transition: {
        delay:1.2,
        duration:0.2,
        ease: easing
      }
    }
  };

function Gallery() {

    const navigation = useNavigate();
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
    <motion.div className="container" initial={{opacity: 0, height: 0}} animate={{opacity:1, height: "100vh"}} transition={{duration: 1, ease: easing}}>
        <motion.div className='wrapper' initial='initial' animate='animate'>
            <motion.div className='pos_abs top_nav' variants={stagger}>
                <motion.span className='logo' variants={header} onClick={() => navigation("/")}>RUMI</motion.span>
                <motion.span variants={header} onClick={() => navigation("/gallery")}>Gallary</motion.span>
                <motion.span variants={header} onClick={() => navigation("/products")}>Products</motion.span>
                <motion.span variants={header} onClick={() => navigation("/aboutus")}>About Us</motion.span>
                <motion.span variants={header} onClick={() => navigation("/contactus")}>Contact Us</motion.span>
            </motion.div>
            <motion.div className='gallery_container' variants={stagger}>
              <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
              >
                <SwiperSlide ><img src={process.env.PUBLIC_URL + `/images/rumi_slider1.png`} /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + `/images/rumi_slider2.png`} /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + `/images/rumi_slider3.png`} /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + `/images/rumi_slider4.png`} /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL + `/images/rumi_slider5.png`} /></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                  <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                  </svg>
                  <span ref={progressContent}></span>
                </div>
              </Swiper>
            </motion.div>
            <motion.div className='pos_abs bottom_nav' variants={stagger}>
                <motion.span variants={bottom} className="copyright_text">
                    COPYRIGHT © 2024 RUMI - ALL RIGHTS RESERVED.
                </motion.span>
                <motion.span variants={bottom}>IN-UAE</motion.span>
            </motion.div>
        </motion.div>
    </motion.div>
    );
}

export default Gallery;