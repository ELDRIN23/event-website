/**
 * App.jsx — Full wedding invitation website (standalone React app).
 * Served at /demo/index.html inside the parent event-website via <iframe>.
 *
 * Features: live countdown, customization panel (persisted to localStorage),
 * RSVP form, photo/video gallery with lightbox, schedule, venue map, FAQ.
 */

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

// ─── Constants ───────────────────────────────────────────────────────────────

const STORAGE_KEY = 'weddingDemoState'; // localStorage key for all persisted data
const countdownLabels = ['Days', 'Hours', 'Minutes', 'Seconds'];

// ─── Default data ─────────────────────────────────────────────────────────────
// Used on first load. All values can be changed live via the Customize panel.

const defaultSettings = {
  coupleNames: 'Olivia & Daniel',
  weddingDate: '2026-09-14T18:00:00',
  venue: 'Willow Creek Estate',
  accentColor: '#d4a5ff',      // CSS variable --accent
  secondaryColor: '#ffe3c0',   // CSS variable --secondary
  heroBackground: 'https://picsum.photos/id/1015/1600/900',
  whatsappNumber: '',
  emailAddress: '',
  musicUrl: '',                // Optional: shows a sticky audio player when set
  gallery: [
    { src: 'https://picsum.photos/id/1018/900/650', alt: 'Couple walking through the city', caption: 'Soft golden light on city streets.' },
    { src: 'https://picsum.photos/id/1011/900/650', alt: 'Hands holding a bouquet', caption: 'A bouquet of warm florals and quiet details.' },
    { src: 'https://picsum.photos/id/1025/900/650', alt: 'Couple enjoying a dinner', caption: 'A cozy dinner moment to remember.' },
  ],
  videos: [
    { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster: 'https://picsum.photos/id/1060/900/650', title: 'Soft motion' },
    { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm', poster: 'https://picsum.photos/id/1062/900/650', title: 'Quiet celebration' },
  ],
};

const defaultRsvp = { name: '', guests: 1, meal: 'Chicken', message: '', response: 'yes' };

// ─── Static content ───────────────────────────────────────────────────────────
// Edit these arrays to change the page text.

const timelineEvents = [
  { title: 'First hello', date: 'June 2022', description: 'When Olivia and Daniel met over coffee, they discovered a shared love for late night creativity and quiet weekends.' },
  { title: 'First trip', date: 'April 2023', description: 'A weekend escape in the countryside revealed a natural harmony in adventure, cooking, and long walks.' },
  { title: 'The proposal', date: 'January 2025', description: 'A candlelit evening at home turned into a moment of joy, warmth, and the answer to a quiet question.' },
  { title: 'Gathering the details', date: 'Today', description: 'Every invitation, playlist, and flower choice is being chosen with care to create a timeless celebration.' },
];

const scheduleItems = [
  { time: '5:30 PM', title: 'Arrival & Welcome', detail: 'Guests are greeted with cocktails and soft live music on the terrace.' },
  { time: '6:15 PM', title: 'Ceremony', detail: 'The ceremony begins beneath the garden arch with vows and quiet joy.' },
  { time: '7:00 PM', title: 'Dinner', detail: 'A curated dinner is served beneath lantern-lit tables.' },
  { time: '8:30 PM', title: 'Toasts', detail: 'Heartfelt speeches and warm memories shared over dessert.' },
  { time: '9:15 PM', title: 'First Dance', detail: 'A gentle first dance opens the evening reception.' },
  { time: '10:00 PM', title: 'Dancing', detail: 'The courtyard comes alive with movement and music.' },
];

const dressCodeItems = [
  { icon: '👗', title: 'Cocktail elegant', detail: 'Modern dresses, tailored suits, and polished accessories.' },
  { icon: '🌿', title: 'Garden friendly', detail: 'Light layers and comfortable shoes for grass and terrace paths.' },
  { icon: '✨', title: 'Refined details', detail: 'Subtle accents and thoughtful finishes that feel elevated.' },
];

const registryItems = [
  { title: 'Home collection', detail: 'Select pieces to help us build a calm, beautiful home together.', link: '#' },
  { title: 'Experiences', detail: 'Thoughtful travel and dining moments for our first year of marriage.', link: '#' },
];

const faqItems = [
  { question: 'Is parking available on site?', answer: 'Yes, onsite parking will be available for all guests with attendants guiding vehicles to the entrance.' },
  { question: 'Can I bring a plus one?', answer: 'Please refer to your invitation for guest details. We are excited to celebrate with those listed on your invitation.' },
  { question: 'Where should I stay?', answer: 'We recommend the nearby Willow Inn, which is a short drive from the venue and offers a refined weekend stay.' },
  { question: 'Will there be dietary accommodations?', answer: 'If you have any dietary restrictions, please let us know via email and our catering team will take great care.' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Prevents countdown from going negative after the wedding date passes
function clamp(value) { return value < 0 ? 0 : value; }

// Builds a pre-filled WhatsApp deep-link for RSVP (returns '#' if no number set)
function buildWhatsAppUrl(settings, rsvp) {
  const number = settings.whatsappNumber.replace(/\D/g, '');
  const responseText = rsvp.response === 'yes'
    ? `I will attend with ${rsvp.guests} guest${rsvp.guests === 1 ? '' : 's'}.`
    : 'I am sorry I cannot attend.';
  const message = [
    `Hi ${settings.coupleNames},`,
    `This is ${rsvp.name || '[Your name]'}.`,
    responseText,
    `Meal preference: ${rsvp.meal}.`,
    rsvp.message ? `Note: ${rsvp.message}` : '',
    `Wedding date: ${new Date(settings.weddingDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}.`,
    `Venue: ${settings.venue}.`,
  ].filter(Boolean).join(' ');
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : '#';
}

// Builds a pre-filled mailto: link for RSVP
function buildEmailUrl(settings, rsvp) {
  const subject = `RSVP for ${settings.coupleNames} wedding`;
  const body = [
    `Hello ${settings.coupleNames},`,
    '',
    `My name is ${rsvp.name || '[Your name]'}.`,
    rsvp.response === 'yes'
      ? `I am happy to confirm my attendance with ${rsvp.guests} guest${rsvp.guests === 1 ? '' : 's'}.`
      : 'I am sorry I cannot attend.',
    `Meal preference: ${rsvp.meal}.`,
    rsvp.message ? `Message: ${rsvp.message}` : '',
    '',
    `Wedding date: ${new Date(settings.weddingDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}.`,
    `Venue: ${settings.venue}.`,
  ].filter(Boolean).join('\n');
  return `mailto:${settings.emailAddress || ''}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// ─── Custom hook ──────────────────────────────────────────────────────────────

// Ticks every second and returns [days, hours, minutes, seconds] until targetDate
function useCountdown(targetDate) {
  const [remaining, setRemaining] = useState(() => clamp(targetDate - new Date()));

  useEffect(() => {
    const interval = window.setInterval(() => setRemaining(clamp(targetDate - new Date())), 1000);
    return () => window.clearInterval(interval);
  }, [targetDate]);

  return useMemo(() => {
    const t = Math.floor(remaining / 1000);
    return [Math.floor(t / 86400), Math.floor((t % 86400) / 3600), Math.floor((t % 3600) / 60), t % 60];
  }, [remaining]);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

// 4-card countdown grid (responsive: 2×2 on mobile, 4-col on desktop)
function Countdown({ targetDate }) {
  const values = useCountdown(targetDate);
  return (
    <div className="countdown-grid" aria-label="Countdown to wedding date">
      {values.map((value, index) => (
        <div key={countdownLabels[index]} className="countdown-card">
          <span>{String(value).padStart(2, '0')}</span>
          <p>{countdownLabels[index]}</p>
        </div>
      ))}
    </div>
  );
}

// Reusable section header: eyebrow label + h2 + description
function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// Full-screen overlay for previewing a clicked gallery image or video
function Lightbox({ media, onClose }) {
  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true">
      <div className="lightbox-content">
        <button className="lightbox-close" onClick={onClose} aria-label="Close preview">×</button>
        {media.type === 'video' ? (
          <video className="lightbox-media" controls autoPlay poster={media.poster}>
            <source src={media.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img className="lightbox-media" src={media.src} alt={media.alt} />
        )}
        <div className="lightbox-footer">
          <p>{media.title || media.caption}</p>
          <span>Click anywhere to close</span>
        </div>
      </div>
      <div className="lightbox-backdrop" onClick={onClose} /> {/* clicking backdrop also closes */}
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  // Load settings + RSVP from localStorage; fall back to defaults on first visit
  const [settings, setSettings] = useState(() => {
    try {
      const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
      return parsed ? { ...defaultSettings, ...parsed.settings, gallery: parsed.settings?.gallery ?? defaultSettings.gallery, videos: parsed.settings?.videos ?? defaultSettings.videos } : defaultSettings;
    } catch { return defaultSettings; }
  });

  const [rsvp, setRsvp] = useState(() => {
    try {
      const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
      return parsed ? { ...defaultRsvp, ...parsed.rsvp } : defaultRsvp;
    } catch { return defaultRsvp; }
  });

  const [panelOpen, setPanelOpen]         = useState(false); // customization sidebar
  const [isNavOpen, setNavOpen]           = useState(false); // mobile nav drawer
  const [isLoading, setIsLoading]         = useState(true);  // loading screen
  const [activeMedia, setActiveMedia]     = useState(null);  // lightbox target
  const [feedback, setFeedback]           = useState('');    // RSVP confirmation message
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Persist settings + RSVP to localStorage whenever they change
  useEffect(() => {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ settings, rsvp })); } catch {}
  }, [settings, rsvp]);

  // Show "Back to top" button after scrolling 420px
  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide loading screen once all resources are ready
  useEffect(() => {
    const done = () => setIsLoading(false);
    if (document.readyState === 'complete') done();
    else { window.addEventListener('load', done); return () => window.removeEventListener('load', done); }
  }, []);

  // Lock body scroll when any modal/drawer is open
  useEffect(() => {
    document.body.style.overflow = activeMedia || panelOpen || isNavOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeMedia, panelOpen, isNavOpen]);

  const weddingDate = useMemo(() => new Date(settings.weddingDate), [settings.weddingDate]);
  const dateLabel = isNaN(weddingDate.getTime())
    ? 'Save the date'
    : weddingDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  const whatsappUrl = buildWhatsAppUrl(settings, rsvp);
  const emailUrl    = buildEmailUrl(settings, rsvp);

  if (isLoading) {
    return (
      <div className="loading-screen" aria-live="polite">
        <div className="loading-content">
          <div className="loader-ring" aria-hidden="true" />
          <p>Preparing your invitation...</p>
        </div>
      </div>
    );
  }

  // Updater helpers
  const updateSetting    = (key, value) => setSettings((p) => ({ ...p, [key]: value }));
  const updateGalleryItem = (i, key, val) => setSettings((p) => { const g = [...p.gallery]; g[i] = { ...g[i], [key]: val }; return { ...p, gallery: g }; });
  const updateVideoItem   = (i, key, val) => setSettings((p) => { const v = [...p.videos]; v[i] = { ...v[i], [key]: val }; return { ...p, videos: v }; });
  const updateRsvp        = (key, value) => setRsvp((p) => ({ ...p, [key]: value }));

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setFeedback('Your RSVP has been saved locally. Thank you!');
    window.setTimeout(() => setFeedback(''), 5200);
  };

  const activeGallery = settings.gallery ?? defaultSettings.gallery;
  const activeVideos  = settings.videos  ?? defaultSettings.videos;

  return (
    // CSS variables --accent and --secondary are set here so all children can use them
    <div className="page-shell" style={{ '--accent': settings.accentColor, '--secondary': settings.secondaryColor }}>

      {/* ── Customize button (top-right, fixed) ── */}
      <button className={`panel-toggle ${panelOpen ? 'open' : ''}`} type="button" onClick={() => setPanelOpen((v) => !v)}>
        {panelOpen ? 'Close settings' : 'Customize'}
      </button>

      {/* ── Customization sidebar ── slides in from the right ── */}
      <aside className={`settings-panel ${panelOpen ? 'open' : ''}`}>
        <button className="panel-close" type="button" onClick={() => setPanelOpen(false)} aria-label="Close customization panel">×</button>
        <div className="panel-inner">
          <h2>Customization</h2>
          <div className="panel-group">
            <label>Couple names<input type="text" value={settings.coupleNames} onChange={(e) => updateSetting('coupleNames', e.target.value)} /></label>
            <label>Wedding date<input type="datetime-local" value={settings.weddingDate} onChange={(e) => updateSetting('weddingDate', e.target.value)} /></label>
            <label>Venue<input type="text" value={settings.venue} onChange={(e) => updateSetting('venue', e.target.value)} /></label>
            <label>Accent color<input type="color" value={settings.accentColor} onChange={(e) => updateSetting('accentColor', e.target.value)} /></label>
            <label>Secondary color<input type="color" value={settings.secondaryColor} onChange={(e) => updateSetting('secondaryColor', e.target.value)} /></label>
            <label>Hero background URL<input type="text" value={settings.heroBackground} onChange={(e) => updateSetting('heroBackground', e.target.value)} /></label>
            <label>Background music URL<input type="text" value={settings.musicUrl} onChange={(e) => updateSetting('musicUrl', e.target.value)} /></label>
            <label>WhatsApp number<input type="tel" placeholder="1234567890" value={settings.whatsappNumber} onChange={(e) => updateSetting('whatsappNumber', e.target.value)} /></label>
            <label>RSVP email<input type="email" placeholder="name@example.com" value={settings.emailAddress} onChange={(e) => updateSetting('emailAddress', e.target.value)} /></label>
          </div>

          <div className="panel-group">
            <h3>Gallery</h3>
            {activeGallery.map((item, i) => (
              <div key={i} className="panel-item">
                <label>Image URL<input type="text" value={item.src} onChange={(e) => updateGalleryItem(i, 'src', e.target.value)} /></label>
                <label>Alt text<input type="text" value={item.alt} onChange={(e) => updateGalleryItem(i, 'alt', e.target.value)} /></label>
                <label>Caption<input type="text" value={item.caption} onChange={(e) => updateGalleryItem(i, 'caption', e.target.value)} /></label>
              </div>
            ))}
          </div>

          <div className="panel-group">
            <h3>Videos</h3>
            {activeVideos.map((item, i) => (
              <div key={i} className="panel-item">
                <label>Video URL<input type="text" value={item.src} onChange={(e) => updateVideoItem(i, 'src', e.target.value)} /></label>
                <label>Poster URL<input type="text" value={item.poster} onChange={(e) => updateVideoItem(i, 'poster', e.target.value)} /></label>
                <label>Title<input type="text" value={item.title} onChange={(e) => updateVideoItem(i, 'title', e.target.value)} /></label>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* ── Mobile nav drawer ── */}
      <div className={`nav-drawer ${isNavOpen ? 'open' : ''}`} id="mobile-navigation" aria-hidden={!isNavOpen}>
        <div className="nav-drawer-backdrop" onClick={() => setNavOpen(false)} />
        <div className="nav-drawer-panel">
          <nav className="nav-panel">
            {['our-story', 'timeline', 'gallery', 'rsvp', 'details'].map((id) => (
              <a key={id} href={`#${id}`} className="nav-link nav-link-drawer" onClick={() => setNavOpen(false)}>
                {id.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Decorative background glow blobs (CSS-animated, purely visual) */}
      <div className="hero-backdrop" aria-hidden="true">
        <span className="glow glow-1" /><span className="glow glow-2" /><span className="glow glow-3" />
      </div>

      {/* ════════════ HERO ════════════ */}
      <header
        className="hero"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(8,10,17,0.72), rgba(10,12,19,0.76)), url(${settings.heroBackground})` }}
      >
        {/* Desktop nav — slides in from top on mount */}
        <motion.nav className="nav" initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <a href="#" className="brand">{settings.coupleNames}</a>
          <div className="nav-links">
            <a href="#our-story" className="nav-link">Our Story</a>
            <a href="#timeline"  className="nav-link">Timeline</a>
            <a href="#gallery"   className="nav-link">Gallery</a>
            <a href="#rsvp"      className="nav-link">RSVP</a>
          </div>
          {/* Hamburger — visible on mobile only (CSS hides it on desktop) */}
          <button className={`nav-toggle ${isNavOpen ? 'open' : ''}`} type="button" aria-expanded={isNavOpen} aria-label={isNavOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setNavOpen((v) => !v)}>
            <span /><span /><span />
          </button>
        </motion.nav>

        {/* Hero copy — fades in from below */}
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}>
          <p className="eyebrow">{dateLabel}</p>
          <h1>{settings.coupleNames}</h1>
          <p className="hero-text">A luminous evening of elegance, music, and celebration at {settings.venue}.</p>

          {/* hero-panel: glassmorphism box containing countdown + venue card, stacked vertically */}
          <div className="hero-panel">
            {/* Countdown timer */}
            <div>
              <p className="panel-label">Countdown to the ceremony</p>
              <Countdown targetDate={weddingDate} />
            </div>

            {/* Venue card — DaisyUI .card with Tailwind glass styling */}
            <div className="card bg-base-100/10 border border-white/10 backdrop-blur shadow-xl">
              <div className="card-body gap-2 py-5 px-6">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📍</span>
                  <h3 className="card-title text-white text-base font-semibold tracking-wide">{settings.venue}</h3>
                </div>
                <p className="text-white/65 text-sm leading-relaxed">
                  Gathering begins at{' '}
                  <span className="text-white/90 font-medium">
                    {weddingDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </p>
                <div className="card-actions mt-1">
                  <a href="#details" className="btn btn-sm btn-ghost text-white/60 hover:text-white px-0 gap-1">View details <span>→</span></a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated scroll hint */}
        <motion.div className="scroll-indicator" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.5, ease: 'easeOut' }}>
          <a href="#our-story">
            <span className="chevron" aria-hidden="true">⌄</span>
            <span>Scroll to story</span>
          </a>
        </motion.div>
      </header>

      {/* ════════════ MAIN CONTENT ════════════ */}
      <main>

        {/* ── RSVP ── */}
        <section className="section-block rsvp-section" id="rsvp">
          <SectionHeader eyebrow="RSVP" title="Let us know you are coming" description="Share your guest count, meal preference, and a personal note. RSVP information is saved locally so you can update it anytime." />
          <div className="rsvp-layout">
            {/* Form */}
            <form className="rsvp-form" onSubmit={handleRsvpSubmit}>
              <label>Full name<input className="input-field" type="text" value={rsvp.name} onChange={(e) => updateRsvp('name', e.target.value)} placeholder="Your name" /></label>
              <label>Will you attend?
                <select className="select-field" value={rsvp.response} onChange={(e) => updateRsvp('response', e.target.value)}>
                  <option value="yes">Yes, I will attend</option>
                  <option value="no">No, I cannot attend</option>
                </select>
              </label>
              <label>Guest count<input className="input-field" type="number" min="0" value={rsvp.guests} onChange={(e) => updateRsvp('guests', Number(e.target.value) || 0)} /></label>
              <label>Meal preference
                <select className="select-field" value={rsvp.meal} onChange={(e) => updateRsvp('meal', e.target.value)}>
                  <option value="Chicken">Chicken</option>
                  <option value="Fish">Fish</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                </select>
              </label>
              <label>Message<textarea className="textarea-field" rows="5" value={rsvp.message} onChange={(e) => updateRsvp('message', e.target.value)} placeholder="A short note for the couple" /></label>
              <div className="rsvp-actions">
                <button className="btn btn-primary" type="submit">Save RSVP</button>
                <a className="btn btn-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp RSVP</a>
                <a className="btn btn-outline" href={emailUrl}>Email RSVP</a>
              </div>
              {feedback ? <p className="rsvp-feedback">{feedback}</p> : null}
            </form>

            {/* Live preview card — mirrors the form in real time */}
            <div className="rsvp-preview">
              <div className="preview-card">
                <h3>Live RSVP preview</h3>
                <p><strong>Name:</strong> {rsvp.name || '—'}</p>
                <p><strong>Attendance:</strong> {rsvp.response === 'yes' ? 'Attending' : 'Not attending'}</p>
                <p><strong>Guests:</strong> {rsvp.guests}</p>
                <p><strong>Meal:</strong> {rsvp.meal}</p>
                {rsvp.message ? <p className="preview-note">"{rsvp.message}"</p> : <p className="preview-note">Add a note above to personalize your RSVP.</p>}
              </div>
            </div>
          </div>
        </section>

        {/* ── Timeline ── alternating slide-in animation */}
        <section className="section-block timeline-section" id="timeline">
          <SectionHeader eyebrow="Timeline" title="A sequence of moments that brought us here" description="Each chapter is defined by a shared discovery, a thoughtful pause, and the unfolding of something meaningful." />
          <div className="timeline-grid">
            {timelineEvents.map((event, index) => (
              <motion.article key={event.title} className="timeline-event"
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}>
                <div className="timeline-pill"><span>{event.date}</span></div>
                <div><h3>{event.title}</h3><p>{event.description}</p></div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ── Photo Gallery ── clicking an image opens the Lightbox */}
        <section className="section-block" id="gallery">
          <SectionHeader eyebrow="Gallery" title="A visual collection of quiet moments and joyful details" description="Browse a gently curated gallery of images and videos that capture the atmosphere, emotion, and style of the celebration to come." />
          <motion.div className="media-grid" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }}>
            {activeGallery.map((item) => (
              <button key={item.src} className="media-card" type="button" onClick={() => setActiveMedia({ ...item, type: 'image', title: item.caption })}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="media-overlay"><p>{item.caption}</p></div>
              </button>
            ))}
          </motion.div>
          <div className="section-footnote"><p>Tap any image to open the preview.</p></div>
        </section>

        {/* ── Video Gallery ── same pattern as photos but opens a video in the Lightbox */}
        <section className="section-block media-section" id="video-gallery">
          <SectionHeader eyebrow="Video gallery" title="Moments in motion" description="A small selection of short, atmospheric clips that bring the evening to life with light, movement, and mood." />
          <motion.div className="media-grid" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }}>
            {activeVideos.map((item) => (
              <button key={item.src} className="media-card video-card" type="button" onClick={() => setActiveMedia({ ...item, type: 'video' })}>
                <img src={item.poster} alt={item.title} loading="lazy" />
                <span className="video-badge">Video</span>
                <div className="media-overlay"><p>{item.title}</p></div>
              </button>
            ))}
          </motion.div>
        </section>

        {/* ── Wedding Schedule ── */}
        <section className="section-block" id="schedule">
          <SectionHeader eyebrow="Wedding Schedule" title="An evening shaped around ease and celebration" description="Each moment is designed to feel intentional, with room to connect, savor, and celebrate together." />
          <div className="schedule-grid">
            {scheduleItems.map((item, index) => (
              <motion.article key={item.time} className="schedule-card"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, delay: index * 0.08 }}>
                <span className="schedule-time">{item.time}</span>
                <div><h3>{item.title}</h3><p>{item.detail}</p></div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ── Venue ── info card + embedded Google Maps iframe */}
        <section className="section-block venue-section" id="venue">
          <SectionHeader eyebrow="Venue" title="Willow Creek Estate" description="A charming estate with garden terraces, hidden corners, and elegant spaces that feel intimate and curated." />
          <div className="venue-grid">
            <div className="venue-card">
              <p className="eyebrow">Location</p>
              <h3>{settings.venue}</h3>
              <p className="venue-copy">Set among rolling lawns and lantern-lit walkways, the estate offers a calm and polished setting for our celebration.</p>
              <div className="info-list">
                <div><strong>Address</strong><p>272 Pine Hill Road, Sonoma, CA</p></div>
                <div><strong>Arrival</strong><p>5:30 PM ceremony begins at the garden pavilion.</p></div>
                <div><strong>Reception</strong><p>Dinner and dancing under the open sky in the courtyard.</p></div>
              </div>
              {/* Opens Google Maps directions to the venue */}
              <a className="btn btn-outline" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(settings.venue)}`} target="_blank" rel="noreferrer">Open in Maps</a>
            </div>
            <div className="map-card">
              <iframe title="Wedding venue location" src={`https://www.google.com/maps?q=${encodeURIComponent(settings.venue)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* ── Details: Dress Code + Gift Registry ── */}
        <section className="section-block info-section" id="details">
          <div className="info-grid">
            <motion.article className="info-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75 }}>
              <div className="info-icon">👗</div>
              <h3>Dress Code</h3>
              <p>Elegant cocktail attire with thoughtful touches that feel polished and comfortable for a garden evening.</p>
              <ul>
                {dressCodeItems.map((item) => (<li key={item.title}><strong>{item.icon} {item.title}:</strong> {item.detail}</li>))}
              </ul>
            </motion.article>
            <motion.article className="info-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, delay: 0.1 }}>
              <div className="info-icon">🎁</div>
              <h3>Gift Registry</h3>
              <p>Your presence is the greatest gift. For friends who asked, here are a few thoughtful registry ideas.</p>
              <div className="registry-list">
                {registryItems.map((item) => (<a key={item.title} href={item.link} className="registry-item"><strong>{item.title}</strong><span>{item.detail}</span></a>))}
              </div>
            </motion.article>
          </div>
        </section>

        {/* ── FAQ ── native <details>/<summary> accordion, no JS toggling needed */}
        <section className="section-block faq-section" id="faq">
          <SectionHeader eyebrow="FAQ" title="Quick answers for your visit" description="The details that make the evening smooth and welcoming, from parking to dietary support." />
          <div className="faq-grid">
            {faqItems.map((item) => (
              <motion.details key={item.question} className="faq-item"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75 }}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </motion.details>
            ))}
          </div>
        </section>
      </main>

      {/* Sticky audio player — only shown when settings.musicUrl is set */}
      {settings.musicUrl ? (
        <div className="music-player"><audio controls src={settings.musicUrl} /></div>
      ) : null}

      <footer className="page-footer">
        <p>{settings.coupleNames} • {new Date(settings.weddingDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        <p>Crafted with care for an intimate, memorable evening.</p>
      </footer>

      {/* Floating "back to top" button — appears after scrolling 420px */}
      {showBackToTop && (
        <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll back to top">
          ↑ Top
        </button>
      )}

      {/* Lightbox — rendered only when a gallery item is clicked */}
      {activeMedia && <Lightbox media={activeMedia} onClose={() => setActiveMedia(null)} />}
    </div>
  );
}
