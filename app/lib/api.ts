export async function fetchGifs(query: string, limit: number = 10) {
    const apiKey = process.env.NEXT_PUBLIC_GIPHY_API_KEY;
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=${limit}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch GIFs");
    }
    const data = await response.json();
    return data.data;
}