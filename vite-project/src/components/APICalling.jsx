import { useEffect, useReducer, useRef, useState } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

import { UserCard } from "./UserCard";
import { useWindowResize } from "../hooks/useWindowResize";
import { useFetch } from "../hooks/useFetch";

export const APICalling = () => {
  const { width, height } = useWindowResize();
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const searchInputRef = useRef(null);
  const { data, isLoading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users${
      email ? `?email=${email}` : ""
    }`
  );
  // const [isLoading, setIsLoading] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [users, setUsers] = useState([]);
  // const [error, setError] = useState("");

  // console.log("Before APICalling component is rendering");

  // useEffect(() => {
  //   const getUsers = () => {
  //     // setIsLoading(true);
  //     fetch(
  //       `https://jsonplaceholder.typicode.com/users${
  //         email ? `?email=${email}` : ""
  //       }`
  //     )
  //       .then((response) => {
  //         // console.log(response, "response");
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json();
  //       })
  //       .then((users) => {
  //         setUsers(users);
  //         // setIsLoading(false);
  //         // console.log(users, "users");
  //       })
  //       .catch((error) => {
  //         // setIsLoading(false);
  //         setError(error.message);
  //         console.log("Error fetching users:", error);
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //         console.log("Fetch operation completed");
  //       });
  //   };

  //   getUsers();

  //   return () => {
  //     // Cleanup function if needed
  //     console.log("Cleanup function called");
  //   };
  // }, [email]);
  // // }, [email, count]);

  // console.log("After APICalling component is rendering");
  // console.log({ users, isLoading, error, email });

  const searchUsers = (e) => {
    e.preventDefault();
    setEmail(searchInputRef.current.value);
  };

  console.log({ width, height }, "Window Size");

  return (
    <div>
      <h1>API Calling</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
      <form onSubmit={searchUsers}>
        <input
          type="search"
          placeholder="Search user by their email"
          ref={searchInputRef}
        />
        <button>Search</button>
      </form>
      {/* <input
        type="search"
        placeholder="Search user by their email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> */}
      <section>
        {/* {isLoading && <p>Loading...</p>} */}
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {/* {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>} */}
        {error && <Alert variant={"danger"}>{error}</Alert>}
        {/* {error && <p style="color:red;"}>Error: {error}</p>} */}
        {data.length > 0 && (
          <Container fluid="md">
            <Row>
              {data.map((user, index) => {
                // const { name, username, email, phone, website, address, company } =
                //   user;

                return (
                  <Col xs={12} sm={6} md={4} lg={3} xl={2} key={user.id}>
                    <UserCard user={user} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        )}
      </section>
      {/* <h2>UserCard</h2>
      <UserCard user={users[0]} /> */}
    </div>
  );
};
