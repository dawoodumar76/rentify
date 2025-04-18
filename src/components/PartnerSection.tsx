
import { motion } from "framer-motion";

const partners = [
  { name: "Arval", logo: "/logos/arval.svg" },
  { name: "Ayvens", logo: "/logos/ayvens.svg" },
  { name: "Alphabet", logo: "/logos/alphabet.svg" },
  { name: "LeasePlan", logo: "/logos/leaseplan.svg" },
  { name: "ALD Automotive", logo: "/logos/ald.svg" },
  { name: "Enterprise", logo: "/logos/enterprise.svg" },
];

const cardVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
};

const PartnerSection = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 pb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Companies we work with
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {partners.map((partner, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <motion.div 
              className="w-32 h-24 bg-white rounded-lg shadow-sm p-4 flex items-center justify-center mb-3 hover:shadow-md transition-all"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full" />
            </motion.div>
            <span className="text-gray-700 font-medium">{partner.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
