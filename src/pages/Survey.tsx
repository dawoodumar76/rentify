
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RentalSurvey from "@/components/RentalSurvey";
import { motion } from "framer-motion";

const Survey = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <motion.div 
          className="py-16 bg-gradient-to-r from-rentify-blue to-blue-700 dark:from-blue-900 dark:to-indigo-900 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-bold text-center font-montserrat">Vehicle Rental Survey</h1>
            <p className="text-center text-blue-100 mt-3 max-w-2xl mx-auto">
              Help us find the perfect rental for your needs by answering a few quick questions
            </p>
          </div>
        </motion.div>
        
        <motion.div
          className="container mx-auto px-4 md:px-6 -mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <RentalSurvey />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Survey;
