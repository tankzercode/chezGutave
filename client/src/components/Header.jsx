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

export const Header = () => {
    const user = useContext(UserContext)
    const navigate = useNavigate()
    const [welcome, setWelcome] = useState()

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const [open2, setOpen2] = useState(false);
    const onOpenModal2 = () => setOpen2(true);
    const onCloseModal2 = () => setOpen2(false);

    const logOut = () => {
        user.setUser = null
    }
    const menu = () => {
        navigate('/dashboard')
    }

    const home = () => {
        navigate('/')
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/signin`, {
                    credentials: "include"
                });
                const data = await response.json();
                console.log(data);
                setWelcome(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData(); // Call the function to fetch data when the component mounts
    }, []);




    const handleSubmit = async (e) => {
        e.preventDefault();
        user.setUser({ name: "giscar", surname: "fdp" })
        console.log(welcome)


    }

    //     user.setUser({ name: "giscar", surname: "fdp" })


    //             useEffect(() => {
    //                 fetch(`http://localhost:3000/api/signin`), {
    //                     credentials: "include",
    //                   }
    //                     .then(res => res.json())
    //                     .then(async data => {
    //                         console.log(data);
    //                         setWelcome(data)
    //                     })
    //                     .catch(err => console.error(err))

    //             }, []);

    //         }


    const handleSubmit2 = async (e) => {
        e.preventDefault();

        user.setUser({ name: "giscar", surname: "fdp" })

    }


    return (
        <>

            <header id='header'>
                <div id='centredlogo' ><img id='logo' src={Logo} onClick={home}></img></div>
                <div id='title'><h1 id='textheader' onClick={home}>Les Vacances Chez Gustave</h1></div>
                <div id='headeruser'>

                    {!user.user?.name &&
                        <div className='btns'>  <button className='btnheader' onClick={onOpenModal}>Se connecter</button>
                            <button className='btnheader' onClick={onOpenModal2}>S'inscrire</button> </div>
                    }
                    {user.user?.name &&
                        <div id='userconnected'>
                            <h2 id='user'>{user.user.name} {user.user.surname}</h2>
                            <div className='btns'>
                                <button className='btnheader ' onClick={menu}>Menus</button>
                                <button className='btnheader ' onClick={logOut}>Déconnection</button>
                            </div>
                        </div>
                    }

                </div>
            </header>

            <Modal open={open} onClose={onCloseModal} center>
                <form id='connection' action="" onSubmit={handleSubmit}>
                    <input className='login' type="email" placeholder='Votre Email' />
                    <input className='login' type="password" placeholder="Votre mot de passe" />
                    <input type='submit' className='btnheader' onClick={onCloseModal} />
                </form>
            </Modal>



            <Modal open={open2} onClose={onCloseModal2} center>

                <form id='inscription' action="" onSubmit={handleSubmit2}>
                    <input className='login' type="text" placeholder='Nom' />
                    <input className='login' type="text" placeholder='Prénom' />
                    <input className='login' type="email" placeholder='Votre Email' />
                    <input className='login' type="tel" required minLength="10" maxLength="10" placeholder='Votre Téléphone' />
                    <input className='login' type="password" placeholder='Votre mot de passe' />

                    <input type='submit' className='btnheader' onClick={onCloseModal2} />
                </form>

            </Modal>


        </>
    )

}