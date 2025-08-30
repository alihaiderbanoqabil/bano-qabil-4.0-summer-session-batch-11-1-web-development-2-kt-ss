// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // icons

// export const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-blue-600">
//           MyApp
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex space-x-6">
//           <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="text-gray-700 hover:text-blue-600 transition"
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             className="text-gray-700 hover:text-blue-600 transition"
//           >
//             Services
//           </Link>
//           <Link
//             to="/contact"
//             className="text-gray-700 hover:text-blue-600 transition"
//           >
//             Contact
//           </Link>
//           <Link
//             to="/blogs"
//             className="text-gray-700 hover:text-blue-600 transition"
//           >
//             Blogs
//           </Link>
//           {/* <a
//             href="/products"
//             className="text-gray-700 hover:text-blue-600 transition"
//           >
//             Products
//           </a> */}
//           <Link
//             to="/products"
//             className="text-gray-700 hover:text-blue-600 transition"
//           >
//             Products
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <nav className="flex flex-col space-y-4 px-6 py-4">
//             <Link
//               to="/"
//               className="text-gray-700 hover:text-blue-600 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="text-gray-700 hover:text-blue-600 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               to="/services"
//               className="text-gray-700 hover:text-blue-600 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Services
//             </Link>
//             <Link
//               to="/contact"
//               className="text-gray-700 hover:text-blue-600 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
//             </Link>
//             <Link
//               to="/blogs"
//               className="text-gray-700 hover:text-blue-600 transition"
//             >
//               Blogs
//             </Link>
//             <Link
//               to="/products"
//               className="text-gray-700 hover:text-blue-600 transition"
//             >
//               Products
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// // Header.jsx
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css"; // import styles

// export const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="header">
//       <div className="container">
//         {/* Logo */}
//         <Link to="/" className="logo">
//           MyApp
//         </Link>

//         {/* Desktop Menu */}

//         {isOpen && (
//           <nav className={`nav`}>
//             <Link to="/" onClick={() => setIsOpen(false)}>
//               Home
//             </Link>
//             <Link to="/about" onClick={() => setIsOpen(false)}>
//               About
//             </Link>
//             <Link to="/services" onClick={() => setIsOpen(false)}>
//               Services
//             </Link>
//             <Link to="/contact" onClick={() => setIsOpen(false)}>
//               Contact
//             </Link>
//             <Link to="/blogs" onClick={() => setIsOpen(false)}>
//               Blogs
//             </Link>
//             <Link to="/products" onClick={() => setIsOpen(false)}>
//               Products
//             </Link>
//           </nav>
//         )}

//         {/* Hamburger Button */}
//         <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
//           ☰
//         </button>
//       </div>
//     </header>
//   );
// };

import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // import styles
import { useWindowResize } from "../hooks/useWindowResize";

