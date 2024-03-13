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



    const logOut = () => {
        user.setUser(null)
        navigate('/')
    }
    const menu = () => {
        navigate('/dashboard')
    }

    const home = () => {
        navigate('/')
    }



    const [userData, setUserData] = useState({
        name: '',// Les données utilisateur à envoyer
        surname: '',
        email: '',
        tel: '',
        is_admin: false,

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        user.setUser({ name: "giscar", surname: "fdp" })


        let response = await fetch('http://localhost:3000/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        let result = await response.json();
        alert(result.message);
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
        const url = 'http://localhost:3000//api/signup'; // Remplacez avec l'URL réelle de votre API


        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                userData,
            });

            if (!response.ok) {
                throw new Error('Quelque chose a mal tourné lors de la création de l\'utilisateur');
            }

            const data = await response.json();
            console.log('Utilisateur créé avec succès:', data);
            // Gérer la réponse de succès ici, par exemple, rediriger l'utilisateur ou afficher un message de succès
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur:', error);
            // Gérer l'erreur ici, par exemple, afficher un message d'erreur à l'utilisateur
        }
    };





    const onCloseModal2 = () => {
        setOpen2(false);
        setUserData({
            name: '',
            surname: '',
            email: '',
            tel: '',
            is_admin: false,
        });
    }



    return (
        <>

            <header id='header'>
                <section className='responsive'>
                    <div id='centredlogo' ><img id='logo' src={Logo} onClick={home}></img></div>
                    <div id='title'><h1 id='textheader' onClick={home}>Les Vacances Chez Gustave</h1></div>
                </section>
                <div id='headeruser'>

                    {!user.user?.name &&
                        <div className='btns'>  <button className='btnheader' onClick={onOpenModal}>Se connecter</button>
                            <button className='btnheader' onClick={onOpenModal2}>S'inscrire</button> </div>
                    }
                    {user.user?.name &&
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
                <form id='connection' action="" onSubmit={handleSubmit}>
                    <input className='login' type="email" placeholder='Votre Email' />
                    <input className='login' type="password" placeholder="Votre mot de passe" />
                    <input type='submit' className='btnheader' onClick={onCloseModal} />
                </form>
            </Modal>



            <Modal open={open2} onClose={onCloseModal2} center>
                <form method='POST' id='inscription' onSubmit={handleSubmit2}>
                    <input name='name' className='login' type="text" placeholder='Nom' value={userData.nom} onChange={handleChange} />
                    <input name='surname' className='login' type="text" placeholder='Prénom' value={userData.prenom} onChange={handleChange} />
                    <input name='email' className='login' type="email" placeholder='Votre Email' value={userData.email} onChange={handleChange} />
                    <input name='tel' className='login' type="tel" required minLength="10" maxLength="10" placeholder='Votre Téléphone' value={userData.tel} onChange={handleChange} />

                    <input type='submit' className='btnheader' onClick={onCloseModal2} />
                </form>

            </Modal>


        </>
    )

}