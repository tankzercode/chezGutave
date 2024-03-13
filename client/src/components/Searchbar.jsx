import { TbHomeSearch } from "react-icons/tb";
import '../styles/Searchbar.css'


export const Searchbar = () => {

    return (
        <>
            <form id="search">
                <div id="vacance">
                    <label>Où allez vous ?</label><br />
                    <input className="input" id="lieux" type="text" name="lieux"
                        placeholder="Où allez vous ?" /><br />
                    <div>
                        <label>Du</label><br />
                        <input className="input" id="date" type="date" name="arrivee"
                            placeholder="01/02/2024" /><br />
                        <label>Au</label><br />
                        <input className="input" id="date" type="date" name="depart"
                            placeholder="01/02/2024" /><br />
                    </div>
                </div>
                <div id="nombre">
                    <div>
                        <label>Adultes</label><br />
                        <input className="input" id="adultes" type="number" name="number"
                            placeholder="2" /><br />
                    </div>
                    <div>
                        <label>Enfants</label><br />
                        <input className="input" id="enfants" type="number" name="number"
                            placeholder="2" /><br />
                    </div>
                    <div>
                        <label>Chambre</label><br />
                        <input className="input" id="Chambre" type="number" name="number"
                            placeholder="2" /><br />
                    </div>
                </div>
                <TbHomeSearch id="icon" type="sumit" />
            </form>
        </>
    )
}