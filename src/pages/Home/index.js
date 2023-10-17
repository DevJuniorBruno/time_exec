import { Link } from "react-router-dom";
import './home.css'

import Motoboy from '../../img/motoboy.jpg';
import motoboyEntrega from '../../img/motoboyEntrega.jpg';
import LottieAnimation from "../../components/Animation/index";
import LottieHand from "../../components/AnimationLo/index";
import LottieCel from '../../components/animationCel/index';

function Home() {
    return (
        <div>
            <main>
                <section className='module parallax parallax-1'>
                    <h1 id='saibamais'>TIME ENTREGAS EXECUTIVAS </h1>
                    <div className='divButton'>
                        <Link className='button' to='clinica'>Saiba mais</Link>
                    </div>
                </section>

                <section className="apresentacaoContainer" >
                    <div  className="apresentacao" >
                        <img className='motoboy' src={Motoboy} alt='motoboy'
                            width={400} />

                        <div className="infoApresentacao" >
                            <h1>DEMORA NA ENTREGA? <br />
                                CONOSCO NÃO MAIS!</h1>
                            <h3>
                                Realizamos entregas rápidas de pequenos volumes, malotes, encomendas, distribuição de brindes, retirada de exames laboratoriais, vouchers, passagens aéreas, cartórios, repartições públicas, bancos, entre outros.
                            </h3>
                            <p>
                                Nosso compromisso é proporcionar à sua empresa maior flexibilidade para conquistar novos negócios, atender cada vez melhor a seus clientes e ser muito mais competitiva.

                                Com o objetivo de suprir uma grande carência no mercado de serviços, mantendo acima de tudo a credibilidade, transparência e a qualidade. Nosso compromisso é proporcionar à sua empresa maior flexibilidade para conquistar novos negócios, atender cada vez melhor a seus clientes e ser muito mais competitiva.
                            </p>
                        </div>
                    </div>

                </section>

                <section className="planoContainer">
                    <div className="plano" >

                    <div className="planoInfo" >
                        <h1>
                            Atendemos pessoas físicas e jurídicas, através de serviços avulsos ou contrato mensal
                        </h1>

                        <h2>
                            ENTREGAS CONTRATO MENSAL
                        </h2>
                        <p>
                        Para empresas que precisam de serviços rotineiros e diários, com exclusividade de atendimento.
                        </p>
                        <p>
                        Temos uma opção de contrato para você empresário que tem uma demanda fixa de entregas, malotes, produtos e serviços. Você pode optar pelos planos de contrato, por número de entregas, horas ou Kms. Antecipando os gastos da sua empresa com Motoboy.
                        </p>
                        <h2>
                            MOTOBOY EM SÃO PAULO PARA ENTREGAS AVULSAS
                        </h2>
                        <p>
                        Ideal para quem precisa de entregas e retiradas imediatas, que podem demandar de espera em locais e retorno no mesmo dia.
                        </p>
                        <p>
                        Serviços avulsos, atendemos corporativo e pessoa física; essa modalidade possui preço a partir de R$ 22,00 por entrega/coleta;
                        </p>

                    </div>

                    <img src={motoboyEntrega} 
                    className='motoboyEntrega' 
                    alt="entrega do motoboy"
                    width={400} />
                    </div>
                </section>

                <section className='module_content'>
                        <LottieCel/>
                        <LottieAnimation/>
                        <LottieHand />
                </section>

                <section className='module info'>
                    <div className='container-infos'>
                        <h2>Entre em contato</h2>
                        <p>
                            Teremos o maior prazer em lhe atender.
                        </p>
                        <div className='divButton'>
                            <Link className='button' to='clinica'>Contato</Link>
                        </div>

                    </div>
                </section>

            </main>
        </div>


    )
}
export default Home;