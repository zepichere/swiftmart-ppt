import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Target, Users, TrendingUp } from 'lucide-react';

export default function Slide4() {
  const visions = [
    { icon: Target, text: 'Inclusive quick commerce' },
    { icon: Users, text: 'Empower local vendors' },
    { icon: TrendingUp, text: 'Fair ecosystem for all stakeholders' }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1770087548346-a4df58a695df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxhbmNlJTIwc2NhbGUlMjBlY29zeXN0ZW0lMjBmYWlyfGVufDF8fHx8MTc3MDE3OTgyMXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Balance graphic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-20">Our Vision</h2>
          <div className="grid grid-cols-1 gap-10">
            {visions.map((vision, index) => {
              const Icon = vision.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="flex items-center gap-8 bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-20 h-20 rounded-full bg-[#2ECC71] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-3xl text-white">{vision.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}