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

          <section class="fg-hero">
    <h1 class="title">Fancy Font Generator for Instagram, TikTok & Social Media</h1>
    <p class="subtitle">
        Transform your normal text into stylish, aesthetic, and cool fonts instantly. 
        Copy & paste anywhere — Instagram bio, captions, Facebook comments, TikTok, Discord, YouTube, or gaming profiles.
    </p>
</section>

<section class="fg-section">
    <h2>What is a Fancy Font Generator?</h2>
    <p>
        A fancy font generator converts normal text into Unicode-based stylish characters. 
        It doesn’t change the real <strong>font file</strong>; instead, it uses special Unicode symbols that 
        look like fonts. Because Unicode works everywhere — social media, browsers, mobile apps — 
        your generated text remains readable and copy-paste friendly across all platforms.
    </p>
</section>

<section class="fg-section">
    <h2>How to Use This Font Generator</h2>
    <ol>
        <li>Type your text in the input box.</li>
        <li>Our tool instantly converts it into dozens of aesthetic styles.</li>
        <li>Scroll through the generated fonts.</li>
        <li>Click **Copy** to copy any style.</li>
        <li>Paste it anywhere—Instagram bio, TikTok, Twitter, Discord, WhatsApp.</li>
    </ol>
</section>

<section class="fg-section">
    <h2>Most Popular Fancy Font Styles</h2>
    <div class="style-list">
        <p><strong>➤ Cursive Fonts:</strong> Elegant handwriting-style text</p>
        <p><strong>➤ Bold Fonts:</strong> Strong, attention-grabbing styles</p>
        <p><strong>➤ Italic Fonts:</strong> Slanted stylish characters</p>
        <p><strong>➤ Bubble Fonts:</strong> Cute rounded bubble-text look</p>
        <p><strong>➤ Gothic / Old English:</strong> Dramatic medieval-style fonts</p>
        <p><strong>➤ Glitch Fonts:</strong> Broken, distorted cyber look</p>
        <p><strong>➤ Small Caps:</strong> Elegant minimal uppercase text</p>
        <p><strong>➤ Aesthetic Fonts:</strong> Clean, soft, aesthetic layouts</p>
        <p><strong>➤ Zalgo Text:</strong> Creepy glitched horror fonts</p>
        <p><strong>➤ Vaporwave Fonts:</strong> 90s Japanese aesthetic styles</p>
    </div>
</section>

<section class="fg-section examples">
    <h2>Font Generator Examples</h2>
    <div class="examples-grid">
        <div class="example-item">𝓕𝓪𝓷𝓬𝔂 𝓣𝓮𝔁𝓽</div>
        <div class="example-item">𝐂𝐨𝐨𝐥 𝐅𝐨𝐧𝐭𝐬</div>
        <div class="example-item">𝘈𝘦𝘴𝘵𝘩𝘦𝘵𝘪𝘤</div>
        <div class="example-item">𝒮𝓉𝓎𝓁𝒾𝓈𝒽</div>
        <div class="example-item">🅑🅤🅑🅑🅛🅔</div>
        <div class="example-item">𝖌𝖔𝖙𝖍𝖎𝖈 𝖋𝖔𝖓𝖙</div>
    </div>
</section>

<section class="fg-section">
    <h2>Where Can You Use These Fonts?</h2>
    <p>You can use these fancy fonts on almost every platform:</p>
    <ul>
        <li>Instagram bio, name & captions</li>
        <li>TikTok username & comments</li>
        <li>Facebook posts & profile names</li>
        <li>Twitter tweets & bios</li>
        <li>Discord usernames & channel names</li>
        <li>YouTube titles & descriptions</li>
        <li>Roblox, Fortnite, PUBG, Free Fire names</li>
        <li>WhatsApp messages & status</li>
        <li>Snapchat text</li>
    </ul>
</section>

<section class="fg-section">
    <h2>Is This Font Generator Safe?</h2>
    <p>
        Yes, it's 100% safe. We don’t store your text or collect any personal information. 
        The tool works on your browser using Unicode transformation.
    </p>
</section>

<section class="fg-section long-content">
    <h2>Why Fancy Fonts Work Everywhere</h2>
    <p>
        Many new users think these tools “install fonts,” but that’s not true. 
        They work using **Unicode**, a universal character system that contains thousands of 
        decorative characters. Because Unicode works across:
    </p>
    <ul>
        <li>iOS</li>
        <li>Android</li>
        <li>Windows</li>
        <li>macOS</li>
        <li>Web browsers</li>
    </ul>
    <p>…the text remains compatible everywhere.</p>
</section>

<section class="fg-section faq">
    <h2>Frequently Asked Questions</h2>
    <h3>1. Can I use these fonts on Instagram?</h3>
    <p>Yes! All fonts work perfectly on Instagram bio, captions, reels, and name fields.</p>

    <h3>2. Do these fonts work on TikTok?</h3>
    <p>Yes. Almost all Unicode fonts work on TikTok usernames and captions.</p>

    <h3>3. Why do some fonts not show on older devices?</h3>
    <p>Some phones (especially old Androids) don’t support certain Unicode characters.</p>

    <h3>4. Will these fonts help me get more engagement?</h3>
    <p>
        Stylish text creates a visual hook and helps your profile stand out, 
        increasing engagement on bios and captions.
    </p>

    <h3>5. Is this tool free?</h3>
    <p>Yes, totally free and unlimited usage.</p>
</section>

<section class="fg-section">
    <h2>Conclusion</h2>
    <p>
        This Fancy Font Generator helps you create aesthetic, stylish, cool, bold, cute, 
        and unique fonts in just one click. Use them anywhere to make your profile stand out.
    </p>
</section>

          {/* custom ali end */}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
