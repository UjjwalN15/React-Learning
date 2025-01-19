// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Fragment } from "react";

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

export const App=()=>{
  return(
    <Fragment>
      <MyComponent/>
      <MyComponent/>
      <MyComponent/>
    </Fragment>
  );
}
const Name = ()=>{
  return "Ujjwal Neupane"
}
const Description = ()=>{
  return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ducimus maiores deleniti facere sunt saepe eaque quia provident cum iure. Itaque ipsa officia beatae iste vitae, ullam autem quas sequi!"
}
const MyComponent = ()=>{
  return(
    <div>
      <img src="openairbg.png" alt="Open Air bg" width="100%" height="200px"/>
      <h1>{Name()}</h1>
      <p>{Description()}</p>
    </div>
  );
};