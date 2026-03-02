export function ResetButton({ onReset }) {
    return (
        <div
            style={{
                position: 'fixed',
                bottom: 32,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 30,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
            }}
        >
            <button
                onClick={onReset}
                style={{
                    padding: '12px 28px',
                    borderRadius: 50,
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    transition: 'background 0.2s, border-color 0.2s, transform 0.15s',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.14)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)';
                    e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
                onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
                onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
            >
                <span style={{ fontSize: 16 }}>🔄</span>
                Reset Gravity
            </button>

            <p
                style={{
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.25)',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.05em',
                }}
            >
                Click blocks to explore • Drag to toss
            </p>
        </div>
    );
}
