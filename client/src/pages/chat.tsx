import { useState, useRef, useEffect } from "react";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { TypingIndicator } from "@/components/TypingIndicator";
import { WelcomeScreen } from "@/components/WelcomeScreen";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function Chat() {
  // TODO: remove mock functionality - replace with real API integration
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // TODO: remove mock functionality - simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getMockResponse(content),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  const handleQuestionClick = (question: string) => {
    handleSend(question);
  };

  // TODO: remove mock functionality
  const getMockResponse = (question: string): string => {
    const responses = [
      "This is a profound question that touches on the very foundation of hidden knowledge. When we examine the historical patterns and symbolic language used throughout the ages, we begin to see how information has been encoded and passed down through generations. The key is understanding that much of what we've been taught is actually a carefully constructed narrative.",
      "Looking at the etymology and root meanings of these words reveals something extraordinary. Ancient civilizations understood things on a level that modern society has largely forgotten. The symbols they used weren't arbitrary—they were a sophisticated language communicating universal truths that transcend time and culture.",
      "This connects directly to what I've studied extensively. The mystery schools of antiquity held knowledge that was deliberately concealed from the masses. They understood that certain information, when properly understood, reveals the true nature of power structures and control systems that persist to this day.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <ChatHeader onNewChat={handleNewChat} />
      
      <main className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <WelcomeScreen onQuestionClick={handleQuestionClick} />
        ) : (
          <div className="max-w-3xl mx-auto p-4 space-y-6">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
              />
            ))}
            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      <ChatInput onSend={handleSend} disabled={isLoading} />
    </div>
  );
}
