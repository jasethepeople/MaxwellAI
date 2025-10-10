import { Eye } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="flex gap-4 p-6 rounded-2xl bg-card" data-testid="typing-indicator">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
          <Eye className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="mb-2 text-sm font-serif font-medium text-foreground">
          Jordan Maxwell
        </p>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
