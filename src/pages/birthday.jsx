import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX, MapPin, Calendar, Clock, Send, Sparkles, MessageSquare, Heart, Music, PartyPopper } from 'lucide-react';

// Import your uploaded profile picture from your local directory
import profilePic from '../../images/profile.jpg';

export default function Birthday() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false); // Controls revealing full content
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [rsvpData, setRsvpData] = useState({ name: '', guests: '1 Person' });

  // Load saved wishes from LocalStorage or use defaults
  const [wishes, setWishes] = useState(() => {
    const savedWishes = localStorage.getItem('christina_birthday_wishes');
    return savedWishes ? JSON.parse(savedWishes) : [
      { name: "Aunt Sarah", text: "Happy Birthday Christina! Stay sweet, bright, and curious! 💕" },
      { name: "Uncle John", text: "Can't wait to celebrate! Happy Birthday Princess! 👑" }
    ];
  });

  const [newWish, setNewWish] = useState({ name: "", text: "" });

  const audioRef = useRef(null);
  const inviteRef = useRef(null);

  // Save wishes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('christina_birthday_wishes', JSON.stringify(wishes));
  }, [wishes]);

  // Audio Toggle
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.5;
        audioRef.current.play().catch(e => console.log("Audio deferred", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Confetti Effect
  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FF69B4', '#FFD700', '#00BFFF', '#98FB98', '#FF4500', '#A855F7']
    });
  };

  // Open full invitation content
  const handleOpenInvitation = () => {
    setShowInvitation(true);
    triggerConfetti();

    // Smooth scroll down to main content after state update
    setTimeout(() => {
      inviteRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  // Submit Best Wish
  const handleAddWish = (e) => {
    e.preventDefault();
    if (newWish.name.trim() && newWish.text.trim()) {
      setWishes([newWish, ...wishes]);
      setNewWish({ name: "", text: "" });
      triggerConfetti();
    }
  };

  // Submit RSVP Direct to WhatsApp
  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    triggerConfetti();

    const phoneNumber = "919061014915";
    const text = `Hi! I'd like to confirm my RSVP for Christina's Birthday Celebration 🎉%0A%0A*Name:* ${rsvpData.name}%0A*Guests:* ${rsvpData.guests}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    setRsvpOpen(false);
  };

  // Childhood & Growing Up Journey Photos
  const childhoodPhotos = [
    {
      age: "Baby Steps 🍼",
      title: "First Birthday Joy",
      src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600"
    },
    {
      age: "Toddler Days 🌸",
      title: "Little Explorer",
      src: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600"
    },
    {
      age: "Early Years 🎨",
      title: "Giggles & Colors",
      src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600"
    },
    {
      age: "School Days 📚",
      title: "Sweet Memories",
      src: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=600"
    },
    {
      age: "Festive Vibes 🥻",
      title: "Traditional Elegance",
      src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600"
    },
    {
      age: "Teen Years 🌟",
      title: "Shining Bright",
      src: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-pink-100 to-amber-100 font-sans text-slate-800 relative overflow-x-hidden selection:bg-pink-300">
      
      {/* Audio Player */}
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a21d1b.mp3?filename=happy-kids-101160.mp3" 
      />

      {/* Floating Audio Toggle */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-pink-600 shadow-md flex items-center gap-1 hidden sm:flex"
          >
            <Music className="w-3.5 h-3.5 animate-spin" /> Playing Music
          </motion.div>
        )}
        <motion.button
          whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleAudio}
          className={`btn btn-circle btn-lg border-2 border-white shadow-2xl text-white transition-all ${
            isPlaying ? 'bg-pink-500 hover:bg-pink-600 ring-4 ring-pink-300' : 'bg-slate-700 hover:bg-slate-800'
          }`}
        >
          {isPlaying ? <Volume2 className="w-7 h-7 animate-pulse" /> : <VolumeX className="w-7 h-7" />}
        </motion.button>
      </div>

      {/* FULL-SCREEN CARTOON COVER PAGE SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center p-4 text-center z-20 relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="max-w-md w-full bg-yellow-300 border-4 border-slate-900 rounded-3xl p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden my-auto"
        >
          {/* Cartoon Badge */}
          <div className="absolute -top-1 -right-1 bg-pink-500 text-white font-extrabold text-xs px-3 py-1 rounded-bl-xl border-b-4 border-l-4 border-slate-900 tracking-wider">
            SPECIAL INVITATION! 🎈
          </div>

          {/* Cartoon Profile Picture */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 mt-2">
            <motion.div
              animate={{ rotate: [0, 4, -4, 0], scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-full h-full rounded-full border-4 border-slate-900 overflow-hidden bg-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] p-1.5"
            >
              <img
                src={profilePic}
                alt="Christina - Birthday Girl"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
            <div className="absolute -bottom-2 -right-2 text-4xl animate-bounce">
              👑
            </div>
          </div>

          {/* Cartoonic Speech Sentence */}
          <div className="bg-white border-4 border-slate-900 rounded-2xl p-4 mb-6 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] relative">
            <p className="font-extrabold text-slate-900 text-lg md:text-xl leading-snug font-serif">
              "Hey! You're invited to celebrate <span className="text-pink-500 underline decoration-wavy">Christina's</span> big birthday bash!" 🎉
            </p>
          </div>

          {/* Cartoonic View Invitation Button */}
          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenInvitation}
            className="w-full py-4 px-6 bg-pink-500 hover:bg-pink-600 text-white font-black text-lg md:text-xl rounded-2xl border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wide"
          >
            <span>View The Invitation</span>
            <PartyPopper className="w-6 h-6 text-yellow-300" />
          </motion.button>
        </motion.div>
      </section>

      {/* ALL INVITATION STUFF - REVEALED ON BUTTON CLICK */}
      <AnimatePresence>
        {showInvitation && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Invitation Details Card */}
            <section ref={inviteRef} className="py-16 px-4 max-w-3xl mx-auto z-10 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="card bg-white/95 backdrop-blur-md border-4 border-dashed border-pink-300 shadow-2xl rounded-3xl p-6 md:p-10 text-center space-y-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 text-pink-500 mx-auto text-3xl shadow-inner">
                  🎂
                </div>

                <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-slate-800">
                  Christina's Birthday Celebration
                </h2>

                <p className="text-slate-600 font-medium text-lg">
                  Join us for a magical day filled with music, laughter, and sweet memories!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 text-slate-700">
                  <div className="p-4 bg-pink-50 rounded-2xl flex flex-col items-center border border-pink-100">
                    <Calendar className="w-8 h-8 text-pink-500 mb-2" />
                    <span className="font-bold">20 September 2026</span>
                    <span className="text-xs text-slate-500">Save the Date!</span>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-2xl flex flex-col items-center border border-yellow-100">
                    <Clock className="w-8 h-8 text-yellow-500 mb-2" />
                    <span className="font-bold">5:00 PM Onwards</span>
                    <span className="text-xs text-slate-500">Party Time</span>
                  </div>
                  <div className="p-4 bg-sky-50 rounded-2xl flex flex-col items-center border border-sky-100">
                    <MapPin className="w-8 h-8 text-sky-500 mb-2" />
                    <span className="font-bold">Grand Party Hall</span>
                    <span className="text-xs text-slate-500">Rainbow Street, Kerala</span>
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setRsvpOpen(true);
                      triggerConfetti();
                    }}
                    className="btn btn-lg bg-yellow-400 hover:bg-yellow-500 border-none text-yellow-950 rounded-full shadow-lg px-10 font-bold"
                  >
                    RSVP Now ✨
                  </motion.button>
                </div>

                {/* Embedded Google Map */}
                <div className="rounded-2xl overflow-hidden border-2 border-slate-200 shadow-inner h-64 w-full mt-6">
                  <iframe
                    title="Party Location Map"
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

            {/* Childhood Journey Photo Gallery */}
            <section className="py-16 px-4 max-w-5xl mx-auto z-10 relative">
              <div className="text-center mb-10">
                <span className="text-sm font-bold text-pink-600 uppercase tracking-widest bg-pink-200 px-3 py-1 rounded-full">
                  Memories
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mt-2">
                  Christina's Growing Up Journey 📸
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {childhoodPhotos.map((photo, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                    className="bg-white p-4 rounded-2xl shadow-xl border border-pink-100 flex flex-col items-center"
                  >
                    <div className="w-full h-60 overflow-hidden rounded-xl mb-3 border border-slate-100">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-xs font-bold text-pink-500 uppercase">{photo.age}</span>
                    <h3 className="font-bold text-slate-700 text-sm mt-0.5">{photo.title}</h3>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Best Wishes Wall Section (LocalStorage Enabled) */}
            <section className="py-16 px-4 max-w-3xl mx-auto z-10 relative">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border border-yellow-200">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-800 flex items-center justify-center gap-2">
                    <Sparkles className="text-yellow-500" /> Leave Best Wishes <Sparkles className="text-yellow-500" />
                  </h2>
                </div>

                <form onSubmit={handleAddWish} className="space-y-4 mb-8">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={newWish.name}
                    onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
                    className="input input-bordered w-full rounded-xl bg-slate-50 border-pink-200 focus:outline-pink-400"
                  />
                  <textarea
                    placeholder="Write a sweet birthday wish for Christina..."
                    required
                    rows={3}
                    value={newWish.text}
                    onChange={(e) => setNewWish({ ...newWish, text: e.target.value })}
                    className="textarea textarea-bordered w-full rounded-xl bg-slate-50 border-pink-200 focus:outline-pink-400"
                  />
                  <button type="submit" className="btn bg-pink-500 hover:bg-pink-600 text-white w-full rounded-xl border-none font-bold">
                    Send Wish 💌
                  </button>
                </form>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                  {wishes.map((w, idx) => (
                    <div key={idx} className="p-4 bg-pink-50 rounded-2xl border border-pink-100 shadow-sm">
                      <p className="font-bold text-pink-600 text-sm flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" /> {w.name}
                      </p>
                      <p className="text-slate-700 text-sm mt-1">{w.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer Contact */}
            <footer className="text-center py-8 z-10 relative border-t border-pink-200 bg-white/50 backdrop-blur-sm">
              <a
                href="https://wa.me/919061014915"
                target="_blank"
                rel="noreferrer"
                className="btn bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 shadow-md border-none"
              >
                <MessageSquare className="w-4 h-4 mr-2" /> Chat on WhatsApp
              </a>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RSVP Direct to WhatsApp Modal */}
      <AnimatePresence>
        {rsvpOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border-4 border-yellow-300"
            >
              <button
                onClick={() => setRsvpOpen(false)}
                className="btn btn-sm btn-circle btn-ghost absolute top-4 right-4 text-slate-400"
              >
                ✕
              </button>

              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-slate-800 text-center">RSVP for Party 🎉</h3>
                <p className="text-xs text-center text-slate-500">Sends directly to WhatsApp host!</p>

                <div className="form-control">
                  <label className="label text-xs font-bold text-slate-600">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
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
                    <option>Family</option>
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