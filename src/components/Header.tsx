import { Type } from "lucide-react";

export const Header = () => {
  return (
    <header className="text-center py-8 md:py-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-xl">
          <Type className="w-8 h-8 text-primary-foreground" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Font Generator
        </h1>
      </div>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Make your text fun and stylish with our cool text generator ✨ featuring a wide variety of font styles ready for easy copy and paste.
      </p>
    </header>
  );
};
