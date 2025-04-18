
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Car, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  Fuel, 
  Calendar, 
  Users, 
  Banknote 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { carsData } from "@/data/carsData";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Cars = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: "all",
    brand: "all",
    fuel: "all",
    priceRange: [0, 1000],
    seats: "all"
  });
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  const handleFilterChange = (filterName: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
    // Reset to first page when filters change
    setCurrentPage(1);
  };

  const handlePriceRangeChange = (value: number[]) => {
    setFilters(prev => ({
      ...prev,
      priceRange: value
    }));
    // Reset to first page when filters change
    setCurrentPage(1);
  };

  const filteredCars = carsData.filter(car => {
    if (filters.type !== "all" && car.type !== filters.type) return false;
    if (filters.brand !== "all" && car.brand !== filters.brand) return false;
    if (filters.fuel !== "all" && car.fuelType !== filters.fuel) return false;
    if (car.monthlyPrice < filters.priceRange[0] || car.monthlyPrice > filters.priceRange[1]) return false;
    if (filters.seats !== "all" && car.seats !== parseInt(filters.seats)) return false;
    return true;
  });
  
  // Calculate pagination
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-rentify-blue to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Explore Our Vehicles</h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Browse our extensive collection of rental vehicles to find your perfect match
              </p>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="button-shine bg-rentify-orange hover:bg-amber-600 text-white"
                  onClick={() => window.scrollTo({
                    top: document.getElementById('car-listings')?.offsetTop || 0 - 100,
                    behavior: 'smooth'
                  })}
                >
                  Browse Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Filter Controls */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h2 className="text-2xl font-bold mb-4 md:mb-0">Available Vehicles</h2>
              
              <Button 
                onClick={toggleFilters}
                variant="outline" 
                className="flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300"
              >
                <Filter size={16} />
                Filters
                {isFiltersOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </Button>
            </div>
            
            {/* Filter Panel */}
            {isFiltersOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 p-4 rounded-lg mb-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Vehicle Type</label>
                    <Select 
                      value={filters.type} 
                      onValueChange={(value) => handleFilterChange('type', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="hatchback">Hatchback</SelectItem>
                        <SelectItem value="convertible">Convertible</SelectItem>
                        <SelectItem value="van">Van</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Brand</label>
                    <Select 
                      value={filters.brand} 
                      onValueChange={(value) => handleFilterChange('brand', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Brands</SelectItem>
                        <SelectItem value="Toyota">Toyota</SelectItem>
                        <SelectItem value="BMW">BMW</SelectItem>
                        <SelectItem value="Mercedes">Mercedes</SelectItem>
                        <SelectItem value="Audi">Audi</SelectItem>
                        <SelectItem value="Volkswagen">Volkswagen</SelectItem>
                        <SelectItem value="Tesla">Tesla</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Fuel Type</label>
                    <Select 
                      value={filters.fuel} 
                      onValueChange={(value) => handleFilterChange('fuel', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select fuel type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="gasoline">Gasoline</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Seats</label>
                    <Select 
                      value={filters.seats} 
                      onValueChange={(value) => handleFilterChange('seats', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select seats" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="7">7+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Price Range (€{filters.priceRange[0]} - €{filters.priceRange[1]})</label>
                    <Slider 
                      defaultValue={[0, 1000]} 
                      min={0} 
                      max={1000} 
                      step={50} 
                      value={filters.priceRange}
                      onValueChange={handlePriceRangeChange}
                      className="mt-3"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Car Listings */}
        <section id="car-listings" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            {filteredCars.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No vehicles match your filters</h3>
                <p className="text-gray-600">Try adjusting your filter criteria to see more options</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentCars.map((car, index) => (
                    <motion.div
                      key={car.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        y: -10,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                    >
                      <Link to={`/car/${car.id}`}>
                        <Card className="h-full overflow-hidden card-3d">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={car.image} 
                              alt={`${car.brand} ${car.model}`} 
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle>{car.brand} {car.model}</CardTitle>
                            <CardDescription className="flex items-center gap-1">
                              <Car size={16} className="text-rentify-blue" />
                              {car.year} • {car.type}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="flex items-center gap-2">
                                <Fuel size={16} className="text-rentify-blue" />
                                <span className="text-sm">{car.fuelType}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users size={16} className="text-rentify-blue" />
                                <span className="text-sm">{car.seats} seats</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-rentify-blue" />
                                <span className="text-sm">{car.contractLength} months</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Car size={16} className="text-rentify-blue" />
                                <span className="text-sm">{car.mileage} km/year</span>
                              </div>
                            </div>
                            <div className="mt-2">
                              <p className="text-2xl font-bold text-rentify-blue">€{car.monthlyPrice} <span className="text-sm font-normal text-gray-500">/ month + VAT</span></p>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full button-shine">View Details</Button>
                          </CardFooter>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12">
                    <Pagination>
                      <PaginationContent>
                        {currentPage > 1 && (
                          <PaginationItem>
                            <PaginationPrevious onClick={() => paginate(currentPage - 1)} />
                          </PaginationItem>
                        )}
                        
                        {Array.from({ length: totalPages }).map((_, i) => {
                          const pageNum = i + 1;
                          
                          // Show first page, current page, last page and one page before and after current
                          if (
                            pageNum === 1 || 
                            pageNum === totalPages || 
                            (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                          ) {
                            return (
                              <PaginationItem key={pageNum}>
                                <PaginationLink 
                                  isActive={pageNum === currentPage}
                                  onClick={() => paginate(pageNum)}
                                >
                                  {pageNum}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          }
                          
                          // Show ellipsis for breaks in pagination sequence
                          if (
                            (pageNum === 2 && currentPage > 3) || 
                            (pageNum === totalPages - 1 && currentPage < totalPages - 2)
                          ) {
                            return (
                              <PaginationItem key={`ellipsis-${pageNum}`}>
                                <PaginationEllipsis />
                              </PaginationItem>
                            );
                          }
                          
                          return null;
                        })}
                        
                        {currentPage < totalPages && (
                          <PaginationItem>
                            <PaginationNext onClick={() => paginate(currentPage + 1)} />
                          </PaginationItem>
                        )}
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cars;
