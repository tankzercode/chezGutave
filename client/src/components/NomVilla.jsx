import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const NomVilla = () => {
    const [villaData, setVillaData] = useState({
        titre: '' // Assurez-vous de spécifier une valeur par défaut pour la description
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://0.0.0.0:3000/api/createLogement', villaData, {
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

        fetchData(); // Appeler la fonction fetchData à l'intérieur de useEffect
    }, [villaData]); // Ajouter villaData comme dépendance

    return (
        <>
            <div id='nomDiv'>
                <h2 id='nomVilla'>
                    {villaData.titre}
                </h2>
            </div>
        </>
    );
};
