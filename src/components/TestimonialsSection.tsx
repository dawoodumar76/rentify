
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: 5,
    text: "Rentify made finding a car for my business trip incredibly easy. The comparison tool saved me both time and money, and the car was exactly as described. I'll definitely use them again!"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: 4,
    text: "I was skeptical about car rentals until I tried Rentify. Their platform is intuitive, the prices are transparent, and the customer service was excellent when I needed to extend my rental."
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: "Travel Blogger",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
    rating: 5,
    text: "As someone who travels frequently, I've tried many car rental services, and Rentify stands out. The comparison feature helped me find a luxury car within my budget for a road trip across Europe."
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: 5,
    text: "Rentify has transformed how my company handles vehicle rentals. The all-inclusive packages with maintenance and insurance give us peace of mind, and the costs are predictable."
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={18} 
          fill={i < rating ? "#F59E0B" : "none"} 
          color={i < rating ? "#F59E0B" : "#CBD5E0"} 
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from people who've experienced the Rentify difference.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <motion.div 
                  className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 h-full flex flex-col"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-rentify-blue"
                    />
                    <div>
                      <h3 className="font-semibold text-lg dark:text-white">{testimonial.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <RatingStars rating={testimonial.rating} />
                  <p className="mt-4 text-gray-700 dark:text-gray-200 flex-grow">{testimonial.text}</p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-0 translate-y-0 left-0 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            <CarouselNext className="relative inset-0 translate-y-0 right-0 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
