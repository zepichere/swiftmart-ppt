import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { TrendingUp, Users, ShoppingCart } from 'lucide-react';

export default function Slide8() {
  const impacts = [
    { icon: TrendingUp, title: 'Vendors', text: 'Higher income for local vendors' },
    { icon: Users, title: 'Partners', text: 'More flexibility for delivery partners' },
    { icon: ShoppingCart, title: 'Buyers', text: 'More choice and trust for buyers' }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center">Impact at Scale</h2>
          <p className="text-2xl md:text-3xl text-gray-600 mb-20 text-center">Creating value for everyone</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Left - Impacts */}
            <div className="space-y-10">
              {impacts.map((impact, index) => {
                const Icon = impact.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="bg-gradient-to-r from-gray-50 to-white p-10 rounded-2xl border-2 border-gray-100 hover:border-[#2ECC71] transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-xl bg-[#2ECC71] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold mb-3">{impact.title}</h3>
                        <p className="text-xl text-gray-600 leading-relaxed">{impact.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1749006813623-bc3bd798158c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBncm93dGglMjBwZW9wbGUlMjB0b2dldGhlcnxlbnwxfHx8fDE3NzAxNzk2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Community growth"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}