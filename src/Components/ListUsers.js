import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ListUsers=()=>{
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .then(()=> setLoading(false))
        .catch((err)=>console.log(err))
    },[])

    return(
        <div>
            <h2>User List</h2>
            {
                loading ? <h1>Mazel</h1> : users.map((el,i,t)=> <Link to={`/Profil/${el.id}`}><h3>{el.name}</h3></Link>)
            }
        </div>
    )
}

export default ListUsers