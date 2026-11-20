/* =========================================================
   Jeffrey's Portfolio - style.css
   Mobile-first. Edit the colors in :root to re-theme the site.
   ========================================================= */

:root {
  --bg: #0B0F0C;
  --bg-alt: #121A14;
  --accent: #39FF14;
  --text: #F5F5F5;
  --text-muted: #A1AAA3;
  --border: #243328;

  --accent-soft: rgba(57, 255, 20, 0.10);
  --glow: 0 0 24px rgba(57, 255, 20, 0.22);
  --glow-strong: 0 0 28px rgba(57, 255, 20, 0.35);

  --radius: 16px;
  --radius-sm: 10px;
  --header-h: 68px;

  /* One smooth easing curve used everywhere */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease: 0.45s var(--ease-out);

  --font: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  --mono: "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace;

  /* Fluid type */
  --fs-body: clamp(0.95rem, 0.9rem + 0.25vw, 1.05rem);
  --fs-h1: clamp(2.1rem, 1.4rem + 3.6vw, 4rem);
  --fs-h2: clamp(1.7rem, 1.3rem + 2vw, 2.6rem);
  --fs-h3: clamp(1.05rem, 1rem + 0.3vw, 1.25rem);
}

/* ---------- Reset ---------- */
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: var(--header-h); -webkit-text-size-adjust: 100%; }
html.js { scroll-behavior: auto; } /* JavaScript provides a smoother, eased scroll */
body {
  margin: 0;
  font-family: var(--font);
  font-size: var(--fs-body);
  line-height: 1.7;
  color: var(--text);
  background: var(--bg);
  overflow-x: hidden;
}
img, svg { max-width: 100%; display: block; }
ul { list-style: none; margin: 0; padding: 0; }
h1, h2, h3, h4, p, dl, dd { margin: 0; overflow-wrap: break-word; }
a { color: inherit; text-decoration: none; }
button, input, textarea { font: inherit; color: inherit; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }

.container { width: min(100% - 2rem, 1200px); margin-inline: auto; }
.accent { color: var(--accent); }
.muted { color: var(--text-muted); }
.sprite { position: absolute; width: 0; height: 0; overflow: hidden; }

/* ---------- Plain line icons ---------- */
.ico {
  width: 24px; height: 24px; flex: none;
  fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round;
}
.icon { display: inline-flex; align-items: center; color: var(--accent); line-height: 1; }
.icon .ico { width: 26px; height: 26px; }

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  min-height: 48px; padding: 0.75rem 1.6rem;
  border-radius: 999px; border: 1.5px solid var(--accent);
  font-weight: 600; cursor: pointer; text-align: center;
  transition: transform var(--ease), box-shadow var(--ease), background var(--ease), color var(--ease);
}
.btn-primary { background: var(--accent); color: #07110a; }
.btn-primary:hover { box-shadow: var(--glow-strong); transform: translateY(-2px); }
.btn-outline { background: transparent; color: var(--accent); }
.btn-outline:hover { background: var(--accent-soft); box-shadow: var(--glow); transform: translateY(-2px); }
.btn:active { transform: translateY(0) scale(0.98); }
.btn-sm { min-height: 44px; padding: 0.5rem 1.2rem; }
.btn-block { width: 100%; }

/* ---------- Header / Nav ---------- */
.site-header {
  position: fixed; inset: 0 0 auto 0; z-index: 100;
  height: var(--header-h);
  background: rgba(11, 15, 12, 0.8);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--ease), background var(--ease);
}
.site-header.scrolled { border-color: var(--border); background: rgba(11, 15, 12, 0.94); }
.nav { height: var(--header-h); display: flex; align-items: center; justify-content: space-between; }
.logo { font-size: 1.5rem; font-weight: 800; letter-spacing: -0.02em; }
.logo span { color: var(--accent); }

.nav-toggle {
  width: 48px; height: 48px; background: none; border: 0; cursor: pointer;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
}
.nav-toggle span { width: 24px; height: 2px; background: var(--accent); border-radius: 2px; transition: transform var(--ease), opacity var(--ease); }
.nav-toggle.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.nav-toggle.open span:nth-child(2) { opacity: 0; }
.nav-toggle.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* Mobile menu (default) */
.nav-menu {
  position: fixed; top: var(--header-h); left: 0; right: 0;
  display: flex; flex-direction: column; gap: 0.25rem;
  padding: 1rem;
  background: var(--bg-alt); border-bottom: 1px solid var(--border);
  max-height: calc(100vh - var(--header-h)); max-height: calc(100dvh - var(--header-h)); overflow-y: auto;
  opacity: 0; visibility: hidden; transform: translateY(-12px);
  transition: opacity var(--ease), transform var(--ease), visibility var(--ease);
}
.nav-menu.open { opacity: 1; visibility: visible; transform: none; }
.nav-link {
  position: relative; display: block; padding: 0.85rem 0.5rem;
  color: var(--text-muted); font-weight: 500; transition: color var(--ease);
}
.nav-link:hover, .nav-link.active { color: var(--accent); }
.nav-cta-item { padding-top: 0.5rem; }
.nav-cta-item .btn { width: 100%; }

