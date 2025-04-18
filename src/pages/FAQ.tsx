
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is vehicle leasing?",
      answer: "Vehicle leasing is a long-term rental arrangement that allows you to use a car for a fixed period (typically 2-4 years) while making regular monthly payments. Unlike buying, you don't own the vehicle at the end of the term, but you benefit from lower monthly payments, included maintenance, and the ability to drive a new car every few years."
    },
    {
      question: "What's included in a typical lease contract?",
      answer: "A standard lease typically includes vehicle financing, regular maintenance, roadside assistance, vehicle tax, and insurance. The specifics can vary between providers, but Rentify clearly displays what's included with each offer so you can make informed comparisons."
    },
    {
      question: "Is leasing better than buying a car?",
      answer: "Whether leasing is better than buying depends on your specific circumstances. Leasing typically offers lower monthly payments, included maintenance, and the ability to drive newer cars more frequently. Buying gives you ownership of the asset and freedom from mileage restrictions. Rentify can help you compare options to determine which approach best suits your needs."
    },
    {
      question: "Can I lease a car if I have bad credit?",
      answer: "While having good credit makes leasing easier and more affordable, many providers do offer leasing options for those with less-than-perfect credit. These may require a larger initial payment or have higher monthly rates. Rentify's comparison tool includes options for various credit situations."
    },
    {
      question: "What happens if I exceed my mileage limit?",
      answer: "If you exceed the mileage limit specified in your lease contract, you'll be charged an excess mileage fee, typically calculated per mile/kilometer over the limit. These fees are outlined in your contract. It's important to choose a mileage limit that realistically matches your driving habits."
    },
    {
      question: "Can I modify a leased vehicle?",
      answer: "Most lease agreements require you to return the vehicle in its original condition (normal wear and tear excepted), which means significant modifications are generally not allowed. Minor, reversible changes may be acceptable, but it's always best to check with your leasing provider before making any modifications."
    },
    {
      question: "Is maintenance included in a lease?",
      answer: "Most leases include regular maintenance as part of the package, covering routine services like oil changes and manufacturer-recommended maintenance. The specific coverage varies by provider, and Rentify clearly displays what maintenance services are included with each lease offer."
    },
    {
      question: "Can I terminate my lease early?",
      answer: "Yes, but early termination usually involves additional fees. Options may include transferring the lease to someone else, buying the vehicle outright, or paying an early termination fee. Flexible leasing options, which Rentify helps you identify, may offer more lenient early termination terms."
    },
    {
      question: "Do I need to provide my own insurance for a leased vehicle?",
      answer: "The insurance requirements vary by lease agreement. Many comprehensive leasing packages include insurance, while others require you to arrange your own coverage that meets certain minimum requirements. Rentify's comparison tool clearly indicates whether insurance is included in each offer."
    },
    {
      question: "How do I start the leasing process with Rentify?",
      answer: "Starting with Rentify is simple! First, complete our quick survey about your needs and preferences. We'll then show you personalized leasing options from our trusted partners. Once you find an offer you like, click through to the provider's website to complete the application process. Our service is completely free to use, with no obligation."
    }
  ];

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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Everything you need to know about vehicle renting and how Rentify works
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 bg-rentify-blue/5 rounded-xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our team is here to help with any other questions you might have about our service or vehicle leasing in general.
              </p>
              <a 
                href="mailto:support@rentify.com" 
                className="btn-primary inline-block py-3 px-8 text-lg"
              >
                Contact Support
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
