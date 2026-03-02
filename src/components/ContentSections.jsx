export function ContentSections() {
    return (
        <div style={{ width: '100vw', height: '300vh' }}>

            {/* ── Page 1: Hero ────────────────────────────────────────── */}
            <section
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                }}
            >
                <p
                    style={{
                        fontSize: 13,
                        fontWeight: 500,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: 'rgba(167, 139, 250, 0.8)',
                        fontFamily: "'Outfit', sans-serif",
                        marginBottom: 20,
                    }}
                >
                    Creative Developer &amp; Digital Artist
                </p>

                {/* Floating nav hint chips */}
                <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                    {[
                        { label: '↓ Explore Toolkit', color: '#2dd4bf' },
                        { label: '↓ View Contacts', color: '#a78bfa' },
                    ].map((n) => (
                        <span
                            key={n.label}
                            style={{
                                padding: '6px 16px',
                                borderRadius: 20,
                                fontSize: 11,
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: n.color,
                                border: `1px solid ${n.color}44`,
                                background: `${n.color}11`,
                                fontFamily: "'Outfit', sans-serif",
                                animation: 'pulseChip 3s ease-in-out infinite',
                            }}
                        >
                            {n.label}
                        </span>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div style={{ position: 'absolute', bottom: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.6 }}>
                    <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', fontFamily: "'Outfit', sans-serif" }}>Scroll</span>
                    <div style={{ width: 1, height: 28, background: 'linear-gradient(to bottom, rgba(255,255,255,0.7), transparent)', animation: 'scrollPulse 2s infinite' }} />
                </div>
            </section>

            {/* ── Page 2: Toolkit & Theory ────────────────────────────── */}
            <section
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '0 8% 0 10%',
                }}
            >
                <div style={{ maxWidth: 520 }}>
                    {/* Section label */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                        <div style={{ width: 32, height: 2, background: 'linear-gradient(90deg, #2dd4bf, transparent)' }} />
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2dd4bf', fontFamily: "'Outfit', sans-serif" }}>
                            Toolkit &amp; Theory
                        </span>
                    </div>

                    <h2
                        style={{
                            fontSize: 'clamp(28px, 4.5vw, 56px)',
                            fontWeight: 800,
                            fontFamily: "'Outfit', sans-serif",
                            color: '#fff',
                            marginBottom: 14,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                        }}
                    >
                        Built on solid<br />
                        <span style={{ background: 'linear-gradient(90deg, #2dd4bf, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            foundations
                        </span>
                    </h2>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 40, fontFamily: "'Inter', sans-serif" }}>
                        My technical stack and academic foundations — bridging creative vision with engineering rigor.
                    </p>

                    <div style={{ marginBottom: 36 }}>
                        <h4 style={{ fontSize: 11, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 14, fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
                            Core Skills
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {['JavaScript (ES6+)', 'React.js', 'Three.js', 'React Three Fiber', 'GLSL Shaders', 'Tailwind CSS', 'Node.js', 'Git'].map((skill) => (
                                <span
                                    key={skill}
                                    style={{
                                        padding: '7px 14px',
                                        borderRadius: 8,
                                        background: 'rgba(45, 212, 191, 0.07)',
                                        border: '1px solid rgba(45, 212, 191, 0.2)',
                                        color: '#99f6e4',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        fontFamily: "'Inter', sans-serif",
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: 11, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 14, fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}>
                            Academic Focus
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {['Computer Science', 'Linear Algebra', 'Physics', 'Digital Arts & Design', 'Data Structures'].map((subject) => (
                                <span
                                    key={subject}
                                    style={{
                                        padding: '7px 14px',
                                        borderRadius: 8,
                                        background: 'rgba(59, 130, 246, 0.07)',
                                        border: '1px solid rgba(59, 130, 246, 0.2)',
                                        color: '#93c5fd',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        fontFamily: "'Inter', sans-serif",
                                    }}
                                >
                                    {subject}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Page 3: Contacts ────────────────────────────────────── */}
            <section
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '0 10% 0 8%',
                }}
            >
                <div style={{ maxWidth: 460, width: '100%' }}>
                    {/* Section label */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, justifyContent: 'flex-end' }}>
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a78bfa', fontFamily: "'Outfit', sans-serif" }}>
                            Get in Touch
                        </span>
                        <div style={{ width: 32, height: 2, background: 'linear-gradient(270deg, #a78bfa, transparent)' }} />
                    </div>

                    <h2
                        style={{
                            fontSize: 'clamp(28px, 4.5vw, 56px)',
                            fontWeight: 800,
                            fontFamily: "'Outfit', sans-serif",
                            color: '#fff',
                            marginBottom: 14,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            textAlign: 'right',
                        }}
                    >
                        Let&apos;s build<br />
                        <span style={{ background: 'linear-gradient(90deg, #a78bfa, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            something great
                        </span>
                    </h2>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 40, fontFamily: "'Inter', sans-serif", textAlign: 'right' }}>
                        Open to collaborations, freelance work, and exciting new projects.
                    </p>

                    {/* Glassmorphism contact cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

                        {/* GitHub */}
                        <a
                            href="https://github.com/part-time-penguin4"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 16,
                                padding: '18px 22px',
                                borderRadius: 16,
                                background: 'rgba(255,255,255,0.04)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                boxShadow: '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(167,139,250,0.08)';
                                e.currentTarget.style.borderColor = 'rgba(167,139,250,0.25)';
                                e.currentTarget.style.transform = 'translateX(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}
                        >
                            <div style={{
                                width: 40, height: 40, borderRadius: 10,
                                background: 'rgba(167,139,250,0.15)',
                                border: '1px solid rgba(167,139,250,0.25)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 18, flexShrink: 0,
                            }}>
                                ⌥
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 11, color: 'rgba(167,139,250,0.7)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif", marginBottom: 4 }}>
                                    GitHub
                                </div>
                                <div style={{ fontSize: 15, color: '#fff', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                                    /part-time-penguin4
                                </div>
                            </div>
                            <div style={{ fontSize: 18, color: 'rgba(167,139,250,0.5)' }}>↗</div>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:ysfdmrl5775@gmail.com"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 16,
                                padding: '18px 22px',
                                borderRadius: 16,
                                background: 'rgba(255,255,255,0.04)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                boxShadow: '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(236,72,153,0.08)';
                                e.currentTarget.style.borderColor = 'rgba(236,72,153,0.25)';
                                e.currentTarget.style.transform = 'translateX(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}
                        >
                            <div style={{
                                width: 40, height: 40, borderRadius: 10,
                                background: 'rgba(236,72,153,0.15)',
                                border: '1px solid rgba(236,72,153,0.25)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 18, flexShrink: 0,
                            }}>
                                ✉
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 11, color: 'rgba(236,72,153,0.7)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif", marginBottom: 4 }}>
                                    Email
                                </div>
                                <div style={{ fontSize: 15, color: '#fff', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                                    ysfdmrl5775@gmail.com
                                </div>
                            </div>
                            <div style={{ fontSize: 18, color: 'rgba(236,72,153,0.5)' }}>↗</div>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/in/yusuf-demirel-b98338351"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 16,
                                padding: '18px 22px',
                                borderRadius: 16,
                                background: 'rgba(255,255,255,0.04)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                boxShadow: '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(59,130,246,0.08)';
                                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.25)';
                                e.currentTarget.style.transform = 'translateX(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}
                        >
                            <div style={{
                                width: 40, height: 40, borderRadius: 10,
                                background: 'rgba(59,130,246,0.15)',
                                border: '1px solid rgba(59,130,246,0.25)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 18, flexShrink: 0,
                            }}>
                                in
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 11, color: 'rgba(59,130,246,0.7)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif", marginBottom: 4 }}>
                                    LinkedIn
                                </div>
                                <div style={{ fontSize: 15, color: '#fff', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                                    /yusuf-demirel-b98338351
                                </div>
                            </div>
                            <div style={{ fontSize: 18, color: 'rgba(59,130,246,0.5)' }}>↗</div>
                        </a>
                    </div>

                    {/* Footer note */}
                    <p style={{ marginTop: 28, fontSize: 12, color: 'rgba(255,255,255,0.2)', fontFamily: "'Inter', sans-serif", textAlign: 'right' }}>
                        Click any shape above to navigate · <kbd style={{ background: 'rgba(255,255,255,0.06)', padding: '1px 6px', borderRadius: 4 }}>Scroll</kbd> to explore
                    </p>
                </div>
            </section>
        </div>
    );
}
