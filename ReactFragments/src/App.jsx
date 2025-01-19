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

export const App = ()=>{
  return(
    <Fragment>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Fragment>

    // Alternatively
    // <>
    //   <Card></Card>
    //   <Card></Card>
    //   <Card></Card>
    //   <Card></Card>
    //   <Card></Card>
    // </>
  );
};

const Card = ()=>{
  return (
    <div>
      <img src="openairbg.png" alt="Open air Bg" width="500px" height="600px" />
      <h1>Open Air Bag</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, blanditiis. 
        Odit unde cum illo veniam est quod cumque quam nemo sit eveniet optio iure 
        obcaecati ipsam vitae officia amet minima consequuntur, quos eius accusantium. 
        Maxime quis, ratione non molestiae odit nobis blanditiis quam ducimus. Adipisci 
        voluptatum architecto quidem quam? Voluptas.</p>
    </div>
  );
};