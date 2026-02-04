import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Store, MapPin, ShoppingBag } from 'lucide-react';

export default function Slide5() {
  const ideas = [
    { icon: Store, text: 'Delivery platform powered by local shops' },
    { icon: ShoppingBag, text: 'Customers choose where products come from' },
    { icon: MapPin, text: 'Local stores become fulfillment hubs' }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center">The Idea</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Left - Content */}
            <div className="space-y-8">
              {ideas.map((idea, index) => {
                const Icon = idea.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="flex items-start gap-6 p-8 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 rounded-lg bg-[#2ECC71] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-2xl text-gray-700 mt-3 leading-relaxed">{idea.text}</p>
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
                src="https://images.unsplash.com/photo-1669508886393-d3ec02f4a330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXAlMjBsb2NhdGlvbiUyMG5lYXJieSUyMHN0b3Jlc3xlbnwxfHx8fDE3NzAxNzk4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Map with nearby shops"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}