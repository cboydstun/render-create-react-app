import React, { useState, useEffect } from 'react'

function App() {
    const [people, setPeople] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch("https://render-nodejs-api-zuwp.onrender.com/people")
        // fetch("http://localhost:8080/people")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setPeople(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p> 

    if (error) return <p>Error!</p> 

    return (
        <div>
            <h1>People List</h1>
            <ul>
                {people.map(person => (
                    <li key={person.name}>
                        {person.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App;