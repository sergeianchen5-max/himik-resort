import { Gift, Users, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';

const promotions = [
  {
    icon: Users,
    title: 'Групповые заезды',
    description: 'Специальные цены для туристических, студенческих и школьных групп. Выгодные условия от 10 человек.',
    badge: 'Для групп',
    badgeColor: 'bg-gradient-ocean',
  },
];

const PromotionsSection = () => {
  return (
    <section id="promotions" className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Специальные предложения
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3">
            Выгодные акции
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Воспользуйтесь нашими специальными предложениями для ещё более выгодного отдыха
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="max-w-4xl mx-auto">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="relative bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Badge */}
              <div className={`absolute top-6 right-6 px-3 py-1 ${promo.badgeColor} text-white text-xs font-semibold rounded-full`}>
                {promo.badge}
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6">
                  <promo.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  {promo.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {promo.description}
                </p>

                <Button asChild size="lg" className="w-full mt-4">
                  <a href="tel:+79890906272">Позвонить: +7 (989) 090-62-72</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative bg-gradient-ocean rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
                Готовы к незабываемому отдыху?
              </h3>
              <p className="text-white/80 text-lg">
                Забронируйте номер прямо сейчас и получите лучшие условия
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="heroOutline" size="lg">
                +7 (989) 090-62-72
              </Button>
              <Button
                size="lg"
                className="bg-white text-ocean-deep hover:bg-white/90"
                onClick={() => document.getElementById('tl-anchor')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Забронировать
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
