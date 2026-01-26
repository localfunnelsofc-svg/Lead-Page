import { MdLocationOn, MdMonitor } from 'react-icons/md';
import { FaChartLine } from 'react-icons/fa';
import './Services.css';

export const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="container">
                <h2 className="section-title">Nossas Soluções</h2>

                <div className="cards-grid">
                    {/* Card 1: Tráfego Local */}
                    <div className="service-card glass-panel" style={{ borderColor: 'rgba(56, 189, 248, 0.4)' }}>
                        <div className="icon-container" style={{ backgroundColor: 'rgba(56, 189, 248, 0.2)', color: '#38BDF8' }}>
                            <MdLocationOn />
                        </div>
                        <h3 className="card-title">Tráfego Local</h3>
                        <p className="card-desc">
                            Seja encontrado por clientes na sua região no momento exato em que eles procuram pelo seu serviço no Google e Redes Sociais.
                        </p>
                        <button className="learn-more" style={{ color: '#38BDF8' }}>
                            Saiba mais →
                        </button>
                    </div>

                    {/* Card 2: Tráfego Pago */}
                    <div className="service-card glass-panel" style={{ borderColor: 'rgba(245, 158, 11, 0.4)' }}>
                        <div className="icon-container" style={{ backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#F59E0B' }}>
                            <FaChartLine />
                        </div>
                        <h3 className="card-title">Tráfego Pago</h3>
                        <p className="card-desc">
                            Campanhas de alta performance no Facebook, Instagram e Google Ads focadas em ROI e escala previsível de faturamento.
                        </p>
                        <button className="learn-more" style={{ color: '#F59E0B' }}>
                            Saiba mais →
                        </button>
                    </div>

                    {/* Card 3: Web Design */}
                    <div className="service-card glass-panel" style={{ borderColor: 'rgba(56, 189, 248, 0.4)' }}>
                        <div className="icon-container" style={{ backgroundColor: 'rgba(56, 189, 248, 0.2)', color: '#38BDF8' }}>
                            <MdMonitor />
                        </div>
                        <h3 className="card-title">Web Design</h3>
                        <p className="card-desc">
                            Sites modernos, velozes e otimizados para conversão. Transforme visitantes em leads qualificados com um design premium.
                        </p>
                        <button className="learn-more" style={{ color: '#38BDF8' }}>
                            Saiba mais →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
