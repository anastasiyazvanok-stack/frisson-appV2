// Wild themes — 4 animal mood worlds
const NIGHT = {
  cheetah: {
    e: "◈", l: "Ресурс",
    bg: "radial-gradient(ellipse at 20% 10%, #4A0A16 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, #2A0808 0%, transparent 55%), #0C080E",
    card: "rgba(232,80,112,.12)", border: "rgba(232,80,112,.2)",
    accent: "#E85070", ar: "232,80,112",
    accent2: "#C8953A", ar2: "200,149,58",
    dim: "rgba(232,80,112,.18)", o1: "#8B1A2E", o2: "#C8953A",
    nav: "rgba(232,80,112,.28)", text: "rgba(240,232,220,.95)", tr: "240,232,220",
    gF: "#2a0810", gT: "#0C080E",
    glow: "rgba(168,24,48,.4)",
    coreGrad: "radial-gradient(circle at 35% 35%, #E85070, #8B1A2E)",
    coreShadow: "0 0 20px #A81830, 0 0 40px rgba(168,24,48,.5)",
    wordRu: "в силе", salut: "Режим ресурса", sub: "огонь внутри горит",
    energyLabel: "Капитал состояния",
  },
  peacock: {
    e: "✦", l: "Женское",
    bg: "radial-gradient(ellipse at 20% 10%, #2A0A2E 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, #0A1A2A 0%, transparent 55%), #0C080E",
    card: "rgba(224,64,160,.12)", border: "rgba(224,64,160,.2)",
    accent: "#E040A0", ar: "224,64,160",
    accent2: "#1A9B88", ar2: "26,155,136",
    dim: "rgba(224,64,160,.18)", o1: "#7B3FA0", o2: "#1A9B88",
    nav: "rgba(224,64,160,.28)", text: "rgba(240,232,220,.95)", tr: "240,232,220",
    gF: "#1e082a", gT: "#0C080E",
    glow: "rgba(196,21,106,.4)",
    coreGrad: "radial-gradient(circle at 35% 35%, #E040A0, #7B3FA0)",
    coreShadow: "0 0 20px #C4156A, 0 0 40px rgba(196,21,106,.5)",
    wordRu: "в блеске", salut: "Режим женского", sub: "каждое перо — твоё",
    energyLabel: "Сила проявления",
  },
  luna: {
    e: "○", l: "Реализация",
    bg: "radial-gradient(ellipse at 50% 10%, #0E1222 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, #080C18 0%, transparent 55%), #0A0C14",
    card: "rgba(139,164,200,.12)", border: "rgba(139,164,200,.2)",
    accent: "#8BA4C8", ar: "139,164,200",
    accent2: "#3A4A6B", ar2: "58,74,107",
    dim: "rgba(139,164,200,.18)", o1: "#3A4A6B", o2: "#8BA4C8",
    nav: "rgba(139,164,200,.28)", text: "rgba(240,232,220,.95)", tr: "240,232,220",
    gF: "#0e1222", gT: "#0A0C14",
    glow: "rgba(139,164,200,.3)",
    coreGrad: "radial-gradient(circle at 35% 35%, #C8D8F0, #3A4A6B)",
    coreShadow: "0 0 20px #5A70A0, 0 0 40px rgba(58,74,107,.5)",
    wordRu: "в глубине", salut: "Режим реализации", sub: "вселенная знает путь",
    energyLabel: "Лунный капитал",
  },
  tigress: {
    e: "◆", l: "Новый уровень",
    bg: "radial-gradient(ellipse at 20% 10%, #201408 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, #0C0804 0%, transparent 55%), #0C080E",
    card: "rgba(224,168,64,.12)", border: "rgba(224,168,64,.2)",
    accent: "#E0A840", ar: "224,168,64",
    accent2: "#5A3A10", ar2: "90,58,16",
    dim: "rgba(224,168,64,.18)", o1: "#5A3A10", o2: "#E0A840",
    nav: "rgba(224,168,64,.28)", text: "rgba(240,232,220,.95)", tr: "240,232,220",
    gF: "#201408", gT: "#0C080E",
    glow: "rgba(200,149,58,.4)",
    coreGrad: "radial-gradient(circle at 35% 35%, #E0A840, #5A3A10)",
    coreShadow: "0 0 20px #C8953A, 0 0 40px rgba(200,149,58,.5)",
    wordRu: "на пороге", salut: "Новый уровень", sub: "старая ты уже не вернётся",
    energyLabel: "Золотой потенциал",
  },
};

export function getThemes() { return NIGHT; }
export const THEMES = NIGHT;

export const ENERGY_LEVELS = [
  { min: 0, max: 25, l: { ru: "Критическое истощение", en: "Critical exhaustion" } },
  { min: 26, max: 45, l: { ru: "Низкий ресурс", en: "Low resource" } },
  { min: 46, max: 65, l: { ru: "Средний ресурс", en: "Moderate resource" } },
  { min: 66, max: 82, l: { ru: "Хороший ресурс", en: "Good resource" } },
  { min: 83, max: 100, l: { ru: "Высокий ресурс", en: "High resource" } },
];

export const getEnergyLevel = (s, lang = "ru") => {
  const lv = ENERGY_LEVELS.find((l) => s >= l.min && s <= l.max) || ENERGY_LEVELS[0];
  return { ...lv, l: typeof lv.l === "object" ? (lv.l[lang] || lv.l.ru) : lv.l };
};

export const THEME_LABELS = {
  cheetah: { ru: "Ресурс", en: "Resource" },
  peacock: { ru: "Женское", en: "Feminine" },
  luna: { ru: "Реализация", en: "Realization" },
  tigress: { ru: "Новый уровень", en: "New level" },
};
export const themeLabel = (key, lang = "ru") => (THEME_LABELS[key] && THEME_LABELS[key][lang]) || key;
