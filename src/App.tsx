import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import Slide5 from './components/Slide5';
import Slide6 from './components/Slide6';
import Slide7 from './components/Slide7';
import Slide8 from './components/Slide8';
import Slide9 from './components/Slide9';
import Slide10 from './components/Slide10';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const totalSlides = 10;

  const slides = [
    <Slide1 key="slide1" />,
    <Slide2 key="slide2" />,
    <Slide3 key="slide3" />,
    <Slide4 key="slide4" />,
    <Slide5 key="slide5" />,
    <Slide6 key="slide6" />,
    <Slide7 key="slide7" />,
    <Slide8 key="slide8" />,
    <Slide9 key="slide9" />,
    <Slide10 key="slide10" />
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Right') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'Left') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]); // Added dependency to ensure it works properly

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      // Swiped right
      prevSlide();
    }
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-white"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-black/5 z-50">
        <div 
          className="h-full bg-[#2ECC71] transition-all duration-700 ease-in-out"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Slides Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Slide placeholders - will be replaced with actual slide components */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full flex items-center justify-center"
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Previous Button */}
        {currentSlide > 0 && (
          <button
            onClick={prevSlide}
            className="pointer-events-auto absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black" />
          </button>
        )}

        {/* Next Button */}
        {currentSlide < totalSlides - 1 && (
          <button
            onClick={nextSlide}
            className="pointer-events-auto absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
          </button>
        )}

        {/* Dot Indicators */}
        <div className="pointer-events-auto absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#2ECC71] w-8'
                  : 'bg-black/30 hover:bg-black/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="pointer-events-none absolute top-6 right-6 md:top-8 md:right-8 text-sm md:text-base text-black/50 font-medium">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </div>
  );
}