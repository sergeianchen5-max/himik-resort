import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-deep text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-serif font-bold mb-4">
              Пансионат «Химик»
            </div>
            <p className="text-white/70 leading-relaxed max-w-md">
              Комфортный отдых на берегу Чёрного моря в живописном Туапсинском районе. 
              Собственный песчаный пляж, оздоровительные процедуры и развлечения для всей семьи.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  О пансионате
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-white/70 hover:text-white transition-colors">
                  Номера
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#promotions" className="text-white/70 hover:text-white transition-colors">
                  Акции
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-white/70 hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+79890906272" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  +7 (989) 090-62-72
                </a>
              </li>
              <li>
                <a href="mailto:himik-azot@yandex.ru" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  himik-azot@yandex.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  352747, Краснодарский край,<br />
                  Туапсинский район, с. Лермонтово
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Пансионат «Химик». Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Договор оферты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
