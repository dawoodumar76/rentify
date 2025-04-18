
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CarData, carsData } from '@/data/carsData';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Car, Check, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Additional images to show in the carousel
const additionalImages = [
  "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&q=80",
  "https://images.unsplash.com/photo-1617814076668-8dfc0b2a4cd1?w=500&q=80",
  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80",
  "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=500&q=80"
];

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<CarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedCars, setRelatedCars] = useState<CarData[]>([]);
  
  useEffect(() => {
    if (id) {
      const carId = parseInt(id);
      const foundCar = carsData.find(car => car.id === carId);
      
      if (foundCar) {
        setCar(foundCar);
        
        // Get related cars (same type or brand)
        const related = carsData
          .filter(c => c.id !== carId && (c.type === foundCar.type || c.brand === foundCar.brand))
          .slice(0, 3);
        
        setRelatedCars(related);
      }
      
      setLoading(false);
    }
  }, [id]);

  // Handle going back to top of page when ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-200 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-6">Car Not Found</h1>
          <p className="mb-8">The car you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="button-shine">
            <Link to="/cars">Browse All Cars</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Combine the main image with additional images for the carousel
  const allImages = [car.image, ...additionalImages];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button asChild variant="outline" className="mb-4 hover:-translate-y-1 transition-all duration-300">
              <Link to="/cars" className="flex items-center gap-2">
                <ChevronLeft size={16} />
                Back to all cars
              </Link>
            </Button>
            
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {car.brand} {car.model}
            </motion.h1>
            
            <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-6">
              <span className="bg-blue-100 text-rentify-blue px-3 py-1 rounded-full">{car.year}</span>
              <span className="bg-blue-100 text-rentify-blue px-3 py-1 rounded-full">{car.fuelType}</span>
              <span className="bg-blue-100 text-rentify-blue px-3 py-1 rounded-full">{car.transmission}</span>
              <span className="bg-blue-100 text-rentify-blue px-3 py-1 rounded-full">{car.type}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Carousel className="w-full">
                <CarouselContent>
                  {allImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="p-0">
                            <motion.div 
                              whileHover={{ scale: 1.03 }}
                              transition={{ duration: 0.3 }}
                            >
                              <img 
                                src={img} 
                                alt={`${car.brand} ${car.model} - view ${index + 1}`} 
                                className="w-full h-[400px] object-cover rounded-lg"
                              />
                            </motion.div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Features & Specifications</h2>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.div 
                    className="bg-gray-50 p-4 rounded-lg"
                    whileHover={{ 
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      y: -5
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Car size={18} /> Basic Information
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Brand:</span>
                        <span className="font-medium">{car.brand}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Model:</span>
                        <span className="font-medium">{car.model}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Year:</span>
                        <span className="font-medium">{car.year}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium">{car.type}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Fuel Type:</span>
                        <span className="font-medium">{car.fuelType}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Transmission:</span>
                        <span className="font-medium">{car.transmission}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Seats:</span>
                        <span className="font-medium">{car.seats}</span>
                      </li>
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gray-50 p-4 rounded-lg"
                    whileHover={{ 
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      y: -5
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Info size={18} /> Features
                    </h3>
                    <ul className="space-y-2">
                      {car.features.map((feature, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Check size={16} className="text-green-500" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="sticky top-24 card-3d">
                <CardHeader className="pb-3">
                  <CardTitle className="text-center text-2xl">
                    €{car.monthlyPrice}
                    <span className="text-sm text-gray-500 font-normal">/month</span>
                  </CardTitle>
                  <CardDescription className="text-center">
                    {car.contractLength} months contract, {car.mileage}km/year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 py-2 border-b">
                      <img 
                        src={car.leaseCompanyLogo} 
                        alt={car.leaseCompany} 
                        className="h-8 w-auto"
                      />
                      <div>
                        <p className="text-sm text-gray-600">Provided by</p>
                        <p className="font-medium">{car.leaseCompany}</p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg bg-blue-50 p-4">
                      <h3 className="font-semibold mb-2">What's included:</h3>
                      <ul className="space-y-2">
                        <motion.li 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Check size={16} className="text-green-500" />
                          <span>Full insurance coverage</span>
                        </motion.li>
                        <motion.li 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <Check size={16} className="text-green-500" />
                          <span>Maintenance & repairs</span>
                        </motion.li>
                        <motion.li 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <Check size={16} className="text-green-500" />
                          <span>Road tax and registration</span>
                        </motion.li>
                        <motion.li 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                        >
                          <Check size={16} className="text-green-500" />
                          <span>24/7 roadside assistance</span>
                        </motion.li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full button-shine bg-rentify-orange hover:bg-amber-600 pulse-orange">Reserve This Car</Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
          
          {relatedCars.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Similar Cars You Might Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCars.map((relatedCar) => (
                  <motion.div 
                    key={relatedCar.id}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to={`/car/${relatedCar.id}`}>
                      <Card className="overflow-hidden h-full card-3d">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={relatedCar.image} 
                            alt={`${relatedCar.brand} ${relatedCar.model}`} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl">
                            {relatedCar.brand} {relatedCar.model}
                          </CardTitle>
                          <CardDescription>
                            {relatedCar.year} · {relatedCar.fuelType} · {relatedCar.transmission}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between">
                          <span className="text-lg font-bold text-rentify-blue">
                            €{relatedCar.monthlyPrice}/month
                          </span>
                          <Button variant="outline" size="sm" className="hover:-translate-y-1 transition-transform duration-300">View Details</Button>
                        </CardFooter>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarDetails;
