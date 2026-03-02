import { useEffect } from 'react';

export function ProjectModal({ block, onClose }) {
    // Close on Escape key
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    const isOpen = !!block;

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: isOpen ? 'blur(4px)' : 'none',
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none',
                    transition: 'opacity 0.35s ease',
                    zIndex: 40,
                }}
            />

            {/* Panel */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    height: '100%',
                    width: 'min(440px, 94vw)',
                    transform: isOpen ? 'translateX(0)' : 'translateX(110%)',
                    transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                    zIndex: 50,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '28px 28px 36px',
                    background: 'rgba(10, 10, 26, 0.88)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    borderLeft: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '-24px 0 80px rgba(0,0,0,0.6)',
                    overflowY: 'auto',
                }}
            >
                {block && (
                    <>
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            style={{
                                alignSelf: 'flex-end',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                width: 36,
                                height: 36,
                                color: '#fff',
                                fontSize: 18,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'background 0.2s',
                                marginBottom: 28,
                            }}
                            onMouseEnter={(e) => (e.target.style.background = 'rgba(255,255,255,0.12)')}
                            onMouseLeave={(e) => (e.target.style.background = 'rgba(255,255,255,0.06)')}
                        >
                            ✕
                        </button>

                        {/* Accent bar */}
                        <div
                            style={{
                                width: 48,
                                height: 4,
                                borderRadius: 2,
                                background: `linear-gradient(90deg, ${block.color}, ${block.colorLight})`,
                                marginBottom: 24,
                            }}
                        />

                        {/* Title */}
                        <h2
                            style={{
                                fontSize: 32,
                                fontWeight: 800,
                                color: '#fff',
                                letterSpacing: '-0.02em',
                                fontFamily: "'Inter', sans-serif",
                                marginBottom: 6,
                            }}
                        >
                            {block.title}
                        </h2>
                        <p
                            style={{
                                fontSize: 14,
                                color: block.colorLight,
                                fontWeight: 500,
                                marginBottom: 24,
                                fontFamily: "'Inter', sans-serif",
                                letterSpacing: '0.04em',
                                textTransform: 'uppercase',
                            }}
                        >
                            {block.subtitle}
                        </p>

                        {/* Divider */}
                        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 24 }} />

                        {/* Description */}
                        <p
                            style={{
                                fontSize: 15,
                                lineHeight: 1.75,
                                color: 'rgba(255,255,255,0.65)',
                                fontFamily: "'Inter', sans-serif",
                                marginBottom: 32,
                            }}
                        >
                            {block.description}
                        </p>

                        {/* Tags */}
                        {block.tags.length > 0 && (
                            <div style={{ marginBottom: 32 }}>
                                <p
                                    style={{
                                        fontSize: 11,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,0.3)',
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        marginBottom: 12,
                                        fontFamily: "'Inter', sans-serif",
                                    }}
                                >
                                    Tech Stack
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {block.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            style={{
                                                padding: '5px 12px',
                                                borderRadius: 20,
                                                fontSize: 12,
                                                fontWeight: 600,
                                                fontFamily: "'Inter', sans-serif",
                                                color: block.colorLight,
                                                background: `${block.color}18`,
                                                border: `1px solid ${block.color}33`,
                                                letterSpacing: '0.03em',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Links */}
                        {block.links.length > 0 && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {block.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            display: 'block',
                                            padding: '12px 20px',
                                            borderRadius: 12,
                                            textAlign: 'center',
                                            fontSize: 14,
                                            fontWeight: 600,
                                            fontFamily: "'Inter', sans-serif",
                                            color: '#fff',
                                            background: `linear-gradient(135deg, ${block.color}aa, ${block.colorLight}66)`,
                                            border: `1px solid ${block.colorLight}33`,
                                            textDecoration: 'none',
                                            transition: 'opacity 0.2s, transform 0.2s',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.opacity = '0.85';
                                            e.target.style.transform = 'scale(1.02)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.opacity = '1';
                                            e.target.style.transform = 'scale(1)';
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}

                        {/* Hint */}
                        <p
                            style={{
                                marginTop: 'auto',
                                paddingTop: 32,
                                fontSize: 12,
                                color: 'rgba(255,255,255,0.2)',
                                fontFamily: "'Inter', sans-serif",
                                textAlign: 'center',
                            }}
                        >
                            Press <kbd style={{ background: 'rgba(255,255,255,0.08)', padding: '1px 6px', borderRadius: 4 }}>Esc</kbd> to close
                        </p>
                    </>
                )}
            </div>
        </>
    );
}
