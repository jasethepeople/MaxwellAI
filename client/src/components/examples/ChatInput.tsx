import { ChatInput } from "../ChatInput";

export default function ChatInputExample() {
  return (
    <div className="w-full">
      <ChatInput onSend={(msg) => console.log("Message sent:", msg)} />
    </div>
  );
}
