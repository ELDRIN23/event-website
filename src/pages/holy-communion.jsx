import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Volume2, VolumeX, MapPin, Calendar, Clock, Send, 
  Sparkles, MessageSquare, Heart, Music, Hourglass, 
  BookOpen, Star, Sun, ShieldCheck
} from 'lucide-react';

// Import child's profile photo

import childPic from '../../images/holyComProfile.png';

// --- CUSTOM EUCHARISTIC SVG ICONS ---
const HolyChaliceIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    {/* Sacred Host / Eucharist */}
    <circle cx="12" cy="5" r="3.5" fill="#FEF08A" stroke="#854D0E" strokeWidth="1" />
    <path d="M12 3v4M10 5h4" stroke="#854D0E" strokeWidth="1" strokeLinecap="round" />
    {/* Chalice Cup */}
    <path d="M7 9c0 4 3 6 5 6s5-2 5-6H7z" fill="#EAB308" stroke="#713F12" strokeWidth="1.5" />
    {/* Chalice Stem & Base */}
    <path d="M11 15v4H8v2h8v-2h-3v-4" fill="#CA8A04" stroke="#713F12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HolyCrossIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M7 7h10" />
  </svg>
);

export default function FirstHolyCommunion() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [rsvpData, setRsvpData] = useState({ name: '', guests: '1 Person' });

  // Countdown timer target (e.g., May 16, 2027)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Saved Prayers / Wishes state
  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem('communion_wishes');
    return saved ? JSON.parse(saved) : [
      { name: "Grandma Rose", text: "May Jesus always reside in your heart, dear Christina! So proud of you on your First Communion. 🍞🍷✨" },
      { name: "Uncle David", text: "Wishing you abundant joy and blessings as you receive the Blessed Sacrament today! 🙏" }
    ];
  });

  const [newWish, setNewWish] = useState({ name: "", text: "" });

  const audioRef = useRef(null);
  const inviteRef = useRef(null);

  // Live Countdown logic
  useEffect(() => {
    const targetDate = new Date('2027-05-16T09:30:00');

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sync wishes
  useEffect(() => {
    localStorage.setItem('communion_wishes', JSON.stringify(wishes));
  }, [wishes]);

  // Audio Toggle
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.volume = 0.5;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log("Playback failed:", e));
      }
    }
  };

  // Golden Confetti Effect
  const triggerConfetti = () => {
    confetti({
      particleCount: 110,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#A855F7', '#F59E0B', '#FFFFFF', '#FEF08A']
    });
  };

  // Open Invitation
  const handleOpenInvitation = () => {
    setShowInvitation(true);
    triggerConfetti();

    if (audioRef.current && !isPlaying) {
      audioRef.current.volume = 0.5;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.log("Auto-play blocked", e));
    }

    setTimeout(() => {
      inviteRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleAddWish = (e) => {
    e.preventDefault();
    if (newWish.name.trim() && newWish.text.trim()) {
      setWishes([newWish, ...wishes]);
      setNewWish({ name: "", text: "" });
      triggerConfetti();
    }
  };

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    triggerConfetti();

    const phoneNumber = "919061014915";
    const text = `Hi! I'd love to confirm my RSVP for Christina's First Holy Communion Mass & Celebration 🍞🍷%0A%0A*Name:* ${rsvpData.name}%0A*Guests:* ${rsvpData.guests}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    setRsvpOpen(false);
  };

  // Catechism & Memory Gallery
  const preparationGallery = [
    { title: "Catechism Days 📖", label: "Learning God's Word", src: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=600" },
    { title: "First Confession 🤍", label: "Pure Heart & Grace", src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600" },
    { title: "Holy Mass Dress 🕊️", label: "Ready for the Altar", src: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-purple-50 to-amber-100 font-sans text-slate-800 relative overflow-x-hidden selection:bg-amber-200">
      
      {/* Background Soft Instrumental Audio */}
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-flute-112328.mp3" 
      />

      {/* Floating Audio Toggle */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-700 shadow-md hidden sm:flex items-center gap-1 border border-amber-300"
          >
            <Music className="w-3.5 h-3.5 animate-spin" /> Playing Sacred Melody
          </motion.div>
        )}
        <motion.button
          whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleAudio}
          className={`btn btn-circle btn-lg border-2 border-white shadow-2xl text-white transition-all ${
            isPlaying ? 'bg-amber-500 hover:bg-amber-600 ring-4 ring-amber-200' : 'bg-slate-800 hover:bg-slate-900'
          }`}
        >
          {isPlaying ? <Volume2 className="w-7 h-7 animate-pulse" /> : <VolumeX className="w-7 h-7" />}
        </motion.button>
      </div>

      {/* --- CARTOON COVER PAGE / HERO SECTION --- */}
      <section className="min-h-screen flex flex-col items-center justify-center p-4 text-center z-20 relative">
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
          className="max-w-md w-full bg-amber-300 border-4 border-slate-900 rounded-3xl p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden my-auto"
        >
          {/* Royal Badge */}
          <div className="absolute -top-1 -right-1 bg-purple-900 text-yellow-300 font-extrabold text-xs px-3.5 py-1.5 rounded-bl-xl border-b-4 border-l-4 border-slate-900 tracking-wider flex items-center gap-1">
            <span>FIRST HOLY COMMUNION</span> 🍞🍷
          </div>

          {/* Child Photo Frame with Chalice Badge */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 mt-4">
            <motion.div
              animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-full h-full rounded-full border-4 border-slate-900 overflow-hidden bg-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] p-1.5"
            >
              <img
                src={childPic}
                alt="Christina - First Holy Communion"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
            <div className="absolute -bottom-1 -right-1 bg-purple-900 p-2.5 rounded-full border-2 border-slate-900 shadow animate-bounce">
              <HolyChaliceIcon className="w-7 h-7 text-yellow-300" />
            </div>
          </div>

          {/* Speech Bubble */}
          <div className="bg-white border-4 border-slate-900 rounded-2xl p-4 mb-6 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] relative">
            <p className="font-extrabold text-slate-900 text-lg md:text-xl leading-snug font-serif">
              "Join us as <span className="text-purple-700 underline decoration-wavy">Christina</span> receives the Holy Eucharist for the very first time!" ✨
            </p>
          </div>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenInvitation}
            className="w-full py-4 px-6 bg-purple-900 hover:bg-purple-950 text-yellow-300 font-black text-lg md:text-xl rounded-2xl border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wide"
          >
            <span>View Invitation</span>
            <HolyCrossIcon className="w-6 h-6 text-yellow-300" />
          </motion.button>
        </motion.div>
      </section>

      {/* --- INVITATION CONTENT --- */}
      <AnimatePresence>
        {showInvitation && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Ceremony Card */}
            <section ref={inviteRef} className="py-12 px-4 max-w-3xl mx-auto z-10 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="card bg-white/95 backdrop-blur-md border-4 border-dashed border-amber-300 shadow-2xl rounded-3xl p-6 md:p-10 text-center space-y-6"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 text-amber-700 mx-auto text-4xl shadow-inner border-2 border-amber-300">
                  <HolyChaliceIcon className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
                    Sacrament of the Holy Eucharist
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-900 pt-2">
                    Christina's First Communion
                  </h2>
                  <p className="text-slate-600 font-medium text-base md:text-lg italic max-w-xl mx-auto">
                    "I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty." — John 6:35
                  </p>
                </div>

                {/* COUNTDOWN TIMER */}
                <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 rounded-3xl p-6 text-white border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] my-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Hourglass className="w-5 h-5 animate-spin text-yellow-300" />
                    <span className="font-extrabold uppercase tracking-widest text-xs md:text-sm text-yellow-300">
                      Counting Down To May 16, 2027
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
                    <div className="bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-2xl border border-white/20">
                      <span className="block text-2xl md:text-4xl font-black text-yellow-300">{timeLeft.days}</span>
                      <span className="text-[10px] md:text-xs uppercase font-bold text-purple-200">Days</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-2xl border border-white/20">
                      <span className="block text-2xl md:text-4xl font-black text-yellow-300">{timeLeft.hours}</span>
                      <span className="text-[10px] md:text-xs uppercase font-bold text-purple-200">Hours</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-2xl border border-white/20">
                      <span className="block text-2xl md:text-4xl font-black text-yellow-300">{timeLeft.minutes}</span>
                      <span className="text-[10px] md:text-xs uppercase font-bold text-purple-200">Mins</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-2xl border border-white/20">
                      <span className="block text-2xl md:text-4xl font-black text-yellow-300">{timeLeft.seconds}</span>
                      <span className="text-[10px] md:text-xs uppercase font-bold text-purple-200">Secs</span>
                    </div>
                  </div>
                </div>

                {/* Event Program Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2 text-slate-700">
                  <div className="p-4 bg-amber-50 rounded-2xl flex flex-col items-center border border-amber-200">
                    <Calendar className="w-8 h-8 text-amber-600 mb-2" />
                    <span className="font-bold text-slate-800">16 May 2027</span>
                    <span className="text-xs text-slate-500">Sunday Mass</span>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-2xl flex flex-col items-center border border-purple-200">
                    <Clock className="w-8 h-8 text-purple-600 mb-2" />
                    <span className="font-bold text-slate-800">9:30 AM Service</span>
                    <span className="text-xs text-slate-500">Feast Lunch at 12:00 PM</span>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-2xl flex flex-col items-center border border-emerald-200">
                    <MapPin className="w-8 h-8 text-emerald-600 mb-2" />
                    <span className="font-bold text-slate-800">St. Thomas Cathedral</span>
                    <span className="text-xs text-slate-500">Thrissur, Kerala</span>
                  </div>
                </div>

                {/* RSVP Button */}
                <div className="flex justify-center pt-2">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setRsvpOpen(true);
                      triggerConfetti();
                    }}
                    className="btn btn-lg bg-amber-400 hover:bg-amber-500 border-none text-purple-950 rounded-full shadow-lg px-10 font-bold"
                  >
                    RSVP For Mass & Lunch ✨
                  </motion.button>
                </div>

                {/* Church Map */}
                <div className="rounded-2xl overflow-hidden border-2 border-slate-200 shadow-inner h-64 w-full mt-6">
                  <iframe
                    title="Cathedral Location Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://maps.google.com/maps?q=Thrissur%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  />
                </div>
              </motion.div>
            </section>

            {/* Preparation & Catechism Gallery */}
            <section className="py-12 px-4 max-w-5xl mx-auto z-10 relative">
              <div className="text-center mb-10">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                  Faith Journey
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mt-2">
                  Growing in Faith 📖✨
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {preparationGallery.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                    className="bg-white p-4 rounded-2xl shadow-xl border-2 border-amber-200 flex flex-col items-center"
                  >
                    <div className="w-full h-64 overflow-hidden rounded-xl mb-3 border border-slate-100">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-xs font-bold text-amber-600 uppercase">{item.label}</span>
                    <h3 className="font-bold text-slate-800 text-sm mt-0.5">{item.title}</h3>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Prayers & Best Wishes Wall */}
            <section className="py-12 px-4 max-w-3xl mx-auto z-10 relative">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border border-amber-300">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-800 flex items-center justify-center gap-2">
                    <Sparkles className="text-amber-500" /> Blessings & Prayers <Sparkles className="text-amber-500" />
                  </h2>
                </div>

                <form onSubmit={handleAddWish} className="space-y-4 mb-8">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={newWish.name}
                    onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
                    className="input input-bordered w-full rounded-xl bg-slate-50 border-amber-300 focus:outline-amber-500"
                  />
                  <textarea
                    placeholder="Write a prayer or blessing for Christina's First Holy Communion..."
                    required
                    rows={3}
                    value={newWish.text}
                    onChange={(e) => setNewWish({ ...newWish, text: e.target.value })}
                    className="textarea textarea-bordered w-full rounded-xl bg-slate-50 border-amber-300 focus:outline-amber-500"
                  />
                  <button type="submit" className="btn bg-purple-900 hover:bg-purple-950 text-yellow-300 w-full rounded-xl border-none font-bold">
                    Send Communion Blessing 🍞🍷
                  </button>
                </form>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                  {wishes.map((w, idx) => (
                    <div key={idx} className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 shadow-sm">
                      <p className="font-bold text-purple-900 text-sm flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 fill-purple-700 text-purple-700" /> {w.name}
                      </p>
                      <p className="text-slate-700 text-sm mt-1">{w.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer Contact */}
            <footer className="text-center py-8 z-10 relative border-t border-amber-200 bg-white/50 backdrop-blur-sm">
              <a
                href="https://wa.me/919061014915"
                target="_blank"
                rel="noreferrer"
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 shadow-md border-none"
              >
                <MessageSquare className="w-4 h-4 mr-2" /> Chat with Host on WhatsApp
              </a>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- RSVP MODAL --- */}
      <AnimatePresence>
        {rsvpOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border-4 border-amber-400"
            >
              <button
                onClick={() => setRsvpOpen(false)}
                className="btn btn-sm btn-circle btn-ghost absolute top-4 right-4 text-slate-400"
              >
                ✕
              </button>

              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-slate-800 text-center">RSVP First Holy Communion 🍷</h3>
                <p className="text-xs text-center text-slate-500">Sends attendance details directly to WhatsApp host</p>

                <div className="form-control">
                  <label className="label text-xs font-bold text-slate-600">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Uncle David"
                    value={rsvpData.name}
                    onChange={(e) => setRsvpData({ ...rsvpData, name: e.target.value })}
                    className="input input-bordered bg-slate-50 rounded-xl"
                  />
                </div>

                <div className="form-control">
                  <label className="label text-xs font-bold text-slate-600">Attending Guests</label>
                  <select
                    value={rsvpData.guests}
                    onChange={(e) => setRsvpData({ ...rsvpData, guests: e.target.value })}
                    className="select select-bordered bg-slate-50 rounded-xl"
                  >
                    <option>1 Person</option>
                    <option>2 Persons</option>
                    <option>Family / Group</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn bg-emerald-600 hover:bg-emerald-700 text-white w-full rounded-xl border-none font-bold mt-2"
                >
                  Confirm Attendance via WhatsApp <Send className="w-4 h-4 ml-1" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}