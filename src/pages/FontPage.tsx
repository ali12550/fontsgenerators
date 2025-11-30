import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TextInput } from "@/components/TextInput";
import { FontCard } from "@/components/FontCard";
import { SearchBar } from "@/components/SearchBar";
import { FontSizeSlider } from "@/components/FontSizeSlider";
import { CategoryDropdown } from "@/components/CategoryDropdown";
import { getFontsByIds, FontPageConfig } from "@/lib/fontPages";

interface FontPageProps {
  config: FontPageConfig;
}

const FontPage = ({ config }: FontPageProps) => {
  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [fontSize, setFontSize] = useState(18);

  const fonts = useMemo(() => getFontsByIds(config.fontIds), [config.fontIds]);

  const filteredFonts = useMemo(() => {
    if (!searchQuery.trim()) return fonts;
    return fonts.filter((font) =>
      font.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [fonts, searchQuery]);

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
          <TextInput 
            value={inputText} 
            onChange={setInputText} 
            placeholder={config.placeholder}
          />
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <CategoryDropdown />
            <div className="flex-1">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>
          
          <FontSizeSlider value={fontSize} onChange={setFontSize} />

          <section className="mb-10">
            <h1 className="text-2xl font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              {config.name}
            </h1>
            <p className="text-muted-foreground mb-6">{config.description}</p>
            
            <div className="grid gap-3">
              {filteredFonts.map((font) => (
                <FontCard
                  key={font.id}
                  name={font.name}
                  transformedText={font.transform(inputText || "Preview")}
                  fontSize={fontSize}
                />
              ))}
            </div>
            
            {filteredFonts.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No fonts found matching "{searchQuery}"
              </p>
            )}
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default FontPage;
