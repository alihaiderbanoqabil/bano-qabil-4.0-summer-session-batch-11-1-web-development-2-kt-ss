import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./screens/Home";
import { Contact } from "./screens/Contact";
import { About } from "./screens/About";
import { Blogs } from "./screens/Blogs";
import { Blog } from "./screens/Blog";
import { Products } from "./screens/Products";
import { Layout } from "./layouts/Layout";
import { PageNotFound404 } from "./screens/PageNotFound404";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // common layout with header
    children: [
      { index: true, element: <Home /> }, // "/" route
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blogs/:blogId", element: <Blog /> },
      { path: "products", element: <Products /> },
      { path: "*", element: <PageNotFound404 /> }, // fallback route
    ],
  },
]);


const router2 = createBrowserRouter([
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
    caseSensitive: false,
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
