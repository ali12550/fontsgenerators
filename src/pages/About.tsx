import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Type, Sparkles, Copy, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-6">
        <Header />

        <main className="py-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">About Font Generator</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Font Generator is a free online tool that transforms your ordinary text into beautiful, stylish fonts using Unicode characters. Whether you're looking to spice up your social media profiles, create eye-catching usernames, or add flair to your messages, our generator has you covered.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                  <Type className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">70+ Font Styles</h3>
                <p className="text-muted-foreground text-sm">
                  Choose from a vast collection of fancy, elegant, cool, and unique font styles for any occasion.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                  <Copy className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Easy Copy & Paste</h3>
                <p className="text-muted-foreground text-sm">
                  Simply click on any font style to copy it instantly. No downloads or installations required.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Universal Compatibility</h3>
                <p className="text-muted-foreground text-sm">
                  Our fonts work everywhere Unicode is supported - social media, games, apps, and more.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                <div className="p-2 bg-accent/10 rounded-lg w-fit mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">100% Free</h3>
                <p className="text-muted-foreground text-sm">
                  All features are completely free to use. No sign-up, no hidden fees, no limits.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">How It Works</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our font generator uses Unicode characters to create stylish text. Unicode is a universal standard that assigns a unique code to every character, ensuring your fancy text displays correctly across all devices and platforms.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Simply type your text in the input field, browse through the various font styles organized by category, and click to copy any style you like. It's that simple!
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Popular Use Cases</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Instagram bios and captions</li>
              <li>Twitter/X usernames and tweets</li>
              <li>Facebook posts and comments</li>
              <li>Gaming usernames and clan tags</li>
              <li>Discord server names and messages</li>
              <li>TikTok profiles and captions</li>
              <li>WhatsApp status and messages</li>
            </ul>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default About;