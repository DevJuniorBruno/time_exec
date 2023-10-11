import './quemsomos.css';

import confereMtboy from '../../img/confereMtboy.jpg';

import {BiLogoWhatsapp } from 'react-icons/bi';
import { BsFillBuildingFill } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { MdDeliveryDining } from 'react-icons/md'
import { FaPeopleCarry } from 'react-icons/fa';
import { ImEye } from 'react-icons/im';
import { FaHandshakeAngle } from 'react-icons/fa6';


export default function QuemSomos() {
    return (
        <div className="containerQS" >
            <div className='headerQS' >
                <h2>
                    Time Entregas Executivas
                </h2>
                <p>
                    Home &gt; Quem Somos
                </p>
            </div>

            <div className='infoQS' >
                <div className='textInfo' >
                    <p>
                        Com um excelente departamento operacional, oferecemos serviços; com preços justos, seguro e rápido, pois nossa equipe é composta por profissionais treinados e eficientes.
                    </p>
                    <p>
                        Moderna, e com avançada tecnologia, a Exclusive trabalha com o que há de melhor em comunicação hoje no mercado. Todos os colaboradores fazem uso de telefones celulares ou radio, que viabiliza o contato imediato; evitando assim possíveis demoras no atendimento ao cliente.
                    </p>
                    <p>
                        Nosso compromisso é proporcionar à sua empresa maior flexibilidade para conquistar novos negócios, atender cada vez melhor a seus clientes e ser muito mais competitiva.
                    </p>
                </div>
                <div className='textInfoRgt'>
                    <h1>
                        Precisa de um Profissional Motoboy para suas entregas? Ligue 11 XXXXX- XXXX ou pelo WhatsApp 11 XXXXX- XXXX
                    </h1>
                    <p>
                        A Time Entregas Executivas foi criada em 2018, atuando no mercado com uma vasta experiência e tem como foco principal serviços na área de moto entrega, esta presente nos principais segmentos empresariais com o objetivo de suprir uma grande carência no mercado de serviços, mantendo acima de tudo a credibilidade, segurança e a qualidade.
                    </p>
                </div>

            </div>

            <div className="conceito" >
                <div className='boxConceito' >
                    <FaPeopleCarry size={60} />
                    <h1>Nossa Missão</h1>
                    <p>Prestar serviços com segurança, garantindo a satisfação dos clientes ,da empresa, e dos colaboradores.</p>
                </div>
                <div className='boxConceito' >
                    <ImEye size={60} />
                    <h1>Nossa Visão</h1>
                    <p>Ser reconhecida e respeitada e excelência dos serviços prestados.</p>
                </div>
                <div className='boxConceito' >
                    <FaHandshakeAngle size={60} />
                    <h1>Nossos Valores</h1>
                    <p>O colaborador, a alma que propicia a realização de nossa missão e alcançar a nossa visão. O cliente , a razão de nossa existência.</p>
                </div>


            </div>

            <div className='numbers' >
                <div className='numbersTitle' >
                    <h2>Motoboy na Grande São Paulo</h2>
                    <h1>Realizamos Serviços de Entregas Rápidas com Motoboys</h1>
                </div>



                <div className='numbersIcons' >
                    <div className='icons' >
                        < BsFillBuildingFill size={40} />
                        <h1>+5</h1>
                        <p>Anos de Atuação</p>
                    </div>
                    <div className='icons' >
                        < HiUserGroup size={40} />
                        <h1>+1211</h1>
                        <p>Clientes Atendidos</p>
                    </div> <div className='icons' >
                        < MdDeliveryDining size={40} />
                        <h1>+400</h1>
                        <p>Motoboys por SP</p>
                    </div>
                </div>

            </div>

            <div className='containerFE' >
                <img alt='motoboy_conferindo' src={confereMtboy} className='imgFE' />

                <div className='fe' >
                    <p>Empresa de Motoboy em São Paulo</p>
                    <strong><h1>Frota e Equipe</h1></strong>
                    <p>Oferecemos a todos os nossos clientes, serviços de moto-frete, se utilizando de veículos de pequeno porte, como motos e utilitários.</p>
                    <p>
                    Nossos profissionais são bem treinados, uniformizados e possuem telefone para comunicação em qualquer momento. Todos os nossos colaboradores são registrados conforme CLT e estão sempre aptos a prestar o melhor serviço, com agilidade e concordância com as necessidades dos nossos clientes.
                    </p>

                   <button className='btnWSTAP' >
                    <BiLogoWhatsapp size={25}    />
                   COTAÇÃO PELO WHATSAPP
                   </button>
                </div>
            </div>
        </div>
    )
}