
import { Car, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car size={24} className="text-rentify-orange" />
              <span className="font-bold text-xl">Rentify</span>
            </div>
            <p className="text-gray-400 mb-4">
              Compare, Save and Drive. Find the best rental for you in seconds.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/survey" className="text-gray-400 hover:text-white transition-colors">Compare Rentals</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Rental Types</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Private Rentals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Rentals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pre-owned Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Flexible Rentals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Rentify Road</p>
              <p className="mb-2">Car City, CC 12345</p>
              <p className="mb-2">Email: info@rentify.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rentify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
