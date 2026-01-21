import { Waves, Heart, Users, Sun } from 'lucide-react';
import beachImage from '@/assets/beach-aerial.jpg';

const features = [
  {
    icon: Waves,
    title: 'Собственный пляж',
    description: 'Песчаный пляж площадью более 5000 м² и шириной 100 метров всего в 350 м от корпусов',
  },
  {
    icon: Heart,
    title: 'Забота о здоровье',
    description: 'Санаторно-курортное лечение общетерапевтического профиля для восстановления сил',
  },
  {
    icon: Users,
    title: 'Семейный отдых',
    description: 'Аква-зона, детские площадки, анимация для детей и взрослых — развлечения для всей семьи',
  },
  {
    icon: Sun,
    title: 'Детский лагерь',
    description: 'Насыщенная программа с мастер-классами и мероприятиями каждый день',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                О пансионате
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 leading-tight">
                Отдых у моря в живописном 
                <span className="text-gradient-ocean"> Туапсинском районе</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Пансионат «Химик» расположен в живописном уголке Туапсинского района 
              Краснодарского края, между посёлками Лермонтово и Новомихайловский, 
              в окружении кавказских лесов. Здесь вас ждёт комфортное размещение 
              в 2-х, 3-х и 5-этажных корпусах.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-5 rounded-2xl bg-card border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-ocean flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={beachImage}
                alt="Пляж пансионата Химик"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-elevated max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-sunset flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">35+</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">лет</div>
                  <div className="text-sm text-muted-foreground">опыта работы</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
