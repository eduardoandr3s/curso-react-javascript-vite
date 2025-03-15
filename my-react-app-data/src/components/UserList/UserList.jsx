import { useState, useEffect } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching data users:", error));
    },[])
    return (
        <div>
            <h1>Lista de usuarios</h1>
            <ul>
                {users.map((user)=>
                <li key={user.id}>
                    Name: {user.name} --- City: {user.address.city}
                </li>
                )}
            </ul>
        </div>
    )
}

export default UserList;
