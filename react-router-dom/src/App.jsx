import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./screens/Home";
import { Contact } from "./screens/Contact";
import { About } from "./screens/About";
import { Blogs } from "./screens/Blogs";
import { Products } from "./screens/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "contact",
    element: (
      <>
        <Header />
        <Contact />
      </>
    ),
  },
  {
    path: "about",
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: "blogs",
    element: (
      <>
        <Header />
        <Blogs />
      </>
    ),
  },
  {
    path: "products",
    element: (
      <>
        <Header />
        <Products />
      </>
    ),
  },
]);

export const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<PageNotFound404 />} />
      </Routes> */}
      <RouterProvider router={router} />
    </>
  );
};
