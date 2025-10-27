import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AiTools from "./pages/AiTools";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import ELearningSolutions from "./services/Elearningsolution";
import Animation from "./services/Animation";
import WebsiteDevelopment from "./services/WebsiteDevlopment";
import AIAutomation from "./services/Ai";
import MobileDevelopment from "./services/MobileDevlopment";
import Career from "./pages/Career";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />
          <Route path="/ai-tools" element={<AiTools />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/services/ELearningSolutions"
            element={<ELearningSolutions />}
          />
          <Route path="/services/Animation" element={<Animation />} />
          <Route
            path="/services/WebsiteDevelopment"
            element={<WebsiteDevelopment />}
          />

          <Route path="/services/AIAutomation" element={<AIAutomation />} />
          <Route
            path="/services/MobileDevelopment"
            element={<MobileDevelopment />}
          />
          <Route path="/career" element={<Career />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