/* Laptop+ : horizontal menu (8 links need the room, so tablets keep the hamburger) */
@media (min-width: 1100px) {
  .nav-toggle { display: none; }
  .nav-menu {
    position: static; flex-direction: row; align-items: center; gap: 0.25rem;
    padding: 0; background: none; border: 0; max-height: none; overflow: visible;
    opacity: 1; visibility: visible; transform: none;
  }
  .nav-link { padding: 0.5rem 0.7rem; }
  .nav-link::after {
    content: ""; position: absolute; left: 0.7rem; right: 0.7rem; bottom: 0.15rem;
    height: 2px; background: var(--accent); transform: scaleX(0); transform-origin: left;
    transition: transform var(--ease);
  }
  .nav-link:hover::after, .nav-link.active::after { transform: scaleX(1); }
  .nav-cta-item { padding: 0 0 0 0.75rem; }
  .nav-cta-item .btn { width: auto; }
}

/* ---------- Sections ---------- */
.section { padding: clamp(3.5rem, 8vw, 6.5rem) 0; }
.section.alt { background: var(--bg-alt); border-block: 1px solid var(--border); }
.section-head { text-align: center; max-width: 680px; margin: 0 auto clamp(2rem, 5vw, 3.5rem); }
.eyebrow {
  font-family: var(--mono); font-size: 0.85rem; color: var(--accent);
  letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.6rem;
}
.section-head h2 { font-size: var(--fs-h2); line-height: 1.2; font-weight: 800; letter-spacing: -0.02em; }
.section-sub { color: var(--text-muted); margin-top: 0.8rem; }
.section-sub code, .lb-missing code { font-family: var(--mono); font-size: 0.85em; color: var(--accent); }

/* ---------- Cards (smooth hover + soft light that follows the cursor) ---------- */
.card {
  position: relative; isolation: isolate;
  background: var(--bg-alt); border: 1px solid var(--border); border-radius: var(--radius);
  transition: transform var(--ease), border-color var(--ease), box-shadow var(--ease);
}
.section.alt .card { background: var(--bg); }
.card::before {
  content: ""; position: absolute; inset: 0; z-index: -1; border-radius: inherit; pointer-events: none;
  opacity: 0; transition: opacity 0.6s var(--ease-out);
  background: radial-gradient(380px circle at var(--mx, 50%) var(--my, 50%), rgba(57, 255, 20, 0.13), transparent 65%);
}
@media (hover: hover) {
  .card:hover { transform: translateY(-6px); border-color: rgba(57, 255, 20, 0.5); box-shadow: var(--glow); }
  .card:hover::before { opacity: 1; }
}

