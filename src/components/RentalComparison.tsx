
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Car, Info, Check, ChevronRight } from "lucide-react";

// Mock data for rental options
const rentalOffers = [
  {
    id: 1,
    image: "/placeholder.svg",
    make: "Volkswagen",
    model: "Golf",
    power: "150hp",
    duration: 36,
    mileage: 15000,
    price: 299,
    company: "Arval",
    services: ["insurance", "maintenance", "assistance", "taxes"],
    fuelType: "Hybrid",
    vehicleType: "Compact",
    url: "#",
    tires: true,
    replacement: true,
    initialEntry: false,
    insuranceType: "All Risk",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    make: "Toyota",
    model: "Corolla",
    power: "122hp",
    duration: 48,
    mileage: 10000,
    price: 265,
    company: "Ayvens",
    services: ["insurance", "maintenance", "assistance"],
    fuelType: "Hybrid",
    vehicleType: "Saloon",
    url: "#",
    tires: true,
    replacement: false,
    initialEntry: false,
    insuranceType: "All Risk",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    make: "SEAT",
    model: "Ateca",
    power: "150hp",
    duration: 36,
    mileage: 20000,
    price: 349,
    company: "Alphabet",
    services: ["insurance", "maintenance", "assistance", "taxes", "tires"],
    fuelType: "Gasoline",
    vehicleType: "SUV",
    url: "#",
    tires: true,
    replacement: true,
    initialEntry: false,
    insuranceType: "Third Party",
  },
  {
    id: 4,
    image: "/placeholder.svg",
    make: "Kia",
    model: "Niro",
    power: "141hp",
    duration: 48,
    mileage: 15000,
    price: 325,
    company: "LeasePlan",
    services: ["insurance", "maintenance", "assistance", "taxes"],
    fuelType: "Electric",
    vehicleType: "SUV",
    url: "#",
    tires: false,
    replacement: true,
    initialEntry: true,
    insuranceType: "All Risk",
  },
  {
    id: 5,
    image: "/placeholder.svg",
    make: "Renault",
    model: "Clio",
    power: "90hp",
    duration: 36,
    mileage: 10000,
    price: 225,
    company: "ALD Automotive",
    services: ["insurance", "maintenance"],
    fuelType: "Gasoline",
    vehicleType: "Compact",
    url: "#",
    tires: false,
    replacement: false,
    initialEntry: false,
    insuranceType: "Third Party",
  },
  {
    id: 6,
    image: "/placeholder.svg",
    make: "Ford",
    model: "Kuga",
    power: "150hp",
    duration: 48,
    mileage: 20000,
    price: 365,
    company: "Enterprise",
    services: ["insurance", "maintenance", "assistance", "taxes", "tires"],
    fuelType: "Hybrid",
    vehicleType: "SUV",
    url: "#",
    tires: true,
    replacement: true,
    initialEntry: false,
    insuranceType: "All Risk",
  },
];

