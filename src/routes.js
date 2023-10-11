import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import QuemSomos from "./pages/QuemSomos";
import Servicos from "./pages/Servicos";
import Contato from './pages/Contato';
import Header from './components/Header/index';
import Footer from './components/Footer/index';

function RoutesApp(){
    return(

        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path = "/" element = { <Home/> }  />
                    <Route path = '/quemsomos' element = { <QuemSomos/> } />
                    <Route path='/servicos' element = { <Servicos/> } />
                    <Route path="/contato" element = { <Contato/> } />
                </Routes>
            <Footer/>
        </BrowserRouter>

    )
}

export default RoutesApp;