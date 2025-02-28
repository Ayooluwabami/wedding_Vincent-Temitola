
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Gifts from "./pages/Gifts";
import Schedule from "./pages/Schedule";
import Venue from "./pages/Venue";
import FAQ from "./pages/FAQ";
import WeddingParty from "./pages/WeddingParty";
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
      <div id="venue" className="min-h-screen scroll-mt-16">
        <Venue />
      </div>
      <div id="faq" className="min-h-screen scroll-mt-16">
        <FAQ />
      </div>
      <div id="wedding-party" className="min-h-screen scroll-mt-16">
        <WeddingParty />
      </div>
      <div id="moments" className="min-h-screen scroll-mt-16">
        <Moments />
      </div>
    </div>
  );
};

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

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
                <Route path="/venue" element={<Venue />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/wedding-party" element={<WeddingParty />} />
                <Route path="/moments" element={<Moments />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            )}
          </main>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
