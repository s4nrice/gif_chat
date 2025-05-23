"use client";

import { Message } from "@/lib/types";

interface MessageItemProps {
    message: Message;
}

export default function MessageItem({ message }: MessageItemProps) {
    return (
        <div className="message">
            {message.type === "text" ? (
                <p className="message-bubble-text">{message.content}</p>
            ) : (
                <img src={message.content} alt="GIF" className="message-bubble-gif"/>
            )}
            <span className="message-time">{message.time}</span>
        </div>
    );
}