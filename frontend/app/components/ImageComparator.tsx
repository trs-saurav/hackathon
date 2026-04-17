'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ImageComparator() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="demo" className="section" style={{ background: 'rgba(11, 15, 25, 0.5)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Model <span className="gradient-text">Performance Demo</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Interactive comparison of the original desert terrain from the digital twin and the semantic segmentation output. Slide to explore.
          </p>
        </div>

        <div className="glass-card animate-fade-in delay-100" style={{ padding: '1rem', maxWidth: '900px', margin: '0 auto' }}>
          <div 
            ref={containerRef}
            style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '8px', cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
            onTouchMove={handleTouchMove}
          >
            {/* Base Image (Mask) */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
              <Image 
                src="/desert_mask.png" 
                alt="Segmentation Mask" 
                fill 
                style={{ objectFit: 'cover' }} 
                draggable={false}
              />
            </div>

            {/* Top Image (RGB) with clipping */}
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              bottom: 0, 
              width: `${sliderPosition}%`, 
              overflow: 'hidden',
              borderRight: '2px solid white'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', minWidth: containerRef.current?.getBoundingClientRect().width || 900 }}>
                <Image 
                  src="/desert_rgb.png" 
                  alt="Original RGB Image" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  draggable={false}
                />
              </div>
            </div>

            {/* Slider Handle */}
            <div style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: `${sliderPosition}%`,
              width: '2px',
              backgroundColor: 'white',
              transform: 'translateX(-50%)',
              pointerEvents: 'none'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32px',
                height: '32px',
                backgroundColor: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 10px rgba(0,0,0,0.5)'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12182B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l6-6-6-6M9 18l-6-6 6-6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
