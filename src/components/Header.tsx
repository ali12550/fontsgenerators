import { Link } from "react-router-dom";
import { Type, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="py-4 md:py-6">
      <nav className="flex items-center justify-between mb-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-xl">
            <Type className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:block">Font Generator</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            Generator
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            About
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/">Generator</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/contact">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/terms-of-service">Terms of Service</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <div className="text-center py-4 md:py-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
          Font Generator
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Make your text fun and stylish with our cool text generator ✨ featuring a wide variety of font styles ready for easy copy and paste.
        </p>
      </div>
    </header>
  );
};