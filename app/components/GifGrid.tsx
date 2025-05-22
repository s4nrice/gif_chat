'use client';

import React, { useRef, useState, useEffect } from 'react';
import {useGifSearch} from "@/components/useGifSearch";
import { Gif } from "@/lib/types"


interface GifGridProps {
    query: string;
    onSelect: (gifUrl: string) => void;
}

function GifGrid({ query, onSelect }: GifGridProps) {
    const columns = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];
    const [columnGifs, setColumnGifs] = useState<Gif[][]>([[], [], []]);
    const { gifs, error } = useGifSearch(query);

    useEffect(() => {
        let i = 0;
        setColumnGifs([[], [], []]);

        const addNextGif = () => {
            if (i >= gifs.length) return;
            const gif = gifs[i];

            requestAnimationFrame(() => {
                const heights = columns.map((ref) => ref.current?.offsetHeight || 0);
                const minHeightIndex = heights.indexOf(Math.min(...heights));

                setColumnGifs((prev) => {
                    const newState = [...prev];
                    newState[minHeightIndex] = [...newState[minHeightIndex], gif];
                    return newState;
                });

                i++;
                setTimeout(addNextGif, 50);
            });
        };

        addNextGif();
    }, [gifs]);

    return (
        <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-200">
            {error && <p>Ошибка</p>}
            {!error && gifs.length === 0 && (<p>Гифки не найдены</p>)}
            {columnGifs[0][0] &&
                <div className="gif-grid">
                    {columnGifs.map((gif_elements, colIndex) => (
                        <div className="gif-column" key={colIndex} ref={columns[colIndex]}>
                            {gif_elements.map((gif) => (
                                <img
                                    key={gif.id}
                                    src={gif.url}
                                    alt={gif.title}
                                    onClick={() => onSelect(gif.url)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            }
        </div>

    );
}

export default GifGrid;
