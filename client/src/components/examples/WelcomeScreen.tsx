import { WelcomeScreen } from "../WelcomeScreen";

export default function WelcomeScreenExample() {
  return (
    <div className="h-screen bg-background">
      <WelcomeScreen onQuestionClick={(q) => console.log("Question clicked:", q)} />
    </div>
  );
}
