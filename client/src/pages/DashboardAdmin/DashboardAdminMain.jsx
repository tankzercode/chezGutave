import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import UserContext from "../../context/user_context"
import '../../styles/DashboardAdminMain.css'


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
            <menu id="menu">
                <ul>
                    <li className="itemmenu"><Link className="lienmenu" to="AjoutMaison">Ajouter une maison</Link></li>
                </ul>
            </menu>
            <Outlet />
        </>
    )
}
export default DashboardAdminMain