const RentalComparison = () => {
  const { toast } = useToast();
  const [filteredOffers, setFilteredOffers] = useState(rentalOffers);
  const [filters, setFilters] = useState({
    customer: "Individual",
    rentalType: "New",
    vehicleType: "All",
    fuelType: "All",
    priceRange: [0, 500],
    duration: "36",
    mileage: "15000",
  });

  // Track clicked offers for analytics
  const trackOfferClick = (offerId: number) => {
    // In a real app, we would send this data to the backend
    console.log(`User clicked on offer ${offerId}`);
    
    // Simulate saving to database
    const surveyData = localStorage.getItem("surveyData");
    const userData = {
      userId: "user_" + Math.floor(Math.random() * 10000),
      surveyResponses: surveyData ? JSON.parse(surveyData) : {},
      clickedOffer: offerId,
      timestamp: new Date().toISOString(),
    };
    
    console.log("Analytics data:", userData);
    
    toast({
      title: "Redirecting to partner site",
      description: "You'll be taken to complete your rental application.",
    });
  };

  // Apply filters
  useEffect(() => {
    // In a real app, this would be a backend API call
    let results = [...rentalOffers];
    
    if (filters.vehicleType !== "All") {
      results = results.filter(offer => offer.vehicleType === filters.vehicleType);
    }
    
    if (filters.fuelType !== "All") {
      results = results.filter(offer => offer.fuelType === filters.fuelType);
    }
    
    // Filter by price range
    results = results.filter(
      offer => offer.price >= filters.priceRange[0] && offer.price <= filters.priceRange[1]
    );
    
    // Filter by duration
    if (filters.duration !== "All") {
      const duration = parseInt(filters.duration);
      results = results.filter(offer => offer.duration === duration);
    }
    
    // Filter by mileage
    if (filters.mileage !== "All") {
      const mileage = parseInt(filters.mileage);
      results = results.filter(offer => offer.mileage === mileage);
    }
    
    setFilteredOffers(results);
  }, [filters]);

  const handleFilterChange = (key: string, value: any) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Price Comparator</h1>
          <p className="text-gray-600 mb-8">
            Find the best rental deals based on your preferences. Compare options from multiple providers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Filters</CardTitle>
                <CardDescription>Refine your search</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Customer Type</label>
                  <Select
                    value={filters.customer}
                    onValueChange={(value) => handleFilterChange("customer", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select customer type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Individual">Individual</SelectItem>
                      <SelectItem value="Self-Employed">Self-Employed</SelectItem>
                      <SelectItem value="Company">Company</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Rental Type</label>
                  <Select
                    value={filters.rentalType}
                    onValueChange={(value) => handleFilterChange("rentalType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select rental type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="New">New Vehicle</SelectItem>
                      <SelectItem value="Preowned">Preowned Vehicle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Vehicle Type</label>
                  <Select
                    value={filters.vehicleType}
                    onValueChange={(value) => handleFilterChange("vehicleType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Types</SelectItem>
                      <SelectItem value="Saloon">Saloon</SelectItem>
                      <SelectItem value="Compact">Compact</SelectItem>
                      <SelectItem value="Coupé">Coupé</SelectItem>
                      <SelectItem value="Estate">Estate</SelectItem>
                      <SelectItem value="SUV">SUV</SelectItem>
                      <SelectItem value="Van">Van</SelectItem>
                      <SelectItem value="Pick-up">Pick-up</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Fuel Type</label>
                  <Select
                    value={filters.fuelType}
                    onValueChange={(value) => handleFilterChange("fuelType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select fuel type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Types</SelectItem>
                      <SelectItem value="Gasoline">Gasoline</SelectItem>
                      <SelectItem value="Diesel">Diesel</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                      <SelectItem value="Electric">Electric</SelectItem>
                      <SelectItem value="Gas">Gas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Monthly Fee</label>
                  <div className="pt-4">
                    <Slider
                      defaultValue={[0, 500]}
                      max={500}
                      step={10}
                      value={filters.priceRange}
                      onValueChange={(value) => handleFilterChange("priceRange", value)}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>€{filters.priceRange[0]}</span>
                    <span>€{filters.priceRange[1]}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Contract Duration</label>
                  <Select
                    value={filters.duration}
                    onValueChange={(value) => handleFilterChange("duration", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Durations</SelectItem>
                      <SelectItem value="24">24 months</SelectItem>
                      <SelectItem value="36">36 months</SelectItem>
                      <SelectItem value="48">48 months</SelectItem>
                      <SelectItem value="60">60 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Annual Mileage</label>
                  <Select
                    value={filters.mileage}
                    onValueChange={(value) => handleFilterChange("mileage", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select mileage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Mileages</SelectItem>
                      <SelectItem value="10000">10,000 km</SelectItem>
                      <SelectItem value="15000">15,000 km</SelectItem>
                      <SelectItem value="20000">20,000 km</SelectItem>
                      <SelectItem value="25000">25,000 km</SelectItem>
                      <SelectItem value="30000">30,000 km</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button
                  className="w-full btn-secondary"
                  onClick={() => {
                    // Reset all filters to default
                    setFilters({
                      customer: "Individual",
                      rentalType: "New",
                      vehicleType: "All",
                      fuelType: "All",
                      priceRange: [0, 500],
                      duration: "36",
                      mileage: "15000",
                    });
                  }}
                  variant="outline"
                >
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
            
            <div className="col-span-3 space-y-6">
              {filteredOffers.length > 0 ? (
                filteredOffers.map((offer) => (
                  <Card key={offer.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3 bg-gray-100 flex items-center justify-center p-4">
                        <div className="relative h-40 w-full">
                          <img 
                            src={offer.image} 
                            alt={`${offer.make} ${offer.model}`}
                            className="object-contain h-full w-full"
                          />
                          <div className="absolute top-0 right-0 bg-rentify-blue text-white text-xs font-semibold py-1 px-2 rounded-bl-md">
                            {offer.company}
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold">
                              {offer.make} {offer.model}
                            </h3>
                            <p className="text-sm text-gray-500">{offer.power} • {offer.fuelType} • {offer.vehicleType}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-rentify-blue">€{offer.price}<span className="text-sm font-normal text-gray-500">+VAT</span></p>
                            <p className="text-sm text-gray-500">Monthly fee</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-sm">
                            <span className="font-semibold">Duration:</span> {offer.duration} months • 
                            <span className="font-semibold"> Mileage:</span> {offer.mileage.toLocaleString()} km/year
                          </p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold mb-2">Included services:</h4>
                          <div className="grid grid-cols-2 gap-y-1 gap-x-4">
                            <div className="flex items-center gap-2">
                              <Checkbox checked={offer.services.includes("insurance")} disabled />
                              <label className="text-sm">Insurance ({offer.insuranceType})</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <Checkbox checked={offer.services.includes("maintenance")} disabled />
                              <label className="text-sm">Maintenance</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <Checkbox checked={offer.services.includes("assistance")} disabled />
                              <label className="text-sm">Roadside Assistance</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <Checkbox checked={offer.services.includes("taxes")} disabled />
                              <label className="text-sm">Taxes & Fees</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <Checkbox checked={offer.tires} disabled />
                              <label className="text-sm">Tire Replacement</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <Checkbox checked={offer.replacement} disabled />
                              <label className="text-sm">Replacement Car</label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <Button variant="outline" className="flex items-center gap-2">
                            <Info size={16} />
                            <span>Details</span>
                          </Button>
                          
                          <Button 
                            className="btn-primary flex items-center gap-2"
                            onClick={() => trackOfferClick(offer.id)}
                          >
                            <span>View Offer</span>
                            <ChevronRight size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="bg-white rounded-lg p-8 text-center">
                  <Car size={48} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No matches found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters to see more options.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setFilters({
                        customer: "Individual",
                        rentalType: "New",
                        vehicleType: "All",
                        fuelType: "All",
                        priceRange: [0, 500],
                        duration: "36",
                        mileage: "15000",
                      });
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-2">
              Can't find what you're looking for? Our advisors can help you discover more options.
            </p>
            <Button variant="outline">
              <Link to="/">Contact an Advisor</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalComparison;
