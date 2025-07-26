import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { UserCard } from "./UserCard";

export const APICalling = () => {
  const [count, setCount] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  // console.log("Before APICalling component is rendering");

  useEffect(() => {
    const getUsers = () => {
      // setIsLoading(true);
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          // console.log(response, "response");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((users) => {
          setUsers(users);
          // setIsLoading(false);
          // console.log(users, "users");
        })
        .catch((error) => {
          // setIsLoading(false);
          setError(error.message);
          console.log("Error fetching users:", error);
        })
        .finally(() => {
          setIsLoading(false);
          console.log("Fetch operation completed");
        });
    };

    getUsers();
  }, []);

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  // console.log("After APICalling component is rendering");
  console.log({ users, isLoading, error });

  return (
    <div>
      <h1>API Calling</h1>
      {/* <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button> */}
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
        {users.map((user, index) => {
          // const { name, username, email, phone, website, address, company } =
          //   user;

          return <UserCard key={user.id} user={user} />;
        })}
      </section>
      <h2>UserCard</h2>
      <UserCard user={users[0]} />
    </div>
  );
};

{
  /* {users.map((user, index) => {
          const { name, username, email, phone, website, address, company } =
            user;

          return (
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
              key={user.id}
            >
              <h2>
                {name}{" "}
                <span style={{ color: "#555", fontSize: "0.8rem" }}>
                  @{username}
                </span>
              </h2>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Phone:</strong> {phone}
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a href={`http://${website}`} target="_blank" rel="noreferrer">
                  {website}
                </a>
              </p>

              <div style={{ marginTop: "1rem" }}>
                <h4>Address</h4>
                <p>
                  {address.suite}, {address.street}, {address.city} -{" "}
                  {address.zipcode}
                </p>
              </div>

              <div style={{ marginTop: "1rem" }}>
                <h4>Company</h4>
                <p>
                  <strong>{company.name}</strong>
                </p>
                <p>
                  <em>{company.catchPhrase}</em>
                </p>
                <p>{company.bs}</p>
              </div>
            </div>
          );
        })} */
}
