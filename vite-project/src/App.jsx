// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState } from "react";
import { Button } from "./components/Button";
import Greeting from "./components/Greeting";
import { ProductCard } from "./components/ProductCard";
import { Counter } from "./components/Counter";
import { ConditonalRendering } from "./components/ConditonalRendering";
import { FormHandling } from "./components/FormHandling";
import { APICalling } from "./components/APICalling";
import { ChildrenProps } from "./components/ChildrenProps";
import { useUserContext } from "./context/UserContext";
// import { ConditonalRendering } from "./components/ConditonalRendering";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
const hobbies = [
  { id: 1, name: "Walking" },
  { id: 2, name: "Swimming" },
];
export const App = () => {
  // console.log("App component is rendering");
  // console.log(hobbies[0], 'hoby');
  const [count, setCount] = useState(0);
  const { user, login, logout, updateUser } = useUserContext();
  // const { user} = useUserContext();
  console.log("Global State:", { user, login, logout, updateUser });

  return (
    <div className="app">
      <pre>{JSON.stringify(user, undefined, 4)}</pre>
      {/* <Counter /> */}
      {/* <h1>Hello, World!</h1>
      <p>This is a simple React application.</p>
      <Button /> */}
      {/* <Greeting name="Ali Haider" age={20} hobbies={["eating", "walking"]} /> */}

      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <Greeting
        name="Ali Haider"
        age={20}
        hobbies={hobbies}
        // hoby={hobbies[0]}
        hoby={{
          "id": 1,
          "name": "Walking"
        }}
        html={<h1>Heading</h1>}
        // component={<Greeting name="Ali Haider" age={20} hobbies={hobbies} />}
        component={<Button />}
      /> */}

      {/* <Greeting name="Hasnain" age={40} hobbies={["swimming", "walking"]} />
      <Greeting name="Usman" age={30} hobbies={["swimming", "playing"]} /> */}

      {/* <ProductCard /> */}
      {/* <ProductCard />
      <ProductCard /> */}

      <ConditonalRendering />
      {/* <FormHandling /> */}
      {/* <APICalling /> */}

      {/* <ChildrenProps name="ali" email="ali@gmail.com" password={"ali123"}>
        <h1>Children Props Example</h1>
        <p>This is a child element passed to ChildrenProps component.</p>
        <p>It can be any valid React element.</p>
        <p>It can also be a function that returns a React element.</p>
        <p>It can also be a component that returns a React element.</p>
        <p>It can also be a string.</p>
        <p>It can also be a number.</p>
        <p>It can also be an array of elements.</p>
        <p>It can also be a fragment.</p>
        <p>It can also be a portal.</p>
        <p>It can also be a context.</p>
        <p>It can also be a hook.</p>
        <p>It can also be a custom hook.</p>
        <p>It can also be a class component.</p>
        <p>It can also be a functional component.</p>
        <p>It can also be a higher order component.</p>
        <p>It can also be a render prop component.</p>
        <p>It can also be a compound component.</p>
        <p>It can also be a controlled component.</p>
        <p>It can also be an uncontrolled component.</p>
        <p>It can also be a forward ref component.</p>
        <p>It can also be a memo component.</p>
        <p>It can also be a lazy component.</p>
        <p>It can also be a suspense component.</p>
        <p>It can also be a context provider.</p>
        <p>It can also be a context consumer.</p>
        <p>It can also be a context hook.</p>
        <p>It can also be a context provider with a default value.</p>
        <p>It can also be a context provider with a custom value.</p>
        <p>It can also be a context provider with a custom hook.</p>
        <p>It can also be a context provider with a custom component.</p>
        <p>It can also be a context provider with a custom render prop.</p>
        <p>
          It can also be a context provider with a custom compound component.
        </p>
        <img
          src="https://plus.unsplash.com/premium_photo-1690552678496-fda53292def5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          alt=""
        />
      </ChildrenProps> */}
      {/* <ChildrenProps
        name="hasnain"
        email="hasnain@gmail.com"
        password={"ali123"}
      >
        <h1>Children Props Example</h1>
        <p>This is a child element passed to ChildrenProps component.</p>
        <p>It can be any valid React element.</p>

        <img
          src="https://images.unsplash.com/photo-1753784722779-2b83395d7991?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          alt=""
        />
      </ChildrenProps> */}
    </div>
  );
};
