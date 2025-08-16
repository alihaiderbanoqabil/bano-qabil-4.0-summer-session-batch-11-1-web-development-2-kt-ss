import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyApp
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </Link>
          <Link
            to="/blogs"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Blogs
          </Link>
          {/* <a
            href="/products"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Products
          </a> */}
          <Link
            to="/products"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Products
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/blogs"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Blogs
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Products
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
