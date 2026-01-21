import { Users, Wifi, Tv, Wind, Bath, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import roomImage from '@/assets/room-standard.jpg';
import activitiesImage from '@/assets/activities.jpg';
import wellnessImage from '@/assets/wellness.jpg';

const rooms = [
  {
    name: 'Эконом',
    description: 'Уютные номера для комфортного отдыха по доступной цене',
    image: wellnessImage,
    capacity: '2-3 человека',
    amenities: ['ТВ', 'Кондиционер', 'Душ'],
    price: 'от 1 500 ₽',
  },
  {
    name: 'Бюджетный',
    description: 'Комфортные номера с улучшенной обстановкой',
    image: activitiesImage,
    capacity: '2-4 человека',
    amenities: ['ТВ', 'Кондиционер', 'Душ', 'Холодильник'],
    price: 'от 2 500 ₽',
  },
  {
    name: 'Стандарт',
    description: 'Просторные номера с видом на море и полным набором удобств',
    image: roomImage,
    capacity: '2-4 человека',
    amenities: ['ТВ', 'Кондиционер', 'Душ', 'Холодильник', 'Балкон'],
    price: 'от 3 500 ₽',
  },
];

const amenityIcons: Record<string, React.ElementType> = {
  'ТВ': Tv,
  'Кондиционер': Wind,
  'Душ': Bath,
  'Холодильник': UtensilsCrossed,
  'Балкон': Wifi,
};

const RoomsSection = () => {
  return (
    <section id="rooms" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Размещение
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3">
            Номера на любой вкус
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Выберите подходящий вариант размещения из наших комфортабельных 
            2-х, 3-х и 5-этажных корпусов. Вместимость — до 600 гостей.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full">
                  <span className="text-lg font-bold text-ocean-deep">{room.price}</span>
                  <span className="text-sm text-muted-foreground">/сутки</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {room.description}
                </p>

                {/* Capacity */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Users className="w-4 h-4" />
                  <span>{room.capacity}</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity, idx) => {
                    const Icon = amenityIcons[amenity] || Wifi;
                    return (
                      <span
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {amenity}
                      </span>
                    );
                  })}
                </div>

                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
