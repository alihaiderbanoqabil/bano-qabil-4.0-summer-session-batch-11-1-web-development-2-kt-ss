// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apiSlice = createApi({
//   reducerPath: "api", // slice name in store
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:1337/api",
//   }),
//   tagTypes: ["Articles", "Products", "Categories"], // for cache invalidation
//   endpoints: (builder) => ({
//     getArticles: builder.query({
//       query: (params = "") => {
//         console.log(params, "params");

//         return `/articles${params}`;
//         // return "/articles?populate=*&sort=publishedAt:desc";
//       },

//       //   OR
//       //   query: () => "/articles",
//       providesTags: ["Articles"],
//     }),

//     getArticleById: builder.query({
//       query: (id) => `/articles/${id}`,
//       providesTags: ["Articles"],
//       //   providesTags: (result, error, id) => [{ type: "Articles", id }],
//     }),

//     // --- Create ---
//     addArticle: builder.mutation({
//       query: (newArticle) => ({
//         url: "/articles",
//         method: "POST",
//         body: { data: newArticle }, // ✅ Strapi expects { data: {} }
//       }),
//       invalidatesTags: ["Articles"],
//     }),

//     // --- Update ---
//     updateArticle: builder.mutation({
//       query: ({ id, ...patch }) => ({
//         url: `/articles/${id}`,
//         method: "PUT",
//         body: { data: patch },
//       }),
//       invalidatesTags: ["Articles"],
//       //   invalidatesTags: (result, error, { id }) => [
//       //     { type: "Articles", id },
//       //     "Articles",
//       //   ],
//     }),

//     // --- Delete ---
//     deleteArticle: builder.mutation({
//       query: (id) => ({
//         url: `/articles/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Articles"],
//       //   invalidatesTags: (result, error, id) => [
//       //     { type: "Articles", id },
//       //     "Articles",
//       //   ],
//     }),


//   }),
// });

// // Export hooks
// export const {
//   useGetArticlesQuery,
//   useLazyGetArticlesQuery,
//   useGetArticleByIdQuery,
//   useLazyGetArticleByIdQuery,
//   useAddArticleMutation,
//   useUpdateArticleMutation,
//   useDeleteArticleMutation,
//   reducerPath,
//   reducer,
//   middleware,
// } = apiSlice;



import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api",
  }),
  tagTypes: ["Articles", "Products", "Categories", "Authors"],
  endpoints: (builder) => ({
    // -------------------------
    // 📰 ARTICLES
    // -------------------------
    getArticles: builder.query({
      query: (params = "") => `/articles${params}`,
      providesTags: ["Articles"],
    }),

    getArticleById: builder.query({
      query: (id) => `/articles/${id}`,
      providesTags: ["Articles"],
    }),

    addArticle: builder.mutation({
      query: (newArticle) => ({
        url: "/articles",
        method: "POST",
        body: { data: newArticle }, // ✅ Strapi expects { data: {} }
      }),
      invalidatesTags: ["Articles"],
    }),

    updateArticle: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/articles/${id}`,
        method: "PUT",
        body: { data: patch },
      }),
      invalidatesTags: ["Articles"],
    }),

    deleteArticle: builder.mutation({
      query: (id) => ({
        url: `/articles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Articles"],
    }),

    // -------------------------
    // 📂 CATEGORIES
    // -------------------------
    getCategories: builder.query({
      query: () => `/categories?fields[0]=name`,
      providesTags: ["Categories"],
    }),

    // -------------------------
    // 👤 AUTHORS
    // -------------------------
    getAuthors: builder.query({
      query: () => `/authors?fields[0]=name`,
      providesTags: ["Authors"],
    }),
  }),
});

// ✅ Export hooks for all endpoints
export const {
  // Articles
  useGetArticlesQuery,
  useLazyGetArticlesQuery,
  useGetArticleByIdQuery,
  useLazyGetArticleByIdQuery,
  useAddArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,

  // Categories
  useGetCategoriesQuery,

  // Authors
  useGetAuthorsQuery,

  // Core
  reducerPath,
  reducer,
  middleware,
} = apiSlice;

