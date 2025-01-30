import { useState } from "react";

export const ListUser = () => {
    const [users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Angles", age: 45 }
    ]);

    return (
        <>
            <h1>List of Users</h1>
            <ul>
                {
                    users.map((curUser, index) => (
                        <li key={index}>
                            Name: {curUser.name} - Age: {curUser.age}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}