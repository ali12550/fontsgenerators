import { FontCard } from "./FontCard";
import { FontStyle } from "@/lib/fontTransformers";

interface FontCategoryProps {
  title: string;
  fonts: FontStyle[];
  inputText: string;
  fontSize?: number;
}

export const FontCategory = ({ title, fonts, inputText, fontSize = 18 }: FontCategoryProps) => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
        {title}
      </h2>
      <div className="grid gap-3">
        {fonts.map((font) => (
          <FontCard
            key={font.id}
            name={font.name}
            transformedText={font.transform(inputText)}
            fontSize={fontSize}
          />
        ))}
      </div>
    </section>
  );
};
