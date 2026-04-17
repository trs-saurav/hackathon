import React from 'react';

export default function Timeline() {
  const steps = [
    { title: 'Environment Setup', desc: 'Configured Falcon account, downloaded synthetic datasets, and initialized the Miniconda environment.' },
    { title: 'Data Augmentation', desc: 'Addressed edge cases by applying transformations and handling occluded objects (e.g., Logs vs Grass).' },
    { title: 'Model Training', desc: 'Trained using `train.py` on Falcon-generated RGB images. Fine-tuned learning rates and epochs to minimize loss.' },
    { title: 'Evaluation on Novel Environments', desc: 'Ran `test.py` against unseen imagery of the same biome to ensure true generalizability and track IoU.' }
  ];

  return (
    <section className="section" style={{ background: 'rgba(11, 15, 25, 0.5)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Our <span className="gradient-text">Workflow</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            The end-to-end AI engineering process for the Offroad Autonomy Segmentation Challenge.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical line */}
          <div style={{ 
            position: 'absolute', left: '24px', top: '0', bottom: '0', width: '2px', 
            background: 'linear-gradient(to bottom, #38BDF8, rgba(56, 189, 248, 0.1))' 
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {steps.map((step, index) => (
              <div key={index} className="glass-card animate-fade-in" style={{ position: 'relative', marginLeft: '60px', animationDelay: `${index * 0.1}s` }}>
                {/* Timeline dot */}
                <div style={{ 
                  position: 'absolute', left: '-48px', top: '24px', width: '24px', height: '24px', 
                  borderRadius: '50%', background: '#0B0F19', border: '4px solid #38BDF8',
                  boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)', zIndex: 1
                }} />
                
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {index + 1}. {step.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
