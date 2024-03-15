import axios from 'axios';
import '../../styles/AjoutMaison.css';
import { useState } from 'react';


const AjoutMaison = () => {

    const [maison, setMaison] = useState({

        titre: '',
        secteur: '',
        description: '',
        tarif_bas: '',
        tarif_moyen: '',
        tarif_haut: '',
        m_carre: '',
        chambre: '',
        salle_de_bain: '',
        categorie: '',
        type: '',
        file: "",

    });

    const handleChange = (name, value) => {

        if (name === "file") {
            const file = new FormData()
            file.append('file', value)
            value = file
        }

        setMaison({ ...maison, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('http://0.0.0.0:3000/api/createLogement', { file: JSON.stringify(maison.file) }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "http://0.0.0.0:3000",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                }
            });
            console.log(response.data); // Réponse de l'API
            // Gérer la réponse de succès ici, par exemple, rediriger l'utilisateur ou afficher un message de succès
        } catch (error) {
            console.error('Erreur lors de la création de l\'ajout:', error);
            // Gérer l'erreur ici, par exemple, afficher un message d'erreur à l'utilisateur
        }

    }

    return (
        <>
            <section>
                <form id='AjoutMaison'  >
                    
                <input name='titre' className='' type='text' placeholder='Titre' onChange={(e) => {
                        handleChange("titre", e.target.value)
                    }} />
                    <input name='type' className='formMaison' list="Type de Logment" placeholder='Type de Logment' value={maison.type} onChange={(e) => {
                        handleChange("type", e.target.value)
                    }} />
                    <input name='categorie' className='formMaison' list="Catégorie de Logment" placeholder='Catégorie de Logment' value={maison.categorie} onChange={(e) => {
                        handleChange("categorie", e.target.value)
                    }} />

                    <input name='secteur' className='formMaison' type="text" placeholder='Localité' value={maison.secteur} onChange={(e) => {
                        handleChange("secteur", e.target.value)
                    }} />
                    <input name='tarif_moyen' className='formMaison' type="number" placeholder='Tarif Moyenne Saison' value={maison.tarif_moyen} onChange={(e) => {
                        handleChange("tarif_moyen", e.target.value)
                    }} />
                    <input name='tarif_haut' className='formMaison' type="number" placeholder='Tarif Haute Saison' value={maison.tarif_haut} onChange={(e) => {
                        handleChange("tarif_haut", e.target.value)
                    }} />
                    <input name='tarif_bas' className='formMaison' type="number" placeholder='Tarif Basse Saison' value={maison.tarif_bas} onChange={(e) => {
                        handleChange("tarif_bas", e.target.value)
                    }} />
                    <input name='m_carre' className='formMaison' type="number" placeholder='Nombre de mètre carré' value={maison.m_carre} onChange={(e) => {
                        handleChange("m_carre", e.target.value)
                    }} />
                    <input name='salle_de_bain' className='formMaison' type="number" placeholder='Nombre de salle de bain' value={maison.salle_de_bain} onChange={(e) => {
                        handleChange("salle_de_bain", e.target.value)
                    }} />
                    <input name='chambre' className='formMaison' type="number" placeholder='Nombre de chambre' value={maison.chambre} onChange={(e) => {
                        handleChange("chambre", e.target.value)
                    }} />

                    <textarea name='description' className='formMaison' id='text' type="" placeholder='Description' value={maison.description} onChange={(e) => {
                        handleChange("description", e.target.value)
                    }} />
                    <input name='image' className='formMaison' id='file' type="file" placeholder='Photo' onChange={(e) => { handleChange('file', e.target.files[0]) }} />
                    <input type='submit' className='btn' onClick={onSubmit} />
                </form>
            </section>
        </>
    )
}
export default AjoutMaison
