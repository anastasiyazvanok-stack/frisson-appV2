export default function PulseRing({ m, size = 80 }) {
  const r = size / 2;
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <div style={{
        position: 'absolute', inset: -10, borderRadius: '50%',
        border: `0.5px solid ${m.accent}30`,
        animation: 'ringPulse 3s ease-in-out infinite .5s',
        transition: 'border-color 1.2s ease',
      }} />
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        border: `1.5px solid ${m.accent}66`,
        animation: 'ringPulse 3s ease-in-out infinite',
        transition: 'border-color 1.2s ease',
      }} />
      <div style={{
        position: 'absolute', inset: r * .24, borderRadius: '50%',
        background: m.coreGrad,
        boxShadow: m.coreShadow,
        animation: 'corePulse 3s ease-in-out infinite',
        transition: 'background 1.2s ease, box-shadow 1.2s ease',
      }} />
    </div>
  );
}
