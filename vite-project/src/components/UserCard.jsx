import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const UserCard = (props) => {
  console.log(props, "props in UserCard");
  const { name, username, email, phone, website, address, company } =
    props.user;

  return (
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2>
        {name}{" "}
        <span style={{ color: "#555", fontSize: "0.8rem" }}>@{username}</span>
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
          {address.suite}, {address.street}, {address.city} - {address.zipcode}
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
};
