// import React from 'react'

// export const Blog = () => {
//   return (
//     <div>Blog</div>
//   )
// }


import { useParams, Link, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Spin, Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

export const Blog = () => {
  const navigate = useNavigate()
  // const { blogId } = useParams();
  const params = useParams();
  console.log(params, 'params');

  const { blogId } = params
  const { data: post, isLoading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );

  if (isLoading) return <div className="center"><Spin size="large" /></div>;
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;
  if (!post?.id) return <p>Post not found.</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Title level={2}>{post.title}</Title>
      <Paragraph>{post.body}</Paragraph>
      {/* <Link to="/blogs"> */}
      <Button type="primary" style={{ marginTop: "16px" }} onClick={() => navigate('/blogs')}>
        ⬅ Back to Blogs
      </Button>
      {/* </Link> */}
    </div>
  );
};
