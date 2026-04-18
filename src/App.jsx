import { useState, useEffect } from 'react';
import { MOODS } from './tokens';
import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import { LibraryScreen, OrbitScreen, JournalScreen, ProfileScreen } from './screens/Screens';

export const VERSION = '2.0.0';

export default function App() {
  const [mood, setMood] = useState(() => localStorage.getItem('frisson_mood') || 'cheetah');
  const [screen, setScreen] = useState(() => localStorage.getItem('frisson_screen') || 'home');

  useEffect(() => { localStorage.setItem('frisson_mood', mood); }, [mood]);
  useEffect(() => { localStorage.setItem('frisson_screen', screen); }, [screen]);

  const m = MOODS[mood];

  const screens = {
    home: <HomeScreen mood={mood} setMood={setMood} />,
    library: <LibraryScreen mood={mood} setMood={setMood} />,
    orbit: <OrbitScreen mood={mood} />,
    journal: <JournalScreen mood={mood} />,
    profile: <ProfileScreen mood={mood} />,
  };

  return (
    <div style={{
      width: '100%', maxWidth: 430, height: '100dvh',
      margin: '0 auto', display: 'flex', flexDirection: 'column',
      background: '#0C080E', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        boxShadow: `inset 0 0 80px ${m.glow}`,
        transition: 'box-shadow 1.2s ease',
      }} />

      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', position: 'relative', zIndex: 1 }}>
        {screens[screen]}
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <NavBar screen={screen} setScreen={setScreen} mood={mood} />
      </div>
    </div>
  );
}
