
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Car, User, Calendar, Shield, Gift } from "lucide-react";

const formSchema = z.object({
  vehicleUse: z.enum(["daily", "occasional", "professional", "other"]),
  previousRenting: z.enum(["yes", "no"]),
  currentVehicle: z.enum(["yes", "no"]),
  mostValued: z.enum(["allinclusive", "fixedfee", "changecar", "other"]),
  age: z.enum(["under25", "25to35", "36to50", "over50"]),
  otherUseSpecify: z.string().optional(),
  otherValueSpecify: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const iconVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } }
};

const RentalSurvey = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showOtherUse, setShowOtherUse] = useState(false);
  const [showOtherValue, setShowOtherValue] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vehicleUse: "daily",
      previousRenting: "no",
      currentVehicle: "no",
      mostValued: "allinclusive",
      age: "25to35",
      otherUseSpecify: "",
      otherValueSpecify: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // In a real app, we'd save this data to a database
    console.log("Survey data:", data);
    
    // Store form data in localStorage for use in the comparison page
    localStorage.setItem("surveyData", JSON.stringify(data));
    
    toast({
      title: "Survey completed!",
      description: "Taking you to the comparison page.",
    });
    
    // Navigate to the comparison page
    navigate("/compare");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8 mb-16"
    >
      <Card className="border-0 shadow-none bg-transparent">
        <CardHeader>
          <CardTitle className="text-2xl font-montserrat text-center text-rentify-blue dark:text-blue-400">🔍 Find the best rental offer for you</CardTitle>
          <CardDescription className="text-center max-w-3xl mx-auto dark:text-gray-300">
            At Rentify we want to help you find the rental that best suits your needs. Answer these short questions and we'll show you personalized options based on your profile and preferences. It will only take you a few seconds!
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="vehicleUse"
                  render={({ field }) => (
                    <FormItem className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div 
                          variants={iconVariants}
                          initial="initial"
                          animate="animate"
                          className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full"
                        >
                          <Car size={24} className="text-rentify-blue dark:text-blue-400" />
                        </motion.div>
                        <FormLabel className="text-lg font-semibold m-0">
                          Vehicle Usage
                        </FormLabel>
                      </div>
                      <FormControl>
                        <RadioGroup
                          onValueChange={(value) => {
                            field.onChange(value);
                            setShowOtherUse(value === "other");
                          }}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2 mt-2"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="daily" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Daily use (commuting to work, city, etc.).
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="occasional" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Occasional trips or getaways.
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="professional" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Professional or company use.
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="other" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Other (specify).
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                      
                      {showOtherUse && (
                        <FormField
                          control={form.control}
                          name="otherUseSpecify"
                          render={({ field }) => (
                            <FormItem className="mt-4">
                              <FormLabel>Please specify your vehicle use:</FormLabel>
                              <FormControl>
                                <Input placeholder="Type here..." {...field} className="dark:bg-gray-700 dark:border-gray-600" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="previousRenting"
                  render={({ field }) => (
                    <FormItem className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div 
                          variants={iconVariants}
                          initial="initial"
                          animate="animate"
                          className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full"
                        >
                          <Calendar size={24} className="text-rentify-blue dark:text-blue-400" />
                        </motion.div>
                        <FormLabel className="text-lg font-semibold m-0">
                          Leasing Experience
                        </FormLabel>
                      </div>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2 mt-2"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">I've leased a vehicle before.</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">This is my first time leasing.</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="currentVehicle"
                  render={({ field }) => (
                    <FormItem className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div 
                          variants={iconVariants}
                          initial="initial"
                          animate="animate"
                          className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full"
                        >
                          <Shield size={24} className="text-rentify-blue dark:text-blue-400" />
                        </motion.div>
                        <FormLabel className="text-lg font-semibold m-0">
                          Current Vehicle
                        </FormLabel>
                      </div>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2 mt-2"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">I currently own or lease a vehicle.</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">I don't currently have a vehicle.</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="mostValued"
                  render={({ field }) => (
                    <FormItem className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div 
                          variants={iconVariants}
                          initial="initial"
                          animate="animate"
                          className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full"
                        >
                          <Gift size={24} className="text-rentify-blue dark:text-blue-400" />
                        </motion.div>
                        <FormLabel className="text-lg font-semibold m-0">
                          Value Proposition
                        </FormLabel>
                      </div>
                      <FormControl>
                        <RadioGroup
                          onValueChange={(value) => {
                            field.onChange(value);
                            setShowOtherValue(value === "other");
                          }}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2 mt-2"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="allinclusive" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              All-inclusive package with no surprises.
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="fixedfee" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Fixed monthly payment with low upfront cost.
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="changecar" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Ability to change vehicles regularly.
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="other" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              Other (specify).
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                      
                      {showOtherValue && (
                        <FormField
                          control={form.control}
                          name="otherValueSpecify"
                          render={({ field }) => (
                            <FormItem className="mt-4">
                              <FormLabel>Please specify what you value most:</FormLabel>
                              <FormControl>
                                <Input placeholder="Type here..." {...field} className="dark:bg-gray-700 dark:border-gray-600" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm md:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div 
                          variants={iconVariants}
                          initial="initial"
                          animate="animate"
                          className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full"
                        >
                          <User size={24} className="text-rentify-blue dark:text-blue-400" />
                        </motion.div>
                        <FormLabel className="text-lg font-semibold m-0">
                          Your Age Range
                        </FormLabel>
                      </div>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2"
                        >
                          <FormItem className="flex flex-col items-center space-y-2">
                            <FormControl>
                              <RadioGroupItem value="under25" className="sr-only peer" />
                            </FormControl>
                            <div className="bg-white dark:bg-gray-700 border-2 peer-data-[state=checked]:border-rentify-blue dark:peer-data-[state=checked]:border-blue-400 rounded-lg p-4 w-full text-center cursor-pointer transition-all">
                              <FormLabel className="font-normal cursor-pointer block">
                                Under 25
                              </FormLabel>
                            </div>
                          </FormItem>
                          <FormItem className="flex flex-col items-center space-y-2">
                            <FormControl>
                              <RadioGroupItem value="25to35" className="sr-only peer" />
                            </FormControl>
                            <div className="bg-white dark:bg-gray-700 border-2 peer-data-[state=checked]:border-rentify-blue dark:peer-data-[state=checked]:border-blue-400 rounded-lg p-4 w-full text-center cursor-pointer transition-all">
                              <FormLabel className="font-normal cursor-pointer block">
                                25-35 years
                              </FormLabel>
                            </div>
                          </FormItem>
                          <FormItem className="flex flex-col items-center space-y-2">
                            <FormControl>
                              <RadioGroupItem value="36to50" className="sr-only peer" />
                            </FormControl>
                            <div className="bg-white dark:bg-gray-700 border-2 peer-data-[state=checked]:border-rentify-blue dark:peer-data-[state=checked]:border-blue-400 rounded-lg p-4 w-full text-center cursor-pointer transition-all">
                              <FormLabel className="font-normal cursor-pointer block">
                                36-50 years
                              </FormLabel>
                            </div>
                          </FormItem>
                          <FormItem className="flex flex-col items-center space-y-2">
                            <FormControl>
                              <RadioGroupItem value="over50" className="sr-only peer" />
                            </FormControl>
                            <div className="bg-white dark:bg-gray-700 border-2 peer-data-[state=checked]:border-rentify-blue dark:peer-data-[state=checked]:border-blue-400 rounded-lg p-4 w-full text-center cursor-pointer transition-all">
                              <FormLabel className="font-normal cursor-pointer block">
                                Over 50
                              </FormLabel>
                            </div>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <CardFooter className="px-0 pt-4 flex justify-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full max-w-md"
                >
                  <Button type="submit" className="w-full btn-primary py-6 text-lg font-montserrat">
                    Find My Perfect Rental
                  </Button>
                </motion.div>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RentalSurvey;
