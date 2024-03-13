import '../../styles/AjoutMaison.css';


const AjoutMaison = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

    }
    return (
        <>
            <section>
                <form id='AjoutMaison' action="" onSubmit={handleSubmit}>
                    <input className='formMaison' type="text" placeholder='Titre' />
                    <input className='formMaison' list="Type de Logment" placeholder='Type de Logment' />
                    <input className='formMaison' list="Catégorie de Logment" placeholder='Catégorie de Logment' />

                    <input className='formMaison' type="text" placeholder='Localité' />
                    <input className='formMaison' type="number" placeholder='Tarif Moyenne Saison' />
                    <input className='formMaison' type="number" placeholder='Tarif Haute Saison' />
                    <input className='formMaison' type="number" placeholder='Tarif Basse Saison' />
                    <input className='formMaison' type="number" placeholder='Nombre de mètre carré' />
                    <input className='formMaison' type="number" placeholder='Nomre de salle de bain' />
                    <textarea className='formMaison' id='text' type="" placeholder='Description' />
                    <input className='formMaison' id='file' type="file" placeholder='Photo' />
                    <input type='submit' className='btn' />
                </form>
            </section>
        </>
    )
}
export default AjoutMaison