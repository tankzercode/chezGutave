import { useContext, useState } from 'react';
import Logo from '/crown.png';
import UserContext from '../context/user_context';
import '../styles/Header.css';
import { Modal } from 'react-responsive-modal';
import { useNavigate } from 'react-router';

export const Header = () => {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const onOpenSignupModal = () => setOpenSignup(true);
    const onCloseSignupModal = () => setOpenSignup(false);

    const logOut = () => {
        user.setUser(null);
        navigate('/');
    };

    const navigateToDashboard = () => {
        navigate('/dashboard');
    };

    const navigateToHome = () => {
        navigate('/');
    };

    const [userData, setUserData] = useState({
        name: '',
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
    
        // Préparez l'objet des données à envoyer
        const loginData = {
            email: userData.email, // Assurez-vous que userData contient un champ email rempli
            password: userData.password, // Assurez-vous que userData contient un champ password rempli
        };
    
        try {
            const response = await fetch('http://localhost:3000/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
    
            if (!response.ok) {
                throw new Error('Erreur de connexion. Veuillez vérifier vos identifiants.');
            }
    
            const result = await response.json();
            
            // Assumons que votre API retourne l'utilisateur connecté dans `result.user` et que vous voulez le stocker dans le contexte
            user.setUser(result.user);
            alert('Connexion réussie !');
    
            // Redirection vers la page d'accueil ou dashboard après la connexion
            navigate('/dashboard'); // ou navigate('/') pour la page d'accueil
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            alert(error.message);
        }
    };

    const handleSubmitSignup = async (e) => {
        e.preventDefault();
      
        // Préparez l'objet des données à envoyer pour l'inscription
        const signupData = {
          name: userData.name,
          surname: userData.surname,
          email: userData.email,
          tel: userData.tel,
          password: userData.password, // Assurez-vous d'ajouter un champ pour le mot de passe dans votre formulaire et dans votre état `userData`
        };
      
        try {
          const response = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData),
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            // Si la réponse contient un message d'erreur, utilisez-le
            throw new Error(errorData.message || 'Une erreur s’est produite lors de l’inscription.');
          }
      
          const result = await response.json(); // Récupère la réponse de l'API
      
          // Affichez un message de succès et connectez l'utilisateur automatiquement ou redirigez-le vers une autre page
          alert('Inscription réussie ! Vous êtes maintenant inscrit et connecté.');
          navigate('/dashboard'); // ou navigate('/') pour la page d'accueil
        } catch (error) {
          console.error('Erreur lors de l’inscription:', error);
          // Ici, nous vérifions le message d'erreur pour personnaliser la réponse à l'utilisateur
          let messageErreur;
          switch (error.message) {
            case 'Cette adresse email est déjà utilisée.':
              messageErreur = 'Cette adresse email est déjà enregistrée. Veuillez en utiliser une autre.';
              break;
            case 'Le mot de passe doit contenir au moins 8 caractères.':
              messageErreur = 'Votre mot de passe est trop court. Veuillez en choisir un plus long.';
              break;
            default:
              messageErreur = 'Un problème est survenu lors de l’inscription. Veuillez réessayer plus tard.';
          }
          alert(messageErreur);
        }
      };
      
    return (
        <>
            <header id='header'>
                <section className='responsive'>
                    <div id='centredlogo'><img id='logo' src={Logo} alt="Logo" onClick={navigateToHome}></img></div>
                    <div id='title'><h1 id='textheader' onClick={navigateToHome}>Les Vacances Chez Gustave</h1></div>
                </section>
                <div id='headeruser'>
                    {!user.user?.name ? (
                        <div className='btns'>
                            <button className='btnheader' onClick={onOpenModal}>Se connecter</button>
                            <button className='btnheader' onClick={onOpenSignupModal}>S'inscrire</button>
                        </div>
                    ) : (
                        <div id='userconnected'>
                            <div className='idnt'><h2 className='user'>{user.user.name}</h2> <h2 className='user'>{user.user.surname}</h2></div>
                            <div className='btns'>
                                <button className='btnheader' onClick={navigateToDashboard}>Menus</button>
                                <button className='btnheader' onClick={logOut}>Déconnection</button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            <Modal open={openSignup} onClose={onCloseSignupModal} center>
    <form id='inscription' onSubmit={handleSubmitSignup}>
        <input
            name='name'
            className='login'
            type='text'
            placeholder='Nom'
            value={userData.name}
            onChange={handleChange}
            required
        />
        <input
            name='surname'
            className='login'
            type='text'
            placeholder='Prénom'
            value={userData.surname}
            onChange={handleChange}
            required
        />
        <input
            name='email'
            className='login'
            type='email'
            placeholder='Email'
            value={userData.email}
            onChange={handleChange}
            required
        />
        <input
            name='tel'
            className='login'
            type='tel'
            placeholder='Téléphone'
            value={userData.tel}
            onChange={handleChange}
            required
        />
        <button type='submit' className='btnheader'>S'inscrire</button>
    </form>
</Modal>


        </>
    );
}
