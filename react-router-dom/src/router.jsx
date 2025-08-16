import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./screens/Home";
import { Contact } from "./screens/Contact";
import { About } from "./screens/About";
import { Blogs } from "./screens/Blogs";
import { Products } from "./screens/Products";

export const router = createBrowserRouter([
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