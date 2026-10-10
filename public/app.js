:root {
  --bg: #080d18;
  --bg-soft: #111a2c;
  --panel: rgba(17, 25, 40, 0.9);
  --panel-alt: rgba(22, 31, 49, 0.94);
  --text: #edf3ff;
  --muted: #b3bfd8;
  --primary: #8d5cf6;
  --secondary: #4bc0ff;
  --gold: #f7d789;
  --border: rgba(255, 255, 255, 0.08);
  --glow: rgba(141, 92, 246, 0.28);
}

body.light-theme {
  --bg: #f4f7ff;
  --bg-soft: #e7eefc;
  --panel: rgba(255, 255, 255, 0.84);
  --panel-alt: rgba(245, 248, 255, 0.96);
  --text: #171f2d;
  --muted: #4d5a72;
  --primary: #6b46e8;
  --secondary: #2299db;
  --gold: #c9930a;
  --border: rgba(32, 43, 68, 0.08);
  --glow: rgba(107, 70, 232, 0.16);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top, rgba(141, 92, 246, 0.32), transparent 28%),
    linear-gradient(135deg, var(--bg), var(--bg-soft));
  color: var(--text);
  transition: all 0.25s ease;
}

.theme-orb {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(2px 2px at 12% 25%, rgba(255,255,255,0.7), transparent),
    radial-gradient(2px 2px at 38% 78%, rgba(255,255,255,0.8), transparent),
    radial-gradient(2px 2px at 75% 45%, rgba(255,255,255,0.7), transparent),
    radial-gradient(2px 2px at 88% 18%, rgba(255,255,255,0.5), transparent);
  opacity: 0.85;
}

.topbar {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0 8px;
  position: relative;
  z-index: 1;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  box-shadow: 0 12px 22px var(--glow);
}

.theme-toggle {
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding: 10px 0 60px;
  position: relative;
  z-index: 1;
}

.hero {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 26px;
  align-items: center;
  min-height: 420px;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 5vw, 4.7rem);
  line-height: 1.04;
  margin: 12px 0 12px;
  letter-spacing: -0.06em;
}

.hero-copy p {
  font-size: 1.04rem;
  color: var(--muted);
  max-width: 620px;
  line-height: 1.8;
}

.eyebrow {
  margin: 0;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.7rem;
  font-weight: 700;
}

.form-card,
.card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 26px;
  backdrop-filter: blur(10px);
  box-shadow: 0 22px 44px rgba(0, 0, 0, 0.2);
}

.form-card {
  padding: 24px;
}

.form-card h2 {
  margin: 0 0 22px;
  font-size: 1.5rem;
}

label {
  display: block;
  margin-bottom: 18px;
}

label span {
  display: block;
  margin-bottom: 8px;
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

input {
  width: 100%;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  padding: 13px 14px;
  font: inherit;
}

input:focus {
  outline: none;
  border-color: rgba(141, 92, 246, 0.8);
  box-shadow: 0 0 0 4px rgba(141, 92, 246, 0.12);
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.primary-btn {
  width: 100%;
  margin-top: 8px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  font: inherit;
  font-weight: 700;
  padding: 14px 18px;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(141, 92, 246, 0.25);
}

.result-section {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 22px;
  margin-top: 22px;
}

.card {
  padding: 24px;
}

.overview-card,
.predictions-card {
  grid-column: 1 / -1;
}

.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.label {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.overview-card h3,
.chart-card h3,
.traits-card h3,
.focus-card h3,
.house-card h3,
.predictions-card h3 {
  margin: 0;
  font-size: 1.25rem;
}

.icon {
  width: 74px;
  height: 74px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: 2.2rem;
  background: linear-gradient(135deg, rgba(141, 92, 246, 0.18), rgba(75, 192, 255, 0.16));
  border: 1px solid var(--border);
}

.summary {
  color: var(--muted);
  line-height: 1.8;
  margin: 18px 0 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.stats-grid span,
.mini-box span {
  color: var(--muted);
  display: block;
  margin-bottom: 8px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mini-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 18px;
}

.mini-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px 16px;
}

.traits-card ul {
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.9;
  margin: 18px 0 0;
}

.focus-card p,
.house-grid p,
.prediction-list p {
  color: var(--muted);
  line-height: 1.8;
}

.muted {
  margin-top: 12px;
}

.house-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.house-grid span {
  color: var(--muted);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.prediction-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-top: 18px;
}

.prediction-list article {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px 16px;
}

.prediction-list h4 {
  margin: 0 0 10px;
  font-size: 1rem;
}

.hidden {
  display: none !important;
}

@media (max-width: 820px) {
  .hero,
  .result-section,
  .two-col,
  .prediction-list,
  .house-grid,
  .stats-grid,
  .mini-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 10px;
  }
}
