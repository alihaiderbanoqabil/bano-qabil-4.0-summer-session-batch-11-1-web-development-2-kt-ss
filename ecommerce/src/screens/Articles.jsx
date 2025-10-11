import React, { useEffect, useState } from "react";
import {
  useAddArticleMutation,
  useGetArticlesQuery,
  useGetAuthorsQuery,
  useGetCategoriesQuery,
  useLazyGetArticlesQuery,
} from "../store/slices/apiSlice";
import {
  Space,
  Table,
  Image,
  Button,
  Alert,
  Modal,
  Form,
  Input,
  Select,
  Upload,
  message,
} from "antd";
import { Link } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Item } = Form;
const { Option } = Select;
// http://localhost:1337/api/articles?pagination[page]=2&pagination[pageSize]=5&populate[category][fields][0]=name&populate[category][fields][1]=createdAt
const Articles = () => {
  const { data: categories } = useGetCategoriesQuery();
  const { data: authors } = useGetAuthorsQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 5,
  });
  // console.log({ categories, authors });

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
  const [form] = Form.useForm();

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

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const submitForm = async (values) => {
    try {
      const { author, category, ...remainingValues } = values;
      const payload = {
        ...remainingValues,
        author: {
          id: author,
        },
        category: {
          id: category,
        },
      };
      console.log("Form Data:", values, payload);
      // if (onFinish) onFinish(values);
      const createdAtrticle = await craeteArticle(payload).unwrap();
      console.log(createdAtrticle, "createdAtrticle");
    } catch (error) {
      console.log(error, "error while creating artical");
    }
  };

  return (
    <>
      <Button type="primary" onClick={openModal}>
        Add Article
      </Button>
      <Modal
        title="Basic Modal"
        // closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={closeModal}
        onCancel={closeModal}
        // style={{ maxHeight: "90vh" }}
      >
        <div className="p-6 bg-white shadow-md rounded-md max-w-2xl mx-auto mt-6">
          <h2 className="text-2xl font-semibold mb-4">Add Article</h2>

          <Form
            layout="vertical"
            form={form}
            onFinish={submitForm}
            autoComplete="off"
          >
            {/* Title */}
            <Form.Item
              label="Title"
              name="title"
              rules={[
                { required: true, message: "Please enter the article title" },
                { min: 3, message: "Title must be at least 3 characters long" },
              ]}
            >
              <Input placeholder="Enter article title" />
            </Form.Item>

            {/* Description */}
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please enter article description" },
                {
                  min: 10,
                  message: "Description should be at least 10 characters",
                },
              ]}
            >
              <TextArea rows={4} placeholder="Enter article description" />
            </Form.Item>
            {/* 
            <Form.Item
              label="Author"
              name="author"
              rules={[{ required: true, message: "Please select an author" }]}
            >
              <Select placeholder="Select an author">
                <Option value="Sarah Baker">Sarah Baker</Option>
                <Option value="David Doe">David Doe</Option>
                <Option value="John Smith">John Smith</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: "Please select a category" }]}
            >
              <Select placeholder="Select category">
                <Option value="Nature">Nature</Option>
                <Option value="Story">Story</Option>
                <Option value="Technology">Technology</Option>
                <Option value="Science">Science</Option>
              </Select>
            </Form.Item> */}

            {/* Author Select */}
            <Form.Item
              label="Author"
              name="author"
              rules={[{ required: true, message: "Please select an author" }]}
            >
              <Select placeholder="Select an author">
                {authors?.data?.map((a) => (
                  <Option key={a.id} value={a.id}>
                    {a.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            {/* Category Select */}
            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: "Please select a category" }]}
            >
              <Select placeholder="Select a category">
                {categories?.data?.map((c) => (
                  <Option key={c.id} value={c.id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            {/* Cover Image */}
            {/* <Form.Item
              label="Cover Image"
              name="coverImage"
              valuePropName="fileList"
              getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
              rules={[
                { required: true, message: "Please upload a cover image" },
              ]}
            >
              <Upload
                name="coverImage"
                listType="picture"
                action="/upload" // replace with your API endpoint
                onChange={handleUpload}
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item> */}

            {/* Submit Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      {/* {addError && addIsError && (
        <Alert
          message={
            addError?.data?.error?.message || "Error while creating article"
          }
          type="error"
        />
      )} */}

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
