export const FONT_SERIF = "'Cormorant', Georgia, serif";
export const FONT_SANS = "'Plus Jakarta Sans', sans-serif";

export const SP = { xs: 6, sm: 10, md: 16, lg: 24, xl: 32, page: 22 };
export const TYPE = { xs: 11, sm: 13, base: 16, md: 18, lg: 22, xl: 32, xxl: 42 };
export const EASE = 'cubic-bezier(.4,0,.2,1)';

export const MOODS = {
  cheetah: {
    key: 'cheetah', glyph: '◈',
    nameRu: 'Ресурс', nameEn: 'La Cheetah', wordRu: 'в силе',
    salut: 'Режим ресурса', sub: 'огонь внутри горит',
    energyLabel: 'Капитал состояния',
    bg: 'radial-gradient(ellipse at 20% 10%, #4A0A16 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, #2A0808 0%, transparent 55%), #0C080E',
    orb1: '#8B1A2E', orb2: '#C8953A',
    accent: '#E85070', accent2: '#C8953A',
    accentDim: 'rgba(232,80,112,.18)',
    glow: 'rgba(168,24,48,.4)',
    frameGlow: 'rgba(168,24,48,.35)',
    coreGrad: 'radial-gradient(circle at 35% 35%, #E85070, #8B1A2E)',
    coreShadow: '0 0 20px #A81830, 0 0 40px rgba(168,24,48,.5)',
    cards: ['Возвращение к инстинкту', 'Письмо силы', 'Тело знает'],
    libColor: '#E85070',
  },
  peacock: {
    key: 'peacock', glyph: '✦',
    nameRu: 'Женское', nameEn: 'La Peacock', wordRu: 'в блеске',
    salut: 'Режим женского', sub: 'каждое перо — твоё',
    energyLabel: 'Сила проявления',
    bg: 'radial-gradient(ellipse at 20% 10%, #2A0A2E 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, #0A1A2A 0%, transparent 55%), #0C080E',
    orb1: '#7B3FA0', orb2: '#1A9B88',
    accent: '#E040A0', accent2: '#1A9B88',
    accentDim: 'rgba(224,64,160,.18)',
    glow: 'rgba(196,21,106,.4)',
    frameGlow: 'rgba(196,21,106,.35)',
    coreGrad: 'radial-gradient(circle at 35% 35%, #E040A0, #7B3FA0)',
    coreShadow: '0 0 20px #C4156A, 0 0 40px rgba(196,21,106,.5)',
    cards: ['Раскрытие — медитация', 'Письмо желаний', 'Движение тела'],
    libColor: '#E040A0',
  },
  luna: {
    key: 'luna', glyph: '○',
    nameRu: 'Реализация', nameEn: 'La Luna', wordRu: 'в глубине',
    salut: 'Режим реализации', sub: 'вселенная знает путь',
    energyLabel: 'Лунный капитал',
    bg: 'radial-gradient(ellipse at 50% 10%, #0E1222 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, #080C18 0%, transparent 55%), #0A0C14',
    orb1: '#3A4A6B', orb2: '#8BA4C8',
    accent: '#8BA4C8', accent2: '#3A4A6B',
    accentDim: 'rgba(139,164,200,.18)',
    glow: 'rgba(139,164,200,.3)',
    frameGlow: 'rgba(139,164,200,.25)',
    coreGrad: 'radial-gradient(circle at 35% 35%, #C8D8F0, #3A4A6B)',
    coreShadow: '0 0 20px #5A70A0, 0 0 40px rgba(58,74,107,.5)',
    cards: ['Медитация на луну', 'Намерение под звёздами', 'Визуализация'],
    libColor: '#8BA4C8',
  },
  tigress: {
    key: 'tigress', glyph: '◆',
    nameRu: 'Новый уровень', nameEn: 'La Tigress', wordRu: 'на пороге',
    salut: 'Новый уровень', sub: 'старая ты уже не вернётся',
    energyLabel: 'Золотой потенциал',
    bg: 'radial-gradient(ellipse at 20% 10%, #201408 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, #0C0804 0%, transparent 55%), #0C080E',
    orb1: '#5A3A10', orb2: '#E0A840',
    accent: '#E0A840', accent2: '#5A3A10',
    accentDim: 'rgba(224,168,64,.18)',
    glow: 'rgba(200,149,58,.4)',
    frameGlow: 'rgba(200,149,58,.35)',
    coreGrad: 'radial-gradient(circle at 35% 35%, #E0A840, #5A3A10)',
    coreShadow: '0 0 20px #C8953A, 0 0 40px rgba(200,149,58,.5)',
    cards: ['Теневая работа', 'Письмо из будущего', 'Новая норма'],
    libColor: '#E0A840',
  },
};

export const MOOD_KEYS = ['cheetah', 'peacock', 'luna', 'tigress'];

export const heading = (size = TYPE.xxl) => ({
  fontFamily: FONT_SERIF, fontWeight: 300, fontSize: size, lineHeight: 1.05, letterSpacing: '-.02em',
});
export const body = (size = TYPE.base) => ({
  fontFamily: FONT_SERIF, fontWeight: 300, fontSize: size, lineHeight: 1.55,
});
export const label = (size = TYPE.xs) => ({
  fontFamily: FONT_SANS, fontWeight: 600, fontSize: size, letterSpacing: '.3em', textTransform: 'uppercase',
});
