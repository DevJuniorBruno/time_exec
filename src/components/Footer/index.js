
import './footer.css';
import logofooter from '../../img/3.png';


export default function Footer(){
    return(
        <footer>
            <div className='footerTopContainer'>

                <div className='footerLft' >
                    <h2>
                        Oque Fazemos ?
                    </h2>
                    <p>Motoboy para entregas avulsas</p>
                    <p>Motoboy para delivery</p>
                    <p>motoboy para pequenas <br/> e medias mercadorias</p>
                    <p>Entregas de documentos</p>
                </div>

                <div className='footerCenter'>
                    <img 
                    src={logofooter} 
                    width={150}
                    />

                    <h3>Venha Crescer Com a Gente !</h3>
                </div>

                <div className='footerRgt' >
                    <h2>Nosso Contato :</h2>
                    <p>(11) xxxx-xxxxx</p>
                    <p>timeentregasexcutivas.com.com</p>
                    <p>Segunda a sabado das 06h ás 00h</p>
                </div>
            </div>

            <div className='footerBottom'>
                <p>@2023 Time Entregas Executivas. Todos os direitos reservados</p>
            </div>
        </footer>
    )
}