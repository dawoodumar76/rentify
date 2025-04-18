
import { motion } from 'framer-motion';

// Define some car brand logos
const carBrands = [
  { name: "Audi", logo: "/logos/car-brands/audi.png" },
  { name: "BMW", logo: "/logos/car-brands/bmw.png" },
  { name: "Mercedes", logo: "/logos/car-brands/mercedes.png" },
  { name: "Toyota", logo: "/logos/car-brands/toyota.png" },
  { name: "Volkswagen", logo: "/logos/car-brands/volkswagen.png" },
  { name: "Honda", logo: "/logos/car-brands/honda.png" },
  { name: "Ford", logo: "/logos/car-brands/ford.png" },
  { name: "Hyundai", logo: "/logos/car-brands/hyundai.png" },
  { name: "Nissan", logo: "/logos/car-brands/nissan.png" },
  { name: "Kia", logo: "/logos/car-brands/kia.png" },
  { name: "Mazda", logo: "/logos/car-brands/mazda.png" },
  { name: "Chevrolet", logo: "/logos/car-brands/chevrolet.png" },
  { name: "Jeep", logo: "/logos/car-brands/jeep.png" },
  { name: "Land Rover", logo: "/logos/car-brands/landrover.png" },
  { name: "Tesla", logo: "/logos/car-brands/tesla.png" },
];

// For fallback if images aren't available
const generateBrandColor = (brandName: string) => {
  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];
  return colors[brandName.length % colors.length];
};

const BrandLogosMarquee = () => {
  return (
    <div className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-6">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Car Brands</h2>
      </div>
      
      <div className="relative">
        {/* First row of logos moving from right to left */}
        <div className="flex space-x-12 mb-8 animate-marquee">
          {carBrands.map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`} 
              className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-24 w-40"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {brand.logo ? (
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="h-12 w-auto"
                    onError={(e) => {
                      // If image fails to load, show a colored div with brand name
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div style="background-color: ${generateBrandColor(brand.name)}; color: white; padding: 8px; border-radius: 4px; font-weight: bold;">
                          ${brand.name}
                        </div>
                      `;
                    }}
                  />
                ) : (
                  <div style={{
                    backgroundColor: generateBrandColor(brand.name),
                    color: 'white',
                    padding: '8px',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                  }}>
                    {brand.name}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
        
        {/* Second row of logos moving from left to right (reversed) */}
        <div className="flex space-x-12 animate-marquee-reverse">
          {[...carBrands].reverse().map((brand, index) => (
            <div 
              key={`${brand.name}-reverse-${index}`} 
              className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-24 w-40"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {brand.logo ? (
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="h-12 w-auto"
                    onError={(e) => {
                      // If image fails to load, show a colored div with brand name
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div style="background-color: ${generateBrandColor(brand.name)}; color: white; padding: 8px; border-radius: 4px; font-weight: bold;">
                          ${brand.name}
                        </div>
                      `;
                    }}
                  />
                ) : (
                  <div style={{
                    backgroundColor: generateBrandColor(brand.name),
                    color: 'white',
                    padding: '8px',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                  }}>
                    {brand.name}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogosMarquee;
