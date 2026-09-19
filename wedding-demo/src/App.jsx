import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./demo.css";

const STORAGE_KEY = 'weddingDemoState';
const countdownLabels = ['Days', 'Hours', 'Minutes', 'Seconds'];

const defaultSettings = {
  coupleNames: 'Olivia & Daniel',
  weddingDate: '2026-09-14T18:00:00',
  venue: 'Willow Creek Estate',
  accentColor: '#8c2438',
  secondaryColor: '#c9a96e',
  heroBackground: '/indian-wedding-hero.jpg',
  whatsappNumber: '919876543210',
  emailAddress: '',
  musicUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-flute-112191.mp3',
  gallery: [
    {
      src: '/gallery-1.jpg',
      alt: 'Intricate bridal mehndi adorned with gold bangles',
      caption: 'Intricate henna artistry and golden adornments of the bride.',
    },
    {
      src: '/gallery-2.jpg',
      alt: 'Grand Indian wedding feast with traditional thali',
      caption: 'A royal feast of flavors, served on brass thalis under candlelight.',
    },
    {
      src: '/gallery-3.jpg',
      alt: 'Sacred kalash with jasmine and marigold garlands',
      caption: 'Auspicious offerings adorned with jasmine, marigold, and sacred turmeric.',
    },
    {
      src: '/gallery-4.jpg',
      alt: 'Ornate bridal jewelry on maroon silk',
      caption: 'Heirloom kundan jewelry passed through generations of love.',
    },
    {
      src: '/gallery-5.jpg',
      alt: 'Lantern-lit wedding courtyard at twilight',
      caption: 'A courtyard of fairy lights and lanterns awaiting the celebration.',
    },
    {
      src: '/indian-wedding-hero.jpg',
      alt: 'The sacred wedding mandap decorated with flowers',
      caption: 'The floral mandap where sacred vows will be exchanged.',
    },
  ],
  videos: [
    {
      src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      poster: '/gallery-5.jpg',
      title: 'Moments of Grace & Motion',
    },
    {
      src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
      poster: '/gallery-3.jpg',
      title: 'Quiet Celebration & Joy',
    },
  ],
};

const defaultRsvp = {
  name: '',
  guests: 1,
  meal: 'Vegetarian',
  message: '',
  response: 'yes',
};

const defaultBlessings = [
  {
    id: 'b1',
    author: 'Sunita & Rajesh Sharma',
    relation: 'Family Elders',
    text: 'May your sacred union be showered with eternal joy, peace, and prosperity. We eagerly look forward to blessing you both in person.',
  },
  {
    id: 'b2',
    author: 'Aarav & Tanvi Mehta',
    relation: 'Childhood Friends',
    text: 'Watching your love story unfold over the years has been truly inspiring. Here is to a lifetime of laughter, adventures, and endless love!',
  },
  {
    id: 'b3',
    author: 'Meera & Vikram Patel',
    relation: 'Cousins',
    text: 'Two of the most genuine and kind souls coming together. Sending you all our warmth, blessings, and excitement for the grand celebrations!',
  },
];

const timelineEvents = [
  {
    title: 'First hello',
    date: 'June 2022',
    description: 'When Olivia and Daniel met over coffee, they discovered a shared love for late night creativity, art, and quiet weekends.',
  },
  {
    title: 'First trip',
    date: 'April 2023',
    description: 'A weekend escape in the countryside revealed a natural harmony in adventure, cooking, and long conversations under the stars.',
  },
  {
    title: 'The proposal',
    date: 'January 2025',
    description: 'A candlelit evening with soft melodies turned into an unforgettable moment of joy and the answer to a heartfelt question.',
  },
  {
    title: 'Gathering the details',
    date: 'Today',
    description: 'Every invitation, ceremonial note, and flower choice is being chosen with care to craft a timeless and warm celebration.',
  },
];

const scheduleItems = [
  {
    time: '5:30 PM',
    title: 'Arrival & Welcome',
    detail: 'Guests are greeted with refreshments, traditional welcome, and soft instrumental music on the garden terrace.',
  },
  {
    time: '6:15 PM',
    title: 'Ceremony',
    detail: 'The wedding ceremony begins beneath the floral arch with vows, sacred blessings, and quiet joy.',
  },
  {
    time: '7:00 PM',
    title: 'Curated Dinner',
    detail: 'A gourmet dinner feast is served beneath warm lantern-lit tables and starlit skies.',
  },
  {
    time: '8:30 PM',
    title: 'Toasts & Speeches',
    detail: 'Heartfelt speeches, fond memories, and blessings shared over artisan desserts.',
  },
  {
    time: '9:15 PM',
    title: 'First Dance',
    detail: 'A gentle first dance opens the evening reception accompanied by live music.',
  },
  {
    time: '10:00 PM',
    title: 'Dancing & Celebration',
    detail: 'The courtyard comes alive with joyful movement, music, and celebration into the night.',
  },
];

