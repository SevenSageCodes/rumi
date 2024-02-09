import { useState } from 'react';
import {motion} from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import './home.scss';

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

const fadeInUp = {
  initial: {
      opacity: 0,
  },
  animate:{
    opacity: 1,
    transition:{
      delay: 2.5,
      duration: .3,
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

const h3 = {
  initial: {
    top: "-20%",
    opacity: 0,
    transition: {duration: 0.05, ease: easing}
  },
  animate: {
    top:"50%",
    opacity: .1,
    transition: {
      delay:1.2,
      duration:0.6,
      ease: easing
    }
  }
};

const dots = {
  initial: {
    x: -400
  },
  animate: {
    x: 0,
    transition: {
      duration: .2,...transition
    }
  }
};

const letter = {
  initial: {
    opacity: 0,
    x: -400
  },
  animate: {
    opacity: 1,
    x:0,
    transition: {
      duration: 2,
      ease: easing
    }
  }
};

const rumiblack = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    x:0,
    transition: {
      delay: 1.2,
      duration: 1.2,
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

function Home() {

    const navigation = useNavigate();

  return (
    <motion.div className="container" initial={{opacity: 0, height: 0}} animate={{opacity:1, height: "100vh"}} transition={{duration: 1, ease: easing}}>
      <motion.div className='wrapper' initial='initial' animate='animate'>
        <motion.div className='pos_abs top_nav' variants={stagger}>
          <motion.span className='logo' variants={header}>RUMI</motion.span>
          <motion.span variants={header} onClick={() => navigation("/gallery")}>Gallary</motion.span>
          <motion.span variants={header} onClick={() => navigation("/products")}>Products</motion.span>
          <motion.span variants={header} onClick={() => navigation("/aboutus")}>About Us</motion.span>
          <motion.span variants={header} onClick={() => navigation("/contactus")}>Contact Us</motion.span>
        </motion.div>
        <motion.div className='pos_abs bottom_nav' variants={stagger}>
        <motion.span variants={bottom} className="copyright_text">
          COPYRIGHT © 2024 RUMI - ALL RIGHTS RESERVED.
        </motion.span>
          <motion.span variants={bottom}>IN-UAE</motion.span>
        </motion.div>
        <motion.div className='content_left' variants={stagger}>
          <motion.h3 variants={h3}>
            <motion.span variants={letter}>No.1 <br/>Energy <br/> DRINK</motion.span>
          </motion.h3>
          <motion.div className='dots' variants={stagger}>
            <motion.span className='active' variants={dots}></motion.span>
          </motion.div>
          <motion.h2 variants={stagger}>
            <motion.span variants={letter}>RUMI</motion.span>
            <motion.span variants={letter}>ENERGY</motion.span>
            <motion.span variants={letter}>DRINK</motion.span>
          </motion.h2>
          <motion.p variants={fadeInUp}>Sip into Something Energy</motion.p>
        </motion.div>
        <motion.div className='image_container' variants={stagger}>
          <motion.img src={process.env.PUBLIC_URL + `/images/rumi_black.png`} alt='rumiblack' variants={rumiblack}/>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
