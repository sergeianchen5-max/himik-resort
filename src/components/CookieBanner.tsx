import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Проверяем, было ли уже дано согласие
        const hasAccepted = localStorage.getItem('cookieConsent');
        if (!hasAccepted) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-elevated p-4 md:p-6 animate-fade-up">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-muted-foreground flex-1">
                    Мы используем файлы cookie для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с нашей{' '}
                    <a
                        href="https://pansionat-himik.ru/sw/poli.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                    >
                        Политикой конфиденциальности
                    </a>
                    {' '}и принимаете условия{' '}
                    <a
                        href="https://pansionat-himik.ru/sw/offer.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                    >
                        Договора оферты
                    </a>
                    .
                </div>
                <div className="flex shrink-0">
                    <Button onClick={handleAccept} className="w-full md:w-auto" size="default">
                        Я согласен
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
