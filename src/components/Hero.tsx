import { motion } from 'framer-motion';
import './Hero.css';

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background-glow" />

            <div className="container hero-content">
                <motion.div
                    className="hero-text-container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="badge">
                        <span className="badge-text">🚀 Acelere seu Negócio em 2026</span>
                    </div>

                    <h1 className="headline">
                        Transforme Cliques em <span className="highlight">Vendas Reais.</span>
                    </h1>

                    <p className="subheadline">
                        Domine o Tráfego Pago e Local com estratégias validadas que colocam dinheiro no seu bolso, não apenas likes.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Quero Escalar Meu Faturamento
                        </button>

                    </div>
                </motion.div>

                {/* Decoration for Desktop */}
                <motion.div
                    className="decoration-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 0.8, x: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <div className="circle circle-1" />
                    <div className="circle circle-2" />
                </motion.div>
            </div>
        </section>
    );
};
