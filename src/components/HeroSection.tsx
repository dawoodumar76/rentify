
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-rentify-blue to-blue-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat">
            Find the best rental for you in seconds
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl">
            At Rentify, we make finding the best vehicle rental quick and easy. Our comparator helps you discover the best offers on the market, allowing you to choose the ideal car according to your needs and budget.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8"
          >
            <Button 
              className="bg-rentify-orange hover:bg-amber-600 text-white font-semibold text-lg flex items-center gap-2 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              size="lg"
            >
              <Search size={20} />
              <Link to="/survey">Compare Rentals Now</Link>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="Luxury rental car" 
            className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
