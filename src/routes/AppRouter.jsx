import { BrowserRouter, Routes, Route } from "react-router-dom";

// Website Pages
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ResetPassword from "../pages/Login/ResetPassword";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Portfolio from "../pages/Portfolio/Portfolio";
import Pricing from "../pages/Pricing/Pricing";
import Services from "../pages/Services/Services";
import Dashboard from "../pages/UserDashboard/Dashboard";
import Bio from "../pages/Bio/Bio";

// Admin Pages
import AdminLogin from "../pages/Admin/Login";
import AdminDashboard from "../pages/Admin/Dashboard";
import Clients from "../pages/Admin/Clients";
import Statistics from "../pages/Admin/Statistics";
import Settings from "../pages/Admin/Settings";
import ContentManager from "../pages/Admin/ContentManager";

// Service Pages
import AISolutions from "../pages/Services/AISolutions";
import WebDevelopment from "../pages/Services/WebDevelopment";
import MobileApps from "../pages/Services/MobileApps";
import POSSystem from "../pages/Services/POSSystem";
import ERPSystem from "../pages/Services/ERPSystem";
import BrandIdentity from "../pages/Services/BrandIdentity";
import CustomSoftware from "../pages/Services/CustomSoftware";

// Portfolio
import ProjectDetails from "../pages/Portfolio/ProjectDetails";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ==================== WEBSITE ==================== */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route
          path="/portfolio/:id"
          element={<ProjectDetails />}
        />

        <Route path="/pricing" element={<Pricing />} />

        <Route path="/services" element={<Services />} />

        <Route path="/bio" element={<Bio />} />


        {/* ==================== SERVICES ==================== */}

        <Route
          path="/services/ai-solutions"
          element={<AISolutions />}
        />

        <Route
          path="/services/web-development"
          element={<WebDevelopment />}
        />

        <Route
          path="/services/mobile-apps"
          element={<MobileApps />}
        />

        <Route
          path="/services/pos-system"
          element={<POSSystem />}
        />

        <Route
          path="/services/erp-system"
          element={<ERPSystem />}
        />

        <Route
          path="/services/brand-identity"
          element={<BrandIdentity />}
        />

        <Route
          path="/services/custom-software"
          element={<CustomSoftware />}
        />


        {/* ==================== ADMIN ==================== */}

        {/* /admin → Admin Login */}
        <Route
          path="/admin"
          element={<AdminLogin />}
        />

        {/* Alternative Admin Login URL */}
        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        {/* Admin Clients */}
        <Route
          path="/admin/clients"
          element={<Clients />}
        />

        {/* Admin Statistics */}
        <Route
          path="/admin/statistics"
          element={<Statistics />}
        />

        {/* Admin Settings */}
        <Route
          path="/admin/settings"
          element={<Settings />}
        />

        {/* Admin Content Manager */}
        <Route
          path="/admin/content"
          element={<ContentManager />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;