"use client";

import { useState } from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import { useMessages } from "./useMessages";
import GifGrid from "./GifGrid";
import {useGifSearch} from "@/components/useGifSearch";

export default function ChatContainer() {
    const [ inputValue, setInputValue ] = useState("");
    const { messages, addMessage } = useMessages();
    const [ showGifContainer, setShowGifContainer ] = useState<boolean>(false);
    const [ gifQuery, setGifQuery ] = useState<string>("");
    const gifs = useGifSearch(gifQuery, 30);

    const handleInputChange = (value: string) => {
        if (value.startsWith("/gif ")) {
            setShowGifContainer(true);
            setGifQuery(value.slice(5).trim());
        } else {
            setShowGifContainer(false);
            setGifQuery("");
        }
    };

    const sendGif = (gifUrl: string) => {
        addMessage({
            type: "gif",
            content: gifUrl,
            time: new Date().toLocaleString([], { hour: "2-digit", minute: "2-digit" })
        })
        setShowGifContainer(false)
        setInputValue("");
    }

    return (
        <div className="chat-container shadow-xl">
            <MessageList messages={messages} />
            <div className="input-block">
                <MessageInput
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    onSend={addMessage}
                    onInputChange={handleInputChange}
                />
                {showGifContainer &&
                    <div className="gif-container -translate-x-1/2">
                        <GifGrid
                            gifs={gifs}
                            onSelect={sendGif}/>
                    </div>
                }
            </div>
        </div>
    );
}