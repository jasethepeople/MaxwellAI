import { Eye } from "lucide-react";

const sampleQuestions = [
  "What is the true meaning of 'amen'?",
  "Explain the symbolism in religious architecture",
  "What are the origins of ancient mystery schools?",
  "How does etymology reveal hidden truths?",
];

interface WelcomeScreenProps {
  onQuestionClick: (question: string) => void;
}

export function WelcomeScreen({ onQuestionClick }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 py-12">
      <div className="w-full max-w-3xl space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
              <Eye className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-serif font-semibold" data-testid="text-welcome-title">
            Welcome to Jordan Maxwell AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the patterns of symbolism, etymology, and hidden history through 
            conversations that connect ancient wisdom with modern understanding.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground text-center">
            Try asking:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {sampleQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => onQuestionClick(question)}
                className="p-4 text-left rounded-xl border bg-card hover-elevate active-elevate-2 transition-colors"
                data-testid={`button-sample-question-${index}`}
              >
                <p className="text-sm">{question}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="pt-6 text-center">
          <p className="text-xs text-muted-foreground italic">
            "The more you know, the less you understand." — Jordan Maxwell
          </p>
        </div>
      </div>
    </div>
  );
}
