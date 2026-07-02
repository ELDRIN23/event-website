import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const STORAGE_KEY = 'weddingDemoState';
const countdownLabels = ['Days', 'Hours', 'Minutes', 'Seconds'];

const defaultSettings = {
  coupleNames: 'Olivia & Daniel',
  weddingDate: '2026-09-14T18:00:00',
  venue: 'Willow Creek Estate',
  accentColor: '#d4a5ff',
  secondaryColor: '#ffe3c0',
  heroBackground: 'https://picsum.photos/id/1015/1600/900',
  whatsappNumber: '',
  emailAddress: '',
  musicUrl: '',
  gallery: [
    {
      src: 'https://picsum.photos/id/1018/900/650',
      alt: 'Couple walking through the city',
      caption: 'Soft golden light on city streets.',
    },
    {
      src: 'https://picsum.photos/id/1011/900/650',
      alt: 'Hands holding a bouquet',
      caption: 'A bouquet of warm florals and quiet details.',
    },
    {
      src: 'https://picsum.photos/id/1025/900/650',
      alt: 'Couple enjoying a dinner',
      caption: 'A cozy dinner moment to remember.',
    },
  ],
  videos: [
    {
      src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      poster: 'https://picsum.photos/id/1060/900/650',
      title: 'Soft motion',
    },
    {
      src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
      poster: 'https://picsum.photos/id/1062/900/650',
      title: 'Quiet celebration',
    },
  ],
};

const defaultRsvp = {
  name: '',
  guests: 1,
  meal: 'Chicken',
  message: '',
  response: 'yes',
};

const timelineEvents = [
  {
    title: 'First hello',
    date: 'June 2022',
    description: 'When Olivia and Daniel met over coffee, they discovered a shared love for late night creativity and quiet weekends.',
  },
  {
    title: 'First trip',
    date: 'April 2023',
    description: 'A weekend escape in the countryside revealed a natural harmony in adventure, cooking, and long walks.',
  },
  {
    title: 'The proposal',
    date: 'January 2025',
    description: 'A candlelit evening at home turned into a moment of joy, warmth, and the answer to a quiet question.',
  },
  {
    title: 'Gathering the details',
    date: 'Today',
    description: 'Every invitation, playlist, and flower choice is being chosen with care to create a timeless celebration.',
  },
];

const scheduleItems = [
  {
    time: '5:30 PM',
    title: 'Arrival & Welcome',
    detail: 'Guests are greeted with cocktails and soft live music on the terrace.',
  },
  {
    time: '6:15 PM',
    title: 'Ceremony',
    detail: 'The ceremony begins beneath the garden arch with vows and quiet joy.',
  },
  {
    time: '7:00 PM',
    title: 'Dinner',
    detail: 'A curated dinner is served beneath lantern-lit tables.',
  },
  {
    time: '8:30 PM',
    title: 'Toasts',
    detail: 'Heartfelt speeches and warm memories shared over dessert.',
  },
  {
    time: '9:15 PM',
    title: 'First Dance',
    detail: 'A gentle first dance opens the evening reception.',
  },
  {
    time: '10:00 PM',
    title: 'Dancing',
    detail: 'The courtyard comes alive with movement and music.',
  },
];

const dressCodeItems = [
  {
    icon: '👗',
    title: 'Cocktail elegant',
    detail: 'Modern dresses, tailored suits, and polished accessories.',
  },
  {
    icon: '🌿',
    title: 'Garden friendly',
    detail: 'Light layers and comfortable shoes for grass and terrace paths.',
  },
  {
    icon: '✨',
    title: 'Refined details',
    detail: 'Subtle accents and thoughtful finishes that feel elevated.',
  },
];

const registryItems = [
  {
    title: 'Home collection',
    detail: 'Select pieces to help us build a calm, beautiful home together.',
    link: '#',
  },
  {
    title: 'Experiences',
    detail: 'Thoughtful travel and dining moments for our first year of marriage.',
    link: '#',
  },
];

const faqItems = [
  {
    question: 'Is parking available on site?',
    answer: 'Yes, onsite parking will be available for all guests with attendants guiding vehicles to the entrance.',
  },
  {
    question: 'Can I bring a plus one?',
    answer: 'Please refer to your invitation for guest details. We are excited to celebrate with those listed on your invitation.',
  },
  {
    question: 'Where should I stay?',
    answer: 'We recommend the nearby Willow Inn, which is a short drive from the venue and offers a refined weekend stay.',
  },
  {
    question: 'Will there be dietary accommodations?',
    answer: 'If you have any dietary restrictions, please let us know via email and our catering team will take great care.',
  },
];

