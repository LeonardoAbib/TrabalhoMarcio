import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./pages/Sobre";
import App from "./App";
import Header from "./components/Header";

function RouteApp(){
    return(
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;