import { useState } from "react";
import { Header } from "./components/Header"
import UserContext from "./context/user_context"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import DashboardAdminMain from "./pages/DashboardAdmin/DashboardAdminMain";
import AjoutMaison from "./pages/DashboardAdmin/AjoutMaison";
import { PageProduit } from "./pages/PageProduit";


const App = () => {
    const [user, setUser] = useState(null)
    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>


                <BrowserRouter>
                <Header />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/dashboard' element={<DashboardAdminMain />} >
                            <Route path="AjoutMaison" element={<AjoutMaison />}></Route>

                        </Route>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>

        </>
    )
}

export default App