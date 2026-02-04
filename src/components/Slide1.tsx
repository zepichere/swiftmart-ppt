import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export default function Slide1() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1768814667300-8c9e2007b949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMHNob3BzJTIwbmV0d29yayUyMGNvbm5lY3RlZCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzAxNzk4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Connected local shops network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-10">SwiftMart</h1>
          <p className="text-3xl md:text-4xl text-white/90 mb-8">Fast delivery. Fair commerce.</p>
          <p className="text-2xl md:text-3xl text-[#2ECC71] mt-16">Decentralizing quick commerce</p>
        </motion.div>
      </div>
    </div>
  );
}