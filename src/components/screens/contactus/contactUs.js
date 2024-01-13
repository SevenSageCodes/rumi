import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import './contactus.scss'

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

  const h1 = {
    initial: {
      top: "-20%",
      opacity: 0,
      transition: {duration: 0.05, ease: easing}
    },
    animate: {
      top:"50%",
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1.0,
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

function ContactUs() {

    const navigation = useNavigate();

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
            <motion.div className='contact_info' variants={stagger}>
              <motion.h1 variants={h1}>Contact Us</motion.h1>
              <motion.div className='info_container'>
                <motion.h2 variants={h1}>Authorized by</motion.h2>
                <motion.p variants={h1}>Shahil Memon</motion.p>
                <motion.h2 variants={h1}>Address</motion.h2>
                <motion.p variants={h1}>408/A, Shivalik - 5, Mahalakshmi Cross Road, Paldi, Ahmedabad-380007</motion.p>
                <motion.h2 variants={h1}>Contact No.</motion.h2>
                <motion.p variants={h1}>+91 9824236555</motion.p>
                <motion.h2 variants={h1}>GST No.</motion.h2>
                <motion.p variants={h1}>24ABSFA1137D1ZS</motion.p>
              </motion.div>
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

export default ContactUs;