const dressCodeItems = [
  {
    icon: '👗',
    title: 'Traditional / Festive Elegance',
    detail: 'Traditional Indian attire, sarees, lehengas, sherwanis, or elegant evening wear in rich festive tones.',
  },
  {
    icon: '🌿',
    title: 'Garden Friendly',
    detail: 'Light breathable fabrics and comfortable footwear suitable for lawns and stone terraces.',
  },
  {
    icon: '✨',
    title: 'Refined Accents',
    detail: 'Warm jewel tones, antique gold accents, and celebratory details that feel joyous and polished.',
  },
];

const registryItems = [
  {
    title: 'Home & Heritage Collection',
    detail: 'Handcrafted artisan pieces to help us build a calm, warm, and beautiful home together.',
    link: '#',
  },
  {
    title: 'Honeymoon & Experiences',
    detail: 'Thoughtful travel, cultural discoveries, and memorable dining experiences for our first year of marriage.',
    link: '#',
  },
];

const faqItems = [
  {
    question: 'Is parking available on site?',
    answer: 'Yes, complimentary valet and designated onsite parking will be available for all guests with attendants guiding vehicles directly to the welcome pavilion.',
  },
  {
    question: 'Can I bring a plus one?',
    answer: 'Please refer to your personalized invitation for guest details. We are excited to celebrate with those listed on your invitation.',
  },
  {
    question: 'Where should out-of-town guests stay?',
    answer: 'We have reserved a block of suites at the nearby Heritage Estate & Vineyard Inn, a short 5-minute drive from the venue with dedicated guest shuttles.',
  },
  {
    question: 'Will there be dietary accommodations?',
    answer: 'Yes, our catering team offers comprehensive vegetarian, vegan, and specific dietary selections. Please indicate your preference on your RSVP.',
  },
];

function clamp(value) {
  return value < 0 ? 0 : value;
}

