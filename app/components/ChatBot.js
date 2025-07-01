'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function ChatBot() {
  const [showMessage, setShowMessage] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: '👋 Hi there! How can I assist you?' },
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setOpenChat((prev) => !prev);
    setShowMessage(false);
  };

  const handleSend = async () => {
  if (!input.trim()) return;

  const userMsg = { from: 'user', text: input.trim() };
  const userInput = input;
  setInput('');

  setMessages((prev) => [...prev, userMsg]);

  // Show typing message with a special ID
  const typingMsg = { from: 'bot', text: '🤖 Typing...', typing: true };
  setMessages((prev) => [...prev, typingMsg]);

  try {
    const res = await fetch('/api/groq-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userInput }),
    });

    const data = await res.json();

    const reply = { from: 'bot', text: data.reply };
    setMessages((prev) => [
      ...prev.slice(0, -1), // Remove the "Typing..." message
      reply
    ]);
  } catch (err) {
    setMessages((prev) => [
      ...prev.slice(0, -1),
      { from: 'bot', text: '❌ Failed to fetch response.' },
    ]);
  }
};
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {openChat && (
        <div className="w-80 h-[400px] bg-white shadow-xl border border-gray-300 rounded-xl overflow-hidden flex flex-col animate-fade-in-up">
          {/* Header */}
          <div className="bg-green-600 text-white px-4 py-2 text-sm font-semibold flex justify-between items-center">
            Tripo AI
            <button
              onClick={toggleChat}
              className="text-white text-xs hover:opacity-80"
            >
              ✕
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] px-3 py-2 rounded-xl ${msg.from === 'user' ? 'bg-green-100 text-right' : 'bg-gray-100 text-left'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
           <button
  onClick={handleSend}
  className="bg-green-100 p-2 rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
>
  <Image
    src="/send-icon.png"
    alt="Send"
    width={24}
    height={24}
    className="transform transition-transform duration-300 hover:scale-110 hover:rotate-6 active:scale-95"
  />
</button>


          </div>
        </div>
      )}

      {!openChat && showMessage && (
        <div className="animate-fade-in-up bg-white text-sm px-4 py-2 rounded-2xl shadow-md border border-gray-200">
          Hi! How can I assist you?
        </div>
      )}

      {/* Chat Icon */}
      <div
        className="rounded-full border-2 border-white shadow-xl overflow-hidden w-14 h-14 cursor-pointer hover:scale-110 transition-transform duration-300"
        title="Chat with us"
        onClick={toggleChat}
      >
        <Image src="/chatbot.jpg" alt="Chat Bot Avatar" width={56} height={56} />
      </div>
    </div>
  );
}
