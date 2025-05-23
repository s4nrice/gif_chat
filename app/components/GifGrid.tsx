import { Gif } from "@/lib/types"


interface GifGridProps {
    gifs: Gif[];
    onSelect: (gifUrl: string) => void;
}

function GifGrid({ gifs, onSelect }: GifGridProps) {
    const columns = [[], [], []] as Gif[][];
    gifs.forEach((gif, index) => {
        columns[index % 3].push(gif);
    });

    return (
        <div className="gif-grid">
            {columns.map((gif_elements, colIndex) => (
                <div className="gif-column" key={colIndex}>
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

    );
}

export default GifGrid;
