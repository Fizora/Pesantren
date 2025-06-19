// Sidebar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden p-2 text-white bg-gray-800 fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-black text-white h-screen border-r border-gray-800 flex flex-col transition-all duration-300 ${
          isOpen ? "w-64" : "w-0 md:w-64"
        } overflow-hidden md:block fixed md:static z-40`}
      >
        <div className="p-4">{children}</div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

Sidebar.Logo = function Logo({ children }) {
  return (
    <div className="mb-6">
      <span className="text-sm font-semibold text-white p-2 rounded-md flex items-center justify-center">
        {children}
      </span>
    </div>
  );
};

Sidebar.Nav = function Nav({ children }) {
  return <nav className="flex-1 space-y-2">{children}</nav>;
};

Sidebar.NavChil = function NavChil({ children, href = "#", active = false }) {
  return (
    <a
      href={href}
      className={`flex items-center gap-2 p-2 rounded hover:bg-gray-900 ${
        active ? "bg-gray-800 border-r-4 border-r-green-600" : ""
      }`}
    >
      {children}
    </a>
  );
};

Sidebar.Account = function Account({ children }) {
  return <div className="mt-auto p-2 border-t border-gray-800">{children}</div>;
};

export default Sidebar;
