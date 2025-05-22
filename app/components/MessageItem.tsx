"use client";

import { Message } from "@/lib/types";

interface MessageItemProps {
    message: Message;
}

export default function MessageItem({ message }: MessageItemProps) {
    return (
        <div className="flex items-end p-2 gap-2 text-gray-700 rounded-lg">
            <div className="rounded-md">
                {message.type === "text" ? (
                    <p className="p-2 break-all">{message.content}</p>
                ) : (
                    <img src={message.content} alt="GIF" className="gif-chat" />
                )}
            </div>
            <span className="date-text">{new Date().toLocaleTimeString([],
                { hour: "2-digit", minute: "2-digit" })}</span>
        </div>
    );
}