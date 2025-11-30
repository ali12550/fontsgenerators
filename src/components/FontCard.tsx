import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FontCardProps {
  name: string;
  transformedText: string;
  fontSize?: number;
}

export const FontCard = ({ name, transformedText, fontSize = 18 }: FontCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(transformedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="group relative bg-card rounded-xl border border-border/50 p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-card">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0 pr-4">
          <p className="text-xs font-medium text-primary/70 mb-1.5">{name}</p>
          <p 
            className="text-foreground truncate font-medium"
            style={{ fontSize: `${fontSize}px` }}
          >
            {transformedText || "Type something..."}
          </p>
        </div>
        <button
          onClick={handleCopy}
          disabled={!transformedText}
          className={cn(
            "flex-shrink-0 p-2.5 rounded-lg transition-all duration-200",
            "text-muted-foreground hover:text-primary hover:bg-primary/10",
            "disabled:opacity-30 disabled:cursor-not-allowed",
            copied && "text-green-500 bg-green-500/10"
          )}
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <Check className="w-5 h-5" />
          ) : (
            <Copy className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};
