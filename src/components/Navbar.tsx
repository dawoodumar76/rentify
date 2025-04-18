
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
// import { ThemeSwitcher } from './ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 shadow-sm py-4 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-rentify-blue dark:text-blue-400">
            <Car size={24} />
            <span className="font-bold text-xl font-poppins">Rentify</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${isActive('/') ? 'text-rentify-blue dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-rentify-blue dark:hover:text-blue-400'}`}
            >
              Home
            </Link>
            <Link 
              to="/cars" 
              className={`transition-colors font-medium ${isActive('/cars') ? 'text-rentify-blue dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-rentify-blue dark:hover:text-blue-400'}`}
            >
              Cars
            </Link>
            <Link 
              to="/compare" 
              className={`transition-colors font-medium ${isActive('/compare') ? 'text-rentify-blue dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-rentify-blue dark:hover:text-blue-400'}`}
            >
              Compare
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors font-medium ${isActive('/about') ? 'text-rentify-blue dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-rentify-blue dark:hover:text-blue-400'}`}
            >
              About
            </Link>
            <Link 
              to="/faq" 
              className={`transition-colors font-medium ${isActive('/faq') ? 'text-rentify-blue dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-rentify-blue dark:hover:text-blue-400'}`}
            >
              FAQ
            </Link>
            
            {/* <ThemeSwitcher /> */}
            
            <Button className="btn-primary">
              <Link to="/survey">Get Started</Link>
            </Button>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            {/* <ThemeSwitcher /> */}
            <button 
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 py-2 border-t dark:border-gray-700"
          >
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className={`transition-colors font-medium ${isActive('/') ? 'text-rentify-blue dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-rentify-blue dark:hover:text-blue-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/cars" 
                className={`transition-colors font-medium ${isActive('/cars') ? 'text-rentify-blue dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-rentify-blue dark:hover:text-blue-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Cars
              </Link>
              <Link 
                to="/compare" 
                className={`transition-colors font-medium ${isActive('/cars') ? 'text-rentify-blue dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-rentify-blue dark:hover:text-blue-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Compare
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors font-medium ${isActive('/about') ? 'text-rentify-blue dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-rentify-blue dark:hover:text-blue-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/faq" 
                className={`transition-colors font-medium ${isActive('/faq') ? 'text-rentify-blue dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-rentify-blue dark:hover:text-blue-400'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              
              <Button className="btn-primary w-full">
                <Link to="/survey" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
