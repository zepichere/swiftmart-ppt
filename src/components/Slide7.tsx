import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Zap, Network, Cpu } from 'lucide-react';

export default function Slide7() {
  const innovations = [
    { icon: Network, text: 'Decentralized alternative to dark stores' },
    { icon: Zap, text: 'Smart routing instead of warehouses' },
    { icon: Cpu, text: 'Tech adapts to local commerce' }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1593346950530-9c1e644395a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc3MDE3OTgyMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Why It's Innovative</h2>
          <p className="text-2xl md:text-3xl text-[#2ECC71] mb-20">Reimagining commerce infrastructure</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {innovations.map((innovation, index) => {
              const Icon = innovation.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-20 h-20 rounded-full bg-[#2ECC71] flex items-center justify-center mx-auto mb-8">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-2xl text-white leading-relaxed">{innovation.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}