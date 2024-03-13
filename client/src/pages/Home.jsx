import 'pure-react-carousel/dist/react-carousel.es.css';
import Image1 from '/movie-night-by-pool-whole-family.jpg'
import Image2 from '/backyard-water-contemporary-architecture-sky.jpg'
import Image3 from '/movie-night-by-pool-whole-family1.jpg'
import Image4 from '/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-generative-ai-illustration.jpg'
import { Carousel } from '../components/Carousel';
import { Barreville } from '../components/Barreville';
import { Searchbar } from '../components/Searchbar';
import '../styles/Home.css'
import { Barrecoupsdecoeur } from '../components/Barrecoupsdecoeur';

export const Home = () => {
    return (
        <>
        
        <Carousel/>
        <Searchbar/>
            <section id='home'>
                <Barreville />
                <Barrecoupsdecoeur/>
            </section>
        </>
    )
}