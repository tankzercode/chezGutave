import '../styles/Barreville.css'
import Photo from '/paris.jpg'


export const Barreville = () => {

    return (
        <>
        <h2>Vous voyagez en France</h2>
        <p>Pourquoi pas ici ?</p>

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
            <hr id='hr'/>
        </>
    )
}