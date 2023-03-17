import React from 'react';
import Cabecalho from './header';
import Rodape from './footer';

function Home (){
    return (

        <>
    <Cabecalho/>


    <section className='caixa'>
        <div className='secao'>
            <div className='titulo-secao'>
                <h2>Dashboard</h2>
                <hr/>
                <br/>
                <p><i className="material-icons ">home</i>/Dashboard Brinquedos</p>
            </div>

            <div className='box-info'>
                <div className='box-info-single'>
                  <div className='info-text'>
                    <h3>Faturamento do dia</h3>
                    <p>R$100.000,00</p>
                  </div>
                  <i className='material-icons '>savings</i>
                </div>

                <div className='box-info-single'>
                  <div className='info-text'>
                    <h3>Faturamento do mês</h3>
                    <p>R$1.000.000,00</p>
                  </div>
                  <i className='material-icons '>savings</i>
                </div>

                <div className='box-info-single'>
                  <div className='info-text'>
                    <h3>Faturamento do mês</h3>
                    <p>R$1.000.000,00</p>
                  </div>
                  <i className='material-icons '>savings</i>
                </div>

                <div className='box-info-single'>
                  <div className='info-text'>
                    <h3>Faturamento do mês</h3>
                    <p>R$1.000.000,00</p>
                  </div>
                  <i className='material-icons '>savings</i>
                </div>
                
                <div className='box-info-single'>
                  <div className='info-text'>
                    <h3>Faturamento do mês</h3>
                    <p>R$1.000.000,00</p>
                  </div>
                  <i className='material-icons'>savings</i>
                </div>










        </div>

        <div className='feed'>
            <div className='feed-single'>
                <div className='feed-text'>.
                    <div className='circle-icon'> <div className='icon'><i className='material-icons tiny'>chat</i></div>   </div>
                    <span>Tarefas</span>
                </div>
                <div className='feed-time'>
                    <h5>30 minutos 04jan 11:00</h5>
                </div>
            </div>

            <div className='feed-single'>
                <div className='feed-text'>.
                    <div className='circle-icon'> <div className='icon'><i className='material-icons tiny'>chat</i></div>   </div>
                    <span>Tarefas</span>
                </div>
                <div className='feed-time'>
                    <h5>30 minutos 04jan 11:30</h5>
                </div>
            </div>

            <div className='feed-single'>
                <div className='feed-text'>.
                    <div className='circle-icon'> <div className='icon'><i className='material-icons tiny'>chat</i></div>   </div>
                    <span>Tarefas</span>
                </div>
                <div className='feed-time'>
                    <h5>30 minutos 04jan 12:00</h5>
                </div>
            </div>

            <div className='feed-single'>
                <div className='feed-text'>.
                    <div className='circle-icon'> <div className='icon'><i className='material-icons tiny'>chat</i></div>   </div>
                    <span>Tarefas</span>
                </div>
                <div className='feed-time'>
                    <h5>30 minutos 04jan 12:30</h5>
                </div>
            </div>

            <div className='feed-single'>
                <div className='feed-text'>.
                    <div className='circle-icon'> <div className='icon'><i className='material-icons tiny'>chat</i></div>   </div>
                    <span>Tarefas</span>
                </div>
                <div className='feed-time'>
                    <h5>30 minutos 04jan 13:10</h5>
                </div>
            </div>
            <div className='feed-single'>
                <div className='feed-text'>.
                    <div className='circle-icon'> <div className='icon'><i className='material-icons tiny'>chat</i></div>   </div>
                    <span>Tarefas</span>
                </div>
                <div className='feed-time'>
                    <h5>30 minutos 04jan 13:15</h5>
                </div>
            </div>
            <div className='feed-single'>
                <div className='feed-text'>.
                    <div className='circle-icon'> <div className='icon'><i className='material-icons tiny'>chat</i></div>   </div>
                    <span>Tarefas</span>
                </div>
                <div className='feed-time'>
                    <h5>30 minutos 04jan 13:20</h5>
                </div>
            </div>

            <div className='feed-single'>
                <div className='feed-text'>.
                    <div className='circle-icon'> <div className='icon'><i className='material-icons tiny'>chat</i></div>   </div>
                    <span>Tarefas</span>
                </div>
                <div className='feed-time'>
                    <h5>30 minutos 04jan 13:30</h5>
                </div>
            </div>
        </div>

    </div>
    </section>
    <Rodape/>
        </>

    );
}
export default Home;