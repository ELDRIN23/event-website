import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Volume2, VolumeX, MapPin, Calendar, Clock, Send, 
  Sparkles, MessageSquare, Heart, Music, Hourglass, 
  Smile, Star, Gift 
} from 'lucide-react';

// Import baby's photo (or replace with your image path)
import babyPic from '../../images/profile.jpg';

// Custom Inline SVGs for Baptism Specific Icons (Cross & Dove)
const CrossIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M7 7h10" />
  </svg>
);

const DoveIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.5 2 5.5 4.5 5 8c-2 .5-3.5 2-3.5 4 0 2.5 2 4.5 4.5 4.5h12c2.5 0 4.5-2 4.5-4.5 0-2-1.5-3.5-3.5-4-.5-3.5-3.5-6-7-6zm-3 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
  </svg>
);

export default function BaptismInvitation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [rsvpData, setRsvpData] = useState({ name: '', guests: '1 Person' });

  // Countdown target date (e.g., November 15, 2026)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Wishes State with LocalStorage sync
  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem('baptism_wishes');
    return saved ? JSON.parse(saved) : [
      { name: "Godmother Maria", text: "May God bless baby Christina with love, health, and a lifetime of happiness! 🕊️✨" },
      { name: "Grandpa Thomas", text: "Welcome to the family of faith, sweet little angel! 💖" }
    ];
  });

  const [newWish, setNewWish] = useState({ name: "", text: "" });

  const audioRef = useRef(null);
  const inviteRef = useRef(null);

  // Countdown logic for Baptism Date
  useEffect(() => {
    const targetDate = new Date('2026-11-15T10:00:00');

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

  // Save wishes
  useEffect(() => {
    localStorage.setItem('baptism_wishes', JSON.stringify(wishes));
  }, [wishes]);

  // Audio Handler
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.volume = 0.5;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log("Playback error:", e));
      }
    }
  };

  // Soft Festive Confetti
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#38BDF8', '#FDE047', '#F472B6', '#FFFFFF', '#A7F3D0']
    });
  };

  // Open full invitation
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
    const text = `Hi! I'd love to attend Baby Christina's Holy Baptism Ceremony 🕊️%0A%0A*Name:* ${rsvpData.name}%0A*Guests:* ${rsvpData.guests}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    setRsvpOpen(false);
  };

  // Gallery Photos
  const gallery = [
    { title: "Sweet Angel", label: "Newborn Blessings 👼", src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600" },
    { title: "Godparents Love", label: "Guided with Grace 🤍", src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600" },
    { title: "Family Joy", label: "Warm Hugs 🌸", src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-sky-50 to-amber-50 font-sans text-slate-800 relative overflow-x-hidden selection:bg-sky-200">
      
      {/* Background Soft Instrumental Audio */}
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-flute-112328.mp3" 
      />

      {/* Floating Audio Button */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-sky-600 shadow-md hidden sm:flex items-center gap-1 border border-sky-200"
          >
            <Music className="w-3.5 h-3.5 animate-spin" /> Soft Music Playing
          </motion.div>
        )}
        <motion.button
          whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleAudio}
          className={`btn btn-circle btn-lg border-2 border-white shadow-2xl text-white transition-all ${
            isPlaying ? 'bg-sky-500 hover:bg-sky-600 ring-4 ring-sky-200' : 'bg-slate-700 hover:bg-slate-800'
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
          className="max-w-md w-full bg-amber-100 border-4 border-slate-900 rounded-3xl p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden my-auto"
        >
          {/* Badge */}
          <div className="absolute -top-1 -right-1 bg-sky-500 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-bl-xl border-b-4 border-l-4 border-slate-900 tracking-wider flex items-center gap-1">
            <span>HOLY BAPTISM</span> 🕊️
          </div>

          {/* Baby Picture Frame */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 mt-4">
            <motion.div
              animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-full h-full rounded-full border-4 border-slate-900 overflow-hidden bg-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] p-1.5"
            >
              <img
                src={babyPic}
                alt="Baby Christina"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
            <div className="absolute -bottom-1 -right-1 bg-yellow-300 p-2 rounded-full border-2 border-slate-900 shadow animate-bounce">
              <CrossIcon className="w-6 h-6 text-slate-900" />
            </div>
          </div>

          {/* Speech Bubble */}
          <div className="bg-white border-4 border-slate-900 rounded-2xl p-4 mb-6 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] relative">
            <p className="font-extrabold text-slate-900 text-lg md:text-xl leading-snug font-serif">
              "You are warmly invited to the Holy Baptism of sweet baby <span className="text-sky-600 underline decoration-wavy">Christina</span>!" ✨
            </p>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenInvitation}
            className="w-full py-4 px-6 bg-sky-500 hover:bg-sky-600 text-white font-black text-lg md:text-xl rounded-2xl border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wide"
          >
            <span>Open Invitation</span>
            <DoveIcon className="w-6 h-6 text-yellow-300" />
          </motion.button>
        </motion.div>
      </section>

      {/* --- MAIN INVITATION CONTENT --- */}
      <AnimatePresence>
        {showInvitation && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Event Details Section */}
            <section ref={inviteRef} className="py-12 px-4 max-w-3xl mx-auto z-10 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="card bg-white/95 backdrop-blur-md border-4 border-dashed border-sky-300 shadow-2xl rounded-3xl p-6 md:p-10 text-center space-y-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-600 mx-auto text-3xl shadow-inner border border-sky-200">
                  <CrossIcon className="w-8 h-8 text-sky-600" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-black uppercase tracking-widest text-sky-600 bg-sky-100 px-3 py-1 rounded-full">
                    Sacrament of Holy Baptism
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-800 pt-2">
                    Baby Christina
                  </h2>
                  <p className="text-slate-600 font-medium text-base md:text-lg italic">
                    "Every good and perfect gift is from above." — James 1:17
                  </p>
                </div>

                {/* COUNTDOWN TIMER */}
                <div className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl p-6 text-white border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] my-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Hourglass className="w-5 h-5 animate-spin text-yellow-300" />
                    <span className="font-extrabold uppercase tracking-widest text-xs md:text-sm text-yellow-300">
                      Counting Down To The Ceremony
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
                    <div className="bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-2xl border border-white/30">
                      <span className="block text-2xl md:text-4xl font-black">{timeLeft.days}</span>
                      <span className="text-[10px] md:text-xs uppercase font-bold text-sky-100">Days</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-2xl border border-white/30">
                      <span className="block text-2xl md:text-4xl font-black">{timeLeft.hours}</span>
                      <span className="text-[10px] md:text-xs uppercase font-bold text-sky-100">Hours</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-2xl border border-white/30">
                      <span className="block text-2xl md:text-4xl font-black">{timeLeft.minutes}</span>
                      <span className="text-[10px] md:text-xs uppercase font-bold text-sky-100">Mins</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-2xl border border-white/30">
                      <span className="block text-2xl md:text-4xl font-black">{timeLeft.seconds}</span>
                      <span className="text-[10px] md:text-xs uppercase font-bold text-sky-100">Secs</span>
                    </div>
                  </div>
                </div>

                {/* Event Program Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2 text-slate-700">
                  <div className="p-4 bg-sky-50 rounded-2xl flex flex-col items-center border border-sky-100">
                    <Calendar className="w-8 h-8 text-sky-500 mb-2" />
                    <span className="font-bold text-slate-800">15 November 2026</span>
                    <span className="text-xs text-slate-500">Sunday Morning</span>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-2xl flex flex-col items-center border border-amber-100">
                    <Clock className="w-8 h-8 text-amber-500 mb-2" />
                    <span className="font-bold text-slate-800">10:00 AM Holy Mass</span>
                    <span className="text-xs text-slate-500">Reception at 12:30 PM</span>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-2xl flex flex-col items-center border border-emerald-100">
                    <MapPin className="w-8 h-8 text-emerald-500 mb-2" />
                    <span className="font-bold text-slate-800">St. Mary's Church</span>
                    <span className="text-xs text-slate-500">Thrissur, Kerala</span>
                  </div>
                </div>

                {/* RSVP Trigger Button */}
                <div className="flex justify-center pt-2">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setRsvpOpen(true);
                      triggerConfetti();
                    }}
                    className="btn btn-lg bg-sky-500 hover:bg-sky-600 border-none text-white rounded-full shadow-lg px-10 font-bold"
                  >
                    Confirm RSVP ✨
                  </motion.button>
                </div>

                {/* Embedded Church Map */}
                <div className="rounded-2xl overflow-hidden border-2 border-slate-200 shadow-inner h-64 w-full mt-6">
                  <iframe
                    title="Church Location Map"
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

            {/* Baby & Godparents Photo Gallery */}
            <section className="py-12 px-4 max-w-5xl mx-auto z-10 relative">
              <div className="text-center mb-10">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-200 px-3 py-1 rounded-full">
                  Precious Moments
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mt-2">
                  Blessings & Love 📸
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {gallery.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                    className="bg-white p-4 rounded-2xl shadow-xl border-2 border-sky-100 flex flex-col items-center"
                  >
                    <div className="w-full h-64 overflow-hidden rounded-xl mb-3 border border-slate-100">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-xs font-bold text-sky-500 uppercase">{item.label}</span>
                    <h3 className="font-bold text-slate-700 text-sm mt-0.5">{item.title}</h3>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Prayers & Best Wishes Wall */}
            <section className="py-12 px-4 max-w-3xl mx-auto z-10 relative">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border border-amber-200">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-800 flex items-center justify-center gap-2">
                    <Sparkles className="text-amber-500" /> Prayers & Best Wishes <Sparkles className="text-amber-500" />
                  </h2>
                </div>

                <form onSubmit={handleAddWish} className="space-y-4 mb-8">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={newWish.name}
                    onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
                    className="input input-bordered w-full rounded-xl bg-slate-50 border-sky-200 focus:outline-sky-400"
                  />
                  <textarea
                    placeholder="Write a loving prayer or blessing for Christina..."
                    required
                    rows={3}
                    value={newWish.text}
                    onChange={(e) => setNewWish({ ...newWish, text: e.target.value })}
                    className="textarea textarea-bordered w-full rounded-xl bg-slate-50 border-sky-200 focus:outline-sky-400"
                  />
                  <button type="submit" className="btn bg-sky-500 hover:bg-sky-600 text-white w-full rounded-xl border-none font-bold">
                    Send Blessing 🕊️
                  </button>
                </form>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                  {wishes.map((w, idx) => (
                    <div key={idx} className="p-4 bg-sky-50 rounded-2xl border border-sky-100 shadow-sm">
                      <p className="font-bold text-sky-600 text-sm flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 fill-sky-500 text-sky-500" /> {w.name}
                      </p>
                      <p className="text-slate-700 text-sm mt-1">{w.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-8 z-10 relative border-t border-sky-200 bg-white/50 backdrop-blur-sm">
              <a
                href="https://wa.me/919061014915"
                target="_blank"
                rel="noreferrer"
                className="btn bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 shadow-md border-none"
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
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border-4 border-amber-300"
            >
              <button
                onClick={() => setRsvpOpen(false)}
                className="btn btn-sm btn-circle btn-ghost absolute top-4 right-4 text-slate-400"
              >
                ✕
              </button>

              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-slate-800 text-center">RSVP for Holy Baptism 🕊️</h3>
                <p className="text-xs text-center text-slate-500">Sends confirmation directly to host via WhatsApp</p>

                <div className="form-control">
                  <label className="label text-xs font-bold text-slate-600">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aunt Maria"
                    value={rsvpData.name}
                    onChange={(e) => setRsvpData({ ...rsvpData, name: e.target.value })}
                    className="input input-bordered bg-slate-50 rounded-xl"
                  />
                </div>

                <div className="form-control">
                  <label className="label text-xs font-bold text-slate-600">Number of Guests</label>
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
                  className="btn bg-emerald-500 hover:bg-emerald-600 text-white w-full rounded-xl border-none font-bold mt-2"
                >
                  Send RSVP via WhatsApp <Send className="w-4 h-4 ml-1" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}