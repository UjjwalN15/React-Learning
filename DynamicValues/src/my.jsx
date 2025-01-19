
let age = 16;
let students = [];
export const MyComponent = ()=>{
    return (
        <>
        <h1>{(students.length) || "No Students found"}</h1>
        <h1>Total Students : {students.length}</h1>
        </>
    );
}
