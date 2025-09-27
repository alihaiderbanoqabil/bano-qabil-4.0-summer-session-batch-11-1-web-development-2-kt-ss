import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
import { FaCartShopping } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
const items = [
  { key: "1", label: <Link to="/">Home</Link> },
  { key: "2", label: <Link to="/products">Products</Link> },
  { key: "3", label: <Link to="/articles">Articles</Link> },
];

// const items = [
//   { label: "Home", path: "/" },
//   { label: "Products", path: "/products" },
//   { label: "Articles", path: "/articles" },
// ];
export const CustomLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // console.log(children, "children");

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo">
          <FaCartShopping color="white" size={30} />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      {/* <header>
        <img src="" alt="logo" />
        <nav>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header> */}
      <Content style={{ padding: "0 48px" }}>
        {/* <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
        /> */}
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
