"use client";

import { useState } from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import GifPicker from "./GifPicker";
import { useMessages } from "./useMessages";

export default function ChatContainer() {
    const { messages, addMessage } = useMessages();
    const [showGifPicker, setShowGifPicker] = useState(false);
    const [gifQuery, setGifQuery] = useState("");

    const handleInputChange = (value: string) => {
        if (value.startsWith("/gif ")) {
            setShowGifPicker(true);
            setGifQuery(value.slice(5).trim());
        } else {
            setShowGifPicker(false);
            setGifQuery("");
        }
    };

    return (
        <div className="h-[80%] w-[30%] flex flex-col rounded-2xl shadow-lg p-6 gap-6 bg-white">
            <div className="h-full w-full overflow-y-auto">
            {/*<div className="relative flex-1 overflow-auto">*/}
                <MessageList messages={messages} />
                {showGifPicker && <GifPicker query={gifQuery} onSelect={(gifUrl) => addMessage({ type: "gif", content: gifUrl })} />}
            </div>
            <div className="shrink-0">
                <MessageInput onSend={addMessage} onInputChange={handleInputChange} />
            </div>
        </div>
    );
}