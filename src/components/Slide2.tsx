import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { XCircle } from 'lucide-react';

export default function Slide2() {
  const problems = [
    'Quick commerce is centralized',
    'Local shops lack online reach',
    'Buyers can\'t choose specific stores',
    'Delivery partners have limited opportunities'
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-16">The Problem</h2>
            <div className="space-y-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-5 group hover:translate-x-2 transition-transform duration-300"
                >
                  <XCircle className="w-7 h-7 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-2xl text-gray-700 leading-relaxed">{problem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1731847999830-6f71b78d720e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdG9yYWdlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwMTE3NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dark store vs local shop"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}