import { useContext, useState } from 'react';
import '../../styles/InfoUser.css';
import axios from 'axios';



const InfoUser = () => {
    

    const [userInfo, setUserInfo] = useState({
        name: '',// Les données utilisateur à envoyer
        surname: '',
        email: '',
        tel: '',
        password:'',
        newpassword:''

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('http://0.0.0.0:3000/api/getAllUsers', userInfo, {
                headers: {
                    "Access-Control-Allow-Origin": "http://0.0.0.0:3000",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    "Content-Type": "application/json"
                }
            });
        
            console.log(response.data); // Réponse de l'API
            // Gérer la réponse de succès ici, par exemple, rediriger l'utilisateur ou afficher un message de succès
        } catch (error) {
            console.error('Erreur lors de la connection de l\'utilisateur:', error.message);
            // Gérer l'erreur ici, par exemple, afficher un message d'erreur à l'utilisateur
        }

    }




    return (
        <>
            <section>
                <form method='POST' id='User' >
                    <input name='name' className='user' type="text" placeholder='Prénom' value={userInfo.name} onChange={handleChange} />
                    <input name='surname' className='user' type="text" placeholder='Nom' value={userInfo.surname} onChange={handleChange} />
                    <input name='email' className='user' type="email" placeholder='Votre Email' value={userInfo.email} onChange={handleChange} />
                    <input name='tel' className='user' type="tel" required minLength="10" maxLength="10" placeholder='Votre Téléphone' value={userInfo.tel} onChange={handleChange} />
                    <h5>Changement de mot passe</h5>
                    <input name='password' className='user' type="password" placeholder="Votre mot de passe" value={userInfo.password} onChange={handleChange} />
                    <input name='newpassword' className='user' type="password" placeholder="Votre nouveau mot de passe" value={userInfo.newpassword} onChange={handleChange} />
                    <input type='submit' className='btnheader' onClick={handleSubmit} />
                </form>
            </section>
        </>
    )
}

export default InfoUser
