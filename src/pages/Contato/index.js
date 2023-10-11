import './contato.css';
import Maps from '../../components/Maps';
import Form from '../../components/Form';

export default function Contato() {
    return (
        <div className="containerContato" >
            <div className="headerContato" >
                <h2>
                    Fale Conosco
                </h2>
                <p>
                    Home &gt; Contato
                </p>
            </div>

            <div className='formularioContrate' >                  <p>Entre em contato conosco</p>
                <h1>Preencha o formulário</h1>

            </div>

                <Form/>

            <Maps />
        </div>
    )
}