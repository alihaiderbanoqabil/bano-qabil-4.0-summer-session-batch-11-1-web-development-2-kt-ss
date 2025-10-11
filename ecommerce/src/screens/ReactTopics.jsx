// import React, { useRef, forwardRef, useEffect } from "react";

// // Child component
// const InputField = forwardRef((props, ref) => {
//   return <input ref={ref} type="text" placeholder="Type something..." />;
// });
// // const InputField = (props, ref) => {
// //   return <input ref={ref} type="text" placeholder="Type something..." />;
// // };

// // Parent component
// const Parent = () => {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     console.log(inputRef.current, "inputRef.current");

//     inputRef.current.focus(); // Auto-focus input when page loads
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Forward Ref Example</h2>
//       <InputField ref={inputRef} />
//       {/* <input ref={inputRef} type="text" placeholder="Type something..." /> */}
//       <button onClick={() => alert(inputRef.current.value)}>Get Value</button>
//     </div>
//   );
// };

// export default Parent;

import React, { useState } from "react";

const Child = ({ onDataSend }) => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* <button onClick={() => onDataSend("Hello from Child!")}> */}
      <button onClick={() => onDataSend(name)}>
        Send Data to Parent
      </button>
    </div>
  );
};

const Parent = () => {
  const [message, setMessage] = useState("");

  const handleData = (data) => {
    setMessage(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Child to Parent Communication</h2>
      <Child onDataSend={handleData} />
      <p>Message from Child: {message}</p>
    </div>
  );
};

export default Parent;
