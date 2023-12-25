import { Link } from "react-router-dom"

const NavUser=({auth,setAuth})=>{
    return(
        <div>
            <ul>
                <Link to='/'><li>Home</li></Link>


                {
                    auth ?
                    <>
                    <Link to="/ListUsers"><li>Users</li></Link>
                    <button onClick={()=>setAuth(false)}>Logout</button>
                    </>
                    :
                    <button onClick={()=>setAuth(true)}>Login</button>
                }
                
            </ul>
        </div>
    )
}

export default NavUser