/* ---------- Tags / labels ---------- */
.tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.tags li {
  padding: 0.35rem 0.85rem; border: 1px solid var(--border); border-radius: 999px;
  background: var(--bg-alt); color: var(--text-muted); font-size: 0.9rem;
  transition: color var(--ease), border-color var(--ease), transform var(--ease);
}
.tags li:hover { color: var(--accent); border-color: var(--accent); transform: translateY(-2px); }
.tags.small li { font-size: 0.8rem; padding: 0.25rem 0.7rem; }
.level {
  display: inline-block; padding: 0.15rem 0.65rem; border-radius: 999px;
  font-family: var(--mono); font-size: 0.72rem; color: var(--accent);
  border: 1px solid rgba(57, 255, 20, 0.35); background: var(--accent-soft); white-space: nowrap;
}
.status {
  display: inline-block; padding: 0.2rem 0.7rem; border-radius: 999px;
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.03em;
  background: rgba(11, 15, 12, 0.85); border: 1px solid var(--border); color: var(--text);
}
.status-completed, .status-ongoing { color: var(--accent); border-color: rgba(57, 255, 20, 0.5); }
.status-proposed { color: #ffd166; border-color: rgba(255, 209, 102, 0.5); }
.status-practice { color: #7dd3fc; border-color: rgba(125, 211, 252, 0.5); }

/* ---------- Image boxes + fallbacks ---------- */
.img-box { position: relative; overflow: hidden; background: linear-gradient(145deg, #16221a, #0d140f); }
.img-box img { width: 100%; height: 100%; object-fit: cover; }
.img-box.no-image img { display: none; }
.img-box.no-image::before {
  content: ""; position: absolute; inset: 0;
  background:
    radial-gradient(circle at 50% 30%, rgba(57, 255, 20, 0.18), transparent 60%),
    linear-gradient(145deg, #16221a, #0d140f);
}
/* person silhouette */
.img-box.no-image[data-fallback="person"]::after {
  content: ""; position: absolute; left: 50%; top: 52%; width: 55%; aspect-ratio: 1; transform: translate(-50%, -50%);
  background: rgba(57, 255, 20, 0.35);
  -webkit-mask: radial-gradient(circle at 50% 28%, #000 0 18%, transparent 18.5%),
                radial-gradient(ellipse at 50% 100%, #000 0 42%, transparent 42.5%);
  mask: radial-gradient(circle at 50% 28%, #000 0 18%, transparent 18.5%),
        radial-gradient(ellipse at 50% 100%, #000 0 42%, transparent 42.5%);
}
/* project placeholder */
.img-box.no-image[data-fallback="project"]::after {
  content: "</>"; position: absolute; inset: 0; display: grid; place-items: center;
  font-family: var(--mono); font-size: 2.2rem; color: rgba(57, 255, 20, 0.55);
}

/* ---------- Hero ---------- */
.hero {
  min-height: 100vh; min-height: 100svh;
  display: flex; align-items: center;
  padding: calc(var(--header-h) + 2rem) 0 3rem;
  background:
    radial-gradient(circle at 85% 20%, rgba(57, 255, 20, 0.08), transparent 45%),
    radial-gradient(circle at 10% 90%, rgba(57, 255, 20, 0.05), transparent 40%),
    var(--bg);
}
.hero-grid { display: grid; gap: 2.5rem; align-items: center; }
.hero-visual { order: -1; display: flex; justify-content: center; }
.hero-text h1 { font-size: var(--fs-h1); line-height: 1.1; font-weight: 800; letter-spacing: -0.03em; margin: 0.5rem 0 1rem; }

/* Running (typing) text */
.hero-typing {
  font-family: var(--mono); color: var(--accent);
  font-size: clamp(0.85rem, 0.8rem + 0.7vw, 1.3rem);
  min-height: 1.7em; margin-bottom: 1rem;
}
.typing-prefix { opacity: 0.6; margin-right: 0.35em; }
.cursor {
  display: inline-block; width: 0.55ch; height: 1.05em; margin-left: 3px; vertical-align: -0.15em;
  background: var(--accent); box-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
  animation: blink 1s steps(1) infinite;
}
@keyframes blink { 50% { opacity: 0; } }

.hero-role { color: var(--text); font-weight: 500; font-size: clamp(1rem, 0.95rem + 0.4vw, 1.2rem); line-height: 1.5; max-width: 52ch; margin-bottom: 1rem; }
.hero-desc { color: var(--text-muted); max-width: 56ch; }
.hero-buttons { display: flex; flex-wrap: wrap; gap: 0.8rem; margin: 1.8rem 0; }
.hero-buttons .btn { flex: 1 1 180px; }

.profile-frame {
  width: clamp(200px, 62vw, 340px); aspect-ratio: 1; border-radius: 50%;
  border: 2px solid var(--accent); box-shadow: var(--glow-strong), inset 0 0 30px rgba(57, 255, 20, 0.08);
  transition: box-shadow 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}
@media (hover: hover) {
  .profile-frame:hover { transform: scale(1.025); box-shadow: 0 0 44px rgba(57, 255, 20, 0.5), inset 0 0 30px rgba(57, 255, 20, 0.1); }
}

.socials { display: flex; gap: 0.75rem; }
.social-link {
  width: 46px; height: 46px; display: grid; place-items: center;
  border: 1px solid var(--border); border-radius: 50%; color: var(--text-muted);
  transition: color var(--ease), border-color var(--ease), box-shadow var(--ease), transform var(--ease);
}
.social-link svg { width: 20px; height: 20px; fill: currentColor; }
.social-link:hover { color: var(--accent); border-color: var(--accent); box-shadow: var(--glow); transform: translateY(-3px); }

@media (min-width: 900px) {
  .hero-grid { grid-template-columns: 1.15fr 0.85fr; gap: 3rem; }
  .hero-visual { order: 0; }
  .profile-frame { width: clamp(280px, 32vw, 440px); }
  .hero-buttons .btn { flex: 0 0 auto; }
}

/* ---------- Running text strip ---------- */
.ticker { border-block: 1px solid var(--border); background: var(--bg-alt); padding: 0.95rem 0; }
.ticker-viewport {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
}
.ticker-track { display: flex; flex-wrap: wrap; justify-content: center; }
.js .ticker-track { flex-wrap: nowrap; justify-content: flex-start; width: max-content; animation: ticker 55s linear infinite; }
@keyframes ticker { to { transform: translateX(-33.3333%); } } /* 3 identical groups, so shifting by one is seamless */
@media (hover: hover) { .ticker:hover .ticker-track { animation-play-state: paused; } }
.ticker-group { display: flex; flex: none; align-items: center; gap: 2.25rem; padding-right: 2.25rem; }
.ticker-group li {
  position: relative; padding-left: 1.4rem; white-space: nowrap;
  font-family: var(--mono); font-size: 0.82rem; letter-spacing: 0.05em; text-transform: uppercase; color: var(--text-muted);
}
.ticker-group li::before {
  content: ""; position: absolute; left: 0; top: 50%; width: 6px; height: 6px; border-radius: 50%;
  background: var(--accent); transform: translateY(-50%); box-shadow: 0 0 8px var(--accent);
}
.ticker-group li.hl { color: var(--accent); }

/* ---------- At a glance (3 pillars) ---------- */
.pillars { padding: clamp(2.5rem, 6vw, 4rem) 0 clamp(2rem, 5vw, 3.5rem); }
.pillars-grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); }
.pillar-card { padding: 1.5rem; }
.pillar-card h3 { font-size: var(--fs-h3); margin: 0.8rem 0 0.4rem; }
.pillar-card p { color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; }
.pillar-card .tags { margin-top: 0.6rem; }

/* ---------- About ---------- */
.about-grid { display: grid; gap: 2rem; }
.about-text p { color: var(--text-muted); margin-bottom: 1rem; }
.mini-title { font-size: var(--fs-h3); margin: 1.5rem 0 0.8rem; }
.info-cards { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); align-content: start; }
.info-card { padding: 1.3rem; }
.info-card h3 { font-size: var(--fs-h3); margin: 0.7rem 0 0.3rem; }
.info-card p { color: var(--text-muted); font-size: 0.92rem; line-height: 1.55; }
@media (min-width: 900px) { .about-grid { grid-template-columns: 1.1fr 0.9fr; gap: 3rem; } }

/* ---------- Professional experience ---------- */
.exp-grid { display: grid; gap: 1.5rem; }
.section.alt .exp-highlight {
  padding: clamp(1.5rem, 4vw, 2.25rem); text-align: center;
  border-color: rgba(57, 255, 20, 0.45); box-shadow: var(--glow);
  background: linear-gradient(160deg, rgba(57, 255, 20, 0.08), transparent 60%), var(--bg);
}
.exp-number {
  font-size: clamp(4.5rem, 3rem + 8vw, 7rem); line-height: 1; font-weight: 800;
  color: var(--accent); letter-spacing: -0.04em; text-shadow: 0 0 30px rgba(57, 255, 20, 0.35);
}
.exp-years-label { font-weight: 600; margin-top: 0.4rem; }
.exp-position { color: var(--text-muted); font-family: var(--mono); font-size: 0.85rem; margin: 0.5rem 0 1.2rem; }
.exp-highlight .tags { justify-content: center; }
.exp-summary p { color: var(--text-muted); margin-bottom: 1rem; }
.exp-main .timeline { margin: 2rem 0 0; max-width: none; }
.exp-list { margin-bottom: 0.5rem; }
.exp-list li { position: relative; padding-left: 1.2rem; margin-bottom: 0.4rem; color: var(--text-muted); }
.exp-list li::before { content: ""; position: absolute; left: 0; top: 0.7em; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
@media (min-width: 900px) {
  .exp-grid { grid-template-columns: 0.75fr 1.25fr; gap: 2.5rem; align-items: start; }
  .exp-highlight { position: sticky; top: calc(var(--header-h) + 1.5rem); }
}

/* ---------- Technical training ---------- */
.train-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.25rem; }
.train-card { flex: 1 1 min(100%, 280px); max-width: 380px; padding: 1.6rem; display: flex; flex-direction: column; gap: 0.75rem; }
.train-icon { display: inline-flex; color: var(--accent); transition: transform 0.6s var(--ease-out); }
.train-icon svg { width: 34px; height: 34px; }
@media (hover: hover) { .train-card:hover .train-icon { transform: translateY(-3px) scale(1.1); } }
.train-card h3 { font-size: var(--fs-h3); line-height: 1.3; }
.train-card h3 small { display: block; margin-top: 0.15rem; font-size: 0.8rem; font-weight: 500; color: var(--text-muted); }
.train-card p { color: var(--text-muted); font-size: 0.93rem; line-height: 1.6; }
.train-card .level { align-self: flex-start; margin-top: auto; }
.train-note { text-align: center; color: var(--text-muted); font-size: 0.85rem; margin-top: 1.75rem; }

/* ---------- Skills ---------- */
.skills-grid, .learn-grid, .projects-grid { display: grid; gap: 1.25rem; }
.skills-grid { grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); }
.skill-card { padding: 1.5rem; }
.skill-card h3 { display: flex; align-items: center; gap: 0.6rem; font-size: var(--fs-h3); margin-bottom: 1rem; }
.skill-list li {
  display: flex; justify-content: space-between; align-items: center; gap: 0.75rem;
  padding: 0.6rem 0; border-top: 1px solid var(--border); color: var(--text-muted); font-size: 0.95rem;
  transition: color var(--ease), padding-left var(--ease);
}
@media (hover: hover) { .skill-list li:hover { color: var(--text); padding-left: 0.4rem; } }

/* ---------- Projects ---------- */
.filters { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; margin-bottom: 2rem; }
.filter-btn {
  min-height: 44px; padding: 0.4rem 1.1rem; border-radius: 999px; cursor: pointer;
  background: transparent; border: 1px solid var(--border); color: var(--text-muted);
  transition: all var(--ease);
}
.filter-btn:hover { color: var(--accent); border-color: var(--accent); }
.filter-btn.active { background: var(--accent); color: #07110a; border-color: var(--accent); font-weight: 600; }

/* 1 col mobile, 2 tablet, 3 laptop, 4 on very large screens */
.projects-grid { grid-template-columns: 1fr; }
@media (min-width: 640px)  { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .projects-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1700px) { .projects-grid { grid-template-columns: repeat(4, 1fr); } .container { width: min(100% - 4rem, 1500px); } }

.project-card { display: flex; flex-direction: column; overflow: hidden; }
.project-card[hidden] { display: none; }
.project-thumb { aspect-ratio: 16 / 10; }
.project-thumb img { transition: transform 1s var(--ease-out); }
@media (hover: hover) { .project-card:hover .project-thumb img { transform: scale(1.06); } }
.project-thumb .status { position: absolute; top: 0.8rem; left: 0.8rem; z-index: 2; }
.project-body { display: flex; flex-direction: column; gap: 0.7rem; padding: 1.3rem; flex: 1; }
.project-cat { font-family: var(--mono); font-size: 0.75rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.06em; }
.project-body h3 { font-size: var(--fs-h3); line-height: 1.3; }
.project-body > p:not(.project-cat) { color: var(--text-muted); font-size: 0.93rem; line-height: 1.6; }
.project-links { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: auto; padding-top: 0.5rem; }
.link-btn {
  min-height: 44px; display: inline-flex; align-items: center; padding: 0.4rem 1rem;
  border: 1px solid var(--border); border-radius: 999px; font-size: 0.88rem; font-weight: 500;
  transition: all var(--ease);
}
a.link-btn:hover { color: var(--accent); border-color: var(--accent); box-shadow: var(--glow); transform: translateY(-2px); }
.link-btn.disabled { color: var(--text-muted); border-style: dashed; cursor: default; }
.empty-note { text-align: center; color: var(--text-muted); margin-top: 1.5rem; }

/* ---------- Education timeline ---------- */
.timeline { position: relative; max-width: 800px; margin: 0 auto; padding-left: 1.75rem; }
.timeline::before { content: ""; position: absolute; left: 6px; top: 0; bottom: 0; width: 2px; background: var(--border); }
.timeline-item { position: relative; }
.timeline-item .dot {
  position: absolute; left: -1.75rem; top: 1.6rem; width: 14px; height: 14px; border-radius: 50%;
  background: var(--accent); box-shadow: 0 0 12px var(--accent);
}
.edu-card { padding: clamp(1.25rem, 3vw, 2rem); }
.edu-top { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 0.75rem; }
.edu-top h3 { font-size: var(--fs-h3); line-height: 1.35; flex: 1 1 240px; }
.edu-school { margin-top: 0.6rem; font-weight: 600; }
.edu-years { color: var(--text-muted); font-family: var(--mono); font-size: 0.85rem; margin-bottom: 1.2rem; }
.edu-card h4 { font-size: 0.95rem; color: var(--accent); margin: 1rem 0 0.5rem; }

/* ---------- Learning ---------- */
.learn-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.learn-card { padding: 1.3rem 1rem; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
.learn-card .icon { transition: transform 0.6s var(--ease-out); }
.learn-card .icon .ico { width: 32px; height: 32px; }
@media (hover: hover) { .learn-card:hover .icon { transform: translateY(-3px) scale(1.12); } }
.learn-card h3 { font-size: 0.98rem; }
@media (min-width: 640px)  { .learn-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1024px) { .learn-grid { grid-template-columns: repeat(4, 1fr); gap: 1.25rem; } }

/* ---------- Certificates showcase ---------- */
.cert-showcase { display: grid; gap: 1.5rem; align-items: center; }
@media (min-width: 900px) { .cert-showcase { grid-template-columns: 1.35fr 0.65fr; gap: 2.5rem; } }

.cert-stage { position: relative; }
.cert-featured {
  display: block; position: relative; width: 100%; aspect-ratio: 4 / 3; padding: 0; cursor: zoom-in;
  border: 1px solid rgba(57, 255, 20, 0.4); border-radius: var(--radius); box-shadow: var(--glow);
  transition: opacity 0.4s var(--ease-out), transform 0.4s var(--ease-out), box-shadow var(--ease);
}
.cert-featured img { object-fit: contain; padding: 0.5rem; } /* keeps the certificate's original proportions */
.img-box.no-image[data-fallback="cert"]::after {
  content: "Certificate image\A will appear here"; white-space: pre-line; text-align: center;
  position: absolute; inset: 0; display: grid; place-items: center; padding: 1rem;
  font-family: var(--mono); font-size: 0.9rem; color: rgba(57, 255, 20, 0.6);
}
.cert-hint {
  position: absolute; right: 0.75rem; bottom: 0.75rem; z-index: 2;
  padding: 0.3rem 0.8rem; border-radius: 999px; background: rgba(11, 15, 12, 0.88);
  border: 1px solid var(--border); color: var(--text-muted); font-family: var(--mono); font-size: 0.75rem;
  transition: color var(--ease), border-color var(--ease);
}
@media (hover: hover) {
  .cert-featured:hover { box-shadow: 0 0 40px rgba(57, 255, 20, 0.35); }
  .cert-featured:hover .cert-hint { color: var(--accent); border-color: var(--accent); }
}
.cert-arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 3; }
.cert-arrow.prev { left: 0.6rem; }
.cert-arrow.next { right: 0.6rem; }
.cert-stage.is-changing .cert-featured { opacity: 0; transform: translateY(8px) scale(0.985); }

.cert-info { padding: clamp(1.25rem, 3vw, 2rem); display: flex; flex-direction: column; align-items: flex-start; gap: 0.75rem; }
.cert-info > * { transition: opacity 0.4s var(--ease-out), transform 0.4s var(--ease-out); }
.cert-info.is-changing > * { opacity: 0; transform: translateY(6px); }
.cert-count { font-family: var(--mono); font-size: 0.8rem; color: var(--text-muted); }
.cert-info h3 { font-size: clamp(1.15rem, 1.05rem + 0.6vw, 1.5rem); line-height: 1.3; }
.cert-facts { width: 100%; margin: 0.25rem 0 0.5rem; display: grid; gap: 0.75rem; }
.cert-facts div { padding-top: 0.75rem; border-top: 1px solid var(--border); }
.cert-facts dt { font-family: var(--mono); font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); }
.cert-facts dd { margin-top: 0.15rem; font-weight: 500; }

.cert-tabs { display: grid; gap: 0.75rem; margin-top: 1.75rem; grid-template-columns: repeat(auto-fit, minmax(min(100%, 120px), 1fr)); }
.cert-tab {
  display: flex; flex-direction: column; gap: 0.5rem; padding: 0.5rem; cursor: pointer; text-align: center;
  background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-sm); color: var(--text-muted);
  transition: transform var(--ease), border-color var(--ease), box-shadow var(--ease), color var(--ease);
}
.cert-tab-thumb { display: block; aspect-ratio: 4 / 3; border-radius: 6px; }
.cert-tab-thumb img { object-fit: cover; opacity: 0.7; transition: opacity var(--ease), transform 0.8s var(--ease-out); }
.img-box.no-image[data-fallback="mini"]::after {
  content: "No image"; position: absolute; inset: 0; display: grid; place-items: center;
  font-family: var(--mono); font-size: 0.65rem; color: rgba(57, 255, 20, 0.6);
}
.cert-tab-label { font-size: 0.82rem; font-weight: 500; padding-bottom: 0.15rem; overflow-wrap: anywhere; }
.cert-tab.active { border-color: var(--accent); color: var(--accent); box-shadow: var(--glow); }
.cert-tab.active .cert-tab-thumb img { opacity: 1; }
@media (hover: hover) {
  .cert-tab:hover { transform: translateY(-4px); border-color: rgba(57, 255, 20, 0.55); color: var(--text); }
  .cert-tab.active:hover { color: var(--accent); }
  .cert-tab:hover .cert-tab-thumb img { opacity: 1; transform: scale(1.06); }
}

/* ---------- Certificate viewer (lightbox) ---------- */
.lightbox { position: fixed; inset: 0; z-index: 200; display: flex; opacity: 0; transition: opacity 0.35s var(--ease-out); }
.lightbox[hidden] { display: none; }
.lightbox.open { opacity: 1; }
.lb-backdrop { position: absolute; inset: 0; background: rgba(5, 8, 6, 0.94); }
.lb-panel {
  position: relative; width: 100%; max-width: 1400px; height: 100%; margin: 0 auto; padding: 0.75rem;
  display: grid; grid-template-rows: auto minmax(0, 1fr) auto; gap: 0.5rem;
  transform: scale(0.97); transition: transform 0.4s var(--ease-out);
}
.lightbox.open .lb-panel { transform: none; }
.lb-bar { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; }
.lb-count { font-family: var(--mono); font-size: 0.85rem; color: var(--text-muted); }
.lb-tools { display: flex; gap: 0.5rem; }
.lb-btn {
  width: 48px; height: 48px; display: grid; place-items: center; border-radius: 50%; cursor: pointer;
  background: rgba(18, 26, 20, 0.92); color: var(--text); border: 1px solid var(--border);
  font-size: 1.5rem; line-height: 1;
  transition: color var(--ease), border-color var(--ease), box-shadow var(--ease), background var(--ease);
}
.lb-btn[hidden] { display: none; }
.lb-btn:disabled { opacity: 0.4; cursor: default; }
.lb-btn:not(:disabled):hover { color: var(--accent); border-color: var(--accent); box-shadow: var(--glow); }
.lb-stage {
  display: flex; min-height: 0; overflow: auto; overscroll-behavior: contain;
  background: #070a08; border: 1px solid var(--border); border-radius: var(--radius-sm);
}
.lb-stage img {
  margin: auto; width: auto; height: auto; max-width: 100%;
  max-height: calc(100vh - 11rem); max-height: calc(100dvh - 11rem);
  object-fit: contain; cursor: zoom-in; /* original proportions preserved */
}
.lb-stage img.zoomed { max-width: none; max-height: none; width: 200%; cursor: zoom-out; }
.lb-missing { margin: auto; padding: 2rem; text-align: center; color: var(--text-muted); }
.lb-caption { text-align: center; padding: 0.25rem 3.5rem; min-height: 3.5rem; }
.lb-title { font-weight: 600; }
.lb-meta { font-size: 0.85rem; color: var(--text-muted); }
.lb-nav { position: absolute; top: 50%; transform: translateY(-50%); z-index: 3; }
.lb-nav.prev { left: 1.25rem; }
.lb-nav.next { right: 1.25rem; }
@media (min-width: 900px) {
  .lb-panel { padding: 1.25rem; }
  .lb-nav.prev { left: 2rem; }
  .lb-nav.next { right: 2rem; }
}
.cert-grid {
    display: grid;
    grid-template-columns: minmax(0, 480px);
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
}

.cert-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.6rem;
    background: var(--card-bg, #121a14);
    border: 1px solid var(--border, #243328);
    border-radius: var(--radius, 16px);
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.cert-card:hover {
    transform: translateY(-5px);
    border-color: #39ff14;
}
/* ---------- Single Certificate Card ---------- */

.cert-single-card {
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
}

.cert-description {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.7;
    margin: 0.25rem 0;
}

.cert-info {
    width: 100%;
}

/* Certificate viewer image */

.lb-stage img {
    display: block;
    margin: auto;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: calc(100vh - 11rem);
    max-height: calc(100dvh - 11rem);
    object-fit: contain;
}

/* Mobile adjustment */

@media (max-width: 600px) {

    .cert-single-card {
        max-width: 100%;
    }

    .cert-info {
        padding: 1.25rem;
    }

    .lb-panel {
        padding: 0.5rem;
    }

    .lb-stage img {
        max-height: calc(100dvh - 12rem);
    }

    .lb-caption {
        padding: 0.5rem 1rem;
    }

}

/* ---------- Contact ---------- */
.contact-grid { display: grid; gap: 2rem; max-width: 1000px; margin: 0 auto; }
.contact-list { display: grid; gap: 1rem; }
.contact-list li {
  display: flex; gap: 1rem; align-items: center; padding: 1rem; min-width: 0;
  border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-alt);
  transition: transform var(--ease), border-color var(--ease);
}
@media (hover: hover) { .contact-list li:hover { transform: translateX(6px); border-color: rgba(57, 255, 20, 0.5); } }
.contact-list .icon .ico { width: 24px; height: 24px; }
.contact-list li > div { display: flex; flex-direction: column; min-width: 0; }
.contact-list a { color: var(--text-muted); overflow-wrap: anywhere; transition: color var(--ease); }
.contact-list a:hover { color: var(--accent); }
.contact-form { padding: clamp(1.25rem, 3vw, 2rem); display: grid; gap: 1.1rem; }
.field { display: grid; gap: 0.4rem; }
.field label { font-size: 0.9rem; font-weight: 500; }
.field input, .field textarea {
  width: 100%; padding: 0.8rem 1rem; min-height: 48px;
  background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-sm);
  font-size: 1rem; /* 16px prevents iOS zoom */
  transition: border-color var(--ease), box-shadow var(--ease);
}
.field textarea { resize: vertical; min-height: 130px; }
.field input:focus, .field textarea:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
.field.invalid input, .field.invalid textarea { border-color: #ff6b6b; }
.form-status { min-height: 1.4em; font-size: 0.92rem; }
.form-status.ok { color: var(--accent); }
.form-status.err { color: #ff6b6b; }
.form-note { font-size: 0.8rem; color: var(--text-muted); }
@media (min-width: 900px) { .contact-grid { grid-template-columns: 0.8fr 1.2fr; gap: 3rem; } }

/* ---------- Footer ---------- */
.footer { padding: 2rem 0; border-top: 1px solid var(--border); background: var(--bg); }
.footer-inner { display: flex; flex-direction: column; align-items: center; gap: 1rem; text-align: center; color: var(--text-muted); font-size: 0.92rem; }
.socials.small .social-link { width: 40px; height: 40px; }
@media (min-width: 640px) { .footer-inner { flex-direction: row; justify-content: space-between; text-align: left; } }

.back-to-top {
  position: fixed; right: 1rem; bottom: 1rem; z-index: 90;
  width: 48px; height: 48px; border-radius: 50%; cursor: pointer;
  background: var(--accent); color: #07110a; border: 0; font-size: 1.3rem; font-weight: 700;
  box-shadow: var(--glow-strong);
  opacity: 0; visibility: hidden; transform: translateY(10px);
  transition: opacity var(--ease), transform var(--ease), visibility var(--ease);
}
.back-to-top.show { opacity: 1; visibility: visible; transform: none; }
@media (hover: hover) { .back-to-top.show:hover { transform: translateY(-3px); } }

/* ---------- Scroll reveal (smooth fade-up, staggered by JavaScript) ---------- */
.js .reveal {
  opacity: 0; transform: translateY(28px);
  transition: opacity 0.9s var(--ease-out), transform 0.9s var(--ease-out);
  transition-delay: var(--d, 0ms);
}
.js .reveal.visible { opacity: 1; transform: none; }

/* ---------- Small phones ---------- */
@media (max-width: 360px) {
  .container { width: min(100% - 1.5rem, 1200px); }
  .btn { padding-inline: 1.1rem; }
  .skill-list li { flex-wrap: wrap; }
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  html, html.js { scroll-behavior: auto; }
  *, *::before, *::after { transition-duration: 0.01ms !important; transition-delay: 0s !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
  .js .reveal { opacity: 1; transform: none; }
  .cursor { animation: none; }
  .js .ticker-track { animation: none; width: auto; flex-wrap: wrap; justify-content: center; }
  .ticker-group[aria-hidden="true"] { display: none; }
}
