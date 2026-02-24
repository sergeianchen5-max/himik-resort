import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactsSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreement, setAgreement] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreement) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('Имя'),
      phone: formData.get('Телефон'),
      email: formData.get('Email'),
      message: formData.get('Сообщение'),
    };

    const text = `Новая заявка с сайта:\n\nИмя: ${data.name}\nТелефон: ${data.phone}\nEmail: ${data.email || 'не указан'}\n\nСообщение:\n${data.message}`;

    // Токен и Chat ID Telegram бота
    const TELEGRAM_BOT_TOKEN = '8744788868:AAGvekOjk8X-SNkSLQwUBi_yZiseLXxdIks';
    const TELEGRAM_CHAT_ID = '-5042695746';

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
        }),
      });

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        (e.target as HTMLFormElement).reset();
        setAgreement(false);
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке. Пожалуйста, попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="py-20 md:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Контакты
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 mb-8">
              Свяжитесь с нами
            </h2>

            <div className="space-y-6">
              <a
                href="tel:+79890906272"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60 mb-1">Телефон</div>
                  <div className="text-xl font-semibold group-hover:text-primary transition-colors">
                    +7 (989) 090-62-72
                  </div>
                </div>
              </a>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:anchen-ser@yandex.ru"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60 mb-1">Основной Email</div>
                    <div className="text-xl font-semibold group-hover:text-primary transition-colors">
                      anchen-ser@yandex.ru
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:himik-azot@yandex.ru"
                  className="flex items-start gap-4 group pl-16 pt-2"
                >
                  <div>
                    <div className="text-sm text-primary-foreground/60 mb-1">Дополнительный Email</div>
                    <div className="text-lg font-semibold group-hover:text-primary transition-colors">
                      himik-azot@yandex.ru
                    </div>
                  </div>
                </a>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60 mb-1">Адрес</div>
                  <div className="text-lg font-semibold">
                    352747, Краснодарский край,<br />
                    Туапсинский район, с. Лермонтово
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60 mb-1">Время работы</div>
                  <div className="text-lg font-semibold">
                    Ежедневно: 08:00 — 20:00
                  </div>
                </div>
              </div>
            </div>

            {/* How to get */}
            <div className="mt-10 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
              <h3 className="text-lg font-semibold mb-3">Как добраться</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                Проезд к пансионату возможен рейсовым автобусом от авто или ж/д вокзалов
                из г. Туапсе или г. Краснодара, маршрутным такси до пункта назначения.
                Для организованных групп или по отдельной заявке может быть организован
                трансфер из любого пункта.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card text-card-foreground rounded-3xl p-8 md:p-10 shadow-elevated">
            <h3 className="text-2xl font-serif font-bold mb-6">
              Оставить заявку
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <input
                  type="text"
                  name="Имя"
                  required
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <input
                  type="tel"
                  name="Телефон"
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email (необязательно)</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="example@mail.ru"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <textarea
                  rows={4}
                  name="Сообщение"
                  placeholder="Ваше сообщение или вопрос..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                />
              </div>

              <div className="flex items-start gap-3 mt-4">
                <input
                  type="checkbox"
                  id="agreement"
                  checked={agreement}
                  onChange={(e) => setAgreement(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary/50"
                />
                <label htmlFor="agreement" className="text-sm text-muted-foreground leading-snug">
                  Я согласен с условиями{' '}
                  <a href="https://pansionat-himik.ru/sw/poli.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">пользовательского соглашения</a> и{' '}
                  <a href="https://pansionat-himik.ru/sw/offer.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">договора оферты</a>,
                  и даю согласие на обработку персональных данных.
                </label>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">Отправка...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-3xl overflow-hidden h-[400px] border border-primary-foreground/10">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=38.805779%2C44.277903&z=15&mode=search&oid=30519574540&ol=biz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Карта расположения пансионата Химик"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
