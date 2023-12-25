import { Navigate } from "react-router-dom"

const PrivateRoute=({children,auth})=>{

    return(<div>
        {
            auth ? children : <Navigate to="/"/>
        }
    </div>)
}

export default PrivateRoute