function clamp(value) {
  return value < 0 ? 0 : value;
}

function useCountdown(targetDate) {
  const [remaining, setRemaining] = useState(() => {
    const delta = targetDate - new Date();
    return clamp(delta);
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      const delta = targetDate - new Date();
      setRemaining(clamp(delta));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  return useMemo(() => {
    const totalSeconds = Math.floor(remaining / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [days, hours, minutes, seconds];
  }, [remaining]);
}

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

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Lightbox({ media, onClose }) {
  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true">
      <div className="lightbox-content">
        <button className="lightbox-close" onClick={onClose} aria-label="Close preview">
          ×
        </button>
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
      <div className="lightbox-backdrop" onClick={onClose} />
    </div>
  );
}

function buildWhatsAppUrl(settings, rsvp) {
  const number = settings.whatsappNumber.replace(/\D/g, '');
  const responseText =
    rsvp.response === 'yes'
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
  ]
    .filter(Boolean)
    .join(' ');

  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : '#';
}

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
  ]
    .filter(Boolean)
    .join('\n');

  return `mailto:${settings.emailAddress || ''}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function App() {
  const [settings, setSettings] = useState(() => {
    if (typeof window === 'undefined') return defaultSettings;

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultSettings;
      const parsed = JSON.parse(raw);
      return {
        ...defaultSettings,
        ...parsed.settings,
        gallery: parsed.settings?.gallery ?? defaultSettings.gallery,
        videos: parsed.settings?.videos ?? defaultSettings.videos,
      };
    } catch {
      return defaultSettings;
    }
  });

  const [rsvp, setRsvp] = useState(() => {
    if (typeof window === 'undefined') return defaultRsvp;

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultRsvp;
      const parsed = JSON.parse(raw);
      return {
        ...defaultRsvp,
        ...parsed.rsvp,
      };
    } catch {
      return defaultRsvp;
    }
  });

  const [panelOpen, setPanelOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeMedia, setActiveMedia] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ settings, rsvp }));
    } catch {
      // ignore storage errors
    }
  }, [settings, rsvp]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 420);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeMedia || panelOpen || isNavOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeMedia, panelOpen, isNavOpen]);

  const weddingDate = useMemo(() => new Date(settings.weddingDate), [settings.weddingDate]);
  const dateLabel = isNaN(weddingDate.getTime())
    ? 'Save the date'
    : weddingDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  const whatsappUrl = buildWhatsAppUrl(settings, rsvp);
  const emailUrl = buildEmailUrl(settings, rsvp);

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

  const updateSetting = (key, value) => setSettings((prev) => ({ ...prev, [key]: value }));

  const updateGalleryItem = (index, key, value) => {
    setSettings((prev) => {
      const gallery = [...prev.gallery];
      gallery[index] = { ...gallery[index], [key]: value };
      return { ...prev, gallery };
    });
  };

  const updateVideoItem = (index, key, value) => {
    setSettings((prev) => {
      const videos = [...prev.videos];
      videos[index] = { ...videos[index], [key]: value };
      return { ...prev, videos };
    });
  };

  const updateRsvp = (key, value) => {
    setRsvp((prev) => ({ ...prev, [key]: value }));
  };

  const handleRsvpSubmit = (event) => {
    event.preventDefault();
    setFeedback('Your RSVP has been saved locally. Thank you!');
    window.setTimeout(() => setFeedback(''), 5200);
  };

  const activeGallery = settings.gallery ?? defaultSettings.gallery;
  const activeVideos = settings.videos ?? defaultSettings.videos;

  return (
    <div className="page-shell" style={{ '--accent': settings.accentColor, '--secondary': settings.secondaryColor }}>
      <button className={`panel-toggle ${panelOpen ? 'open' : ''}`} type="button" onClick={() => setPanelOpen((value) => !value)}>
        {panelOpen ? 'Close settings' : 'Customize'}
      </button>

      <aside className={`settings-panel ${panelOpen ? 'open' : ''}`}>
        <button className="panel-close" type="button" onClick={() => setPanelOpen(false)} aria-label="Close customization panel">
          ×
        </button>
        <div className="panel-inner">
          <h2>Customization</h2>
          <div className="panel-group">
            <label>
              Couple names
              <input
                type="text"
                value={settings.coupleNames}
                onChange={(event) => updateSetting('coupleNames', event.target.value)}
              />
            </label>
            <label>
              Wedding date
              <input
                type="datetime-local"
                value={settings.weddingDate}
                onChange={(event) => updateSetting('weddingDate', event.target.value)}
              />
            </label>
            <label>
              Venue
              <input
                type="text"
                value={settings.venue}
                onChange={(event) => updateSetting('venue', event.target.value)}
              />
            </label>
            <label>
              Accent color
              <input
                type="color"
                value={settings.accentColor}
                onChange={(event) => updateSetting('accentColor', event.target.value)}
              />
            </label>
            <label>
              Secondary color
              <input
                type="color"
                value={settings.secondaryColor}
                onChange={(event) => updateSetting('secondaryColor', event.target.value)}
              />
            </label>
            <label>
              Hero background URL
              <input
                type="text"
                value={settings.heroBackground}
                onChange={(event) => updateSetting('heroBackground', event.target.value)}
              />
            </label>
            <label>
              Background music URL
              <input
                type="text"
                value={settings.musicUrl}
                onChange={(event) => updateSetting('musicUrl', event.target.value)}
              />
            </label>
            <label>
              WhatsApp number
              <input
                type="tel"
                placeholder="1234567890"
                value={settings.whatsappNumber}
                onChange={(event) => updateSetting('whatsappNumber', event.target.value)}
              />
            </label>
            <label>
              RSVP email
              <input
                type="email"
                placeholder="name@example.com"
                value={settings.emailAddress}
                onChange={(event) => updateSetting('emailAddress', event.target.value)}
              />
            </label>
          </div>

          <div className="panel-group">
            <h3>Gallery</h3>
            {activeGallery.map((item, index) => (
              <div key={index} className="panel-item">
                <label>
                  Image URL
                  <input
                    type="text"
                    value={item.src}
                    onChange={(event) => updateGalleryItem(index, 'src', event.target.value)}
                  />
                </label>
                <label>
                  Alt text
                  <input
                    type="text"
                    value={item.alt}
                    onChange={(event) => updateGalleryItem(index, 'alt', event.target.value)}
                  />
                </label>
                <label>
                  Caption
                  <input
                    type="text"
                    value={item.caption}
                    onChange={(event) => updateGalleryItem(index, 'caption', event.target.value)}
                  />
                </label>
              </div>
            ))}
          </div>

          <div className="panel-group">
            <h3>Videos</h3>
            {activeVideos.map((item, index) => (
              <div key={index} className="panel-item">
                <label>
                  Video URL
                  <input
                    type="text"
                    value={item.src}
                    onChange={(event) => updateVideoItem(index, 'src', event.target.value)}
                  />
                </label>
                <label>
                  Poster URL
                  <input
                    type="text"
                    value={item.poster}
                    onChange={(event) => updateVideoItem(index, 'poster', event.target.value)}
                  />
                </label>
                <label>
                  Title
                  <input
                    type="text"
                    value={item.title}
                    onChange={(event) => updateVideoItem(index, 'title', event.target.value)}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <div className={`nav-drawer ${isNavOpen ? 'open' : ''}`} id="mobile-navigation" aria-hidden={!isNavOpen}>
        <div className="nav-drawer-backdrop" onClick={() => setNavOpen(false)} />
        <div className="nav-drawer-panel">
          <nav className="nav-panel">
            <a href="#our-story" className="nav-link nav-link-drawer" onClick={() => setNavOpen(false)}>
              Our Story
            </a>
            <a href="#timeline" className="nav-link nav-link-drawer" onClick={() => setNavOpen(false)}>
              Timeline
            </a>
            <a href="#gallery" className="nav-link nav-link-drawer" onClick={() => setNavOpen(false)}>
              Gallery
            </a>
            <a href="#rsvp" className="nav-link nav-link-drawer" onClick={() => setNavOpen(false)}>
              RSVP
            </a>
            <a href="#details" className="nav-link nav-link-drawer" onClick={() => setNavOpen(false)}>
              Details
            </a>
          </nav>
        </div>
      </div>

      <div className="hero-backdrop" aria-hidden="true">
        <span className="glow glow-1" />
        <span className="glow glow-2" />
        <span className="glow glow-3" />
      </div>

      <header
        className="hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8, 10, 17, 0.72), rgba(10, 12, 19, 0.76)), url(${settings.heroBackground})`,
        }}
      >
        <motion.nav
          className="nav"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <a href="#" className="brand">
            {settings.coupleNames}
          </a>
          <div className="nav-links">
            <a href="#our-story" className="nav-link">
              Our Story
            </a>
            <a href="#timeline" className="nav-link">
              Timeline
            </a>
            <a href="#gallery" className="nav-link">
              Gallery
            </a>
            <a href="#rsvp" className="nav-link">
              RSVP
            </a>
          </div>
          <button
            className={`nav-toggle ${isNavOpen ? 'open' : ''}`}
            type="button"
            aria-expanded={isNavOpen}
            aria-label={isNavOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setNavOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </motion.nav>

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
        >
          <p className="eyebrow">{dateLabel}</p>
          <h1>{settings.coupleNames}</h1>
          <p className="hero-text">
            A luminous evening of elegance, music, and celebration at {settings.venue}.
          </p>

          <div className="hero-panel">
            <div>
              <p className="panel-label">Countdown to the ceremony</p>
              <Countdown targetDate={weddingDate} />
            </div>
            <div className="hero-panel-copy">
              <p className="panel-title">{settings.venue}</p>
              <p className="panel-note">Gathering begins at {weddingDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: 'easeOut' }}
        >
          <a href="#our-story">
            <span className="chevron" aria-hidden="true">
              ⌄
            </span>
            <span>Scroll to story</span>
          </a>
        </motion.div>
      </header>

      <main>
        <section className="section-block rsvp-section" id="rsvp">
          <SectionHeader
            eyebrow="RSVP"
            title="Let us know you are coming"
            description="Share your guest count, meal preference, and a personal note. RSVP information is saved locally so you can update it anytime."
          />

          <div className="rsvp-layout">
            <form className="rsvp-form" onSubmit={handleRsvpSubmit}>
              <label>
                Full name
                <input
                  className="input-field"
                  type="text"
                  value={rsvp.name}
                  onChange={(event) => updateRsvp('name', event.target.value)}
                  placeholder="Your name"
                />
              </label>
              <label>
                Will you attend?
                <select
                  className="select-field"
                  value={rsvp.response}
                  onChange={(event) => updateRsvp('response', event.target.value)}
                >
                  <option value="yes">Yes, I will attend</option>
                  <option value="no">No, I cannot attend</option>
                </select>
              </label>
              <label>
                Guest count
                <input
                  className="input-field"
                  type="number"
                  min="0"
                  value={rsvp.guests}
                  onChange={(event) => updateRsvp('guests', Number(event.target.value) || 0)}
                />
              </label>
              <label>
                Meal preference
                <select
                  className="select-field"
                  value={rsvp.meal}
                  onChange={(event) => updateRsvp('meal', event.target.value)}
                >
                  <option value="Chicken">Chicken</option>
                  <option value="Fish">Fish</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                </select>
              </label>
              <label>
                Message
                <textarea
                  className="textarea-field"
                  rows="5"
                  value={rsvp.message}
                  onChange={(event) => updateRsvp('message', event.target.value)}
                  placeholder="A short note for the couple"
                />
              </label>

              <div className="rsvp-actions">
                <button className="btn btn-primary" type="submit">
                  Save RSVP
                </button>
                <a className="btn btn-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp RSVP
                </a>
                <a className="btn btn-outline" href={emailUrl}>
                  Email RSVP
                </a>
              </div>

              {feedback ? <p className="rsvp-feedback">{feedback}</p> : null}
            </form>

            <div className="rsvp-preview">
              <div className="preview-card">
                <h3>Live RSVP preview</h3>
                <p>
                  <strong>Name:</strong> {rsvp.name || '—'}
                </p>
                <p>
                  <strong>Attendance:</strong> {rsvp.response === 'yes' ? 'Attending' : 'Not attending'}
                </p>
                <p>
                  <strong>Guests:</strong> {rsvp.guests}
                </p>
                <p>
                  <strong>Meal:</strong> {rsvp.meal}
                </p>
                {rsvp.message ? <p className="preview-note">“{rsvp.message}”</p> : <p className="preview-note">Add a note above to personalize your RSVP.</p>}
              </div>
            </div>
          </div>
        </section>

        <section className="section-block timeline-section" id="timeline">
          <SectionHeader
            eyebrow="Timeline"
            title="A sequence of moments that brought us here"
            description="Each chapter is defined by a shared discovery, a thoughtful pause, and the unfolding of something meaningful."
          />

          <div className="timeline-grid">
            {timelineEvents.map((event, index) => (
              <motion.article
                key={event.title}
                className="timeline-event"
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="timeline-pill">
                  <span>{event.date}</span>
                </div>
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-block" id="gallery">
          <SectionHeader
            eyebrow="Gallery"
            title="A visual collection of quiet moments and joyful details"
            description="Browse a gently curated gallery of images and videos that capture the atmosphere, emotion, and style of the celebration to come."
          />

          <motion.div
            className="media-grid"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {activeGallery.map((item) => (
              <button
                key={item.src}
                className="media-card"
                type="button"
                onClick={() => setActiveMedia({ ...item, type: 'image', title: item.caption })}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="media-overlay">
                  <p>{item.caption}</p>
                </div>
              </button>
            ))}
          </motion.div>

          <div className="section-footnote">
            <p>Tap any image to open the preview.</p>
          </div>
        </section>

        <section className="section-block media-section" id="video-gallery">
          <SectionHeader
            eyebrow="Video gallery"
            title="Moments in motion"
            description="A small selection of short, atmospheric clips that bring the evening to life with light, movement, and mood."
          />

          <motion.div
            className="media-grid"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {activeVideos.map((item) => (
              <button
                key={item.src}
                className="media-card video-card"
                type="button"
                onClick={() => setActiveMedia({ ...item, type: 'video' })}
              >
                <img src={item.poster} alt={item.title} loading="lazy" />
                <span className="video-badge">Video</span>
                <div className="media-overlay">
                  <p>{item.title}</p>
                </div>
              </button>
            ))}
          </motion.div>
        </section>

        <section className="section-block" id="schedule">
          <SectionHeader
            eyebrow="Wedding Schedule"
            title="An evening shaped around ease and celebration"
            description="Each moment is designed to feel intentional, with room to connect, savor, and celebrate together."
          />

          <div className="schedule-grid">
            {scheduleItems.map((item, index) => (
              <motion.article
                key={item.time}
                className="schedule-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: index * 0.08 }}
              >
                <span className="schedule-time">{item.time}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-block venue-section" id="venue">
          <SectionHeader
            eyebrow="Venue"
            title="Willow Creek Estate"
            description="A charming estate with garden terraces, hidden corners, and elegant spaces that feel intimate and curated."
          />

          <div className="venue-grid">
            <div className="venue-card">
              <p className="eyebrow">Location</p>
              <h3>{settings.venue}</h3>
              <p className="venue-copy">
                Set among rolling lawns and lantern-lit walkways, the estate offers a calm and polished setting for our celebration.
              </p>

              <div className="info-list">
                <div>
                  <strong>Address</strong>
                  <p>272 Pine Hill Road, Sonoma, CA</p>
                </div>
                <div>
                  <strong>Arrival</strong>
                  <p>5:30 PM ceremony begins at the garden pavilion.</p>
                </div>
                <div>
                  <strong>Reception</strong>
                  <p>Dinner and dancing under the open sky in the courtyard.</p>
                </div>
              </div>

              <a
                className="btn btn-outline"
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(settings.venue)}`}
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
              </a>
            </div>

            <div className="map-card">
              <iframe
                title="Wedding venue location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(settings.venue)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="section-block info-section" id="details">
          <div className="info-grid">
            <motion.article
              className="info-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75 }}
            >
              <div className="info-icon">👗</div>
              <h3>Dress Code</h3>
              <p>Elegant cocktail attire with thoughtful touches that feel polished and comfortable for a garden evening.</p>
              <ul>
                {dressCodeItems.map((item) => (
                  <li key={item.title}>
                    <strong>{item.icon} {item.title}:</strong> {item.detail}
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              className="info-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.1 }}
            >
              <div className="info-icon">🎁</div>
              <h3>Gift Registry</h3>
              <p>Your presence is the greatest gift. For friends who asked, here are a few thoughtful registry ideas.</p>
              <div className="registry-list">
                {registryItems.map((item) => (
                  <a key={item.title} href={item.link} className="registry-item">
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </a>
                ))}
              </div>
            </motion.article>
          </div>
        </section>

        <section className="section-block faq-section" id="faq">
          <SectionHeader
            eyebrow="FAQ"
            title="Quick answers for your visit"
            description="The details that make the evening smooth and welcoming, from parking to dietary support."
          />

          <div className="faq-grid">
            {faqItems.map((item) => (
              <motion.details
                key={item.question}
                className="faq-item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75 }}
              >
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </motion.details>
            ))}
          </div>
        </section>
      </main>

      {settings.musicUrl ? (
        <div className="music-player">
          <audio controls src={settings.musicUrl} />
        </div>
      ) : null}

      <footer className="page-footer">
        <p>{settings.coupleNames} • {new Date(settings.weddingDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        <p>Crafted with care for an intimate, memorable evening.</p>
      </footer>

      {showBackToTop && (
        <button
          className="back-to-top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
        >
          ↑ Top
        </button>
      )}

      {activeMedia && <Lightbox media={activeMedia} onClose={() => setActiveMedia(null)} />}
    </div>
  );
}
