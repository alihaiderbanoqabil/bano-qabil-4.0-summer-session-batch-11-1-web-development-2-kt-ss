import { useState, useRef } from "react";

export const FormHandling = () => {
  return (
    <div>
      <h1>Form Handling Example</h1>
      <h3>Controlled Form</h3>
      <ControlledForm />
      <h3>UnControlled Form</h3>
      <UncontrolledForm />
    </div>
  );
};

function ControlledForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    // dob: "",
  });
  const { name, email, password } = user;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name: name, email, password });
  };

  const onInputChange = (e) => {
    console.log(
    //   e.target,
    //   "e.target",
      e.target.name,
      "name",
      e.target.value,
      "value"
    );

    const { name, value } = e.target;
    setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
    }));
  };

  console.log(user, "user");
  return (
    // <form onSubmit={handleSubmit(event)}>
    // <form onSubmit={(event) => handleSubmit(event)}>
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Enter your name"
        type="text"
        // value={user.name}
        value={name}
        onChange={onInputChange}
      />
      <input
        name="email"
        placeholder="Enter your email"
        type="email"
        // value={user.email}
        value={email}
        onChange={onInputChange}
      />
      <input
        name="password"
        placeholder="Enter your password"
        type="password"
        // value={user.password}
        value={password}
        onChange={onInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// function ControlledForm() {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     // dob: "",
//   });
//   const { name, email, password } = user;
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log({ name: name, email, password });
//   };

//   console.log(user, "user");
//   return (
//     // <form onSubmit={handleSubmit(event)}>
//     // <form onSubmit={(event) => handleSubmit(event)}>
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="Enter your name"
//         type="text"
//         // value={user.name}
//         value={name}
//         onChange={(e) => {
//           console.log(e.target.value, "e.target.value");
//           //   setUser({ name: "", email: "", password: "", name: e.target.value });
//           setUser({ ...user, name: e.target.value });
//         }}
//       />
//       <input
//         placeholder="Enter your email"
//         type="email"
//         // value={user.email}
//         value={email}
//         onChange={(e) => {
//           setUser({ ...user, email: e.target.value });
//         }}
//       />
//       <input
//         placeholder="Enter your password"
//         type="password"
//         // value={user.password}
//         value={password}
//         onChange={(e) => {
//           setUser({ ...user, password: e.target.value });
//         }}
//       />
//       <button type="submit">Submit</button>
//   );
// }

// function ControlledForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [count, setCount] = useState(0);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log({ name: name, email, password });

//     // alert(`Submitted: ${name}`);
//   };
//   //   console.log({ name: name, email, password });
//   return (
//     // <form onSubmit={handleSubmit(event)}>
//     // <form onSubmit={(event) => handleSubmit(event)}>
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="Enter your name"
//         type="text"
//         value={name}
//         onChange={(e) => {
//           //   console.log(e.target.value, "e.target.value");
//           setName(e.target.value);
//         }}
//       />
//       <input
//         placeholder="Enter your email"
//         type="email"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       <input
//         placeholder="Enter your password"
//         type="password"
//         value={password}
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//       <button type="submit">Submit</button>
//     </form>
//     // <form onSubmit={handleSubmit}>
//     //   <input
//     //     type="text"
//     //     value={name}
//     //     onChange={(e) => setName(e.target.value)}
//     //   />
//     //   <button type="submit">Submit</button>
//     // </form>
//   );
// }

// function UncontrolledForm() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const name = document.getElementById("name").value;
//     // alert(`Submitted: ${document.getElementById("name").value}`);
//     // alert(`Submitted: ${nameRef.current.value}`);
//     console.log(name, "name");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" id="name" placeholder="Enter your name" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

function UncontrolledForm() {
  const nameRef = useRef(null);
  //   console.log(nameRef, "nameRef");

  //   const isDisabled = nameRef.current.value === "" ? 'ali' : 'hasnain';
  //   const isDisabled = nameRef.current.value === "" ? true : false;
  //   const isDisabled = nameRef.current.value === "";
  //  // Optional chanining  (?.) is used to safely access properties of an object that may be null or undefined.
  //   const isDisabled = nameRef.current && nameRef.current.value === "";
  //   const isDisabled = nameRef.current?.value === "" ? true : false;
  const isDisabled = !nameRef.current?.value;
  // OR
  //   let isDisabled;
  //   if (nameRef.current.value === "") {
  //     isDisabled = true;
  //   } else {
  //     isDisabled = false;
  //   }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef, "nameRef", nameRef.current);

    // document.writeln(nameRef.current.value, " :::: nameRef.current.value");

    // alert(`Submitted: ${nameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={nameRef}
        onChange={(e) => {
          console.log(e.target.value, "e.target.value");
        }}
      />
      <button type="submit" disabled={isDisabled}>
        Submit
      </button>
    </form>
  );
}
