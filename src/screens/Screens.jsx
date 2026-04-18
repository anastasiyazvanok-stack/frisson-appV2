// Library, Orbit, Journal, Profile screens — Wild v2

import React, { useState, useEffect } from 'react'
import { MOODS, MOOD_KEYS, SP, TYPE, FONT_SERIF, label, body } from '../tokens'
import Orb from '../components/Orb'

const bone = (op = .92) => `rgba(240,232,220,${op})`;

// ─── LIBRARY ────────────────────────────────────────────────
export function LibraryScreen({ mood, setMood }) {
  const m = MOODS[mood];
  const [activeKey, setActiveKey] = useState(mood);
  useEffect(() => setActiveKey(mood), [mood]);

  const allPractices = {
    cheetah: [
      { title: 'Возвращение к инстинкту', meta: 'Сила · Дыхание', dur: "11′", free: true },
      { title: 'Письмо силы', meta: 'Дневник', dur: "5′", free: true },
      { title: 'Тело знает', meta: 'Телесность', dur: "9′" },
      { title: 'Огонь в центре', meta: 'Медитация', dur: "14′" },
    ],
    peacock: [
      { title: 'Раскрытие', meta: 'Женское · Дыхание', dur: "12′", free: true },
      { title: 'Письмо желаний', meta: 'Дневник', dur: "7′" },
      { title: 'Движение тела', meta: 'Телесность', dur: "18′" },
      { title: 'Магнетизм', meta: 'Медитация', dur: "10′" },
    ],
    luna: [
      { title: 'Медитация на луну', meta: 'Лунный цикл', dur: "15′", free: true },
      { title: 'Намерение под звёздами', meta: 'Дневник', dur: "8′" },
      { title: 'Визуализация', meta: 'Образ', dur: "12′" },
      { title: 'Глубокое слушание', meta: 'Медитация', dur: "20′" },
    ],
    tigress: [
      { title: 'Теневая работа', meta: 'Глубина', dur: "18′", free: true },
      { title: 'Письмо из будущего', meta: 'Дневник', dur: "10′" },
      { title: 'Новая норма', meta: 'Медитация', dur: "14′" },
      { title: 'Я — это порог', meta: 'Практика', dur: "22′" },
    ],
  };
  const mk = MOODS[activeKey];
  const list = allPractices[activeKey];

  return (
    <div style={{ position: 'relative', minHeight: '100%', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: m.bg, transition: 'background 1.2s ease', zIndex: 0 }} />
      <Orb style={{ top: -60, right: -60 }} color={m.orb1} opacity={0.4} w={220} h={220} />

      <div style={{ position: 'relative', zIndex: 1, padding: `50px ${SP.page}px 24px` }}>

        <div style={{ ...label(9), color: bone(.45), letterSpacing: '.3em', marginBottom: 6 }}>БИБЛИОТЕКА</div>
        <div style={{ fontFamily: FONT_SERIF, fontWeight: 300, fontSize: 36, color: bone(), letterSpacing: '-.02em', marginBottom: 24 }}>Практики</div>

        {/* mood filter tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, overflowX: 'auto' }}>
          {MOOD_KEYS.map(k => {
            const mk2 = MOODS[k];
            const on = activeKey === k;
            return (
              <div key={k} onClick={() => setActiveKey(k)} style={{
                padding: '10px 14px', borderRadius: 9999, cursor: 'pointer', flexShrink: 0,
                background: on ? mk2.accentDim : 'rgba(240,232,220,.04)',
                border: `1px solid ${on ? mk2.accent + '55' : 'rgba(240,232,220,.08)'}`,
                ...label(9), letterSpacing: '.18em',
                color: on ? mk2.accent : bone(.45),
                boxShadow: on ? `0 0 14px ${mk2.glow}` : 'none',
                transition: 'all .35s ease',
              }}>{mk2.glyph} {mk2.nameRu}</div>
            );
          })}
        </div>

        {/* list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {list.map((p, i) => (
            <div key={p.title} style={{
              display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px',
              borderRadius: 20, background: 'rgba(240,232,220,.06)',
              border: `0.5px solid ${mk.accent}22`,
              position: 'relative', overflow: 'hidden',
              backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
            }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2.5, background: `linear-gradient(to bottom, ${mk.accent}, ${mk.accent}33)` }} />
              <div style={{ width: 38, height: 38, borderRadius: 13, flexShrink: 0, background: mk.accentDim, border: `0.5px solid ${mk.accent}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 18, color: mk.accent }}>
                {['i','ii','iii','iv'][i]}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: FONT_SERIF, fontSize: 18, color: bone(), lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.title}</div>
                <div style={{ ...label(9), color: mk.accent, letterSpacing: '.18em', marginTop: 2 }}>{p.meta}</div>
              </div>
              {p.free
                ? <div style={{ width: 30, height: 30, borderRadius: 9999, background: mk.accentDim, border: `1px solid ${mk.accent}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: mk.accent, flexShrink: 0 }}>▶</div>
                : <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 14, color: bone(.3), flexShrink: 0 }}>🔒</div>
              }
              <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 14, color: mk.accent, marginLeft: 4, flexShrink: 0 }}>{p.dur}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── ORBIT ──────────────────────────────────────────────────
export function OrbitScreen({ mood }) {
  const m = MOODS[mood];
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 50);
    return () => clearInterval(id);
  }, []);
  const t = tick * 0.012;

  return (
    <div style={{ minHeight: '100%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: `${SP.xl}px ${SP.page}px` }}>
      <div style={{ position: 'absolute', inset: 0, background: m.bg, transition: 'background 1.2s ease', zIndex: 0 }} />
      <Orb style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }} color={m.orb1} opacity={0.4} w={280} h={280} />
      <Orb style={{ bottom: '10%', right: -40 }} color={m.orb2} opacity={0.25} w={180} h={180} delay={4} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
        <div style={{ ...label(9), color: m.accent, letterSpacing: '.3em', marginBottom: 8, transition: 'color 1.2s ease' }}>ОРБИТА</div>
        <div style={{ fontFamily: FONT_SERIF, fontWeight: 300, fontSize: 34, color: bone(), letterSpacing: '-.02em', marginBottom: 32 }}>Карта внутреннего мира</div>

        {/* animated orbit rings */}
        <div style={{ position: 'relative', width: 240, height: 240, margin: '0 auto 32px' }}>
          <svg width="240" height="240" style={{ position: 'absolute', inset: 0 }}>
            {[0, 55, 110].map((a, i) => (
              <ellipse key={i} cx="120" cy="120" rx="108" ry="38"
                fill="none" stroke={m.accent} strokeWidth=".8" opacity=".35"
                transform={`rotate(${a + (i % 2 === 0 ? t * 6 : -t * 4)} 120 120)`}
                style={{ transition: 'stroke 1.2s ease' }}
              />
            ))}
            {/* center core */}
            <circle cx="120" cy="120" r="14" fill={m.accent} opacity=".9"
              style={{ transition: 'fill 1.2s ease' }}
              filter="url(#glow)"
            />
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {/* orbiting dots */}
            {[0,1,2].map(i => {
              const angle = t * (i % 2 === 0 ? 1 : -1.3) + (i * Math.PI * 2/3);
              const rx = 100, ry = 35;
              const rotDeg = [0, 55, 110][i];
              const rotRad = rotDeg * Math.PI / 180;
              const x2 = rx * Math.cos(angle) * Math.cos(rotRad) - ry * Math.sin(angle) * Math.sin(rotRad);
              const y2 = rx * Math.cos(angle) * Math.sin(rotRad) + ry * Math.sin(angle) * Math.cos(rotRad);
              return <circle key={i} cx={120 + x2} cy={120 + y2} r="5" fill={i === 0 ? m.accent : i === 1 ? m.orb2 : m.orb1} opacity=".9" style={{ transition: 'fill 1.2s ease' }} />;
            })}
          </svg>
        </div>

        {/* 6 psyche layers */}
        {['Страхи и защиты', 'Теневые части', 'Сценарии', 'Ресурсы', 'Ценности', 'Суть'].map((layer, i) => (
          <div key={layer} style={{
            padding: '14px 20px', marginBottom: 8, borderRadius: 14,
            background: `${m.accentDim}`,
            border: `0.5px solid ${m.accent}${i === 5 ? '88' : '22'}`,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            transition: 'background 1.2s ease, border-color 1.2s ease',
          }}>
            <div style={{ ...label(9), color: i === 5 ? m.accent : bone(.55), letterSpacing: '.2em', transition: 'color 1.2s ease' }}>СЛОЙ {6-i}</div>
            <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 17, color: i === 5 ? bone() : bone(.6) }}>{layer}</div>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 14, color: i === 5 ? m.accent : bone(.3) }}>{i === 5 ? m.glyph : '→'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── JOURNAL ─────────────────────────────────────────────────
export function JournalScreen({ mood }) {
  const m = MOODS[mood];
  const [tab, setTab] = useState('intent');
  const tabs = [
    { id: 'intent',  l: 'Намерения' },
    { id: 'grat',    l: 'Благодарность' },
    { id: 'goal',    l: 'Цели' },
    { id: 'reflect', l: 'Рефлексия' },
  ];
  const prompts = {
    intent: 'Сегодня я намерена…',
    grat: 'Я благодарна за…',
    goal: 'К концу месяца я…',
    reflect: 'Сегодня я заметила в себе…',
  };

  return (
    <div style={{ minHeight: '100%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: m.bg, transition: 'background 1.2s ease', zIndex: 0 }} />
      <Orb style={{ top: -60, left: -40 }} color={m.orb1} opacity={0.4} w={220} h={220} />

      <div style={{ position: 'relative', zIndex: 1, padding: `50px ${SP.page}px 24px` }}>
        <div style={{ ...label(9), color: bone(.45), letterSpacing: '.3em', marginBottom: 6 }}>✎ СЕГОДНЯ</div>
        <div style={{ fontFamily: FONT_SERIF, fontWeight: 300, fontSize: 36, color: bone(), letterSpacing: '-.02em', marginBottom: 22 }}>Дневник</div>

        {/* tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 22, overflowX: 'auto' }}>
          {tabs.map(x => {
            const on = tab === x.id;
            return (
              <div key={x.id} onClick={() => setTab(x.id)} style={{
                padding: '9px 14px', borderRadius: 10, cursor: 'pointer', flexShrink: 0,
                background: on ? m.accentDim : 'rgba(240,232,220,.03)',
                border: `1px solid ${on ? m.accent + '55' : 'rgba(240,232,220,.08)'}`,
                ...label(9), letterSpacing: '.18em',
                color: on ? m.accent : bone(.45),
                transition: 'all .3s ease',
              }}>{x.l}</div>
            );
          })}
        </div>

        {/* prompt card */}
        <div style={{ padding: `${SP.lg}px`, background: 'rgba(240,232,220,.05)', border: `0.5px solid ${m.accent}22`, borderRadius: 20, marginBottom: 16, transition: 'border-color 1.2s ease' }}>
          <div style={{ ...label(9), color: m.accent, letterSpacing: '.25em', marginBottom: 10, transition: 'color 1.2s ease' }}>ПОДСКАЗКА</div>
          <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontWeight: 300, fontSize: 17, lineHeight: 1.55, color: bone(.7) }}>
            Пиши в настоящем времени: «Я есть», «У меня уже есть». Это фиксирует образ желаемого.
          </div>
        </div>

        {/* writing area */}
        <div style={{ padding: `${SP.xl}px ${SP.lg}px`, background: 'rgba(0,0,0,.35)', border: `0.5px solid rgba(240,232,220,.1)`, borderRadius: 20, minHeight: 200, position: 'relative' }}>
          <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 18, color: bone(.3), lineHeight: 1.5 }}>
            {prompts[tab]}
          </div>
          <div style={{ position: 'absolute', bottom: SP.md, right: SP.md, ...label(9), color: bone(.25), letterSpacing: '.2em' }}>19 АПР · ✎</div>
        </div>

        {/* save */}
        <div onClick={() => {}} style={{
          marginTop: 18, padding: '16px', borderRadius: 9999,
          background: `linear-gradient(135deg, ${m.accent}44, ${m.orb2}33)`,
          border: `1px solid ${m.accent}55`, textAlign: 'center',
          ...label(9), letterSpacing: '.28em', color: bone(),
          boxShadow: `0 0 24px ${m.glow}`,
          cursor: 'pointer', transition: 'all 1.2s ease',
        }}>
          Сохранить запись →
        </div>
      </div>
    </div>
  );
}

