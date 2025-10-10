import { ChatMessage } from "../ChatMessage";

export default function ChatMessageExample() {
  return (
    <div className="p-4 space-y-4 max-w-3xl">
      <ChatMessage
        role="user"
        content="What is the true meaning of 'amen'?"
      />
      <ChatMessage
        role="assistant"
        content="The word 'amen' is fascinating when you trace its etymology. It comes from the ancient Egyptian 'Amen' or 'Amun,' who was the hidden god, the invisible one. When people say 'amen' at the end of prayers, they're actually invoking this ancient deity without even knowing it. This is a perfect example of how ancient symbols and words have been carried forward through time, hidden in plain sight within our modern religious practices."
      />
    </div>
  );
}
