import { Button } from '@/components/ui/button';
import { ChevronDown, CalendarDays, Users } from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
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
        <div className="absolute inset-0 bg-gradient-hero" />
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
            <Button variant="hero" size="xl">
              Забронировать номер
            </Button>
            <Button variant="heroOutline" size="xl">
              Смотреть номера
            </Button>
          </div>

          {/* Quick Booking Block */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-elevated max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Check-in Date */}
              <Popover>
                <PopoverTrigger asChild>
                  <button className={cn(
                    "flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-border bg-background hover:border-primary/50 transition-colors text-left",
                    !checkIn && "text-muted-foreground"
                  )}>
                    <CalendarDays className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-muted-foreground font-medium">Заезд</div>
                      <div className="text-sm font-semibold text-foreground truncate">
                        {checkIn ? format(checkIn, "d MMMM", { locale: ru }) : "Выберите дату"}
                      </div>
                    </div>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              {/* Check-out Date */}
              <Popover>
                <PopoverTrigger asChild>
                  <button className={cn(
                    "flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-border bg-background hover:border-primary/50 transition-colors text-left",
                    !checkOut && "text-muted-foreground"
                  )}>
                    <CalendarDays className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-muted-foreground font-medium">Выезд</div>
                      <div className="text-sm font-semibold text-foreground truncate">
                        {checkOut ? format(checkOut, "d MMMM", { locale: ru }) : "Выберите дату"}
                      </div>
                    </div>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => date < (checkIn || new Date())}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              {/* Guests */}
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="h-auto px-4 py-3 rounded-xl border border-border bg-background hover:border-primary/50">
                  <div className="flex items-center gap-3 w-full">
                    <Users className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="text-xs text-muted-foreground font-medium">Гости</div>
                      <div className="text-sm font-semibold text-foreground">
                        <SelectValue placeholder="Кол-во гостей" />
                      </div>
                    </div>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 гость</SelectItem>
                  <SelectItem value="2">2 гостя</SelectItem>
                  <SelectItem value="3">3 гостя</SelectItem>
                  <SelectItem value="4">4 гостя</SelectItem>
                  <SelectItem value="5">5+ гостей</SelectItem>
                </SelectContent>
              </Select>

              {/* Book Button */}
              <Button variant="hero" size="lg" className="h-auto py-3 rounded-xl">
                Забронировать
              </Button>
            </div>
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
