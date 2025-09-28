import React, { useEffect, useState } from "react";
import {
  useAddArticleMutation,
  useGetArticlesQuery,
  useLazyGetArticlesQuery,
} from "../store/slices/apiSlice";
import { Space, Table, Image, Button, Alert } from "antd";
import { Link } from "react-router-dom";
const Articles = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
  });
  const { page, pageSize } = pagination;
  // const {
  //   isLoading,
  //   // isFetching,
  //   data,
  //   isSuccess,
  //   error,
  //   isError,
  //   refetch,
  //   status,
  // } = useGetArticlesQuery(
  //   `?pagination[page]=${page}&pagination[pageSize]=5&populate=*`
  // );

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (title, record) => (
        <Link to={`/article/${record?.documentId || ""}`}>{title}</Link>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => new Date(date).toLocaleString(),
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (date) => new Date(date).toLocaleString(),
    },
    {
      title: "Author",
      key: "author",
      dataIndex: "author",
      render: (author, record) => {
        return author?.name || "N/A";
      },
    },
    {
      title: "Category",
      key: "category",
      // render: (_, record) => record.category?.name || "N/A",
      // OR
      dataIndex: "category",
      render: (category, record) => category?.name || "N/A",
    },
    {
      title: "Cover Image",
      key: "cover",
      dataIndex: "cover",
      render: (cover, record) => {
        const url =
          cover?.formats?.large?.url || cover?.formats?.thumbnail?.url || "";
        // console.log({ cover, record, url });
        // return <></>;
        return url ? (
          <Image
            width={100}
            src={`http://localhost:1337${url}`}
            alt={record.title}
          />
        ) : (
          "No Image"
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const [
    getArticles,
    {
      isLoading,
      // isFetching,
      data,
      isSuccess,
      error,
      isError,
      refetch,
      status,
    },
  ] = useLazyGetArticlesQuery();
  const [
    craeteArticle,
    {
      isLoading: addIsLoading,
      data: addData,
      isSuccess: addIsSuccess,
      error: addError,
      isError: addIsError,
      status: addStatus,
    },
  ] = useAddArticleMutation();
  // console.log(
  //   { isLoading, data, isSuccess, error, isError, status },
  //   "articles"
  // );
  console.log({
    addIsError,
    addError,
    addData,
    addIsSuccess,
    addIsLoading,
    addStatus,
  });

  useEffect(() => {
    getArticles(`?pagination[page]=${page}&pagination[pageSize]=5&populate=*`);
  }, [page]);

  // return <div className="text-3xl font-bold underline">
  //   Articles</div>;
  const handleTableChange = (pagination, filters, sorter) => {
    console.log({ pagination, filters, sorter });
    setPagination((prev) => ({ ...prev, page: pagination.current }));

    // setTableParams({
    //   pagination,
    //   filters,
    //   sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
    //   sortField: Array.isArray(sorter) ? undefined : sorter.field,
    // });
    // // `dataSource` is useless since `pageSize` changed
    // if (pagination.pageSize !== tableParams.pagination?.pageSize) {
    //   setData([]);
    // }
  };
  const {
    total = 0,
    //  pageSize = 0
  } = data?.meta?.pagination || {};
  // const total = data?.meta?.pagination?.total || 0;
  // const pageSize = data?.meta?.pagination?.pageSize || 0;
  console.log(total, "total", pagination);
  const addArticle = async () => {
    try {
      const article = {
        title: "Article from frontend",
        category: {
          id: 5,
        },
        author: {
          id: 1,
        },
        description:
          "Follow the story of Aaron Swartz, the boy who could change the world",
        // cover: null,
      };
      const createdAtrticle = await craeteArticle(article).unwrap();
      console.log(createdAtrticle, "createdAtrticle");
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <>
      <Button type="primary" onClick={addArticle}>
        Add Article
      </Button>
      {addError && addIsError && (
        <Alert
          message={
            addError?.data?.error?.message || "Error while creating article"
          }
          type="error"
        />
      )}

      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={data?.data || []}
        loading={isLoading}
        onChange={handleTableChange}
        // pagination={false}
        pagination={{
          total,
          pageSize,
          // showTotal: (total, range) => {
          //   console.log(total, range);
          //   return `Total articles: ${total}`
          // },
          showTitle: false,
          hideOnSinglePage: true,
        }}
        // pagination={{ position: "bottomLeft" }}
      />
    </>
  );
};

export default Articles;
