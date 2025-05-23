import { Message } from "@/lib/types";

interface MessageInputProps {
    inputValue: string;
    setInputValue: (inputValue: string) => void;
    onSend: (message: Message) => void;
    onInputChange: (value: string) => void;
}

export default function MessageInput({ inputValue, setInputValue, onSend, onInputChange }: MessageInputProps) {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() && !inputValue.startsWith("/gif")) {
            onSend({
                type: "text",
                content: inputValue,
                time: new Date().toLocaleString([], { hour: "2-digit", minute: "2-digit" })});
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
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    className="input"
                    placeholder="Напишите сообщение..."
                />
                {inputValue.startsWith("/gif ") && (
                    <span className="absolute top-1/2 transform -translate-y-1/2 gradient-text">
                        /gif
                    </span>
                )}
            </div>
        </form>
    );
}