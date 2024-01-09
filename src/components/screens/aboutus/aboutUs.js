import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

function AboutUs() {
    return (
    <motion.div className="container" initial={{opacity: 0, height: 0}} animate={{opacity:1, height: "100vh"}} transition={{duration: 1, ease: easing}}>
    </motion.div>
    );
}

export default AboutUs;