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