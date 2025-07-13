// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Button } from "./components/Button"
import Greeting from "./components/Greeting"
import { ProductCard } from "./components/ProductCard"

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
  { id: 2, name: "Swimming" }
]
export const App = () => {
  // console.log("App component is rendering");

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React application.</p>
      <Button />
      {/* <Greeting name="Ali Haider" age={20} hobbies={["eating", "walking"]} /> */}
      <Greeting name="Ali Haider" age={20} hobbies={hobbies} />
      {/* <Greeting name="Hasnain" age={40} hobbies={["swimming", "walking"]} />
      <Greeting name="Usman" age={30} hobbies={["swimming", "playing"]} /> */}

      {/* <ProductCard />
      <ProductCard />
      <ProductCard /> */}
    </div>
  )
}