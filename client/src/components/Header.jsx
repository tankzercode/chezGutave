import { useContext, useEffect, useState } from 'react'
import Logo from '/crown.png'
import UserContext from '../context/user_context'
import '../styles/Header.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Invalide } from './Invalide';
import { Temps } from './Temps';
import { useNavigate } from 'react-router';
import { Home } from '../pages/Home';
import axios from 'axios'
export const Header = () => {

    const user = useContext(UserContext)
    console.log(user)
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);


    const [open2, setOpen2] = useState(false);
    const onOpenModal2 = () => setOpen2(true);



    const logOut = () => {
        user.setUser(null)
        navigate('/')
    }
    const menu = () => {
        navigate('/dashboardUSer')
    }

    const home = () => {
        navigate('/')
    }
    const [userConnect, setUserConnect] = useState({

        email: '',
        password: ''

    });


    const [userData, setUserData] = useState({
        name: '',// Les données utilisateur à envoyer
        surname: '',
        email: '',
        tel: '',
        is_admin: false

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserConnect({ ...userConnect, [name]: value });
    };

    const handleChange2 = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://0.0.0.0:3000/api/signin', userConnect, {
                headers: {
                    "Access-Control-Allow-Origin": "http://0.0.0.0:3000",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    "Content-Type": "application/json"
                }
            });
            user.setUser(userConnect)
            navigate('/dashboardUser')
            console.log(response.data); // Réponse de l'API
            // Gérer la réponse de succès ici, par exemple, rediriger l'utilisateur ou afficher un message de succès
        } catch (error) {
            console.error('Erreur lors de la connection de l\'utilisateur:', error.message);
            // Gérer l'erreur ici, par exemple, afficher un message d'erreur à l'utilisateur
        }

    }


    const handleSubmit2 = async (e) => {
        console.log(e)
        e.preventDefault();

        try {
            const response = await axios.post('http://0.0.0.0:3000/api/signup', userData, {
                headers: {
                    "Access-Control-Allow-Origin": "http://0.0.0.0:3000",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    "Content-Type": "application/json"
                }
            });
            console.log(response.data); // Réponse de l'API
            // Gérer la réponse de succès ici, par exemple, rediriger l'utilisateur ou afficher un message de succès
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur:', error);
            // Gérer l'erreur ici, par exemple, afficher un message d'erreur à l'utilisateur
        }
    };




    const onCloseModal2 = (e) => {
        setOpen2(false);
        handleSubmit2(e);
        setUserData({
            name: '',
            surname: '',
            email: '',
            tel: '',
            is_admin: false
        });
        console.log(userData)
    }


    const onCloseModal = (e) => {
        setOpen(false);
        handleSubmit(e);
        setUserConnect({ email: '', password: '' })


    }
    console.log(user.user)

    return (
        <>

            <header id='header'>
                <section className='responsive'>
                    <div id='centredlogo' ><img id='logo' src={Logo} onClick={home}></img></div>
                    <div id='title'><h1 id='textheader' onClick={home}>Les Vacances Chez Gustave</h1></div>
                </section>
                <div id='headeruser'>

                    {!user.user?.email &&
                        <div className='btns'>  <button className='btnheader' onClick={onOpenModal}>Se connecter</button>
                            <button className='btnheader' onClick={onOpenModal2}>S'inscrire</button> </div>
                    }
                    {user.user?.email &&
                        <div id='userconnected'>
                            <div className='idnt'><h2 className='user'>{user.user.name}</h2> <h2 className='user'>{user.user.surname}</h2></div>
                            <div className='btns'>
                                <button className='btnheader ' onClick={menu}>Menus</button>
                                <button className='btnheader ' onClick={logOut}>Déconnection</button>
                            </div>
                        </div>
                    }

                </div>
            </header>

            <Modal open={open} onClose={onCloseModal} center>
                <form id='connection' method='POST' onSubmit={handleSubmit}>
                    <input name='email' className='login' type="email" placeholder='Votre Email' value={userConnect.email} onChange={handleChange} />
                    <input name='password' className='login' type="password" placeholder="Votre mot de passe" value={userConnect.password} onChange={handleChange} />
                    <input type='submit' className='btnheader' onClick={onCloseModal} />
                </form>
            </Modal>



            <Modal open={open2} onClose={onCloseModal2} center>
                <form method='POST' id='inscription' onSubmit={handleSubmit2}>
                    <input name='name' className='login' type="text" placeholder='Prénom' value={userData.name} onChange={handleChange2} />
                    <input name='surname' className='login' type="text" placeholder='Nom' value={userData.surname} onChange={handleChange2} />
                    <input name='email' className='login' type="email" placeholder='Votre Email' value={userData.email} onChange={handleChange2} />
                    <input name='tel' className='login' type="tel" required minLength="10" maxLength="10" placeholder='Votre Téléphone' value={userData.tel} onChange={handleChange2} />

                    <input type='submit' className='btnheader' onClick={onCloseModal2} />
                </form>

            </Modal>


        </>
    )

}