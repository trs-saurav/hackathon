import React from 'react';

export default function Hero() {
  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      {/* Background glowing orb */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
        zIndex: -1,
        borderRadius: '50%',
      }} />

      <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
        <div className="animate-fade-in">
          <span style={{ 
            display: 'inline-block',
            padding: '4px 12px', 
            borderRadius: '20px', 
            background: 'rgba(56, 189, 248, 0.1)',
            color: 'var(--text-accent)',
            fontSize: '0.875rem',
            fontWeight: 600,
            marginBottom: '1rem',
            border: '1px solid rgba(56, 189, 248, 0.2)'
          }}>
            Duality AI Challenge
          </span>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Offroad Autonomy <br />
            <span className="gradient-text">Segmentation</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Training robust computer vision models on synthetic digital twin environments for the future of Unmanned Ground Vehicles.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#demo" className="btn-primary">View Demo</a>
            <a href="#metrics" className="btn-secondary">Performance</a>
          </div>
        </div>
      </div>
    </section>
  );
}
