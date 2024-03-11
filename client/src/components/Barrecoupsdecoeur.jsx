import '../styles/Barrecoupsdecoeur.css'
import Photo from '/paris.jpg'


export const Barrecoupsdecoeur = () => {

    return (
        <>
        <h2>Laissez vous tentez par nos coups de coeur</h2>
        <p>Nos locations les mieux notées</p>

            <section id="barreville">
                <div id="imgtext">
                    <img src={Photo} className='miniature' alt='Paris' />
                    <h3 id="ville">Paris</h3>
                </div>
                <div id="imgtext">
                    <img src={Photo} className='miniature' alt='Paris' />
                    <h3 id="ville">Paris</h3>
                </div>
                <div id="imgtext">
                    <img src={Photo} className='miniature' alt='Paris' />
                    <img id="photoville" src="" alt="" />
                    <h3 id="ville">Paris</h3>
                </div>
                <div id="imgtext">
                    <img src={Photo} className='miniature' alt='Paris' />
                    <img id="photoville" src="" alt="" />
                    <h3 id="ville">Paris</h3>
                </div>
            </section>
        </>
    )
}