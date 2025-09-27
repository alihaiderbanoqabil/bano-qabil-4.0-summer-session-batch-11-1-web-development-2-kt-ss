import { CustomLayout } from "./layouts/CustomLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./screens/Products";
import Product from "./screens/Product";
import Articles from "./screens/Articles";
import Article from "./screens/Article";
import Home from "./screens/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CustomLayout />, // common layout with header
      children: [
        { index: true, element: <Home /> },
        { path: "articles", element: <Articles /> },
        { path: "article/:articleId", element: <Article /> },
        { path: "products", element: <Products /> },
        { path: "product/:productId", element: <Product /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
