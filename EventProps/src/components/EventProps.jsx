export const ParentComponent = ()=>{
    const handleClickEvent=()=>{
        alert('Thank you for clicking me.');
    }
    const handleMouseHover=()=>{
        alert('Thank you for hovering me.');
    }
    return (
        <>
            <ChildComponent onClick={handleClickEvent} onMouseEnter={handleMouseHover}/>
        </>
    );
}

const ChildComponent = (props)=>{
    return (
    <>
        <button onClick={props.onClick}>Click me</button>
        <button onMouseEnter={props.onMouseEnter}>Hover me</button>
    </>);
}

export const EventPropagation = ()=>{
    // For Bubbling Phase
    // const GrandChildClicked = ()=>{
    //     console.log('Grandchild clicked.');
    // }
    // const ParentChildClicked = ()=>{
    //     console.log('Parent clicked.');
    // }
    // const ChildClicked = ()=>{
    //     console.log('Child clicked.');
    // }
    // return (
    //     <>
    //         <div onClick={GrandChildClicked}>
    //             <div onClick={ParentChildClicked}>
    //                 <button onClick={ChildClicked}>Click me</button>
    //             </div>
    //         </div>
    //     </>
    // );

    // For Capturing Phase
    // const GrandChildClicked = ()=>{
    //     console.log('Grandchild clicked.');
    // }
    // const ParentChildClicked = ()=>{
    //     console.log('Parent clicked.');
    // }
    // const ChildClicked = ()=>{
    //     console.log('Child clicked.');
    // }
    // return (
    //     <>
    //         <div onClickCapture={GrandChildClicked}>
    //             <div onClickCapture={ParentChildClicked}>
    //                 <button onClickCapture={ChildClicked}>Click me</button>
    //             </div>
    //         </div>
    //     </>
    // );

    // For Target Phase
    const GrandChildClicked = (event)=>{
            console.log('Grandchild clicked.');
            event.stopPropagation();
        }
        const ParentChildClicked = (event)=>{
            console.log('Parent clicked.');
            event.stopPropagation();
        }
        const ChildClicked = (event)=>{
            console.log('Child clicked.');
            event.stopPropagation();
        }
        return (
            <>
                <div onClickCapture={GrandChildClicked}>
                    <div onClickCapture={ParentChildClicked}>
                        <button onClickCapture={ChildClicked}>Click me</button>
                    </div>
                </div>
            </>
        );
}