import { Button } from '@/components/ui/button';
import { ChevronDown, CalendarDays, Users } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import heroImage from '@/assets/hero-beach.jpg';

const HeroSection = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState<string>('2');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Animated Wave Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-32 text-background"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,85.3C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-white/90 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
            Черноморское побережье • с. Лермонтово
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Пансионат
            <span className="block text-sunset-light">«Химик»</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Собственный песчаный пляж площадью 5000 м²,
            комфортный отдых на берегу Чёрного моря
            в окружении кавказских лесов
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="hero" size="xl" onClick={() => document.getElementById('tl-anchor')?.scrollIntoView({ behavior: 'smooth' })}>
              Забронировать
            </Button>
          </div>



          <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">600</div>
              <div className="text-sm">мест размещения</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">350м</div>
              <div className="text-sm">до пляжа</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5000м²</div>
              <div className="text-sm">площадь пляжа</div>
            </div>
          </div>

          {/* Scroll Indicator - Now below everything */}
          <a
            href="#about"
            className="inline-flex flex-col items-center mt-10 text-white/70 hover:text-white transition-colors animate-float"
          >
            <span className="text-sm mb-2">Узнать больше</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
