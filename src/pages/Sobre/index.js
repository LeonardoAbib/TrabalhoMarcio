import { Link } from "react-router-dom";
import Header from "../../components/Header";
import './style.css';

function Sobre(){
    return(
        <div className="formulario"> 
            <header className="cabeca">
                <h1>Sobre o Trabalho</h1>
            </header>   
                <h2 className="form"> Boa tarde! Este site foi desenvolvido pelo aluno Leonardo Abib de Andrade como parte do trabalho do 5º semestre do curso de Engenharia de Software. 
                A principal proposta deste projeto é proporcionar uma experiência interativa e funcional aos usuários.
                O objetivo principal do site é permitir que os usuários ingressem um CEP e, com base nisso, a plataforma irá consultar uma API específica para obter informações detalhadas sobre o endereço associado a esse CEP. 
                Essa funcionalidade visa fornecer aos usuários acesso rápido e fácil a dados relevantes sobre determinado endereço.
                Além disso, o site conta com um header que permite com que os usuarios viagem por meio de rotas dinâmicas, possibilitando os usuarios a irem para outras páginas. </h2>                         
        </div>
    )
}

export default Sobre;