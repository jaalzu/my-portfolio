import { useState, useEffect } from 'react';

interface Props {
  title: string;
  modalData: {
    image: string;
    historia: string;
    patrones: string;
    stack: string;
  };
}

export default function ProjectCardWithModal({ title, modalData }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--color-primary, #79fffd)',
          fontSize: '0.9rem',
          cursor: 'pointer',
          padding: 0,
          margin: 0,
          textAlign: 'left',
          transition: 'all 0.3s ease',
          display: 'block'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
      >
        Ver más →
      </button>

      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '2rem',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(180deg, rgba(45, 51, 48, 0.95) 0%, rgba(22, 22, 22, 0.95) 50%, rgba(26, 28, 28, 0.95) 100%)',
              borderRadius: '28px',
              border: '1px solid rgba(255, 255, 255, 0.186)',
              boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.5), inset 0px 4px 4px rgba(121, 255, 253, 0.178)',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              animation: 'slideUp 0.3s ease'
            }}
          >
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--color-primary, #79fffd)',
                transition: 'all 0.3s ease',
                zIndex: 10
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div style={{ padding: '2rem' }}>
              <h2 style={{
                fontSize: '2rem',
                color: 'var(--color-primary, #79fffd)',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                {title}
              </h2>
              
              <div style={{
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <img src={modalData.image} alt={title} style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }} />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: 'var(--color-primary, #79fffd)',
                  marginBottom: '0.8rem'
                }}>
                  📖 La Historia: Cómo Surgió el Proyecto
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.85)'
                }}>
                  {modalData.historia}
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: 'var(--color-primary, #79fffd)',
                  marginBottom: '0.8rem'
                }}>
                  🧩 Patrones de Arquitectura y Diseño de Código
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.85)'
                }}>
                  {modalData.patrones}
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: 'var(--color-primary, #79fffd)',
                  marginBottom: '0.8rem'
                }}>
                  🛠️ Stack Tecnológico Fundamental
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.85)'
                }}>
                  {modalData.stack}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}