import './servicos.css';
import SErvicesMTB from '../../img/servicesMTB.jpg';
import { BiLogoWhatsapp } from 'react-icons/bi';

import { FaRoute } from 'react-icons/fa';
import { TbChartBubbleFilled } from 'react-icons/tb';
import { GiJigsawBox } from 'react-icons/gi';
import { SiGoogledocs } from 'react-icons/si';
import { HiShoppingCart } from 'react-icons/hi'
import { FaFolderOpen } from 'react-icons/fa'
import { BsFillBox2Fill } from 'react-icons/bs';
import { MdFastfood } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
 

import LottieAnimation from "../../components/Animation/index";
import LottieHand from "../../components/AnimationLo/index";
import LottieCel from '../../components/animationCel/index';


export default function Servicos() {
    return (
        <div className="containerServices" >
            <div className="headerServices" >
                <h2>
                    Serviços
                </h2>
                <p>
                    Home &gt; Serviços
                </p>
            </div>

            <div className='infoServices' >
                <img alt='motoboy_services' src={SErvicesMTB} className='mtbServices' />

                <div className='textInfo' >
                    <h2>
                        ---- Motoboy na Grande São Paulo ----
                    </h2>
                    <h1>Serviço de entrega rápida em toda grande São Paulo e interior, solução para ajudar sua empresa crescer</h1>
                    <p>
                        Atendemos pessoas físicas e jurídicas, através de serviços avulsos ou contrato mensal.
                    </p>
                    <p>
                        Realizamos entregas rápidas de pequenos volumes, malotes, encomendas, distribuição de brindes, retirada de exames laboratoriais, vouchers, passagens aéreas, cartórios, repartições públicas, bancos, entre outros.
                    </p>
                    <button className='btnWSTAP' >
                        <BiLogoWhatsapp size={25} />
                        COTAÇÃO PELO WHATSAPP
                    </button>
                </div>
            </div>

            <div className='services' >
                <h2>---- Melhor custo benefício para você ou a sua empresa ----</h2>
                <h1>Precisando agilizar suas entregas?
                    Nós fazemos isso por você!
                </h1>
                <div className='containerBoxServices' >
                    <div className='boxServices' >
                        <FaRoute size={50} color='white'/>
                        <h2>Ponto-a-Ponto</h2>
                        <p>
                        Serviços de entregas rápidas de encomendas leves de um ponto para o outro da cidade, atende a pessoas físicas e jurídicas. O valor do serviço é definido previamente de acordo com a tabela de pontos, em função da distância.
                        </p>
                    </div>
                    <div className='boxServices' >
                    <TbChartBubbleFilled size={50} color='white'/>
                        <h2>Avulso</h2>
                        <p>
                        Serviço destinado para: cartórios, bancos repartições públicas e outros serviços com espera ou filas. Valor do serviço é definido previamente, mas se houver demora no atendimento será cobrado um custo adicional.                        </p>
                    </div>
                    <div className='boxServices' >
                    <GiJigsawBox size={50} color='white'/>
                        <h2>Mensal</h2>
                        <p>
                        Conheça a facilidade de efetuar um único pagamento após o uso. Você usa o quanto quiser e no final do mês encaminhamos a cobrança!                      </p>
                    </div>
                </div>

                

            </div>
                <div className='contrate'>
                    <h2>
                        ---- Motoboy para entrega em São Paulo ----
                    </h2>
                    <h1>Contratar a Time Entregas Executivas é simples e rápido</h1>
                    <section className='contentLottie'>
                        <LottieCel/>
                        <LottieAnimation/>
                        <LottieHand />
                </section>
                </div>

            <div className='services02' >
                    <h2>---- Somos especializados em entregas rápidas de documentos e pequenos volumes. ----</h2>

                    <h1>Economize tempo e dinheiro trabalhando com a Time Entregas Executivas. Acompanhe o andamento do seu pedido e pague um preço justo.</h1>

                    <div className='containerBoxServices'>  

                    <div className='boxServices02'>
                    <SiGoogledocs size={50} color='white'/>
                        <h2>
                            Entrega de documentos urgentes
                        </h2>
                        <p>
                            A rapidez e confiança na entrega de documentos importantes garante que prazos sejam cumpridos.
                        </p>
                    </div>
                    <div className='boxServices02'>
                    <HiShoppingCart size={50} color='white'/>
                        <h2>
                        Entrega e retirada de produtos E-Commerce
                        </h2>
                        <p>
                        Mais agilidade e rapidez nas entregas do seu e-commerce ou marketplace.
                        </p>
                    </div>

                    <div className='boxServices02'>
                    <FaFolderOpen size={50} color='white'/>
                        <h2>
                        Cartórios e Repatições Públicas
                        </h2>
                        <p>
                        Garantimos que seus prazos sejam cumpridos na hora de entregar ou transportar documentos importantes.
                        </p>
                    </div>

                    </div>

                    <div className='containerBoxServices'>  

                    <div className='boxServices02'>
                        <BsFillBox2Fill size={50} color='white'/>
                        <h2>
                            Entrega de documentos urgentes
                        </h2>
                        <p>
                            A rapidez e confiança na entrega de documentos importantes garante que prazos sejam cumpridos.
                        </p>
                    </div>
                    <div className='boxServices02'>
                        <MdFastfood size={50} color='white' />
                        <h2>
                        Entrega e retirada de produtos E-Commerce
                        </h2>
                        <p>
                        Mais agilidade e rapidez nas entregas do seu e-commerce ou marketplace.
                        </p>
                    </div>

                    <div className='boxServices02'>
                        <GiShoppingBag size={50} color='white'/>
                        <h2>
                        Cartórios e Repatições Públicas
                        </h2>
                        <p>
                        Garantimos que seus prazos sejam cumpridos na hora de entregar ou transportar documentos importantes.
                        </p>
                    </div>
                    </div>
                </div>

                <div className='containerAtendimento' >
                    <div className="imgFundo" ></div>
                    <div className='sobre_escura' >
                        <h3>Atendimento Imediato</h3>
                        <h1>
                        Precisando fazer uma entrega ou retirada com urgência?
                        </h1>
                        <p>
                        Entre agora em contato com a Time Entregas Executivas! Peça uma cotação pelo nosso WhatsApp.
                        </p>
                        <button className='btnWSTA2' >
                        <BiLogoWhatsapp size={25} />
                        COTAÇÃO PELO WHATSAPP
                    </button>
                    </div>
                </div>




        </div>
    )
}