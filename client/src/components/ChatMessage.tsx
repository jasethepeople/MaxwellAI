import { Eye, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isAssistant = role === "assistant";

  return (
    <div
      className={cn(
        "flex gap-4 p-6 rounded-2xl",
        isAssistant ? "bg-card" : "bg-accent"
      )}
      data-testid={`message-${role}`}
    >
      <div className="flex-shrink-0">
        <div
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full",
            isAssistant ? "bg-primary/10" : "bg-primary/20"
          )}
        >
          {isAssistant ? (
            <Eye className="w-5 h-5 text-primary" />
          ) : (
            <User className="w-5 h-5 text-primary" />
          )}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        {isAssistant && (
          <p className="mb-2 text-sm font-serif font-medium text-foreground">
            Jordan Maxwell
          </p>
        )}
        <div className="text-base leading-relaxed whitespace-pre-wrap text-foreground">
          {content}
        </div>
      </div>
    </div>
  );
}
