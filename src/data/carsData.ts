
export interface CarData {
  id: number;
  brand: string;
  model: string;
  type: string;
  year: number;
  image: string;
  fuelType: string;
  monthlyPrice: number;
  contractLength: number;
  mileage: number;
  seats: number;
  transmission: string;
  features: string[];
  leaseCompany: string;
  leaseCompanyLogo: string;
}

export const carsData: CarData[] = [
  {
    id: 1,
    brand: "Audi",
    model: "A3 Sportback",
    type: "hatchback",
    year: 2023,
    image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    fuelType: "gasoline",
    monthlyPrice: 399,
    contractLength: 36,
    mileage: 15000,
    seats: 5,
    transmission: "automatic",
    features: ["Navigation", "Bluetooth", "Parking Sensors", "Climate Control"],
    leaseCompany: "Arval",
    leaseCompanyLogo: "/logos/arval.svg"
  },
  {
    id: 2,
    brand: "BMW",
    model: "3 Series",
    type: "sedan",
    year: 2023,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    fuelType: "diesel",
    monthlyPrice: 499,
    contractLength: 48,
    mileage: 20000,
    seats: 5,
    transmission: "automatic",
    features: ["Leather Seats", "Navigation", "Bluetooth", "Parking Assistant"],
    leaseCompany: "Ayvens",
    leaseCompanyLogo: "/logos/ayvens.svg"
  },
  {
    id: 3,
    brand: "Tesla",
    model: "Model 3",
    type: "sedan",
    year: 2023,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    fuelType: "electric",
    monthlyPrice: 599,
    contractLength: 36,
    mileage: 15000,
    seats: 5,
    transmission: "automatic",
    features: ["Autopilot", "Glass Roof", "Premium Sound", "Supercharging"],
    leaseCompany: "LeasePlan",
    leaseCompanyLogo: "/logos/leaseplan.svg"
  },
  {
    id: 4,
    brand: "Volkswagen",
    model: "ID.4",
    type: "suv",
    year: 2023,
    image: "https://images.unsplash.com/photo-1617814076668-8dfc0b2a4cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    fuelType: "electric",
    monthlyPrice: 549,
    contractLength: 48,
    mileage: 20000,
    seats: 5,
    transmission: "automatic",
    features: ["Panoramic Roof", "Adaptive Cruise Control", "Ambient Lighting", "Voice Control"],
    leaseCompany: "Alphabet",
    leaseCompanyLogo: "/logos/alphabet.svg"
  },
  {
    id: 5,
    brand: "Mercedes",
    model: "E-Class",
    type: "sedan",
    year: 2023,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    fuelType: "hybrid",
    monthlyPrice: 699,
    contractLength: 36,
    mileage: 15000,
    seats: 5,
    transmission: "automatic",
    features: ["Leather Seats", "MBUX", "Burmester Sound", "Wireless Charging"],
    leaseCompany: "ALD Automotive",
    leaseCompanyLogo: "/logos/ald.svg"
  },
  {
    id: 6,
    brand: "Toyota",
    model: "RAV4",
    type: "suv",
    year: 2023,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
    fuelType: "hybrid",
    monthlyPrice: 399,
    contractLength: 48,
    mileage: 20000,
    seats: 5,
    transmission: "automatic",
    features: ["Toyota Safety Sense", "Apple CarPlay", "Android Auto", "Wireless Charging"],
    leaseCompany: "Enterprise",
    leaseCompanyLogo: "/logos/enterprise.svg"
  },
  {
    id: 7,
    brand: "BMW",
    model: "X5",
    type: "suv",
    year: 2023,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    fuelType: "diesel",
    monthlyPrice: 799,
    contractLength: 36,
    mileage: 15000,
    seats: 7,
    transmission: "automatic",
    features: ["Panoramic Roof", "Harman Kardon", "Leather Seats", "BMW Live Cockpit"],
    leaseCompany: "Ayvens",
    leaseCompanyLogo: "/logos/ayvens.svg"
  },
  {
    id: 8,
    brand: "Audi",
    model: "e-tron",
    type: "suv",
    year: 2023,
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    fuelType: "electric",
    monthlyPrice: 899,
    contractLength: 48,
    mileage: 20000,
    seats: 5,
    transmission: "automatic",
    features: ["Virtual Cockpit", "Bang & Olufsen", "Adaptive Air Suspension", "Matrix LED"],
    leaseCompany: "Arval",
    leaseCompanyLogo: "/logos/arval.svg"
  },
  {
    id: 9,
    brand: "Volkswagen",
    model: "Golf",
    type: "hatchback",
    year: 2023,
    image: "https://images.unsplash.com/photo-1575650772417-e6b418b0d106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    fuelType: "gasoline",
    monthlyPrice: 299,
    contractLength: 36,
    mileage: 15000,
    seats: 5,
    transmission: "manual",
    features: ["Digital Cockpit", "App-Connect", "Adaptive Cruise Control", "Lane Assist"],
    leaseCompany: "LeasePlan",
    leaseCompanyLogo: "/logos/leaseplan.svg"
  }
];
