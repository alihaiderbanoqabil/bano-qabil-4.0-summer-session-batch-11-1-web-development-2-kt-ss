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
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

export const Blogs = () => {
  const { data: posts, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (isLoading) return <div className="center"><Spin size="large" /></div>;
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>📚 Blog Posts</Title>
      <Row gutter={[16, 16]}>
        {posts.map((post) => (
          <Col xs={24} sm={12} md={8} key={post.id}>
            <Link to={`/blogs/${post.id}`} style={{ textDecoration: "none" }}>
              <Card
                hoverable
                title={post.title}
                bordered={false}
                style={{ height: "100%" }}
              >
                <Paragraph ellipsis={{ rows: 2 }}>
                  {post.body}
                </Paragraph>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};
