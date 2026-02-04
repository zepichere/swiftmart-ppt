import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';

export default function Slide3() {
  const moments = [
    'Wanted to buy tomatoes from a specific shop',
    'No platform allowed store-level choice',
    'Local vendors were digitally invisible'
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1679234895543-6d84c80a9ec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzZWFyY2hpbmclMjBzbWFydHBob25lJTIwcGhvbmV8ZW58MXx8fHwxNzcwMTc5ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Person searching on phone"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-4 mb-12">
              <Lightbulb className="w-12 h-12 text-[#2ECC71]" />
              <h2 className="text-4xl md:text-5xl font-bold">The Moment of Realization</h2>
            </div>
            <div className="space-y-8">
              {moments.map((moment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative pl-6 border-l-4 border-[#2ECC71] hover:border-black transition-colors duration-300"
                >
                  <p className="text-2xl text-gray-700 leading-relaxed">{moment}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}