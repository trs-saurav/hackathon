import React from 'react';
import Hero from './components/Hero';
import ImageComparator from './components/ImageComparator';
import Timeline from './components/Timeline';
import MetricsCard from './components/MetricsCard';

export default function Home() {
  return (
    <main style={{ paddingBottom: '4rem' }}>
      <Hero />
      <Timeline />
      <ImageComparator />
      <MetricsCard />
      
      {/* Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem 0', 
        marginTop: '4rem', 
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-secondary)'
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Duality AI Hackathon Submission.</p>
        </div>
      </footer>
    </main>
  );
}
