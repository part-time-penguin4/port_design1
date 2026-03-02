import { useStore } from '../store';

export function Navbar() {
    const scrollToPage = useStore((s) => s.scrollToPage);

    const links = [
        { label: 'Home', page: 0, color: '#93c5fd' },
        { label: 'Toolkit', page: 1, color: '#99f6e4' },
        { label: 'Contacts', page: 2, color: '#c4b5fd' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                borderRadius: 50,
                background: 'rgba(10, 10, 30, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
        >
            <span
                onClick={() => scrollToPage(0)}
                style={{
                    marginRight: 12,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 800,
                    fontSize: 16,
                    background: 'linear-gradient(135deg, #a78bfa, #f472b6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.02em',
                    cursor: 'pointer',
                }}
            >
                ✦ Portfolio
            </span>

            <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.1)', marginRight: 8 }} />

            {links.map((link) => (
                <button
                    key={link.label}
                    onClick={() => scrollToPage(link.page)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: 13,
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                        cursor: 'pointer',
                        padding: '6px 16px',
                        borderRadius: 20,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.color = link.color;
                        e.target.style.background = `${link.color}15`;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = 'rgba(255,255,255,0.5)';
                        e.target.style.background = 'transparent';
                    }}
                >
                    {link.label}
                </button>
            ))}
        </nav>
    );
}
