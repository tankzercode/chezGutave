import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import UserContext from "../../context/user_context"

const DashboardAdminMain = () => {

    const user = useContext(UserContext)
    console.log(user.user)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user.user) {
            navigate('/')
        }
    }, [])
    return (
        <>
            <Link to="AjoutMaison">Ajouter une maison</Link>
            <Outlet />
        </>
    )
}
export default DashboardAdminMain