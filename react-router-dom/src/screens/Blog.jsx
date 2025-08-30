// import React from 'react'

// export const Blog = () => {
//   return (
//     <div>Blog</div>
//   )
// }

import {
  useParams,
  Link,
  useNavigate,
  useLocation,
  useHref,
} from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Spin, Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

export const Blog = () => {
  const navigate = useNavigate();
  const href = useHref();
  console.log(href, "href");

  const { state: post } = useLocation();
  // const { blogId } = useParams();
  // const params = useParams();
  console.log(location, "location");

  // const { blogId } = params;
  // const {
  //   data: post,
  //   isLoading,
  //   error,
  // } = useFetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`);

  // if (isLoading)
  //   return (
  //     <div className="center">
  //       <Spin size="large" />
  //     </div>
  //   );
  // if (error) return <p style={{ color: "red" }}>❌ {error}</p>;
  // if (!post?.id) return <p>Post not found.</p>;
  console.log(post, "post");

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>{post.id}</h1>
      <Title level={2}>{post.title}</Title>
      <Paragraph>{post.body}</Paragraph>
      {/* <Link to="/blogs"> */}
      <Button
        type="primary"
        style={{ marginTop: "16px" }}
        // onClick={() => navigate("/blogs", { state: post.id, replace: true })}
        // Go back to the previous page
        onClick={() => navigate(-1)}
        // onClick={() => navigate("/blogs", { state: post })}
      >
        ⬅ Back to Blogs
      </Button>
      {/* </Link> */}
    </div>
  );
};
