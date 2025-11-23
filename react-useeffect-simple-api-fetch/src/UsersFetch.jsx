import { useEffect, useState } from "react";

export default function Users() {
    // initialize as an array and use a matching setter name
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    // Fetch data when the component first loads
        fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
        .then(response => response.json())
        .then(data => {
            setUsers(data);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching users:", error);
            setLoading(false);
        });
    }, []);

     if (loading) 
        return <p>Loading...</p>;
    

    return (
        <div>
            <h2>User Info</h2>
            <ul>
                {users.map(user => (
                <li key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}
