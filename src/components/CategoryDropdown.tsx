import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";

const fontPages = [
  { name: "All Fonts", path: "/" },
  { name: "Preppy Fonts", path: "/preppy-fonts" },
  { name: "Abc Symbols", path: "/abc-symbols" },
  { name: "Number Fonts", path: "/number-fonts" },
  { name: "Pretty Fonts", path: "/pretty-fonts" },
  { name: "Aesthetic Fonts", path: "/aesthetic-fonts" },
  { name: "Cute Fonts", path: "/cute-fonts" },
];

export const CategoryDropdown = () => {
  const location = useLocation();
  const currentPage = fontPages.find(p => p.path === location.pathname) || fontPages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2 rounded-full bg-card">
          {currentPage.name.toUpperCase()}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48 bg-card border-border z-50">
        {fontPages.map((page) => (
          <DropdownMenuItem key={page.path} asChild>
            <Link 
              to={page.path}
              className={page.path === location.pathname ? "bg-accent" : ""}
            >
              {page.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
