"use client";

import { useState, useRef } from "react";
import { Message } from "@/lib/types";

interface MessageInputProps {
    onSend: (message: Message) => void;
    onInputChange: (value: string) => void;
}

export default function MessageInput({ onSend, onInputChange }: MessageInputProps) {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() && !inputValue.startsWith("/gif")) {
            onSend({ type: "text", content: inputValue });
            setInputValue("");
            onInputChange("");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        onInputChange(value);
    };

    return (
        <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    className="w-full h-12 p-2 border rounded-lg"
                    placeholder="Напишите сообщение или /gif для поиска гифок..."
                />
                {inputValue.startsWith("/gif ") && (
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 gradient-text">
                        /gif
                    </span>
                )}
            </div>
        </form>
    );

    // return (
    //     <form onSubmit={handleSubmit} className="relative">
    //         <div className="relative">
    //             <input
    //                 ref={inputRef}
    //                 type="text"
    //                 value={inputValue}
    //                 onChange={handleChange}
    //                 className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    //                 placeholder="Напишите сообщение или /gif для поиска гифок..."
    //             />
    //             {inputValue.startsWith("/gif") && (
    //                 <span className="absolute left-2 top-1/2 transform -translate-y-1/2 gradient-text">
    //                     /gif
    //                 </span>
    //             )}
    //         </div>
    //     </form>
    // );
}