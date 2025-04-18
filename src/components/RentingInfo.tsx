
import { CheckCircle2, Zap, Calendar, RefreshCw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const RentingInfo = () => {
  return (
    // <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">🚗 What is Renting and why is it the best way to drive?</h2>
          <p className="text-lg text-gray-600">
            Leasing has changed the way people and companies access a vehicle. Instead of buying a car, leasing allows you to enjoy a new or pre-owned car by paying a fixed monthly fee. Without worries, without unexpected expenses and with everything included.
          </p>
        </div>
        
        <div className="bg-rentify-blue/5 rounded-xl p-8 my-16">
          <h3 className="text-2xl font-bold mb-6 text-center">🔹 Why choose renting?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-rentify-blue flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gray-900">Savings and comfort</h4>
                <p className="text-gray-600">Forget about purchasing, financing, maintenance and surprises.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-rentify-blue flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gray-900">All inclusive</h4>
                <p className="text-gray-600">Insurance, taxes, inspections, assistance and more in a single payment.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-rentify-blue flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gray-900">Flexibility</h4>
                <p className="text-gray-600">From long contracts to flexible renting options according to your needs.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-rentify-blue flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-gray-900">Always up to date</h4>
                <p className="text-gray-600">Change cars easily and without worries.</p>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-center mt-32 mb-8">🚘 Renting tailored to you: Which one is ideal for you?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-rentify-blue/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="text-rentify-blue" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-3">Renting for individuals vs. companies</h4>
            <p className="text-gray-600 mb-4">
              <span className="block mb-2">🔹 <strong>Private:</strong> Ideal if you want to enjoy a car without making a long-term commitment or facing unexpected expenses.</span>
              <span className="block">🔹 <strong>Companies and freelancers:</strong> Tax benefits and efficient fleet management without initial investment.</span>
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-rentify-blue/10 rounded-full flex items-center justify-center mb-4">
              <Calendar className="text-rentify-blue" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-3">New vs. Pre-owned cars</h4>
            <p className="text-gray-600 mb-4">
              <span className="block mb-2">🔹 <strong>New cars:</strong> Brand new vehicle with the latest technology and customization.</span>
              <span className="block">🔹 <strong>Pre-owned cars:</strong> The same convenience of renting, but with tighter installments.</span>
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-rentify-blue/10 rounded-full flex items-center justify-center mb-4">
              <RefreshCw className="text-rentify-blue" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-3">Traditional vs. Flexible</h4>
            <p className="text-gray-600 mb-4">
              <span className="block mb-2">🔹 <strong>Traditional:</strong> Contract with a fixed duration, ideal for those seeking stability and long-term savings.</span>
              <span className="block">🔹 <strong>Flexible:</strong> Adaptable to your needs, with the possibility of changing cars or canceling without penalties.</span>
            </p>
          </div>
        </div>
        
        <div className="bg-rentify-blue/10 rounded-xl p-8 text-center mt-32 mb-12">
          <h3 className="text-2xl font-bold mb-4">🚀 Total peace of mind: no surprises, no worries</h3>
          <p className="text-lg mb-6">
            With renting, you forget about insurance, maintenance, breakdowns and taxes. Everything is covered in your monthly payment so you only have to worry about driving.
          </p>
          <Button className="btn-primary">
            <Link to="/survey">Compare Options Now</Link>
          </Button>
        </div>
        
        <div className="text-center">
          <p className="text-lg">
            📞 If you are not sure which is the best option for you, you can contact one of our specialized advisors and we will help you choose.
          </p>
        </div>
      </div>
    // </section>
  );
};

export default RentingInfo;
