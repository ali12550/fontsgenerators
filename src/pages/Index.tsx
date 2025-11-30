import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TextInput } from "@/components/TextInput";
import { FontCategory } from "@/components/FontCategory";
import { fontStyles, categories } from "@/lib/fontTransformers";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getFontsByCategory = (categoryId: string) => {
    return fontStyles.filter((font) => font.category === categoryId);
  };

  const filteredCategories = selectedCategory 
    ? categories.filter(c => c.id === selectedCategory)
    : categories;

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
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              All Fonts
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          {filteredCategories.map((category) => (
            <FontCategory
              key={category.id}
              title={category.name}
              fonts={getFontsByCategory(category.id)}
              inputText={inputText || "Preview"}
            />
          ))}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
