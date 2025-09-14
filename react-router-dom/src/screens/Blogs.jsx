// import { useFetch } from '../hooks/useFetch'
// import { Spin } from "antd"

// export const Blogs = () => {
//   const { data, error, isLoading } = useFetch("https://jsonplaceholder.typicode.com/posts")
//   console.log({ data, error, isLoading });
//   if (isLoading) return <Spin size='large' />
//   return (
//     <div>Blogs</div>
//   )
// }

import { useFetch } from "../hooks/useFetch";
import { Spin, Card, Row, Col, Typography } from "antd";
import { Link, useHref, useLocation, useMatch } from "react-router-dom";

const { Title, Paragraph } = Typography;

const Blogs = () => {
  const { state: postId } = useLocation();
  // const match = useMatch();
  const href = useHref();
  // console.log(match, "match");
  console.log(href, "href");
  const {
    data: posts,
    error,
    isLoading,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  // const visitedPost = postId? posts.find(post => post.id === postId) : null;
  if (isLoading)
    return (
      <div className="center">
        <Spin size="large" />
      </div>
    );
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>📚 Blog Posts</Title>
      <Row gutter={[16, 16]}>
        {posts.map((post) => {
          // console.log(post, "post");

          return (
            <Col xs={24} sm={12} md={8} key={post.id}>
              <Link
                to={`/blogs/${post.id}`}
                state={post}
                style={{ textDecoration: "none" }}
              >
                <Card
                  hoverable
                  title={post.title}
                  bordered={false}
                  style={{
                    height: "100%",
                    backgroundColor: post.id === postId ? "#22e6b8ff" : "white",
                  }}
                >
                  <h1>{post.id}</h1>
                  <Paragraph ellipsis={{ rows: 2 }}>{post.body}</Paragraph>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};


export default Blogs;