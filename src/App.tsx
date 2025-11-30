import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import PrepyFonts from "./pages/PrepyFonts";
import AbcSymbols from "./pages/AbcSymbols";
import NumberFonts from "./pages/NumberFonts";
import PrettyFonts from "./pages/PrettyFonts";
import AestheticFonts from "./pages/AestheticFonts";
import CuteFonts from "./pages/CuteFonts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/preppy-fonts" element={<PrepyFonts />} />
          <Route path="/abc-symbols" element={<AbcSymbols />} />
          <Route path="/number-fonts" element={<NumberFonts />} />
          <Route path="/pretty-fonts" element={<PrettyFonts />} />
          <Route path="/aesthetic-fonts" element={<AestheticFonts />} />
          <Route path="/cute-fonts" element={<CuteFonts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
