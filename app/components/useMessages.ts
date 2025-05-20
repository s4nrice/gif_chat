"use client";

import { useState } from "react";
import { Message } from "@/lib/types";

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  return { messages, addMessage };
}