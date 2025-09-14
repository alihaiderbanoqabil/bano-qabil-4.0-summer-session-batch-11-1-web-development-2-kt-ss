import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { Spin } from "antd";
import { Layout } from "./layouts/Layout";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/features/userSlice";

// Import error boundaries
import ErrorBoundary from "./components/ErrorBoundary";
import SuspenseErrorBoundary from "./components/SuspenseErrorBoundary";
import RouteErrorBoundary from "./components/RouteErrorBoundary";
import TestError from "./screens/TestError";

// Lazy imports
const Home = lazy(() => import("./screens/Home"));
const Contact = lazy(() => import("./screens/Contact"));
const About = lazy(() => import("./screens/About"));
const Blogs = lazy(() => import("./screens/Blogs"));
const Blog = lazy(() => import("./screens/Blog"));
const Products = lazy(() => import("./screens/Products"));
const PageNotFound404 = lazy(() => import("./screens/PageNotFound404"));
const LoginForm = lazy(() => import("./screens/LoginForm"));
const CakeStore = lazy(() => import("./screens/CakeStore"));
const Axios = lazy(() => import("./screens/Axios"));

// Enhanced Suspense wrapper with error boundary
const withSuspense = (Component) => (
  <SuspenseErrorBoundary>
    <Suspense
      fallback={
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          minHeight: "200px",
          flexDirection: "column",
          gap: "16px"
        }}>
          <Spin size="large" />
          <p>Loading...</p>
        </div>
      }
    >
      <Component />
    </Suspense>
  </SuspenseErrorBoundary>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // common layout with header
    errorElement: <RouteErrorBoundary />, // Route-level error boundary
    children: [
      { index: true, element: withSuspense(Home) },
      { path: "contact", element: withSuspense(Contact) },
      { path: "about", element: withSuspense(About) },
      { path: "blogs", element: withSuspense(Blogs) },
      { path: "blogs/:blogId", element: withSuspense(Blog) },
      { path: "products", element: withSuspense(Products) },
      { path: "login", element: withSuspense(LoginForm) },
      { path: "cake-store", element: withSuspense(CakeStore) },
      { path: "axios", element: withSuspense(Axios) },
      { path: "test-error", element: withSuspense(TestError) },
      { path: "*", element: withSuspense(PageNotFound404) },
    ],
  },
]);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Wrap Redux dispatch in try-catch for additional safety
    try {
      dispatch(fetchUsers());
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  }, [dispatch]);

  return (
    <ErrorBoundary showDetails={process.env.NODE_ENV === 'development'}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { lazy, Suspense, useEffect } from "react";
// import { Spin } from "antd";
// import { Header } from "./components/Header";
// import { Layout } from "./layouts/Layout";
// // import { Home } from "./screens/Home";
// // import { Contact } from "./screens/Contact";
// // import { About } from "./screens/About";
// // import { Blogs } from "./screens/Blogs";
// // import { Blog } from "./screens/Blog";
// // import { Products } from "./screens/Products";
// // import { PageNotFound404 } from "./screens/PageNotFound404";
// // import { LoginForm } from "./screens/LoginForm";
// // import { CakeStore } from "./screens/CakeStore";
// // import { Axios } from "./screens/Axios";
// const Home = lazy(() => import("./screens/Home"));
// const Contact = lazy(() => import("./screens/Contact"));
// const About = lazy(() => import("./screens/About"));
// const Blogs = lazy(() => import("./screens/Blogs"));
// const Blog = lazy(() => import("./screens/Blog"));
// const Products = lazy(() => import("./screens/Products"));
// const PageNotFound404 = lazy(() => import("./screens/PageNotFound404"));
// const LoginForm = lazy(() => import("./screens/LoginForm"));
// const CakeStore = lazy(() => import("./screens/CakeStore"));
// const Axios = lazy(() => import("./screens/Axios"));
// import { useDispatch } from "react-redux";
// import { fetchUsers } from "./store/features/userSlice";

// // ✅ Reusable Suspense wrapper
// const withSuspense = (Component) => (
//   <Suspense
//     fallback={
//       <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
//         <Spin size="large" />
//       </div>
//     }
//   >
//     <Component />
//   </Suspense>
// );

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // common layout with header
//     children: [
//       // {
//       //   index: true,
//       //   element: (
//       //     <Suspense
//       //       fallback={
//       //         <div
//       //           style={{
//       //             display: "flex",
//       //             justifyContent: "center",
//       //             marginTop: 50,
//       //           }}
//       //         >
//       //           <Spin size="large" />
//       //         </div>
//       //       }
//       //     >
//       //       <Home />
//       //     </Suspense>
//       //   ),
//       // }, // "/" route
//       // {
//       //   index: true,
//       //   element: <Home />,
//       // }, // "/" route
//       // { path: "contact", element: <Contact /> },
//       // { path: "about", element: <About /> },
//       // { path: "blogs", element: <Blogs /> },
//       // { path: "blogs/:blogId", element: <Blog /> },
//       // { path: "products", element: <Products /> },
//       // { path: "login", element: <LoginForm /> },
//       // { path: "cake-store", element: <CakeStore /> },
//       // { path: "axios", element: <Axios /> },
//       // { path: "*", element: <PageNotFound404 /> }, // fallback route
//       { index: true, element: withSuspense(Home) }, // "/" route
//       { path: "contact", element: withSuspense(Contact) },
//       { path: "about", element: withSuspense(About) },
//       { path: "blogs", element: withSuspense(Blogs) },
//       { path: "blogs/:blogId", element: withSuspense(Blog) },
//       { path: "products", element: withSuspense(Products) },
//       { path: "login", element: withSuspense(LoginForm) },
//       { path: "cake-store", element: withSuspense(CakeStore) },
//       { path: "axios", element: withSuspense(Axios) },
//       { path: "*", element: withSuspense(PageNotFound404) }, // fallback route
//     ],
//   },
// ]);

// export const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   return <RouterProvider router={router} />;
// };

// // vite v7.1.2 building for production...
// // ✓ 3078 modules transformed.
// // dist/index.html                   0.46 kB │ gzip:   0.29 kB
// // dist/assets/index-xCTTdD6d.css    1.44 kB │ gzip:   0.65 kB
// // dist/assets/index-RoRfXNhP.js   717.17 kB │ gzip: 234.36 kB

// // (!) Some chunks are larger than 500 kB after minification. Consider:
// // - Using dynamic import() to code-split the application
// // - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
// // ✓ built in 19.91s
