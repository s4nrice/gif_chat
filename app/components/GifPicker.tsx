"use client";

import { useGifSearch } from "./useGifSearch";

interface GifPickerProps {
    query: string;
    onSelect: (gifUrl: string) => void;
}

export default function GifPicker({ query, onSelect }: GifPickerProps) {
    const { gifs, error } = useGifSearch(query);

    return (
        // absolute bottom-0
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-11/12 border rounded-md p-4 bg-gray-100 gif-picker">
            {/*<div className="flex justify-end bg-gray-100 h-2/5 w-full z-20 border rounded-lg shadow-lg overflow-y-auto gif-picker">*/}
            {error &&
                <p className="text-gray-500 text-center">Ошибка</p>}
            {!error && gifs.length === 0 && (
                <p className="text-gray-500 text-center">Гифки не найдены</p>
            )}
            <div className="grid grid-cols-3 gap-4 overflow-y-auto">
                {gifs.map((gif) => (
                    <img
                        key={gif.id}
                        src={gif.url}
                        alt={gif.title}
                        className="w-full object-cover rounded"
                        onClick={() => onSelect(gif.url)}
                    />
                ))}
            </div>
        </div>
    );

    // return (
    //     // absolute bottom-0
    //     <div className="bg-gray-100 h-2/5 w-full z-20 border rounded-lg shadow-lg overflow-y-auto gif-picker">
    //     {/*<div className="flex justify-end bg-gray-100 h-2/5 w-full z-20 border rounded-lg shadow-lg overflow-y-auto gif-picker">*/}
    //         {error &&
    //             <p className="p-2 text-gray-500 text-center">Ошибка</p>}
    //         {!error && gifs.length === 0 && (
    //             <p className="p-2 text-gray-500 text-center">Гифки не найдены</p>
    //         )}
    //         <div className="grid grid-cols-3 gap-2 p-2">
    //             {gifs.map((gif) => (
    //                 <img
    //                     key={gif.id}
    //                     src={gif.url}
    //                     alt={gif.title}
    //                     className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80"
    //                     onClick={() => onSelect(gif.url)}
    //                 />
    //             ))}
    //         </div>
    //     </div>
    // );
    //
}