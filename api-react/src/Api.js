import React, { useState, useEffect } from 'react'



const ApiUser = () => {

    const [users, setUsers] = useState([]);
    const [limit, setLimit] = useState(1);
    const [PageNo, setPageNo] = useState('');


    const fetchUsers = (limit) => {
        // Make sure you send 'limit' and 'skip' as query parameters to your node.js server
        fetch(`https://reqres.in/api/users?page=${limit}`) 
           .then(response => response.json())
            .then((data) => {
             console.log(data) ||setPageNo(data.page) || setUsers(data.data)
            })
    }
   

    const nextPage = () => {
        setLimit(limit - 1)
    }

    const previousPage = () => {
        setLimit(limit + 1)
    }


    useEffect(() => {
        fetchUsers(limit)
    }, [limit])


    return (<div className="container"> 
        <h3>Page-{PageNo}</h3>
        <div className="mb-5"> 
            <button className="btn btn-primary" onClick={nextPage}> Previous Page </button>

            <button className="btn btn-success" onClick={previousPage}> Next Page </button> 
        </div>

        <div> 
            { 
                users.map(user => 
                    <div class="card App text-center" >
                       <img className="card-img-top image-fluid" height="250px" width="250px" src={user.avatar} alt="Card image cap"/>
                       <div className="card-body">
                         <p className="card-text">ID: {user.id}</p>
                         <h5 className="card-title">Name: {user.first_name} {user.last_name}</h5>
                         
                         <p className="card-text">Email: {user.email}</p>
                        
                       </div>
                    </div>
                )
            }
        </div>
        <div className="mb-5"> 
            <button className="btn btn-primary" onClick={nextPage}> Previous Page </button>

            <button className="btn btn-success" onClick={previousPage}> Next Page </button> 
        </div>
    </div>)
}

export default ApiUser;