"use client";

import { useState } from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import { useMessages } from "./useMessages";
import GifGrid from "./GifGrid";

export default function ChatContainer() {
    const { messages, addMessage } = useMessages();
    const [showGifContainer, setShowGifContainer] = useState(false);
    const [gifQuery, setGifQuery] = useState("");

    const handleInputChange = (value: string) => {
        if (value.startsWith("/gif ")) {
            setShowGifContainer(true);
            setGifQuery(value.slice(5).trim());
        } else {
            setShowGifContainer(false);
            setGifQuery("");
        }
    };

    return (
        <div className="chat-container shadow-xl">
            <MessageList messages={messages} />
            <div className="relative p-2 message-input-block">
                <MessageInput onSend={addMessage} onInputChange={handleInputChange} />
                {showGifContainer &&
                    <div className="gif_container -translate-x-1/2 border">
                        <GifGrid query={gifQuery}
                                      onSelect={(gifUrl) =>
                                          addMessage({ type: "gif", content: gifUrl })}
                        />
                    </div>
                }
            </div>
        </div>
    );
}