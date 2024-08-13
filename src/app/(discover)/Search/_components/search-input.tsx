'use client';
import ImageComponent from '@/components/image-component';
import { Icons } from '@/components/ui/icons';
import Loading from '@/components/ui/loading';
import { fetchSearchResults } from '@/server/tmdb';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useState } from 'react';

export function Searchinput() {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const { data, isLoading } = useQuery({
        queryKey: ['search', searchQuery],
        queryFn: async () => await fetchSearchResults(searchQuery),
        enabled: searchQuery !== '', // Only fetch data when searchQuery is not empty
    });

    const handleSearchInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="flex flex-col gap-6">
            <div className=" mb-6 w-full">
                <input
                    type="text"
                    placeholder="What movie/tv trailer do you want to watch?"
                    className="block h-[50px] w-full rounded-full border border-gray-300 bg-[#0A0B0B] p-2.5 pl-5 text-sm font-medium text-white placeholder-gray-100 focus:ring-2 focus:ring-white lg:h-[70px] lg:text-xl  "
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
            </div>
            {isLoading && <Loading />}
            <div className="grid grid-cols-2 justify-center gap-x-5 gap-y-6 lg:grid-cols-5 lg:gap-x-3">
                {data?.results?.map((search) => (
                    <Link
                        href={`/info/${search.media_type}/${search.id}`}
                        key={search.id}
                        className="flex w-[180px] flex-col gap-5 lg:w-[200px]"
                    >
                        <ImageComponent
                            src={`https://image.tmdb.org/t/p/w500${search.poster_path}`}
                            alt={
                                search.title ??
                                search.original_title ??
                                search.name ??
                                ''
                            }
                            width={150}
                            height={150}
                            className="w h-auto rounded-xl border border-gray-500 transition-all hover:shadow-sm hover:shadow-white/30 hover:outline hover:outline-2 hover:outline-stone-400 lg:h-full lg:w-full"
                        />
                        <div>
                            <p className="font-secondary  text-sm text-white  lg:text-lg">
                                {search.title ??
                                    search.original_title ??
                                    search.name}
                            </p>
                            <div className="flex flex-row items-center gap-3">
                                <h1 className="flex flex-row items-center gap-1 text-sm">
                                    <Icons.star />
                                    {search.vote_average}
                                </h1>
                                <div className="h-fit w-fit  text-sm  text-gray-500">
                                    {search.media_type}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
