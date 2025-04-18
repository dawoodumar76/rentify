
import { motion } from 'framer-motion';

interface RentifyLogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const RentifyLogo = ({ size = 'md', animated = true }: RentifyLogoProps) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, rotate: animated ? 5 : 0 }
  };

  const circleVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 }
  };

  const carVariants = {
    initial: { x: 0 },
    hover: { x: animated ? 10 : 0 }
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} relative`}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.3 }}
      variants={logoVariants}
    >
      <img 
        src="/lovable-uploads/28d0f9c8-3e12-45ea-b2cf-67d0ef000277.png" 
        alt="Rentify Logo" 
        className="h-full w-auto"
      />
    </motion.div>
  );
};

export default RentifyLogo;
