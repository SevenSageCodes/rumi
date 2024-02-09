import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import './products.scss';

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

function Products() {
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
            <motion.div className='product_main_container' variants={stagger}>
              <motion.div className='product_card_container' whileInView={{ x: 0 }} initial={{ x: '100%' }} transition={{ duration: 1 }}>
                <motion.div className='product_card' whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <div className='product_image'>
                    <img src={process.env.PUBLIC_URL + `/images/rumi_black.png`} alt='Product 1' />
                  </div>
                  <div className='product_info'>
                    <h2>Product 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
                  </div>
                </motion.div>
                <motion.div className='product_card' whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <div className='product_image'>
                    <img src={process.env.PUBLIC_URL + `/images/rumi_bottle.png`} alt='Product 1' />
                  </div>
                  <div className='product_info'>
                    <h2>Product 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
                  </div>
                </motion.div>
                {/* Add more product cards here */}
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

export default Products;