// ─── PROFILE ─────────────────────────────────────────────────
export function ProfileScreen({ mood }) {
  const m = MOODS[mood];
  const weekly = [40, 65, 52, 80, 72, 88, 76];
  const days = ['П','В','С','Ч','П','С','В'];

  return (
    <div style={{ minHeight: '100%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: m.bg, transition: 'background 1.2s ease', zIndex: 0 }} />
      <Orb style={{ top: -80, right: -60 }} color={m.orb1} opacity={0.4} w={240} h={240} />

      <div style={{ position: 'relative', zIndex: 1, padding: `50px ${SP.page}px 24px`, textAlign: 'center' }}>

        {/* avatar */}
        <div style={{
          width: 88, height: 88, margin: '0 auto', borderRadius: '50%',
          background: `radial-gradient(circle at 35% 35%, ${m.accent}88, ${m.accentDim})`,
          border: `1px solid ${m.accent}55`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 36, fontWeight: 300, color: bone(),
          boxShadow: `0 0 32px ${m.glow}`,
          marginBottom: SP.md, transition: 'all 1.2s ease',
        }}>А</div>
        <div style={{ fontFamily: FONT_SERIF, fontWeight: 300, fontSize: 28, color: bone(), letterSpacing: '-.01em', marginBottom: 4 }}>Анастасия</div>
        <div style={{ ...label(9), color: bone(.4), letterSpacing: '.25em', marginBottom: 26 }}>7 ДНЕЙ · 12 ПРАКТИК</div>

        {/* energy arc */}
        <div style={{ padding: SP.xl, background: 'rgba(240,232,220,.05)', border: `0.5px solid ${m.accent}22`, borderRadius: 22, textAlign: 'center', position: 'relative', overflow: 'hidden', marginBottom: 16, transition: 'border-color 1.2s ease' }}>
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 40%, ${m.glow}, transparent 65%)`, filter: 'blur(16px)', transition: 'background 1.2s ease' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ width: 120, height: 120, position: 'relative', margin: '0 auto' }}>
              <svg width="120" height="120" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(240,232,220,.08)" strokeWidth="6" />
                <circle cx="60" cy="60" r="52" fill="none" stroke={m.accent} strokeWidth="6" strokeLinecap="round"
                  strokeDasharray="327" strokeDashoffset={327 - 327 * 0.72}
                  style={{ filter: `drop-shadow(0 0 8px ${m.accent}88)`, transition: 'stroke 1.2s ease' }}
                />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontFamily: FONT_SERIF, fontWeight: 300, fontSize: 40, color: bone(), lineHeight: 1 }}>72</div>
                <div style={{ ...label(9), color: m.accent, letterSpacing: '.18em', marginTop: 2, transition: 'color 1.2s ease' }}>КАПИТАЛ</div>
              </div>
            </div>
            <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 18, color: bone(.7), marginTop: 14 }}>Наполненность</div>
            <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 15, color: bone(.45), marginTop: 4, maxWidth: 260, margin: '4px auto 0' }}>Сейчас у тебя есть ресурс для нового шага.</div>
          </div>
        </div>

        {/* weekly bars */}
        <div style={{ padding: SP.lg, background: 'rgba(240,232,220,.04)', border: `0.5px solid rgba(240,232,220,.1)`, borderRadius: 20, marginBottom: 16, textAlign: 'left' }}>
          <div style={{ ...label(9), color: bone(.45), letterSpacing: '.22em', marginBottom: 14 }}>НЕДЕЛЯ</div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end', height: 80 }}>
            {weekly.map((v, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: '100%', height: `${v}%`, borderRadius: 6, background: `linear-gradient(to top, ${m.accent}99, ${m.accent}33)`, boxShadow: `0 0 6px ${m.glow}`, transition: 'background 1.2s ease' }} />
                <div style={{ ...label(9), fontSize: 9, color: bone(.35) }}>{days[i]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* author */}
        <div style={{ padding: SP.lg, background: m.accentDim, border: `0.5px solid ${m.accent}22`, borderRadius: 20, display: 'flex', gap: SP.md, alignItems: 'center', transition: 'background 1.2s ease', textAlign: 'left' }}>
          <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 28, color: m.accent, transition: 'color 1.2s ease', flexShrink: 0 }}>✦</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 18, color: bone() }}>Анастасия Званок</div>
            <div style={{ ...label(9), color: bone(.4), marginTop: 2 }}>МАГИСТР КЛИНИЧЕСКОЙ ПСИХОЛОГИИ</div>
          </div>
        </div>

      </div>
    </div>
  );
}
