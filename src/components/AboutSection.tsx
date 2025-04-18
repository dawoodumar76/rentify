
import { LightbulbIcon, UsersIcon, TruckIcon, HeadphonesIcon } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Who are we?</h2>
          <p className="text-lg text-gray-600">
            We are a team passionate about mobility and technology. We believe that renting is a smart option to enjoy a car without worries, and our goal is to offer you a simple and efficient tool to compare prices in one place.
          </p>
          <h2 className="text-2xl font-bold my-4 text-rentify-blue">What do we offer?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="feature-card text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-rentify-blue/10 rounded-full flex items-center justify-center">
              <LightbulbIcon className="text-rentify-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Updated Comparator</h3>
            <p className="text-gray-600">Access the best rental offers on the market with our always updated comparator.</p>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-rentify-blue/10 rounded-full flex items-center justify-center">
              <TruckIcon className="text-rentify-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Multiple Options</h3>
            <p className="text-gray-600">Access to multiple brands and models in one click to find your perfect match.</p>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-rentify-blue/10 rounded-full flex items-center justify-center">
              <UsersIcon className="text-rentify-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Advice</h3>
            <p className="text-gray-600">Get personalized recommendations to find the best option for your needs.</p>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-rentify-blue/10 rounded-full flex items-center justify-center">
              <HeadphonesIcon className="text-rentify-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Simple Process</h3>
            <p className="text-gray-600">Enjoy a quick and simple process without complications or hidden costs.</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg font-medium text-rentify-blue mb-2">
            🔎 Explore, compare and choose the best renting offer without complications. 🚗💨
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
