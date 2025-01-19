// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

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

export const App = () => {
  return (
    <div>
      <img src="openairbg.png" alt="Open Air" width="400px" height="400px" />
      <h2>Open Air</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis 
        unde minus reprehenderit incidunt consequatur. Rerum, commodi ex temporibus 
        accusamus recusandae reiciendis, earum fuga aliquam unde amet placeat fugit 
        molestiae eligendi?</p>
    </div>
  );
}
