import { useState, useEffect } from "react";

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok){
            throw new Error("Error fetching data users");
        }
          const data = await response.json();
          setUsers(data);
    }catch(error){
         setError(error);
    }finally{
         setIsLoading(false);
    }
       
    }

    fetchUsers();

    },[])

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }


    return (
        <div>
            <h1>Lista de usuarios With Loading</h1>
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
