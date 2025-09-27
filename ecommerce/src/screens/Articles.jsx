import React, { useEffect } from "react";
import {
  useAddArticleMutation,
  useGetArticlesQuery,
  useLazyGetArticlesQuery,
} from "../store/slices/apiSlice";

const Articles = () => {
  // const {
  //   isLoading,
  //   // isFetching,
  //   data,
  //   isSuccess,
  //   error,
  //   isError,
  //   refetch,
  //   status,
  // } = useGetArticlesQuery();
  // const [
  //   getArticles,
  //   {
  //     isLoading,
  //     // isFetching,
  //     data,
  //     isSuccess,
  //     error,
  //     isError,
  //     refetch,
  //     status,
  //   },
  // ] = useLazyGetArticlesQuery();
  const [addArticle, { isLoading, data, isSuccess, error, isError, status }] =
    useAddArticleMutation();
  console.log(
    { isLoading, data, isSuccess, error, isError, status },
    "articles"
  );

  useEffect(() => {
    getArticles();
  }, []);

  return <div className="text-3xl font-bold underline">Articles</div>;
};

export default Articles;
