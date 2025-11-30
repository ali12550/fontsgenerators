// Font page configurations with specific font subsets
import { FontStyle, fontStyles } from "./fontTransformers";

export interface FontPageConfig {
  id: string;
  name: string;
  description: string;
  placeholder: string;
  fontIds: string[];
}

export const fontPageConfigs: FontPageConfig[] = [
  {
    id: "preppy",
    name: "Preppy Fonts",
    description: "Clean, classic fonts perfect for a preppy aesthetic",
    placeholder: "Start typing to make your text preppy",
    fontIds: [
      "bold", "sansSerifBoldItalic", "monospace", "cursive", "boldCursive",
      "doubleStruck", "sansSerif", "sansSerifItalic", "sansSerifBold",
      "italic", "boldItalic", "gothic", "boldFraktur", "wide", "smallCaps",
      "rounded", "symbolic", "vintage", "parenthesized", "historical",
      "tribal", "graceful", "square", "bubble", "darkBubble", "squareFilled"
    ],
  },
  {
    id: "abc-symbols",
    name: "Abc Symbols",
    description: "Stylized alphabets with unique symbol characters",
    placeholder: "Start typing to transform your letters",
    fontIds: [
      "symbolic", "vintage", "historical", "tribal", "graceful",
      "eastern", "blendedAsian", "fantasy", "antique", "playful",
      "soft", "prime", "adaptive", "varied", "striped", "modern",
      "cute", "wavy", "gentle", "trendy", "shadow"
    ],
  },
  {
    id: "number-fonts",
    name: "Number Fonts",
    description: "Fonts with stylized number support",
    placeholder: "Type numbers to see them transform",
    fontIds: [
      "bold", "doubleStruck", "sansSerif", "sansSerifBold", "monospace",
      "wide", "bubble", "superscript", "subscript", "square", "squareFilled",
      "darkBubble"
    ],
  },
  {
    id: "pretty",
    name: "Pretty Fonts",
    description: "Beautiful, elegant fonts for a refined look",
    placeholder: "Start typing to make your text pretty",
    fontIds: [
      "cursive", "boldCursive", "italic", "boldItalic", "graceful",
      "soft", "gentle", "fantasy", "elegant", "crowned", "wavyAccent",
      "pointedAccent", "dotAbove", "connected1", "connected4", "hearts"
    ],
  },
  {
    id: "aesthetic",
    name: "Aesthetic Fonts",
    description: "Trendy aesthetic fonts for social media",
    placeholder: "Start typing to get aesthetic text",
    fontIds: [
      "wide", "smallCaps", "doubleStruck", "gothic", "vintage",
      "wavy", "eastern", "blendedAsian", "shadow", "modern",
      "trendy", "striped", "varied", "adaptive"
    ],
  },
  {
    id: "cute",
    name: "Cute Fonts",
    description: "Adorable fonts to make your text extra cute",
    placeholder: "Start typing for cute text",
    fontIds: [
      "cute", "bubble", "playful", "graceful", "soft", "gentle",
      "cursive", "smallCaps", "crowned", "dotAbove", "connected4",
      "framed2", "framed3", "hearts", "emoji"
    ],
  },
];

export const getFontsByIds = (ids: string[]): FontStyle[] => {
  return ids
    .map(id => fontStyles.find(f => f.id === id))
    .filter((f): f is FontStyle => f !== undefined);
};

export const getPageConfig = (pageId: string): FontPageConfig | undefined => {
  return fontPageConfigs.find(p => p.id === pageId);
};
