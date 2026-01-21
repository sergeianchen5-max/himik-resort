import { Waves, HeartPulse, GamepadIcon, Baby, UtensilsCrossed, Bus } from 'lucide-react';

const services = [
  {
    icon: Waves,
    title: 'Собственный пляж',
    description: 'Песчаный пляж площадью 5000 м² с шезлонгами и зонтиками в 350 м от корпусов',
  },
  {
    icon: HeartPulse,
    title: 'Оздоровление',
    description: 'Санаторно-курортное лечение общетерапевтического профиля',
  },
  {
    icon: GamepadIcon,
    title: 'Развлечения',
    description: 'Аква-зона, настольный теннис, спортивный инвентарь и игровые площадки',
  },
  {
    icon: Baby,
    title: 'Детская анимация',
    description: 'Ежедневные мастер-классы, мероприятия и программы для детей',
  },
  {
    icon: UtensilsCrossed,
    title: 'Питание',
    description: 'Комплексное питание в столовой пансионата',
  },
  {
    icon: Bus,
    title: 'Трансфер',
    description: 'Организация трансфера из Туапсе, Краснодара и других городов',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Услуги
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3">
            Всё для вашего отдыха
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Мы позаботились о каждой детали, чтобы ваш отпуск был незабываемым
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-ocean flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
