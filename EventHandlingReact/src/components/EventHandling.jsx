

export const EventHandling = ()=>{
    const handleButtonClick = ()=>{
        // alert("The button is clicked. Thanks for clicking the burtton.")
        alert("The button is clicked through arrow function. Thanks for clicking the burtton.")
    }
    const handleArguments = (user)=>{
        // alert("The button is clicked. Thanks for clicking the burtton.")
        alert(`Welcome user ${user}.`)
    }
    return (
        <div>
            <h1>Event Handling</h1>
            {/* <button onClick={handleButtonClick}>Click me</button> */}
            {/* Click from arrow function */}
            <button onClick={()=> handleButtonClick()} >Click me 2</button>

            {/* Passing arguments through function */}
            <button onClick={()=> handleArguments("Ujjwal Neupane")} >Click me 3</button>

            {/* Creating function inside HTML tag */}
            <button onClick={()=>{ alert("The button is clicked from cretaiung function inside tag. Thanks for clicking the burtton.") }}>Click me 4</button>
        </div>
    );
}