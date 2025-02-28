
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Tidbits from "./pages/Tidbits";
import Gifts from "./pages/Gifts";
import Schedule from "./pages/Schedule";
import Venue from "./pages/Venue";
import FAQ from "./pages/FAQ";
import WeddingParty from "./pages/WeddingParty";
import Moments from "./pages/Moments";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/tidbits" element={<Tidbits />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/wedding-party" element={<WeddingParty />} />
            <Route path="/moments" element={<Moments />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
