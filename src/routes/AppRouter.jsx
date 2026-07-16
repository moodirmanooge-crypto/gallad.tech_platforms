import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Portfolio from "../pages/Portfolio/Portfolio";
import Pricing from "../pages/Pricing/Pricing";
import Services from "../pages/Services/Services";
import Dashboard from "../pages/UserDashboard/Dashboard";

// Admin
import AdminLogin from "../pages/Admin/Login";
import AdminDashboard from "../pages/Admin/Dashboard";
import Clients from "../pages/Admin/Clients";
import Statistics from "../pages/Admin/Statistics";
import Settings from "../pages/Admin/Settings";

import AISolutions from "../pages/Services/AISolutions";
import WebDevelopment from "../pages/Services/WebDevelopment";
import MobileApps from "../pages/Services/MobileApps";
import POSSystem from "../pages/Services/POSSystem";
import ERPSystem from "../pages/Services/ERPSystem";
import BrandIdentity from "../pages/Services/BrandIdentity";
import CustomSoftware from "../pages/Services/CustomSoftware";
import ProjectDetails from "../pages/Portfolio/ProjectDetails";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Website */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />

        <Route
  path="/portfolio/:id"
  element={<ProjectDetails />}
/>

<Route path="/dashboard" element={<Dashboard />} />

<Route path="/services/ai-solutions" element={<AISolutions />} />

<Route path="/services/web-development" element={<WebDevelopment />} />

<Route path="/services/mobile-apps" element={<MobileApps />} />

<Route path="/services/pos-system" element={<POSSystem />} />

<Route path="/services/erp-system" element={<ERPSystem />} />

<Route path="/services/brand-identity" element={<BrandIdentity />} />

<Route path="/services/custom-software" element={<CustomSoftware />} />

        {/* Admin */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/clients" element={<Clients />} />
        <Route path="/admin/statistics" element={<Statistics />} />
        <Route path="/admin/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;