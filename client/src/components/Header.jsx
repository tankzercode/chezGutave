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
    console.log(user);
    const navigate = useNavigate()

    const [login, setLogin] = useState('');
    const [enteredPassword, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isTimes, setIsTimes] = useState(false);
    const [canAttempt, setCanAttempt] = useState(true);

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

    const home =()=>{
        navigate('/')
    }



    useEffect(() => {
        let timer;

        const resetState = () => {
            setIsTimes(false);
            setCanAttempt(true);
            setIsPasswordValid(true);

        };
        const resetSelected = () => {
            setLogin('');



        }

        if (isTimes) {
            timer = setTimeout(() => {
                resetState();
                resetSelected();
                // Vous pouvez utiliser navigate('/') pour revenir à la page d'accueil,
                // mais cela dépend de votre structure de routes.
                // Si '/admin' est la page d'accueil, vous devrez ajuster en conséquence.
                // navigate('/');
            }, 10000);
        }

        return () => {
            clearTimeout(timer);

            // Autres actions de nettoyage si nécessaire
        };
    }, [isTimes, canAttempt, isPasswordValid, login]);

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        user.setUser({ name: "giscar", surname: "fdp" })

        if (!canAttempt) {
            setIsTimes(true);
            return;
        }

        // try {
        //     const response = await fetch('http://localhost:8000/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             firm_name: login,
        //             password: enteredPassword,
        //         }),
        //     });

        // if (response.ok) {
        //     const data = await response.json();

        // if (data && data.token) {
        //     localStorage.setItem('jwtToken', data.token);

        //     const isAdmin = data.user.is_admin;

        //     if (isAdmin) {
        //         navigate(`/admin/`, {
        //             state: { formattedFirmName, selectedFirm, firms },
        //         });
        //     } else {
        //         navigate(`/utilisateur/${formattedFirmName}`, {
        //             state: { formattedFirmName, selectedFirm, user: data.user },
        //         });
        //     }
        // }
        //     } else {
        //         setIsPasswordValid(false);
        //         setIsTimes(true);
        //         setCanAttempt(false);
        //     }
        //  catch (error) {
        //         console.error('Erreur lors de la connexion :', error);
        //     }
        // }
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
                {!isPasswordValid && <div><Invalide /></div>}
                <form id='connection' action="" onSubmit={handleSubmit}>
                    <input className='login' type="email" value={login} onChange={handleLoginChange} placeholder='Votre Email' />
                    <input className='login' type="password" placeholder="Votre mot de passe" value={enteredPassword} onChange={handlePasswordChange} />
                    <input type='submit' className='btnheader' onClick={onCloseModal} />
                </form>
                {isTimes && <div><Temps /></div>}
            </Modal>



            <Modal open={open2} onClose={onCloseModal2} center>

                <form id='inscription' action="" onSubmit={handleSubmit}>
                    <input className='login' type="text" onChange={handleLoginChange} placeholder='Nom' />
                    <input className='login' type="text" onChange={handleLoginChange} placeholder='Prénom' />
                    <input className='login' type="email" onChange={handleLoginChange} placeholder='Votre Email' />
                    <input className='login' type="tel" required minlength="10" maxlength="10"onChange={handleLoginChange} placeholder='Votre Téléphone' />
                    <input className='login' type="password" onChange={handleLoginChange} placeholder='Votre mot de passe' />

                    <input type='submit' className='btnheader' onClick={onCloseModal2} />
                </form>

            </Modal>


        </>
    )

}