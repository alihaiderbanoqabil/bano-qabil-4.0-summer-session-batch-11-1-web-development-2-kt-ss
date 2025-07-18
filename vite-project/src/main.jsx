// "use strict"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import App from './App.jsx'
import { App } from './App.jsx'
const root = document.getElementById('root')
createRoot(root).render(
  <App />
)
// createRoot(root).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



// const camelCase = '';
// const PascalCase = '';
// const kebab-case = '';
// const snake_case = '';
