import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'О пансионате' },
    { href: '#tl-anchor', label: 'Бронирование' },
    { href: '#reviews', label: 'Отзывы' },
    { href: '#services', label: 'Услуги' },
    { href: '#promotions', label: 'Акции' },
    { href: '#contacts', label: 'Контакты' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-soft'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logoImage} alt="Логотип пансионата Химик" className="h-12 w-auto object-contain" />
            <div className={`text-2xl font-serif font-bold transition-colors hidden sm:block ${isScrolled ? 'text-ocean-deep' : 'text-white'}`}>
              Химик
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-foreground' : 'text-white'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+79890906272"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${isScrolled ? 'text-foreground' : 'text-white'
                }`}
            >
              <Phone className="w-4 h-4" />
              +7 (989) 090-62-72
            </a>
            <Button variant={isScrolled ? 'default' : 'heroOutline'} size="default" onClick={() => document.getElementById('tl-anchor')?.scrollIntoView({ behavior: 'smooth' })}>
              Забронировать
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-foreground' : 'text-white'
              }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <a href="tel:+79890906272" className="flex items-center gap-2 text-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +7 (989) 090-62-72
              </a>
              <a href="mailto:himik-azot@yandex.ru" className="flex items-center gap-2 text-foreground">
                <Mail className="w-4 h-4 text-primary" />
                himik-azot@yandex.ru
              </a>
              <Button variant="default" size="lg" className="mt-2" onClick={() => document.getElementById('tl-anchor')?.scrollIntoView({ behavior: 'smooth' })}>
                Забронировать
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
