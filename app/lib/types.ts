export type Message = {
    type: "text" | "gif";
    content: string;
    time: string;
};

export type Gif = {
    id: string;
    url: string;
    title: string;
};