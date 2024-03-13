import { useState } from "react";
import { Header } from "./components/Header"
import UserContext from "./context/user_context"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import DashboardAdminMain from "./pages/DashboardAdmin/DashboardAdminMain";
import AjoutMaison from "./pages/DashboardAdmin/AjoutMaison";
import { Footer } from "./components/Footer";
import { MentionLegales } from "./pages/MentionLegales";
import { Quisommesnous } from "./pages/Quisommenous";
import DashboardUserMain from "./pages/DashboardUSer/DashboardUserMain";
import InfoUser from "./pages/DashboardUSer/InfoUser";


const App = () => {
    const [user, setUser] = useState(null)
    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>


                <BrowserRouter>
                <Header />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/dashboardUser' element={<DashboardUserMain />} >
                            <Route path="AjoutMaison" element={<AjoutMaison />}></Route>
                            <Route path="InfoUser" element={<InfoUser />}></Route>
                        </Route>
                        <Route path='/Mentions_Legales' element={<MentionLegales />} />
                        <Route path='/Qui_sommes_Nous' element={<Quisommesnous />} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </UserContext.Provider>

        </>
    )
}

export default App