import { Link } from "react-router-dom"
import '../styles/Footer.css'

export const Footer = () => {

    return(
        <>
        <footer id="footer">
        <Link className="lienfooter" to="Qui_sommes_Nous">Qui sommes nous ?</Link>
        <Link className="lienfooter" to="Qui_sommes_Nous">À propos</Link>
        <Link className="lienfooter" to="Qui_sommes_Nous">Contact</Link>
        <Link className="lienfooter" to="Mentions_Legales">Mention Légales</Link>
        </footer>
        </>
    )
}