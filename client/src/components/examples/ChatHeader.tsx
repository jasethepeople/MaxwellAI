import { ThemeProvider } from "../ThemeProvider";
import { ChatHeader } from "../ChatHeader";

export default function ChatHeaderExample() {
  return (
    <ThemeProvider>
      <ChatHeader onNewChat={() => console.log("New chat clicked")} />
    </ThemeProvider>
  );
}
