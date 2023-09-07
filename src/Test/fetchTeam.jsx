import React, { useEffect,useState } from "react";
import axios from "axios";

function FetchTeam() {
    const [team, setTeam] = useState
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setTeam(res.team))
        .catch(err => console.log(err))
    }, [])
    return(
        <div className="container">
          <div className="mt-3">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        team.map((user, index) => {
                            return <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.addres.city}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
          </div>
           </div>
    )
}

export default FetchTeam;
