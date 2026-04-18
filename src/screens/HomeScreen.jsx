import { MOODS, SP, FONT_SERIF, label } from '../tokens';
import Orb from '../components/Orb';
import PulseRing from '../components/PulseRing';
import MoodPicker from '../components/MoodPicker';

export default function HomeScreen({ mood, setMood }) {
  const m = MOODS[mood];
  const bone = 'rgba(240,232,220,';

  const practices = [
    { n: 'i', title: m.cards[0], meta: 'Утро · 11 мин', dur: "11\u2032" },
    { n: 'ii', title: m.cards[1], meta: 'Дневник · 5 мин', dur: "5\u2032" },
    { n: 'iii', title: m.cards[2], meta: 'Тело · 9 мин', dur: "9\u2032" },
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100%', overflow: 'hidden', transition: 'background 1.2s ease' }}>
      <div style={{ position: 'absolute', inset: 0, background: m.bg, transition: 'background 1.2s ease', zIndex: 0 }} />
      <Orb style={{ top: -80, left: -60 }} color={m.orb1} opacity={0.5} w={260} h={260} />
      <Orb style={{ bottom: 120, right: -50 }} color={m.orb2} opacity={0.35} w={200} h={200} delay={3} />

      <div style={{ position: 'relative', zIndex: 1, padding: `50px ${SP.page}px 24px` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 26 }}>
          <div style={{ ...label(9), color: `${bone}.45)`, letterSpacing: '.2em' }}>19 апреля</div>
          <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 22, color: m.accent, transition: 'color 1.2s ease', letterSpacing: '.02em' }}>Frisson</div>
          <div style={{ ...label(9), color: m.accent, transition: 'color 1.2s ease', letterSpacing: '.2em' }}>{m.glyph}</div>
        </div>

        <div style={{ marginBottom: 22 }}>
          <div style={{ ...label(9), color: m.accent, letterSpacing: '.3em', marginBottom: 10, transition: 'color 1.2s ease' }}>{m.glyph} {m.salut}</div>
          <div style={{ fontFamily: FONT_SERIF, fontWeight: 300, fontSize: 38, lineHeight: 1.05, letterSpacing: '-.02em', color: `${bone}.95)` }}>
            Анастасия,<br />
            ты <em style={{ fontStyle: 'italic', color: m.accent, transition: 'color 1.2s ease' }}>{m.wordRu}</em>.
          </div>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 18, marginBottom: 26,
          padding: '18px 20px', borderRadius: 22,
          background: 'rgba(240,232,220,.05)', border: '0.5px solid rgba(240,232,220,.1)',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        }}>
          <PulseRing m={m} size={76} />
          <div>
            <div style={{ fontFamily: FONT_SERIF, fontWeight: 300, fontStyle: 'italic', fontSize: 52, color: `${bone}.95)`, lineHeight: 1, letterSpacing: '-.03em' }}>72</div>
            <div style={{ ...label(9), color: m.accent, letterSpacing: '.25em', marginTop: 5, transition: 'color 1.2s ease' }}>{m.energyLabel}</div>
            <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 15, color: `${bone}.45)`, marginTop: 3 }}>{m.sub}</div>
          </div>
        </div>

        <div style={{ marginBottom: 26 }}>
          <div style={{ ...label(9), color: m.accent, letterSpacing: '.3em', marginBottom: 14, transition: 'color 1.2s ease' }}>Состояние сегодня</div>
          <MoodPicker mood={mood} setMood={setMood} />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
            <div style={{ ...label(9), color: m.accent, letterSpacing: '.3em', transition: 'color 1.2s ease' }}>Сегодня</div>
            <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 14, color: `${bone}.4)` }}>все →</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {practices.map((p, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px',
                borderRadius: 20, background: 'rgba(240,232,220,.06)',
                border: `0.5px solid ${m.accent}22`,
                backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                transition: 'border-color 1.2s ease',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 14, flexShrink: 0,
                  background: m.accentDim, border: `0.5px solid ${m.accent}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 20, color: m.accent,
                  transition: 'background 1.2s ease, color 1.2s ease',
                }}>{p.n}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: FONT_SERIF, fontSize: 18, color: `${bone}.92)`, lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.title}</div>
                  <div style={{ ...label(9), letterSpacing: '.18em', color: `${bone}.4)`, marginTop: 3 }}>{p.meta}</div>
                </div>
                <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 15, color: m.accent, flexShrink: 0, transition: 'color 1.2s ease' }}>{p.dur}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
