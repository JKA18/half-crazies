"use client";

import React, { useState } from 'react';

// Main App Component
export default function HalfCraziesLandingPage() {
  // REACT CONCEPT: State Management
  // useState lets us keep track of data that changes when a user interacts with the page.
  // Here, 'isMenuOpen' tracks whether the mobile navigation menu is visible or hidden.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // REACT CONCEPT: Arrays of Data
  // Storing repeatable content in an array of objects keeps your JSX clean (DRY - Don't Repeat Yourself).
  // Later in the JSX, we use `.map()` to turn each object into a visual card.
  const upcomingEvents = [
    {
      title: 'Beginner Open House & Free Dance',
      date: 'Thursday, Sept 12',
      time: '7:00 PM - 9:00 PM',
      location: 'Community Center Main Hall',
      desc: 'No experience or partner needed! Come try two-stepping and basic caller calls for free.',
    },
    {
      title: 'Fall Hoedown & Potluck',
      date: 'Saturday, Oct 5',
      time: '6:30 PM - 10:00 PM',
      location: 'Fairgrounds Barn #3',
      desc: 'Bring a side dish to share. Caller: Dan "The Man" Miller. Dress up in your favorite Western gear!',
    },
    {
      title: 'Weekly Club Mainstream & Plus Night',
      date: 'Every Thursday',
      time: '7:00 PM - 9:30 PM',
      location: 'Community Center Main Hall',
      desc: 'Our regular weekly club night. Alternating Mainstream and Plus tips.',
    },
  ];

  return (
    // Tailwind CSS handles styling via utility classes (e.g., bg-amber-50, text-3xl, flex, grid).
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      
      {/* ================= HEADER / NAVIGATION ================= */}
      <header className="sticky top-0 z-50 bg-amber-900 text-amber-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo / Branding */}
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🤠</span>
            <span className="text-2xl font-black tracking-wide uppercase font-serif">
              Half Crazies
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-semibold">
            <a href="#about" className="hover:text-amber-300 transition-colors">About Us</a>
            <a href="#events" className="hover:text-amber-300 transition-colors">Events</a>
            <a href="#beginners" className="hover:text-amber-300 transition-colors">Beginners</a>
            <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button - Triggers State Change */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* REACT CONCEPT: Conditional Rendering */}
        {/* If 'isMenuOpen' is true, render this mobile menu block. */}
        {isMenuOpen && (
          <nav className="md:hidden bg-amber-950 px-4 pt-2 pb-4 space-y-2 text-center font-medium">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:bg-amber-900 rounded">About Us</a>
            <a href="#events" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:bg-amber-900 rounded">Events</a>
            <a href="#beginners" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:bg-amber-900 rounded">Beginners</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:bg-amber-900 rounded">Contact</a>
          </nav>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-amber-800 text-white py-20 px-4 text-center overflow-hidden">
        {/* Subtle decorative background circle */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-amber-600 to-transparent"></div>

        <div className="relative max-w-4xl mx-auto space-y-6">
          <span className="bg-amber-950 text-amber-200 text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full inline-block border border-amber-700">
            Official Square Dance Club
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-serif tracking-tight leading-tight">
            Get Crazy On The Dance Floor!
          </h1>
          <p className="text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Welcome to <strong className="text-white">Half Crazies Square Dance Club</strong>. Whether you’re a seasoned dancer or have two left feet, we’re all about fun, fitness, and great friendships.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#events"
              className="bg-yellow-500 text-amber-950 hover:bg-yellow-400 font-bold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"
            >
              Join Our Next Dance
            </a>
            <a
              href="#about"
              className="bg-transparent border-2 border-amber-200 hover:bg-amber-700/50 text-white font-semibold px-8 py-3.5 rounded-lg transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-16 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif text-amber-950">Who Are the Half Crazies?</h2>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* REACT CONCEPT: Component Composition */}
        {/* We break down layout into clear, reusable grid items */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition">
            <div className="text-4xl mb-4">🪗</div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">Live Callers & Music</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              We host fantastic energetic callers spinning a mix of classic country tunes, modern pop hits, and classic rock.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">No Partner Required</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Square dancing is inherently social! Come solo or bring a friend—we guarantee you’ll dance with plenty of great people.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition">
            <div className="text-4xl mb-4">👟</div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">Fun & Fitness</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              A single evening of dancing can net you 5,000+ steps without ever feeling like a workout. It keeps your body active and mind sharp.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EVENTS SECTION (DYNAMIC RENDERING) ================= */}
      <section id="events" className="py-16 bg-stone-100 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-amber-950">Upcoming Dances & Events</h2>
            <p className="text-stone-600 mt-2">Come out and dance with us!</p>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* REACT CONCEPT: Array Mapping */}
            {/* Array.map() iterates over our 'upcomingEvents' array and returns a card for each item. */}
            {/* Notice the 'key' attribute on the wrapper div—React requires a unique key when mapping arrays! */}
            {upcomingEvents.map((event, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
                    {event.date}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{event.title}</h3>
                  <div className="text-xs text-stone-500 mb-4 space-y-1">
                    <p>⏰ {event.time}</p>
                    <p>📍 {event.location}</p>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <button className="w-full text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold text-sm py-2 rounded-lg transition">
                    Details & RSVP
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BEGINNERS / CALL TO ACTION ================= */}
      <section id="beginners" className="py-16 px-4 bg-amber-900 text-amber-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif">New to Square Dancing?</h2>
          <p className="text-amber-200 max-w-2xl mx-auto leading-relaxed">
            Don't worry—we were all beginners once! Modern square dancing isn't like middle school gym class. It’s fast-paced, easy to learn, and taught step-by-step by our friendly callers.
          </p>
          <div className="bg-amber-800/60 p-6 rounded-xl border border-amber-700 max-w-lg mx-auto text-left space-y-3">
            <h3 className="font-bold text-lg text-amber-100">What to expect on your first night:</h3>
            <ul className="space-y-2 text-sm text-amber-200 list-disc list-inside">
              <li>Wear comfortable clothing and smooth-soled shoes.</li>
              <li>Arrive 15 minutes early so we can greet you.</li>
              <li>Free admission for first-time visitors!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CONTACT / NEWSLETTER FORM ================= */}
      <section id="contact" className="py-16 px-4 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-serif text-amber-950">Stay in the Loop</h2>
          <p className="text-stone-600 mt-2">Sign up for class announcements and dance schedule updates.</p>
        </div>

        {/* REACT CONCEPT: Form Handling */}
        {/* In React, forms usually use an onSubmit handler to intercept browser refresh. */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for joining the Half Crazies mailing list!');
          }} 
          className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-1">First Name</label>
              <input 
                type="text" 
                required 
                placeholder="Jane"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-1">Email Address</label>
              <input 
                type="email" 
                required 
                placeholder="jane@example.com"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 rounded-lg shadow transition"
          >
            Subscribe to Updates
          </button>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-stone-900 text-stone-400 py-8 px-4 text-center text-sm border-t border-stone-800">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="font-serif text-stone-200 text-base">🤠 Half Crazies Square Dance Club</p>
          <p>Dances held at the Community Center • 123 Dance Lane</p>
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Half Crazies. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>

    </div>
  );
}