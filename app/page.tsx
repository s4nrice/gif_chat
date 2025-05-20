"use client";

import ChatContainer from "./components/ChatContainer";

export default function Home() {
  return (
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <ChatContainer />
      </div>
  );
}