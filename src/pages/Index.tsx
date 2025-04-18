
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PartnerSection from "@/components/PartnerSection";
import RentingInfo from "@/components/RentingInfo";
import TestimonialsSection from "@/components/TestimonialsSection";
import BrandLogosMarquee from "@/components/BrandLogosMarquee";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.section variants={sectionVariants} className="section-container bg-gray-50">
            <AboutSection />
          </motion.section>
          
          {/* Brand Logos Marquee */}
          <motion.section variants={sectionVariants}>
            <BrandLogosMarquee />
          </motion.section>
          
          <motion.section variants={sectionVariants} className="section-container bg-rentify-blue/10">
            <PartnerSection />
          </motion.section>
          
          <motion.section variants={sectionVariants} className="section-container bg-gray-50">
            <TestimonialsSection />
          </motion.section>
          
          <motion.section variants={sectionVariants} className="section-container">
            <RentingInfo />
          </motion.section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
