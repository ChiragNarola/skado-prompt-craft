import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccidentTypeSelection from "./pages/AccidentTypeSelection";
import AccidentReport from "./pages/AccidentReport";
import SingleVehicleReport from "./pages/SingleVehicleReport";
import ViewPolicy from "./pages/ViewPolicy";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import AdminDashboard  from "./pages/Admin/AdminDashboard";
import AdminProfile  from "./pages/Admin/AdminProfile";
import AdminViewReport from "./pages/Admin/AdminViewReport";
import "./i18n/config";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/accident-type" element={<AccidentTypeSelection />} />
          <Route path="/report" element={<AccidentReport />} />
          <Route path="/single-vehicle-report" element={<SingleVehicleReport />} />
          <Route path="/view-policy" element={<ViewPolicy />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/admin-view-report" element={<AdminViewReport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