function getInitials(names) {
  if (!names) return 'O & D';
  const parts = names.split(/&|\band\b|\+/i).map((s) => s.trim()).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0]} & ${parts[1][0]}`;
  }
  const words = names.split(' ').filter(Boolean);
  if (words.length >= 2) {
    return `${words[0][0]} & ${words[1][0]}`;
  }
  return names.slice(0, 3).toUpperCase();
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
    <div className="countdown-grid" aria-label="Countdown to wedding ceremony">
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
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}

function SectionOrnament() {
  return (
    <div className="section-ornament" aria-hidden="true">
      <span className="ornament-symbol">✦ ❖ ✦</span>
    </div>
  );
}

function Lightbox({ media, onClose }) {
  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true">
      <div className="lightbox-backdrop" onClick={onClose} />
      <div className="lightbox-content">
        <button className="lightbox-close" onClick={onClose} aria-label="Close preview">
          ✕
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
          <span>Press ESC or click anywhere to close</span>
        </div>
      </div>
    </div>
  );
}

function buildWhatsAppUrl(settings, rsvp) {
  const number = (settings.whatsappNumber || '').replace(/\D/g, '');
  const responseText =
    rsvp.response === 'yes'
      ? `I will attend with joyful anticipation (${rsvp.guests} guest${rsvp.guests === 1 ? '' : 's'}).`
      : 'I regretfully cannot attend, but send my warmest blessings.';
  const message = [
    `Namaste ${settings.coupleNames},`,
    `This is ${rsvp.name || '[Your name]'}.`,
    responseText,
    `Meal preference: ${rsvp.meal}.`,
    rsvp.message ? `Personal Note: "${rsvp.message}"` : '',
    `Wedding Date: ${new Date(settings.weddingDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}.`,
    `Venue: ${settings.venue}.`,
  ]
    .filter(Boolean)
    .join(' ');

  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : '#';
}

function buildEmailUrl(settings, rsvp) {
  const subject = `Wedding RSVP for ${settings.coupleNames}`;
  const body = [
    `Dear ${settings.coupleNames},`,
    '',
    `Name: ${rsvp.name || '[Your name]'}`,
    `Attendance: ${rsvp.response === 'yes' ? `Attending (${rsvp.guests} guest${rsvp.guests === 1 ? '' : 's'})` : 'Regretfully Declining'}`,
    `Meal Preference: ${rsvp.meal}`,
    rsvp.message ? `Message: "${rsvp.message}"` : '',
    '',
    `Wedding Date: ${new Date(settings.weddingDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}`,
    `Venue: ${settings.venue}`,
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

  const [blessings, setBlessings] = useState(() => {
    if (typeof window === 'undefined') return defaultBlessings;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultBlessings;
      const parsed = JSON.parse(raw);
      return parsed.blessings && parsed.blessings.length > 0 ? parsed.blessings : defaultBlessings;
    } catch {
      return defaultBlessings;
    }
  });

  const [invitationOpened, setInvitationOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeMedia, setActiveMedia] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [blessingFeedback, setBlessingFeedback] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // New blessing form state
  const [newBlessing, setNewBlessing] = useState({ author: '', relation: '', text: '' });

  const audioRef = useRef(null);

  // LocalStorage Persistence
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ settings, rsvp, blessings }));
    } catch {
      // ignore storage errors
    }
  }, [settings, rsvp, blessings]);

  // Scroll listener for nav styling & back-to-top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 480);
      setIsScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initial loading simulation
  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    if (document.readyState === 'complete') {
      const timer = setTimeout(handleLoad, 450);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Lock body scroll on modal/drawer
  useEffect(() => {
    document.body.style.overflow = activeMedia || panelOpen || isNavOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeMedia, panelOpen, isNavOpen]);

  // Handle ESC key for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeMedia) {
        setActiveMedia(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMedia]);

  const weddingDate = useMemo(() => new Date(settings.weddingDate), [settings.weddingDate]);
  const dateLabel = isNaN(weddingDate.getTime())
    ? 'Save the date'
    : weddingDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  const monogram = useMemo(() => getInitials(settings.coupleNames), [settings.coupleNames]);

  const whatsappUrl = buildWhatsAppUrl(settings, rsvp);
  const emailUrl = buildEmailUrl(settings, rsvp);

  const handleOpenInvitation = () => {
    setInvitationOpened(true);
    // Attempt audio playback
    if (audioRef.current && settings.musicUrl) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked by browser policy, user can tap music FAB
          setIsPlaying(false);
        });
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

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
    setFeedback('Your RSVP has been saved. Thank you for celebrating with us!');
    window.setTimeout(() => setFeedback(''), 5500);
  };

  const handleBlessingSubmit = (e) => {
    e.preventDefault();
    if (!newBlessing.author.trim() || !newBlessing.text.trim()) return;

    const item = {
      id: 'b_' + Date.now(),
      author: newBlessing.author.trim(),
      relation: newBlessing.relation.trim() || 'Well Wisher',
      text: newBlessing.text.trim(),
    };

    setBlessings((prev) => [item, ...prev]);
    setNewBlessing({ author: '', relation: '', text: '' });
    setBlessingFeedback('Your heartfelt blessing has been shared. Thank you!');
    window.setTimeout(() => setBlessingFeedback(''), 5000);
  };

  const activeGallery = settings.gallery ?? defaultSettings.gallery;
  const activeVideos = settings.videos ?? defaultSettings.videos;

  if (isLoading) {
    return (
      <div className="loading-screen" aria-live="polite">
        <div className="loading-content">
          <div className="loader-ring" aria-hidden="true" />
          <p>Preparing your sacred invitation...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="page-shell"
      style={{
        '--accent': settings.accentColor,
        '--secondary': settings.secondaryColor,
      }}
    >
      {/* Hidden Audio Element */}
      {settings.musicUrl && (
        <audio
          ref={audioRef}
          src={settings.musicUrl}
          loop
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      )}

      {/* ============================================================
          1. INVITATION COVER / OPENING EXPERIENCE
          ============================================================ */}
      <AnimatePresence>
        {!invitationOpened && (
          <motion.div
            className="invitation-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04, y: -20 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="invitation-bg" />
            <motion.div
              className="invitation-card"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            >
              <p className="inv-divine">With the blessings of our elders and families</p>
              <div className="inv-monogram" aria-hidden="true">
                <span>{monogram}</span>
              </div>
              <p className="inv-together">Cordially invite you to celebrate the marriage of</p>
              <h1 className="inv-names">
                {settings.coupleNames.includes('&') ? (
                  <>
                    {settings.coupleNames.split('&')[0].trim()}
                    <span>and</span>
                    {settings.coupleNames.split('&')[1].trim()}
                  </>
                ) : (
                  settings.coupleNames
                )}
              </h1>
              <div className="inv-divider" />
              <p className="inv-request">
                Join us for an auspicious evening of joy, sacred vows, and memorable celebrations.
              </p>
              <p className="inv-date">{dateLabel}</p>
              <p className="inv-venue">{settings.venue}</p>

              <button
                className="inv-open-btn"
                type="button"
                onClick={handleOpenInvitation}
                autoFocus
              >
                <span>Open Invitation</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <div className="inv-floral-bottom" aria-hidden="true">
                ✦ ❖ ✦
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================================
          FLOATING MUSIC CONTROL
          ============================================================ */}
      {settings.musicUrl && (
        <button
          className={`music-fab ${isPlaying ? 'playing' : ''}`}
          type="button"
          onClick={toggleMusic}
          aria-label={isPlaying ? 'Pause wedding soundtrack' : 'Play wedding soundtrack'}
          title={isPlaying ? 'Music: Playing' : 'Music: Paused'}
        >
          <div className="music-disc">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
          <div className="music-equalizer" aria-hidden="true">
            <span className="music-bar" />
            <span className="music-bar" />
            <span className="music-bar" />
          </div>
          <span className="music-label">{isPlaying ? 'Soundtrack' : 'Music'}</span>
        </button>
      )}

      {/* ============================================================
          CUSTOMIZATION DRAWER
          ============================================================ */}
      <aside className={`settings-panel ${panelOpen ? 'open' : ''}`} aria-hidden={!panelOpen}>
        <div className="panel-header">
          <h2>Personalize</h2>
          <p>Customize couple names, date, venue, colors, and media in real time.</p>
          <button className="panel-close" type="button" onClick={() => setPanelOpen(false)} aria-label="Close customization panel">
            ✕
          </button>
        </div>

        <div className="panel-inner">
          <div className="panel-group">
            <h3 className="panel-group-title">Wedding Details</h3>
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
          </div>

          <div className="panel-group">
            <h3 className="panel-group-title">Theme & Styling</h3>
            <label>
              Accent Color
              <input
                type="color"
                value={settings.accentColor}
                onChange={(event) => updateSetting('accentColor', event.target.value)}
              />
            </label>
            <label>
              Secondary Color
              <input
                type="color"
                value={settings.secondaryColor}
                onChange={(event) => updateSetting('secondaryColor', event.target.value)}
              />
            </label>
            <label>
              Hero Background Image URL
              <input
                type="text"
                value={settings.heroBackground}
                onChange={(event) => updateSetting('heroBackground', event.target.value)}
              />
            </label>
            <label>
              Background Music URL
              <input
                type="text"
                placeholder="https://example.com/soundtrack.mp3"
                value={settings.musicUrl}
                onChange={(event) => updateSetting('musicUrl', event.target.value)}
              />
            </label>
          </div>

          <div className="panel-group">
            <h3 className="panel-group-title">RSVP Contact Channels</h3>
            <label>
              WhatsApp Number (with country code)
              <input
                type="tel"
                placeholder="919876543210"
                value={settings.whatsappNumber}
                onChange={(event) => updateSetting('whatsappNumber', event.target.value)}
              />
            </label>
            <label>
              RSVP Email Address
              <input
                type="email"
                placeholder="rsvp@example.com"
                value={settings.emailAddress}
                onChange={(event) => updateSetting('emailAddress', event.target.value)}
              />
            </label>
          </div>

          <div className="panel-group">
            <h3 className="panel-group-title">Photo Gallery</h3>
            {activeGallery.map((item, index) => (
              <div key={index} className="panel-item">
                <label>
                  Image {index + 1} URL
                  <input
                    type="text"
                    value={item.src}
                    onChange={(event) => updateGalleryItem(index, 'src', event.target.value)}
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
            <h3 className="panel-group-title">Video Memories</h3>
            {activeVideos.map((item, index) => (
              <div key={index} className="panel-item">
                <label>
                  Video {index + 1} URL
                  <input
                    type="text"
                    value={item.src}
                    onChange={(event) => updateVideoItem(index, 'src', event.target.value)}
                  />
                </label>
                <label>
                  Poster Image URL
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

      {/* ============================================================
          NAVIGATION
          ============================================================ */}
      <nav className={`site-nav ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-brand">
          {settings.coupleNames}
        </a>
        <div className="nav-links">
          <a href="#couple" className="nav-link">The Couple</a>
          <a href="#story" className="nav-link">Our Story</a>
          <a href="#schedule" className="nav-link">Schedule</a>
          <a href="#venue" className="nav-link">Venue</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#wishes" className="nav-link">Blessings</a>
          <a href="#details" className="nav-link">Details</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>
        <div className="nav-actions">
          <a href="#rsvp" className="nav-rsvp-btn">
            RSVP
          </a>
          <button
            className={`panel-toggle ${panelOpen ? 'open' : ''}`}
            type="button"
            onClick={() => setPanelOpen((value) => !value)}
            aria-expanded={panelOpen}
            aria-label={panelOpen ? 'Close personalization panel' : 'Personalize invitation'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span>{panelOpen ? 'Close' : 'Personalize'}</span>
          </button>
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
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`nav-drawer ${isNavOpen ? 'open' : ''}`} id="mobile-navigation" aria-hidden={!isNavOpen}>
        <div className="nav-drawer-backdrop" onClick={() => setNavOpen(false)} />
        <div className="nav-drawer-panel">
          <a href="#couple" className="nav-link-drawer" onClick={() => setNavOpen(false)}>The Couple</a>
          <a href="#story" className="nav-link-drawer" onClick={() => setNavOpen(false)}>Our Story</a>
          <a href="#schedule" className="nav-link-drawer" onClick={() => setNavOpen(false)}>Schedule</a>
          <a href="#venue" className="nav-link-drawer" onClick={() => setNavOpen(false)}>Venue</a>
          <a href="#gallery" className="nav-link-drawer" onClick={() => setNavOpen(false)}>Gallery</a>
          <a href="#wishes" className="nav-link-drawer" onClick={() => setNavOpen(false)}>Blessings</a>
          <a href="#rsvp" className="nav-link-drawer" onClick={() => setNavOpen(false)}>RSVP</a>
          <a href="#details" className="nav-link-drawer" onClick={() => setNavOpen(false)}>Details</a>
          <a href="#faq" className="nav-link-drawer" onClick={() => setNavOpen(false)}>FAQ</a>
        </div>
      </div>

      {/* ============================================================
          2. HERO SECTION
          ============================================================ */}
      <header className="hero-section" id="hero">
        <div className="hero-image-layer">
          <img src={settings.heroBackground} alt={`${settings.coupleNames} Wedding Backdrop`} />
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <p className="hero-eyebrow">The Wedding Celebration of</p>
          <h1 className="hero-names">
            {settings.coupleNames.includes('&') ? (
              <>
                {settings.coupleNames.split('&')[0].trim()}
                <span className="hero-names-amp">&amp;</span>
                {settings.coupleNames.split('&')[1].trim()}
              </>
            ) : (
              settings.coupleNames
            )}
          </h1>
          <p className="hero-tagline">
            An auspicious gathering of love, traditions, and timeless joy at {settings.venue}.
          </p>

          <div className="hero-meta-strip">
            <div className="hero-meta-item">
              <span className="hero-meta-label">Date</span>
              <span className="hero-meta-value">{dateLabel}</span>
            </div>
            <div className="hero-meta-sep" />
            <div className="hero-meta-item">
              <span className="hero-meta-label">Venue</span>
              <span className="hero-meta-value">{settings.venue}</span>
            </div>
            <div className="hero-meta-sep" />
            <div className="hero-meta-item">
              <span className="hero-meta-label">Ceremony</span>
              <span className="hero-meta-value">
                {weddingDate.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })} Onwards
              </span>
            </div>
          </div>
        </motion.div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span>Scroll to Discover</span>
        </div>
      </header>

      <main>
        {/* ============================================================
            3. COUPLE SECTION
            ============================================================ */}
        <section className="couple-section" id="couple">
          <div className="couple-portrait">
            <img
              src={activeGallery[0]?.src || settings.heroBackground}
              alt={settings.coupleNames}
              loading="lazy"
            />
            <div className="couple-portrait-frame" />
          </div>

          <div className="couple-info-panel">
            <div className="couple-person">
              <p className="couple-person-label">The Bride</p>
              <h2 className="couple-person-name">
                {settings.coupleNames.includes('&') ? settings.coupleNames.split('&')[0].trim() : 'Olivia'}
              </h2>
              <p className="couple-person-desc">
                An artist of quiet grace with a deep love for botanical florals, literature, and heartfelt family celebrations.
              </p>
              <p className="couple-person-family">Daughter of Mr. &amp; Mrs. Robert Vance</p>
            </div>

            <div className="couple-separator">
              <span className="couple-separator-symbol">&amp;</span>
            </div>

            <div className="couple-person">
              <p className="couple-person-label">The Groom</p>
              <h2 className="couple-person-name">
                {settings.coupleNames.includes('&') ? settings.coupleNames.split('&')[1].trim() : 'Daniel'}
              </h2>
              <p className="couple-person-desc">
                An architect with a passion for classic design, warm evenings, adventure, and thoughtful conversations.
              </p>
              <p className="couple-person-family">Son of Mr. &amp; Mrs. Edward Sterling</p>
            </div>
          </div>
        </section>

        {/* ============================================================
            4. COUNTDOWN SECTION
            ============================================================ */}
        <section className="countdown-wrap" aria-label="Auspicious Countdown">
          <p className="countdown-label">Auspicious Countdown to the Sacred Ceremony</p>
          <Countdown targetDate={weddingDate} />
        </section>

        {/* ============================================================
            5. OUR STORY / RELATIONSHIP TIMELINE
            ============================================================ */}
        <section className="section-block timeline-container" id="story">
          <SectionHeader
            eyebrow="Our Journey"
            title="A Love Story in Chapters"
            description="From quiet coffee conversations to a lifetime commitment, each milestone has brought us closer to this sacred day."
          />

          <div className="timeline-spine" aria-hidden="true" />

          <div className="timeline-events">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.article
                  key={event.title}
                  className="timeline-event"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  {isEven ? (
                    <>
                      <div className="timeline-content-left">
                        <div className="timeline-card">
                          <p className="timeline-date">{event.date}</p>
                          <h3>{event.title}</h3>
                          <p>{event.description}</p>
                        </div>
                      </div>
                      <div className="timeline-node" aria-hidden="true">
                        <div className="timeline-dot" />
                      </div>
                      <div className="timeline-content-right" />
                    </>
                  ) : (
                    <>
                      <div className="timeline-content-left" />
                      <div className="timeline-node" aria-hidden="true">
                        <div className="timeline-dot" />
                      </div>
                      <div className="timeline-content-right">
                        <div className="timeline-card">
                          <p className="timeline-date">{event.date}</p>
                          <h3>{event.title}</h3>
                          <p>{event.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.article>
              );
            })}
          </div>
        </section>

        <SectionOrnament />

        {/* ============================================================
            6. WEDDING SCHEDULE
            ============================================================ */}
        <section className="section-full schedule-section" id="schedule">
          <div className="section-inner">
            <SectionHeader
              eyebrow="Ceremony &amp; Celebrations"
              title="Wedding Day Schedule"
              description="Each ceremonial moment is crafted with care, leaving ample room to connect, celebrate, and create cherished memories."
            />

            <div className="schedule-list">
              {scheduleItems.map((item, index) => (
                <motion.article
                  key={item.time}
                  className="schedule-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <div className="schedule-time-col">
                    <span className="schedule-time">{item.time}</span>
                  </div>
                  <div className="schedule-content">
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            7. VENUE & DESTINATION
            ============================================================ */}
        <section className="section-block" id="venue">
          <SectionHeader
            eyebrow="Destination"
            title="The Wedding Venue"
            description="Set amidst rolling lawns and lantern-lit courtyards, offering an intimate and regal ambiance for our celebration."
          />

          <div className="venue-grid">
            <div className="venue-info-panel">
              <h3 className="venue-name">{settings.venue}</h3>
              <p className="venue-address">272 Pine Hill Road, Sonoma Valley, CA</p>

              <div className="venue-detail-list">
                <div className="venue-detail-item">
                  <span className="venue-detail-label">Arrival</span>
                  <span className="venue-detail-value">5:30 PM welcome drinks &amp; guest assembly at the Garden Pavilion.</span>
                </div>
                <div className="venue-detail-item">
                  <span className="venue-detail-label">Ceremony</span>
                  <span className="venue-detail-value">6:15 PM sacred vows beneath the open floral mandap.</span>
                </div>
                <div className="venue-detail-item">
                  <span className="venue-detail-label">Reception</span>
                  <span className="venue-detail-value">Feast, toasts, and dancing under the lantern-lit courtyard.</span>
                </div>
                <div className="venue-detail-item">
                  <span className="venue-detail-label">Parking</span>
                  <span className="venue-detail-value">Complimentary valet service provided at the grand entrance.</span>
                </div>
              </div>

              <a
                className="venue-directions-btn"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(settings.venue)}`}
                target="_blank"
                rel="noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Open in Google Maps</span>
              </a>
            </div>

            <div className="venue-map-panel">
              <iframe
                title="Wedding venue location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(settings.venue)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <SectionOrnament />

        {/* ============================================================
            8. PHOTO GALLERY (Editorial Album)
            ============================================================ */}
        <section className="section-block" id="gallery">
          <SectionHeader
            eyebrow="Visual Memories"
            title="Curated Photo Gallery"
            description="A glimpse into our quiet moments, shared journeys, and joyful details leading to the wedding day."
          />

          <div className="gallery-grid">
            {activeGallery.map((item, index) => (
              <motion.button
                key={item.src + index}
                className="gallery-item"
                type="button"
                onClick={() => setActiveMedia({ ...item, type: 'image' })}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <p>{item.caption}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* ============================================================
            9. VIDEO GALLERY (Moments in Motion)
            ============================================================ */}
        <section className="section-block" id="video-gallery">
          <SectionHeader
            eyebrow="Cinematography"
            title="Moments in Motion"
            description="Atmospheric clips capturing light, movement, and the spirit of our celebrations."
          />

          <div className="video-grid">
            {activeVideos.map((item, index) => (
              <motion.button
                key={item.src + index}
                className="video-item"
                type="button"
                onClick={() => setActiveMedia({ ...item, type: 'video' })}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <img src={item.poster} alt={item.title} loading="lazy" />
                <div className="video-play-overlay">
                  <div className="video-play-btn" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
                <div className="video-title-strip">
                  <span>{item.title}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* ============================================================
            10. BLESSINGS & WISHES SECTION (Wedding Guestbook)
            ============================================================ */}
        <section className="section-full blessings-section" id="wishes">
          <div className="section-inner">
            <SectionHeader
              eyebrow="Blessings &amp; Love"
              title="Wishes from Family &amp; Friends"
              description="Heartfelt notes, blessings, and warm words from our dearest loved ones."
            />

            <div className="blessings-grid">
              {blessings.map((b) => (
                <div key={b.id} className="blessing-card">
                  <p className="blessing-text">“{b.text}”</p>
                  <div className="blessing-meta">
                    <div className="blessing-avatar" aria-hidden="true">
                      {b.author.slice(0, 1).toUpperCase()}
                    </div>
                    <div>
                      <p className="blessing-author">{b.author}</p>
                      <span className="blessing-relation">{b.relation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form to leave a blessing */}
            <div className="blessing-form-wrap">
              <h3>Send Your Blessings</h3>
              <p>Leave a personal note or prayer for the couple to cherish.</p>
              <form className="blessing-form" onSubmit={handleBlessingSubmit}>
                <label>
                  Your Name
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarti &amp; Rohan"
                    value={newBlessing.author}
                    onChange={(e) => setNewBlessing((p) => ({ ...p, author: e.target.value }))}
                  />
                </label>
                <label>
                  Relationship / Message from
                  <input
                    type="text"
                    placeholder="e.g. Friend, Cousin, Family Elder"
                    value={newBlessing.relation}
                    onChange={(e) => setNewBlessing((p) => ({ ...p, relation: e.target.value }))}
                  />
                </label>
                <label>
                  Your Blessing
                  <textarea
                    required
                    rows="3"
                    placeholder="Write your heartfelt blessing for Olivia &amp; Daniel..."
                    value={newBlessing.text}
                    onChange={(e) => setNewBlessing((p) => ({ ...p, text: e.target.value }))}
                  />
                </label>
                <button className="btn btn-maroon" type="submit">
                  Share Blessing
                </button>
                {blessingFeedback && <p className="rsvp-feedback">{blessingFeedback}</p>}
              </form>
            </div>
          </div>
        </section>

        {/* ============================================================
            11. RSVP SECTION
            ============================================================ */}
        <section className="rsvp-section" id="rsvp">
          <SectionHeader
            eyebrow="Acceptance"
            title="Kindly Respond"
            description="We would be deeply honored by your presence. Please let us know your attendance and meal preferences."
          />

          <div className="rsvp-layout">
            <div className="rsvp-form-panel">
              <form className="rsvp-form" onSubmit={handleRsvpSubmit}>
                <label>
                  Full Name
                  <input
                    className="input-field"
                    type="text"
                    value={rsvp.name}
                    onChange={(event) => updateRsvp('name', event.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </label>

                <label>
                  Will you attend?
                  <select
                    className="select-field"
                    value={rsvp.response}
                    onChange={(event) => updateRsvp('response', event.target.value)}
                  >
                    <option value="yes">Yes, I will joyfully attend</option>
                    <option value="no">Regretfully, I cannot attend</option>
                  </select>
                </label>

                {rsvp.response === 'yes' && (
                  <>
                    <label>
                      Number of Guests
                      <input
                        className="input-field"
                        type="number"
                        min="1"
                        max="10"
                        value={rsvp.guests}
                        onChange={(event) => updateRsvp('guests', Number(event.target.value) || 1)}
                      />
                    </label>

                    <label>
                      Dietary / Meal Preference
                      <select
                        className="select-field"
                        value={rsvp.meal}
                        onChange={(event) => updateRsvp('meal', event.target.value)}
                      >
                        <option value="Vegetarian">Traditional Vegetarian Feast</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Chicken">Chicken</option>
                        <option value="Fish">Fish</option>
                      </select>
                    </label>
                  </>
                )}

                <label>
                  Personal Message for the Couple
                  <textarea
                    className="textarea-field"
                    rows="4"
                    value={rsvp.message}
                    onChange={(event) => updateRsvp('message', event.target.value)}
                    placeholder="A warm note or blessing..."
                  />
                </label>

                <div className="rsvp-actions">
                  <button className="btn btn-primary" type="submit">
                    Save RSVP
                  </button>
                  <a
                    className="btn btn-whatsapp"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Confirm RSVP via WhatsApp"
                  >
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.827.74 5.484 2.035 7.789L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.852l-.485-.29-5.002 1.193 1.216-4.868-.317-.5A13.266 13.266 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.26-9.907c-.398-.199-2.357-1.163-2.722-1.296-.365-.133-.631-.199-.897.2-.266.398-1.03 1.296-1.263 1.562-.233.266-.465.3-.863.1-.398-.2-1.681-.619-3.2-1.977-1.183-1.056-1.981-2.36-2.213-2.758-.233-.4-.025-.616.175-.814.18-.179.398-.465.597-.698.2-.233.266-.399.399-.665.133-.266.067-.499-.033-.698-.1-.199-.897-2.162-1.23-2.96-.323-.776-.651-.671-.897-.683l-.765-.013c-.266 0-.698.1-.1065.499-.365.4-1.396 1.363-1.396 3.326s1.43 3.857 1.628 4.123c.2.266 2.814 4.297 6.817 6.025.953.412 1.696.658 2.275.842.956.305 1.826.262 2.514.159.767-.115 2.357-.964 2.69-1.895.333-.932.333-1.73.233-1.896-.1-.165-.366-.265-.764-.465z"/>
                    </svg>
                    <span>WhatsApp RSVP</span>
                  </a>
                  <a className="btn btn-outline" href={emailUrl}>
                    Email RSVP
                  </a>
                </div>

                {!settings.whatsappNumber && (
                  <p className="rsvp-hint">💡 Add your WhatsApp number in the <strong>Personalize</strong> panel to enable direct one-tap WhatsApp responses.</p>
                )}
                {feedback && <p className="rsvp-feedback">{feedback}</p>}
              </form>
            </div>

            <div className="rsvp-preview-panel">
              <h3>Live RSVP Summary</h3>
              <div className="preview-line">
                <span className="preview-line-label">Guest Name</span>
                <span className="preview-line-value">{rsvp.name || '—'}</span>
              </div>
              <div className="preview-line">
                <span className="preview-line-label">Attendance</span>
                <span className="preview-line-value">
                  {rsvp.response === 'yes' ? 'Joyfully Attending' : 'Regretfully Declining'}
                </span>
              </div>
              {rsvp.response === 'yes' && (
                <>
                  <div className="preview-line">
                    <span className="preview-line-label">Guest Count</span>
                    <span className="preview-line-value">{rsvp.guests}</span>
                  </div>
                  <div className="preview-line">
                    <span className="preview-line-label">Meal Selection</span>
                    <span className="preview-line-value">{rsvp.meal}</span>
                  </div>
                </>
              )}
              <div className="preview-line">
                <span className="preview-line-label">Personal Note</span>
                <p className="preview-message">
                  {rsvp.message ? `“${rsvp.message}”` : 'No personal note added yet.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            12. DETAILS / DRESS CODE & REGISTRY
            ============================================================ */}
        <section className="section-block" id="details">
          <div className="details-grid">
            <article className="detail-card">
              <div className="detail-icon-wrap" aria-hidden="true">
                <span>👗</span>
              </div>
              <h3>Dress Code Guidelines</h3>
              <p>We invite our guests to dress in festive, elegant attire celebrating warm colors, rich fabrics, and joy.</p>
              <ul className="detail-list">
                {dressCodeItems.map((item) => (
                  <li key={item.title}>
                    <div>
                      <strong>{item.title}:</strong> {item.detail}
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            <article className="detail-card">
              <div className="detail-icon-wrap" aria-hidden="true">
                <span>🎁</span>
              </div>
              <h3>Gifts &amp; Registry</h3>
              <p>Your loving presence and sacred blessings are the greatest gifts of all. For loved ones who have asked, here are a few registry ideas.</p>
              <div className="registry-list">
                {registryItems.map((item) => (
                  <a key={item.title} href={item.link} className="registry-item">
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </a>
                ))}
              </div>
            </article>
          </div>
        </section>

        <SectionOrnament />

        {/* ============================================================
            13. FAQ ACCORDION
            ============================================================ */}
        <section className="section-block" id="faq">
          <SectionHeader
            eyebrow="Guest Information"
            title="Frequently Asked Questions"
            description="Everything you need to know for a smooth and comfortable experience during our celebrations."
          />

          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item">
                <summary className="faq-question">
                  <span>{item.question}</span>
                  <div className="faq-question-icon" aria-hidden="true">+</div>
                </summary>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* ============================================================
          14. FOOTER
          ============================================================ */}
      <footer className="page-footer">
        <div className="footer-ornament" aria-hidden="true">
          ✦ ❖ ✦
        </div>
        <h2 className="footer-names">{settings.coupleNames}</h2>
        <p className="footer-date">
          {new Date(settings.weddingDate).toLocaleDateString(undefined, {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
        <p className="footer-blessing">
          “With love, gratitude, and heartfelt blessings from our families to yours.”
        </p>
        <div className="footer-divider" />
        <p className="footer-credit">Handcrafted Contemporary Indian Wedding Invitation</p>
      </footer>

      {/* ============================================================
          BACK TO TOP
          ============================================================ */}
      {showBackToTop && (
        <button
          className="back-to-top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
          title="Back to top"
        >
          ↑
        </button>
      )}

      {/* ============================================================
          FULLSCREEN LIGHTBOX
          ============================================================ */}
      {activeMedia && <Lightbox media={activeMedia} onClose={() => setActiveMedia(null)} />}
    </div>
  );
}
