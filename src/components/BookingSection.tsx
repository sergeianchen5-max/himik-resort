import { useEffect } from 'react';

const BookingSection = () => {
    useEffect(() => {
        const w = window as any;
        const q = [
            ['setContext', 'TL-INT-pansionat-himik', 'ru'],
            ['embed', 'booking-form', {
                container: 'tl-booking-form'
            }]
        ];

        const t = w.travelline = (w.travelline || {});
        const ti = t.integration = (t.integration || {});
        ti.__cq = ti.__cq ? ti.__cq.concat(q) : q;

        if (!ti.__loader) {
            ti.__loader = true;
            const d = w.document;
            const p = d.location.protocol;
            const s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = (p === 'https:' ? p : 'http:') + '//ibe.tlintegration.com/integration/loader.js';
            (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s);
        }
    }, []);

    return (
        <section id="tl-anchor" className="py-20 md:py-32 bg-muted/50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                        Бронирование
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3">
                        Выберите номер
                    </h2>
                    <p className="text-lg text-muted-foreground mt-4">
                        С помощью приведенной ниже формы вы можете забронировать наши номера в режиме онлайн и получить гарантированную бронь.
                    </p>
                </div>

                {/* TL Widget Container */}
                <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-card overflow-hidden">
                    <div id="tl-booking-form">&nbsp;</div>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
