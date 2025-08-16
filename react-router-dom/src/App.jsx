import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./screens/Home";
import { Contact } from "./screens/Contact";
import { About } from "./screens/About";
import { Blogs } from "./screens/Blogs";
import { Products } from "./screens/Products";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  )
};