const Nav = ({ className = "", setIsOpen }) => {
  return (
    <nav className={className}>
      <NavLink
        to="/"
        // className={getActiveClass}
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
        replace={true}
        onClick={() => setIsOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        // className={getActiveClass}
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
        replace={true}
        onClick={() => setIsOpen(false)}
      >
        About
      </NavLink>
      <NavLink
        to="/services"
        // className={getActiveClass}
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
        onClick={() => setIsOpen(false)}
      >
        Services
      </NavLink>
      <NavLink
        to="/contact"
        // className={getActiveClass}
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
        onClick={() => setIsOpen(false)}
      >
        Contact
      </NavLink>
      <NavLink
        to="/blogs"
        // className={getActiveClass}
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
        onClick={() => setIsOpen(false)}
      >
        Blogs
      </NavLink>
      <NavLink
        to="/products"
        // className={getActiveClass}
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
        onClick={() => setIsOpen(false)}
      >
        Products
      </NavLink>
    </nav>
  );
};
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width, height } = useWindowResize();
  console.log({ width, height });
  // const getActiveClass = ({ isActive }) =>
  //   isActive ? "nav-link active" : "nav-link";
  const getActiveClass = (link) => {
    console.log(link, "link");
    const { isActive } = link;
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="logo" >
          MyApp
        </NavLink>

        {width > 576 && (
          // <nav className="">
          //   <NavLink
          //     to="/"
          //     // className={getActiveClass}
          //     style={({ isActive, isPending, isTransitioning }) => {
          //       return {
          //         fontWeight: isActive ? "bold" : "",
          //         color: isPending ? "red" : "black",
          //         viewTransitionName: isTransitioning ? "slide" : "",
          //       };
          //     }}
          //     onClick={() => setIsOpen(false)}
          //   >
          //     Home
          //   </NavLink>
          //   <NavLink
          //     to="/about"
          //     // className={getActiveClass}
          //     style={({ isActive, isPending, isTransitioning }) => {
          //       return {
          //         fontWeight: isActive ? "bold" : "",
          //         color: isPending ? "red" : "black",
          //         viewTransitionName: isTransitioning ? "slide" : "",
          //       };
          //     }}
          //     onClick={() => setIsOpen(false)}
          //   >
          //     About
          //   </NavLink>
          //   <NavLink
          //     to="/services"
          //     // className={getActiveClass}
          //     style={({ isActive, isPending, isTransitioning }) => {
          //       return {
          //         fontWeight: isActive ? "bold" : "",
          //         color: isPending ? "red" : "black",
          //         viewTransitionName: isTransitioning ? "slide" : "",
          //       };
          //     }}
          //     onClick={() => setIsOpen(false)}
          //   >
          //     Services
          //   </NavLink>
          //   <NavLink
          //     to="/contact"
          //     // className={getActiveClass}
          //     style={({ isActive, isPending, isTransitioning }) => {
          //       return {
          //         fontWeight: isActive ? "bold" : "",
          //         color: isPending ? "red" : "black",
          //         viewTransitionName: isTransitioning ? "slide" : "",
          //       };
          //     }}
          //     onClick={() => setIsOpen(false)}
          //   >
          //     Contact
          //   </NavLink>
          //   <NavLink
          //     to="/blogs"
          //     // className={getActiveClass}
          //     style={({ isActive, isPending, isTransitioning }) => {
          //       return {
          //         fontWeight: isActive ? "bold" : "",
          //         color: isPending ? "red" : "black",
          //         viewTransitionName: isTransitioning ? "slide" : "",
          //       };
          //     }}
          //     onClick={() => setIsOpen(false)}
          //   >
          //     Blogs
          //   </NavLink>
          //   <NavLink
          //     to="/products"
          //     // className={getActiveClass}
          //     style={({ isActive, isPending, isTransitioning }) => {
          //       return {
          //         fontWeight: isActive ? "bold" : "",
          //         color: isPending ? "red" : "black",
          //         viewTransitionName: isTransitioning ? "slide" : "",
          //       };
          //     }}
          //     onClick={() => setIsOpen(false)}
          //   >
          //     Products
          //   </NavLink>
          // </nav>
          <Nav setIsOpen={setIsOpen} />
        )}
        {/* Desktop/Menu */}
        {isOpen && (
          // <nav className={`nav`}>
          //   <NavLink
          //     to="/"
          //     // className={getActiveClass}
          //     style={({ isActive, isPending, isTransitioning }) => {
          //       return {
          //         fontWeight: isActive ? "bold" : "",
          //         color: isPending ? "red" : "black",
          //         viewTransitionName: isTransitioning ? "slide" : "",
          //       };
          //     }}
          //     onClick={() => setIsOpen(false)}
          //   >
          //     Home
          //   </NavLink>
          //   <NavLink
          //     to="/about"
          //     // className={getActiveClass}
          //     style={({ isActive, isPending, isTransitioning }) => {
          //       return {
          //         fontWeight: isActive ? "bold" : "",
          //         color: isPending ? "red" : "black",
          //         viewTransitionName: isTransitioning ? "slide" : "",
          //       };
          //     }}
          //     onClick={() => setIsOpen(false)}
          //   >
          //     About
          //   </NavLink>
          //   <NavLink
          //     to="/services"
          //     // className={getActiveClass}
          //     style={({ isActive, isPending, isTransitioning }) => {
          //       return {
          //         fontWeight: isActive ? "bold" : "",
          //         color: isPending ? "red" : "black",
          //         viewTransitionName: isTransitioning ? "slide" : "",
          //       };
          //     }}
          //     onClick={() => setIsOpen(false)}
          //   >
          //     Services
          //   </NavLink>
          //   <NavLink
          //     to="/contact"
          //     // className={getActiveClass}
          //     style={({ isActive, isPending, isTransitioning }) => {
          //       return {
          //         fontWeight: isActive ? "bold" : "",
          //         color: isPending ? "red" : "black",
          //         viewTransitionName: isTransitioning ? "slide" : "",
          //       };
          //     }}
          //     onClick={() => setIsOpen(false)}
          //   >
          //     Contact
          //   </NavLink>
          //   <NavLink
          //     to="/blogs"
          //     // className={getActiveClass}
          //     style={({ isActive, isPending, isTransitioning }) => {
          //       return {
          //         fontWeight: isActive ? "bold" : "",
          //         color: isPending ? "red" : "black",
          //         viewTransitionName: isTransitioning ? "slide" : "",
          //       };
          //     }}
          //     onClick={() => setIsOpen(false)}
          //   >
          //     Blogs
          //   </NavLink>
          //   <NavLink
          //     to="/products"
          //     // className={getActiveClass}
          //     style={({ isActive, isPending, isTransitioning }) => {
          //       return {
          //         fontWeight: isActive ? "bold" : "",
          //         color: isPending ? "red" : "black",
          //         viewTransitionName: isTransitioning ? "slide" : "",
          //       };
          //     }}
          //     onClick={() => setIsOpen(false)}
          //   >
          //     Products
          //   </NavLink>
          // </nav>
            <Nav className="nav" setIsOpen={setIsOpen}/>
        )}

        {width <= 576 && (
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        )}
      </div>
    </header>
  );
};
