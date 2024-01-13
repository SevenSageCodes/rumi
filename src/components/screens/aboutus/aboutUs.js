import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import './aboutus.scss';

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

function AboutUs() {
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
            <motion.div className='about_info' variants={stagger}>
            <motion.h1 variants={h1}>About Us</motion.h1>
            <motion.p variants={h1}>
            At Rumi , we are passionate about fueling your active lifestyle with our 
exceptional energy drinks. We believe in the power of natural ingredients to 
provide you with the vitality you need to conquer your day.<br/>
Our mission is to provide a healthy and refreshing alternative to 
conventional energy drinks. We aim to support individuals in achieving their 
goals, whether it's hitting the gym, excelling at work, or simply enjoying life 
to the fullest.<br/>
Rumi is committed to using natural ingredients to enhance your energy 
levels, without the use of artificial additives.<br/>
Our energy drinks are not only effective but also delicious, with a range of 
flavors that satisfy your taste buds.<br/>
We provide long-lasting energy without the typical energy drink crashes, 
thanks to our balanced formula. We're dedicated to promoting a healthier 
lifestyle, and our drinks are formulated to support your well-being.<br/>
The classic choice for a quick and sustained energy boost. Comes in 
flavors like Citrus Burst and Berry Blast
            </motion.p>
            <motion.h1 variants={h1}>Our Mission</motion.h1>
            <motion.p variants={h1}>
            We believe that everyone has untapped potential waiting to be unleashed. Our mission is to 
empower individuals to reach their highest levels of performance, both physically and mentally.<br/>
We understand the importance of a balanced and healthy lifestyle. Our energy drinks are not just 
about boosting energy but also supporting overall well-being. We're dedicated to promoting health conscious choices.<br/>
We strive to provide energy that doesn't deplete your resources or harm the environment. Our 
commitment to sustainability is a fundamental part of our mission.<br/>
Rumi is more than a product; it's a community of like-minded individuals who share the same values 
and goals. We aim to connect people who are passionate about an active and energetic lifestyle
            </motion.p>
            <motion.h1 variants={h1}>Our Objectives</motion.h1>
            <motion.p variants={h1}>
            We are committed to researching, developing, and delivering the highest-quality energy drinks 
using natural ingredients and the latest advancements in nutrition science.<br/>
We will actively promote health and well-being by educating our customers on the importance of a 
balanced lifestyle and the role of our energy drinks in achieving that balance.<br/>
We are dedicated to reducing our carbon footprint and ensuring our products are sustainable. Our 
objective is to use eco-friendly packaging and promote responsible production practices.<br/>
We aim to foster a strong, satisfied customer base who rely on Rumi is not only for the products but 
for the support, guidance, and community that come with our brand.<br/>
We will continuously strive to innovate, creating new flavors, products, and offerings to meet the 
evolving needs and preferences of our customers
            </motion.p>
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

export default AboutUs;