import { MOODS, label } from '../tokens';

export default function NavBar({ screen, setScreen, mood }) {
  const m = MOODS[mood];
  const items = [
    { id: 'home', label: 'Дом', icon: (c) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg> },
    { id: 'library', label: 'Практики', icon: (c) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27z"/></svg> },
    { id: 'orbit', label: 'Орбита', icon: (c) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg> },
    { id: 'journal', label: 'Дневник', icon: (c) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
    { id: 'profile', label: 'Я', icon: (c) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg> },
  ];
  return (
    <div style={{
      padding: '10px 0 28px', display: 'flex', justifyContent: 'space-around',
      borderTop: '0.5px solid rgba(240,232,220,.1)',
      background: 'rgba(12,8,14,.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      position: 'relative', flexShrink: 0,
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent 5%, ${m.accent}44 30%, ${m.accent}88 50%, ${m.accent}44 70%, transparent 95%)` }} />
      {items.map(it => {
        const on = screen === it.id;
        const c = on ? m.accent : 'rgba(240,232,220,.3)';
        return (
          <div key={it.id} onClick={() => setScreen(it.id)} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer',
            padding: '6px 12px', borderRadius: 14, position: 'relative',
            background: on ? m.accentDim : 'transparent',
            transition: 'all .3s ease',
          }}>
            {on && <div style={{ position: 'absolute', top: -1, width: 14, height: 2, borderRadius: 2, background: m.accent, boxShadow: `0 0 8px ${m.accent}` }} />}
            <div style={{ filter: on ? `drop-shadow(0 0 6px ${m.accent}88)` : 'none', transform: on ? 'scale(1.1)' : 'scale(1)', transition: 'all .3s ease' }}>{it.icon(c)}</div>
            <span style={{ ...label(8), letterSpacing: '.15em', color: c }}>{it.label}</span>
          </div>
        );
      })}
    </div>
  );
}
