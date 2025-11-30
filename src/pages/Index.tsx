import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TextInput } from "@/components/TextInput";
import { FontCategory } from "@/components/FontCategory";
import { SearchBar } from "@/components/SearchBar";
import { FontSizeSlider } from "@/components/FontSizeSlider";
import { CategoryDropdown } from "@/components/CategoryDropdown";
import { fontStyles, categories } from "@/lib/fontTransformers";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [fontSize, setFontSize] = useState(18);

  const getFontsByCategory = (categoryId: string) => {
    return fontStyles.filter((font) => font.category === categoryId);
  };

  const filteredCategories = selectedCategory 
    ? categories.filter(c => c.id === selectedCategory)
    : categories;

  const filteredFontStyles = useMemo(() => {
    if (!searchQuery.trim()) return fontStyles;
    return fontStyles.filter((font) =>
      font.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const getFilteredFontsByCategory = (categoryId: string) => {
    return filteredFontStyles.filter((font) => font.category === categoryId);
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
          
          {/* Category Dropdown and Search */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <CategoryDropdown />
            <div className="flex-1">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>
          
          {/* Font Size Slider */}
          <FontSizeSlider value={fontSize} onChange={setFontSize} />
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              All Fonts
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
          
          {/* Font Categories */}
          {filteredCategories.map((category) => {
            const categoryFonts = getFilteredFontsByCategory(category.id);
            if (categoryFonts.length === 0) return null;
            
            return (
              <FontCategory
                key={category.id}
                title={category.name}
                fonts={categoryFonts}
                inputText={inputText || "Preview"}
                fontSize={fontSize}
              />
            );
          })}
          
          {searchQuery && filteredFontStyles.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No fonts found matching "{searchQuery}"
            </p>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
