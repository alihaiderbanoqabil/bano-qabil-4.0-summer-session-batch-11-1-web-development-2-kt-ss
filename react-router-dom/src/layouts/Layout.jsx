import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <>

    <Header />
      <main style={{
        marginTop: "3.5rem", padding: "1.25rem",
        //  backgroundColor: "cyan"
      }}>
        <Outlet /> {/* Renders child routes here */}
      </main>
    </>
  );
};
