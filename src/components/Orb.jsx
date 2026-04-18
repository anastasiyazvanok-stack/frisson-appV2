export default function Orb({ style = {}, color = '#8B1A2E', opacity = 0.4, w = 200, h = 200, delay = 0 }) {
  return (
    <div style={{
      position: 'absolute', width: w, height: h, borderRadius: '50%',
      background: color, opacity,
      filter: 'blur(60px)', mixBlendMode: 'screen', pointerEvents: 'none',
      animation: `breatheOrb ${8 + delay}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      transition: 'background 1.2s ease, opacity 1.2s ease',
      ...style,
    }} />
  );
}
