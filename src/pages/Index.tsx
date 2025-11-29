import { useState } from "react";
import { Header } from "@/components/Header";
import { TextInput } from "@/components/TextInput";
import { FontCategory } from "@/components/FontCategory";
import { fontStyles, categories } from "@/lib/fontTransformers";

const Index = () => {
  const [inputText, setInputText] = useState("");

  const getFontsByCategory = (categoryId: string) => {
    return fontStyles.filter((font) => font.category === categoryId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-6">
        <Header />
        
        <main>
          <TextInput value={inputText} onChange={setInputText} />
          
          {categories.map((category) => (
            <FontCategory
              key={category.id}
              title={category.name}
              fonts={getFontsByCategory(category.id)}
              inputText={inputText || "Preview"}
            />
          ))}
        </main>

        <footer className="text-center py-8 text-muted-foreground text-sm">
          <p>Type any text above to see it transformed into stylish fonts</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
