"use client";

import { useState, useEffect } from "react";
import { fetchGifs } from "@/lib/api";
import { Gif } from "@/lib/types";

export function useGifSearch(query: string) {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!query) {
            setGifs([]);
            return;
        }

        setError(null);

        fetchGifs(query, 5)
            .then((data) => {
                setGifs(data.map((item: any) => ({
                    id: item.id,
                    url: item.images.fixed_height.url,
                    title: item.title,
                })));
            })
            .catch(() => {
                setError("Ошибка при загрузке гифок");
            })
    }, [query]);

    return { gifs, error };
}