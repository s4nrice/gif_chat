"use client";

import { useState, useEffect } from "react";
import { fetchGifs } from "@/lib/api";
import { Gif } from "@/lib/types";

export function useGifSearch(query: string, limit: number = 20) {
    const [gifs, setGifs] = useState<Gif[]>([]);

    useEffect(() => {
        if (!query) {
            setGifs([]);
            return;
        }

        fetchGifs(query, limit)
            .then((data) => {
                setGifs(data.map((item: any) => ({
                    id: item.id,
                    url: item.images.original.url,
                    url_preview: item.images.fixed_width_small.url,
                    title: item.title,
                })));
            })
    }, [query]);

    return gifs;
}