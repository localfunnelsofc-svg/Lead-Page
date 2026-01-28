import { useState } from 'react';
import { MdPerson, MdCheckCircle, MdLock, MdWeb, MdRocketLaunch, MdArrowForward } from 'react-icons/md';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import logoImg from '../assets/logo.png';

export const Footer = () => {
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [site, setSite] = useState('');
    const [challenge, setChallenge] = useState('');

    const handleWhatsAppSubmit = () => {
        if (!name || !whatsapp) {
            alert('Por favor, preencha pelo menos seu Nome e WhatsApp.');
            return;
        }

        const message = `🚀 *NOVA SOLICITAÇÃO DE CONSULTORIA*\n\n` +
            `*Nome:* ${name}\n` +
            `*WhatsApp:* ${whatsapp}\n` +
            `*Site:* ${site || 'Não informado'}\n` +
            `*Maior Desafio:* ${challenge || 'Não informado'}\n\n` +
            `--------------------------------\n` +
            `Vim pela Landing Page e quero meu plano de ação!`;

        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = '5511975760654';
        const link = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(link, '_blank');
    };

    return (
        <footer className="footer-section" id="contact">
            <div className="container footer-content">
                {/* Text Column */}
                <div className="footer-text-column">
                    <div className="footer-badge">
                        <span className="footer-badge-text">Vagas Limitadas para Consultoria</span>
                    </div>

                    <h2 className="footer-cta-title">
                        Pronto para <span style={{ color: 'var(--secondary-orange)' }}>Dobrar seu Faturamento?</span>
                    </h2>

                    <p className="footer-cta-desc">
                        Preencha o formulário e receba um <strong>Plano de Ação Personalizado</strong> gratuito para o seu negócio.
                    </p>

                    <div className="benefits-list">
                        <div className="benefit-item">
                            <MdCheckCircle size={20} color="var(--primary-blue)" />
                            <span className="benefit-text">Análise de Concorrentes</span>
                        </div>
                        <div className="benefit-item">
                            <MdCheckCircle size={20} color="var(--primary-blue)" />
                            <span className="benefit-text">Estratégia de Tráfego</span>
                        </div>
                        <div className="benefit-item">
                            <MdCheckCircle size={20} color="var(--primary-blue)" />
                            <span className="benefit-text">Sessão de Diagnóstico de 15min</span>
                        </div>
                    </div>
                </div>

                {/* Form Card */}
                <div className="form-card">
                    <h3 className="form-header">Solicitar Consultoria</h3>

                    <div className="input-group">
                        <MdPerson className="input-icon" />
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Seu Nome Completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <FaWhatsapp className="input-icon" />
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Seu WhatsApp (com DDD)"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <MdWeb className="input-icon" />
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Site da empresa (se tiver)"
                            value={site}
                            onChange={(e) => setSite(e.target.value)}
                        />
                    </div>

                    <div className="input-group" style={{ alignItems: 'flex-start' }}>
                        <MdRocketLaunch className="input-icon" style={{ marginTop: '16px' }} />
                        <textarea
                            className="form-textarea"
                            placeholder="Qual seu maior desafio hoje?"
                            value={challenge}
                            onChange={(e) => setChallenge(e.target.value)}
                        />
                    </div>

                    <button className="submit-btn" onClick={handleWhatsAppSubmit}>
                        QUERO MEU PLANO AGORA
                        <MdArrowForward size={20} />
                    </button>

                    <p className="security-text">
                        <MdLock size={12} /> Seus dados estão 100% seguros.
                    </p>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <div>
                        <img src={logoImg} alt="LocalFunnels" className="footer-logo-image" />
                        <p className="copyright">© 2026 LocalFunnels. Todos os direitos reservados.</p>
                    </div>

                    <div className="social-row">
                        <a href="https://www.instagram.com/localfunnels.ofc" target="_blank" rel="noreferrer" className="social-btn">
                            <FaInstagram size={20} />
                        </a>
                        <button className="social-btn">
                            <FaLinkedin size={20} />
                        </button>
                        <button className="social-btn">
                            <FaWhatsapp size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
