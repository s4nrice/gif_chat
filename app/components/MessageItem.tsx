"use client";

import { Message } from "@/lib/types";

interface MessageItemProps {
    message: Message;
}

export default function MessageItem({ message }: MessageItemProps) {
    return (
        <div className="mb-4 flex items-end gap-x-2">
            <div className="bg-emerald-400 rounded-md">
                {message.type === "text" ? (
                    <p className="p-2 break-all max-w-xs">{message.content}</p>
                ) : (
                    <img src={message.content} alt="GIF" className="max-w-xs rounded" />
                )}
            </div>
            <span className="text-xs mr-2 font-">{new Date().toLocaleTimeString([],
                { hour: "2-digit", minute: "2-digit" })}</span>
        </div>
    );
}