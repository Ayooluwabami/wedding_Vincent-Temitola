
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Gifts from "./pages/Gifts";
import Schedule from "./pages/Schedule";
import FAQ from "./pages/FAQ";
import Moments from "./pages/Moments";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Mobile continuous scroll view component
const MobileScrollView = () => {
  return (
    <div className="min-h-screen">
      <div id="home" className="min-h-screen scroll-mt-16">
        <Home />
      </div>
      <div id="story" className="min-h-screen scroll-mt-16">
        <Story />
      </div>
      <div id="gifts" className="min-h-screen scroll-mt-16">
        <Gifts />
      </div>
      <div id="schedule" className="min-h-screen scroll-mt-16">
        <Schedule />
      </div>
      <div id="faq" className="min-h-screen scroll-mt-16">
        <FAQ />
      </div>
      <div id="moments" className="min-h-screen scroll-mt-16">
        <Moments />
      </div>
    </div>
  );
};

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Initial checks
    checkIsMobile();
    handleScroll();

    // Add event listeners
    window.addEventListener('resize', checkIsMobile);
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <main className="min-h-screen pt-16">
            {isMobile ? (
              // Mobile view with continuous scrolling
              <MobileScrollView />
            ) : (
              // Desktop view with page routing
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/story" element={<Story />} />
                <Route path="/gifts" element={<Gifts />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/venue" element={<Schedule />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/moments" element={<Moments />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            )}
          </main>
          <Footer />

          {/* Global scroll to top button */}
          {showScrollButton && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 bg-wedding-gold/80 hover:bg-wedding-gold text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ChevronUp size={24} />
            </button>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
