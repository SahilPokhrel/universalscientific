import React, { useState, useEffect } from "react";
// 1. We will NOT use ScrollRestoration
import { NavLink, Outlet, useLocation } from "react-router-dom"; 
import {
  Home,
  ShoppingBag,
  Info,
  Mail,
  Menu,
  X,
} from "lucide-react";
import Logo from './assets/logo-nav.png'; // Using your logo


const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/products", label: "Products", icon: ShoppingBag },
  { path: "/about", label: "About Us", icon: Info },
  { path: "/contact", label: "Contact", icon: Mail },
];

// Main App Layout Component
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // 2. --- THIS IS THE FIX ---
  // This effect runs every time the page URL (pathname) changes.
  useEffect(() => {
    // We use a setTimeout with a 0ms delay.
    // This pushes the scroll-to-top command to the end of the
    // browser's 'to-do' list, *after* React has rendered the new page.
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, [pathname]); // This effect depends on the pathname

  // This effect updates the browser tab title (This one stays)
  useEffect(() => {
    const currentNavItem = navItems.find((item) => item.path === pathname);
    const pageTitle = currentNavItem ? currentNavItem.label : "Home";
    document.title = `${pageTitle} | Universal Scientific & Stationery`;
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 3. <ScrollRestoration /> has been REMOVED */}

      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          
          <NavLink
            to="/"
            className="flex items-center space-x-3 focus:outline-none"
          >
            <img 
              src={Logo}
              alt="Universal Scientific Logo" 
              className="h-10 w-10 rounded-full" // Added rounded-full for placeholder
            />
            <span className="text-xl font-bold text-gray-800">
              Universal Scientific
            </span>
          </NavLink>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                // Check if the link is active
                className={({ isActive }) =>
                  `flex items-center gap-2 text-lg font-medium ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            ))}
          </div>
          
          {/* Mobile menu */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setMenuOpen(false)} // Close menu on click
                className={({ isActive }) =>
                  `px-6 py-3 text-left ${
                    isActive
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "hover:bg-gray-100 text-gray-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* This Outlet renders the current page (HomePage, ProductsPage, etc.) */}
      <main className="flex-grow bg-gray-50">
        <Outlet /> 
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>
          © {new Date().getFullYear()} Universal Scientific & Stationery — All
          rights reserved.
        </p>
        <p className="text-sm mt-2">
          55 Pillar House, Harijan Dairy, Upper Mawprem, Shillong - 793002, Meghalaya
        </p>
      </footer>
    </div>
  );
}

