import './Process.css';

export const Process = () => {
    return (
        <section className="process-section" id="methodology">
            <div className="container">
                <h2 className="process-title">Como Funciona</h2>
                <p className="process-subtitle">Nossa metodologia comprovada para escalar seus resultados.</p>

                <div className="steps-grid">
                    {/* Step 1 */}
                    <div className="step-card">
                        <div className="number-container">01</div>
                        <h3 className="step-title">Análise Profunda</h3>
                        <p className="step-desc">
                            Estudamos seu mercado, concorrentes e público-alvo para criar uma estratégia personalizada.
                        </p>
                    </div>

                    <div className="connector" />

                    {/* Step 2 */}
                    <div className="step-card">
                        <div className="number-container">02</div>
                        <h3 className="step-title">Estruturação</h3>
                        <p className="step-desc">
                            Criamos Landing Pages de alta conversão e configuramos suas campanhas de Tráfego Pago.
                        </p>
                    </div>

                    <div className="connector" />

                    {/* Step 3 */}
                    <div className="step-card">
                        <div className="number-container">03</div>
                        <h3 className="step-title">Otimização Contínua</h3>
                        <p className="step-desc">
                            Monitoramos métricas diariamente e ajustamos as campanhas para maximizar seu ROI.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
