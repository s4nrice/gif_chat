"use client";

import { Message } from "@/lib/types";
import MessageItem from "./MessageItem";
import {useEffect, useRef} from "react";

interface MessageListProps {
    messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Прокрутка к последнему сообщению при добавлении нового
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-end">
            {messages.map((message, index) => (
                <MessageItem key={index} message={message} />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );

    // return (
    //     <div className="min-h-full flex flex-col justify-end overflow-y-auto z-10">
    //         {messages.map((message, index) => (
    //             <MessageItem key={index} message={message} />
    //         ))}
    //         <div ref={messagesEndRef} />
    //     </div>
    // );
}