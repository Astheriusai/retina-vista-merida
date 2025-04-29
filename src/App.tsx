
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CirugiaCatarata from "./pages/CirugiaCatarata";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import AgendarCita from "./pages/AgendarCita";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import OftalmologiaIntegral from "./pages/OftalmologiaIntegral";
import CirugiaRefractiva from "./pages/CirugiaRefractiva";
import Laser from "./pages/Laser";
import RetinaVitreo from "./pages/RetinaVitreo";
import Glaucoma from "./pages/Glaucoma";
import Cornea from "./pages/Cornea";
import RetinopatiaDialetica from "./pages/RetinopatiaDialetica";
import Otros from "./pages/Otros";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cirugia-catarata" element={<CirugiaCatarata />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/agendar-cita" element={<AgendarCita />} />
          <Route path="/oftalmologia-integral" element={<OftalmologiaIntegral />} />
          <Route path="/cirugia-refractiva" element={<CirugiaRefractiva />} />
          <Route path="/laser" element={<Laser />} />
          <Route path="/retina-vitreo" element={<RetinaVitreo />} />
          <Route path="/glaucoma" element={<Glaucoma />} />
          <Route path="/cornea" element={<Cornea />} />
          <Route path="/retinopatia-diabetica" element={<RetinopatiaDialetica />} />
          <Route path="/otros" element={<Otros />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
