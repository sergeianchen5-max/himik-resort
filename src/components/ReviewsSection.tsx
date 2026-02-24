import { Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const REVIEWS = [
    {
        id: 1,
        name: "Елена С.",
        text: "Отличный пансионат! Территория зеленая, до моря близко. Питание разнообразное и вкусное. Обязательно приедем еще раз.",
    },
    {
        id: 2,
        name: "Алексей М.",
        text: "Прекрасное место для семейного отдыха. Аниматоры молодцы, дети были в восторге. Номера чистые, персонал очень вежливый.",
    },
    {
        id: 3,
        name: "Марина В.",
        text: "Отдыхали в августе. Всё очень понравилось! Особенно собственный чистый пляж и большая территория для прогулок вечером.",
    },
    {
        id: 4,
        name: "Игорь Д.",
        text: "Хорошее соотношение цены и качества. Питание по системе 'шведский стол' порадовало свежими фруктами. Рекомендую!",
    },
    {
        id: 5,
        name: "Ольга П.",
        text: "Уютный пансионат с отличной медицинской базой. Прошли курс массажа и ванн, чувствуем себя отдохнувшими и полными сил.",
    }
];

const ReviewsSection = () => {
    return (
        <section id="reviews" className="py-20 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <div className="flex justify-center gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-6 h-6 fill-primary text-primary" />
                        ))}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Что говорят наши гости
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Мы гордимся тем, что наши гости возвращаются к нам снова и снова.
                    </p>
                </div>

                <div className="relative px-4 sm:px-12 mb-16">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {REVIEWS.map((review) => (
                                <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 h-full">
                                        <Card className="h-full border-border/50 hover:border-primary/20 hover:shadow-soft transition-all duration-300">
                                            <CardContent className="flex flex-col h-full p-6">
                                                <MessageCircle className="w-10 h-10 text-primary/20 mb-4" />
                                                <p className="flex-grow text-foreground leading-relaxed mb-6 italic text-sm md:text-base">
                                                    "{review.text}"
                                                </p>
                                                <hr className="border-border/50 mb-4" />
                                                <div className="flex flex-col gap-2">
                                                    <span className="font-semibold text-foreground">{review.name}</span>
                                                    <a
                                                        href="https://yandex.ru/maps/org/khimik/30519574540/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary hover:text-ocean-deep hover:underline text-sm font-medium transition-colors inline-flex items-center gap-1"
                                                    >
                                                        Отзыв из Яндекс карт
                                                    </a>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden sm:block">
                            <CarouselPrevious className="-left-12 bg-white hover:bg-primary hover:text-white border-border/50" />
                            <CarouselNext className="-right-12 bg-white hover:bg-primary hover:text-white border-border/50" />
                        </div>
                    </Carousel>
                </div>

                <div className="flex justify-center">
                    <Button asChild size="lg" className="h-14 px-8 text-lg shadow-soft hover:shadow-elevated transition-shadow">
                        <a href="https://yandex.ru/maps/org/khimik/30519574540/" target="_blank" rel="noopener noreferrer">
                            Смотреть все отзывы на Яндексе
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
