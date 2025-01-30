import { useState } from "react";

export const ListUser = () => {
    const [users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Angles", age: 45 }
    ]);

    const userCount = users.length;
    const averageAge = users.reduce((sum, user) => sum + user.age, 0) / userCount;

    return (
        <>
            <h1>list of Users</h1>
            <ul>
                {
                    users.map((user, index) => {
                        return (
                            <li key={index}>
                                {user.name} is {user.age} years old.
                            </li>
                        );
                    })
                }
            </ul>
            <p>There are {userCount} users in the list.</p>
            <p>The average age of the users is {averageAge} years old.</p>
        </>
    );
}