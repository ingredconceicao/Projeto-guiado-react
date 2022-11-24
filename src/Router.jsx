import { BrowserRouter, Routes, Route } from "react-router-dom"

import {Contato } from "./pages/Contato"
import{Inicio} from'./pages/Inicio'
import{Menu} from'./components/Menu'
import { Portifolio } from "./pages/Portifolio"
import { Sobre } from "./pages/Sobre"
import { Footer } from "./components/Footer"


export function ApplicationRoutes(){
    return(
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/portifolio" element={<Portifolio/>}/>
            <Route path="/contato" element={<Contato/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}