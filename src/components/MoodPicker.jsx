import { MOODS, MOOD_KEYS, FONT_SERIF, label } from '../tokens';

export default function MoodPicker({ mood, setMood }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
      {MOOD_KEYS.map(k => {
        const mk = MOODS[k];
        const active = k === mood;
        return (
          <div key={k} onClick={() => setMood(k)} style={{
            padding: '12px 8px', borderRadius: 16, cursor: 'pointer',
            border: `1.5px solid ${active ? mk.accent + '66' : 'rgba(240,232,220,.08)'}`,
            background: active ? mk.accentDim : 'rgba(240,232,220,.04)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            transform: active ? 'scale(1.04)' : 'scale(1)',
            transition: 'all .4s ease',
            boxShadow: active ? `0 0 20px ${mk.glow}` : 'none',
          }}>
            <div style={{
              fontFamily: FONT_SERIF, fontSize: 18, color: active ? mk.accent : 'rgba(240,232,220,.4)',
              transition: 'color .4s ease', lineHeight: 1,
            }}>{mk.glyph}</div>
            <div style={{
              ...label(8), color: active ? 'rgba(240,232,220,.9)' : 'rgba(240,232,220,.35)',
              letterSpacing: '.12em', transition: 'color .4s ease', textAlign: 'center',
            }}>{mk.nameRu}</div>
          </div>
        );
      })}
    </div>
  );
}
