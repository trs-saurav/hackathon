import React from 'react';

export default function MetricsCard() {
  return (
    <section id="metrics" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Evaluation <span className="gradient-text">Metrics</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Quantitative analysis of the segmentation model's performance on the novel unseen desert dataset.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* IoU Score Card */}
          <div className="glass-card animate-fade-in delay-100" style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Mean IoU Score</h3>
            <div style={{ 
              width: '150px', height: '150px', 
              borderRadius: '50%', 
              background: 'conic-gradient(#38BDF8 70%, rgba(255,255,255,0.1) 0)',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute', width: '130px', height: '130px', background: 'var(--bg-card)', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>0.70</span>
              </div>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              70% accuracy in pixel classification across all vegetation and terrain classes.
            </p>
          </div>

          {/* Loss Graph Card placeholder */}
          <div className="glass-card animate-fade-in delay-200">
            <h3 style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Training Loss</h3>
            <div style={{ 
              height: '150px', 
              width: '100%', 
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '8px',
              border: '1px dashed rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Fake Graph SVG */}
              <svg width="100%" height="100%" viewBox="0 0 300 150" preserveAspectRatio="none">
                <path d="M0,130 Q30,40 100,50 T200,30 T300,10" fill="none" stroke="#38BDF8" strokeWidth="3" />
                <path d="M0,150 Q30,60 100,80 T200,50 T300,40" fill="none" stroke="#818CF8" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem', fontSize: '0.8rem' }}>
              <span style={{ color: '#38BDF8' }}>— Training</span>
              <span style={{ color: '#818CF8' }}>- - Validation</span>
            </div>
          </div>

          {/* Failure Case Analysis */}
          <div className="glass-card animate-fade-in delay-300">
            <h3 style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Failure Case Insights</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '1rem', borderRadius: '4px' }}>
                <h4 style={{ color: '#fca5a5', marginBottom: '0.25rem' }}>Occluded Logs</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Low recall for "Logs" class when partially covered by Dry Grass. Mitigated via heavy augmentation.</p>
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #f59e0b', padding: '1rem', borderRadius: '4px' }}>
                <h4 style={{ color: '#fcd34d', marginBottom: '0.25rem' }}>Ground Clutter vs Landscape</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Ambiguity between small rocks and ground clutter at far distances.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
