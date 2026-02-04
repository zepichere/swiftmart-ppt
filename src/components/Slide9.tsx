import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Building2, Home, Expand } from 'lucide-react';

export default function Slide9() {
  const scalability = [
    { icon: Building2, text: 'City-wise expansion' },
    { icon: Home, text: 'No warehouse dependency' },
    { icon: Expand, text: 'Supports small shops and big marts' }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764212514531-9caa6661f4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbmV0d29yayUyMGV4cGFuc2lvbiUyMHVyYmFufGVufDF8fHx8MTc3MDE3OTgyMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="City expansion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Scalability</h2>
          <p className="text-2xl md:text-3xl text-[#2ECC71] mb-20">Built to grow organically</p>
          
          <div className="grid grid-cols-1 gap-10 max-w-3xl">
            {scalability.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="flex items-center gap-8 bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-20 h-20 rounded-full bg-[#2ECC71] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-3xl text-white">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}