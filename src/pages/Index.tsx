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


          {/* custom ali start  */}

         <style>
    body {
        font-family: "Inter", Arial, sans-serif;
        line-height: 1.7;
        color: #222;
        margin: 0;
        padding: 0;
        background: #fafafa;
    }

    .section {
        width: 100%;
        max-width: 900px;
        margin: 40px auto;
        padding: 30px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }

    .section-title {
        font-size: 28px;
        margin-bottom: 16px;
        font-weight: 700;
        color: #111;
        position: relative;
    }

    .section-title::after {
        content: "";
        width: 50px;
        height: 3px;
        background: #4A7BFF;
        position: absolute;
        left: 0;
        bottom: -8px;
        border-radius: 3px;
    }

    .para {
        margin-bottom: 16px;
        font-size: 17px;
        color: #333;
    }

    .steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }

    .step-box {
        padding: 20px;
        background: #f7f9ff;
        border-radius: 10px;
        border: 1px solid #e4e8ff;
    }

    .step-box h3 {
        font-size: 20px;
        margin-bottom: 10px;
        color: #3458d1;
    }

    .feature-box {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin: 20px 0;
        padding: 20px;
        background: #f6f6f6;
        border-radius: 10px;
        border-left: 4px solid #4A7BFF;
    }

    .feature-box p {
        display: inline-block;
        background: #fff;
        padding: 8px 15px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        font-size: 20px;
    }

    .use-case {
        margin-bottom: 25px;
        padding: 20px;
        background: #fefefe;
        border-radius: 10px;
        border-left: 4px solid #4A7BFF;
        box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    }

    .use-case h3 {
        margin-bottom: 10px;
        font-size: 20px;
        color: #333;
    }

    .faq-item {
        padding: 20px;
        background: #f8f8f8;
        margin-bottom: 15px;
        border-radius: 10px;
        border: 1px solid #e5e5e5;
    }

    .faq-item h3 {
        font-size: 20px;
        margin-bottom: 8px;
        color: #111;
    }

    @media (max-width: 600px) {
        .section {
            padding: 20px;
        }
        .section-title {
            font-size: 24px;
        }
        .para {
            font-size: 16px;
        }
    }
</style>

<!-- Your Content Sections Below -->

<section class="section intro">
    <h2 class="section-title">About Cool Font Generator</h2>
    <p class="para">
        Cool Font Generator is an online tool that converts your normal text into 
        <strong>180+ fancy, stylish, and aesthetic Unicode fonts</strong>. From cursive to bold, bubble to gothic, 
        it provides unique styles that you can copy and paste anywhere.
    </p>
    <p class="para">
        These fancy fonts work everywhere—Instagram, WhatsApp, TikTok, Facebook, YouTube, Discord, or your notes 
        and documents—because they use Unicode characters instead of images.
    </p>
</section>

<section class="section how-to-use">
    <h2 class="section-title">How to Use the Fancy Text Generator</h2>

    <div class="steps">
        <div class="step-box">
            <h3>1. Enter Text</h3>
            <p>Type or paste your normal text into the input box to see instant previews.</p>
        </div>
        <div class="step-box">
            <h3>2. Choose a Style</h3>
            <p>Scroll through hundreds of unique fonts and pick your favorite one.</p>
        </div>
        <div class="step-box">
            <h3>3. Copy & Paste</h3>
            <p>Tap the font style to copy it, then paste it anywhere you want.</p>
        </div>
    </div>
</section>

<section class="section popular-fonts">
    <h2 class="section-title">Popular Fancy Text Styles</h2>
    <p class="para">Some of the most loved Unicode font styles include:</p>

    <div class="feature-box">
        <p>𝒮𝒸𝓇𝒾𝓅𝓉</p>
        <p>𝔊𝔬𝔱𝔥𝔦𝔠</p>
        <p>𝐁𝐨𝐥𝐝</p>
        <p>𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎</p>
        <p>🅑🅤🅑🅑🅛🅔</p>
        <p>🆂🆀🆄🅰🆁🅴</p>
    </div>

    <p class="para">
        Enhance your messages with elegant styles like “𝒯𝒽𝒶𝓃𝓀 𝓎ℴ𝓊”, or make your chats lively with 
        “𝓖𝓸𝓸𝓭 𝓜𝓸𝓻𝓷𝓲𝓷𝓰 😊”.
    </p>
</section>

<section class="section uses">
    <h2 class="section-title">Where Can You Use Fancy Fonts?</h2>

    <div class="use-case">
        <h3>📱 Social Media</h3>
        <p>Make your captions, bios, and posts stand out on Instagram, Facebook, and X (Twitter).</p>
    </div>

    <div class="use-case">
        <h3>✨ Instagram Fonts</h3>
        <p>Use aesthetic bubble, cursive, bold, or monospace styles for bios, comments, and captions.</p>
    </div>

    <div class="use-case">
        <h3>👍 Facebook Fonts</h3>
        <p>Highlight posts and comments using stylish Unicode text and cool numbers like ❶❷❸.</p>
    </div>

    <div class="use-case">
        <h3>🐦 Twitter (X) Fonts</h3>
        <p>Since Twitter doesn’t offer formatting, this tool helps you bold, italicize, or stylize text easily.</p>
    </div>

    <div class="use-case">
        <h3>💬 Messaging</h3>
        <p>Make WhatsApp and Messenger chats fun and expressive with unique fancy text.</p>
    </div>

    <div class="use-case">
        <h3>🔢 Fancy Number Symbols</h3>
        <p>Use circled numbers (❶❷❸), bold digits, and more for creative lists and posts.</p>
    </div>

    <div class="use-case">
        <h3>💼 Business Promotions</h3>
        <p>Create eye-catching headlines like “𝐅𝐥𝐚𝐭 𝟓𝟎% 𝐎𝐟𝐟” or stylish product announcements.</p>
    </div>

    <div class="use-case">
        <h3>📚 Education</h3>
        <p>Add stylish headings, highlighted text, or aesthetic titles to your notes.</p>
    </div>

    <div class="use-case">
        <h3>🎨 Fancy Name</h3>
        <p>Generate stylish versions of your name using cursive, bold, gothic, or cute fonts.</p>
    </div>
</section>

<section class="section faq">
    <h2 class="section-title">Font Generator FAQs</h2>

    <div class="faq-item">
        <h3>What is a Font Generator?</h3>
        <p>A tool that transforms plain text into fancy Unicode fonts you can copy and paste anywhere.</p>
    </div>

    <div class="faq-item">
        <h3>What are copy & paste fonts?</h3>
        <p>These are Unicode characters designed to look like stylish fonts across all devices.</p>
    </div>

    <div class="faq-item">
        <h3>Can screen readers read fancy text?</h3>
        <p>Screen readers may pronounce Unicode differently depending on accessibility settings.</p>
    </div>

    <div class="faq-item">
        <h3>How to change fonts on Instagram?</h3>
        <p>Simply copy the text from this generator and paste it into your Instagram bio or caption.</p>
    </div>

    <div class="faq-item">
        <h3>Where can I use stylish fonts?</h3>
        <p>On Instagram, Facebook, Twitter, WhatsApp, TikTok, YouTube, Discord, and more.</p>
    </div>
</section>


          {/* custom ali end */}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
