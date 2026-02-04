import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { DollarSign, Truck, Megaphone, Star } from 'lucide-react';

export default function Slide10() {
  const revenues = [
    { icon: DollarSign, text: 'Commission on orders' },
    { icon: Truck, text: 'Delivery and service fees' },
    { icon: Megaphone, text: 'Seller advertising' },
    { icon: Star, text: 'Premium buyer subscriptions' }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-20 text-center">Revenue Model</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {revenues.map((revenue, index) => {
              const Icon = revenue.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-xl bg-[#2ECC71] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-2xl text-white">{revenue.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-20 pt-20 border-t border-white/20"
          >
            <p className="text-3xl md:text-5xl text-[#2ECC71] font-bold mb-10">
              Fast delivery can be fair delivery.
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="h-1 w-20 bg-[#2ECC71]"></div>
              <p className="text-3xl text-white">SwiftMart</p>
              <div className="h-1 w-20 bg-[#2ECC71]"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}