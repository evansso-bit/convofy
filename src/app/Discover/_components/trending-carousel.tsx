'use client';

import useEmblaCarousel from 'embla-carousel-react';

import ImageComponent from '@/components/image-component';
import { Button } from '@/components/ui/button';
import type { MovieData } from '@/types/tmdb-types';
import Autoplay from 'embla-carousel-autoplay';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import Link from 'next/link';

export const TrendingCarousel = ({ data }: { data?: MovieData }) => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [
        Autoplay(),
        WheelGesturesPlugin(),
    ]);

    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex-start flex flex-row gap-1">
                {data?.results?.map((trending) => (
                    <div
                        key={trending.id}
                        className="flex-0 min-width-0 relative shrink-0  grow-0"
                    >
                        <ImageComponent
                            width={1200}
                            height={1200}
                            src={`https://image.tmdb.org/t/p/original${trending.backdrop_path}`}
                            alt={
                                trending.title ??
                                trending.name ??
                                trending.original_title
                            }
                            className="h-[300px] w-screen overflow-auto object-cover lg:h-auto lg:w-full "
                        />
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-black" />

                        <div className="absolute bottom-[30px] left-0 right-0">
                            <div className="flex w-full flex-col gap-2 p-5">
                                <h1 className="font-secondary text-xl lg:text-4xl">
                                    {trending.title ??
                                        trending.name ??
                                        trending.original_title}
                                </h1>
                                <p className="mb-1 max-w-4xl truncate text-sm text-gray-300 lg:text-lg ">
                                    {trending.overview}...
                                </p>

                                <Button className="w-fit" asChild>
                                    <Link
                                        href={`/info/${trending.media_type}/${trending.id}`}
                                        prefetch={true}
                                    >
                                        Watch Trailer
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
