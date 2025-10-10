import { Eye, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

interface ChatHeaderProps {
  onNewChat?: () => void;
}

export function ChatHeader({ onNewChat }: ChatHeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-16 px-4 border-b bg-card">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
          <Eye className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-xl font-serif font-semibold" data-testid="text-title">
          Jordan Maxwell
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="default"
          onClick={onNewChat}
          data-testid="button-new-chat"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Chat
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
