import React from "react";
import PortfolioSection from "./pages/portfolio";
import CashcowSection from "./pages/cashcow";

export default function Portfolio() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">FilmAtheist</h1>

        <div className="space-x-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#portfolio" className="hover:text-white">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="grid md:grid-cols-2 gap-10 px-10 py-20 items-center"
        id="home"
      >
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            PROFESSIONAL <br /> VIDEO EDITOR <br /> & VIDEO GRAPHER
          </h2>
          <p className="text-gray-400 mt-6">
            I create cinematic edits, reels, and vlogs with high-quality
            storytelling.
          </p>
          <button className="mt-6 bg-purple-600 px-6 py-3 rounded-sm hover:bg-purple-700">
            Let’s Talk
          </button>
        </div>
        <div className="flex justify-center">
          <img src="images/hammad.png" alt="editor" className="rounded-2xl" />
        </div>
      </section>

      {/* About */}
      <section className="px-10 py-16 border-t border-gray-800" id="about">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-gray-400 max-w-2xl">
          I am a video editor with 4+ years of experience creating engaging
          content for clients worldwide.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
          {[
            "Creativity",
            "Video Editing",
            "Storytelling",
            "Motion Graphics",
          ].map((item, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 md:px-10 py-16 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Meet Me 👋</h3>

          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Watch a quick introduction about who I am, what I do, and how I can
            help you.
          </p>

          {/* Video Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://player.vimeo.com/video/1151507665"
              title="Intro Video"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <PortfolioSection />

      <CashcowSection />

      {/* Contact */}
      <section
        className="px-6 md:px-10 py-20 border-t border-gray-800"
        id="contact"
      >
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg text-center">
          <h3 className="text-3xl font-bold">Let’s Work Together</h3>
          <p className="text-gray-400 mt-3 mb-10">
            Have a project or idea? Reach out and let’s create something
            amazing.
          </p>

          {/* Contact Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/+923465121033"
              target="_blank"
              className="bg-black border border-gray-700 p-6 rounded-xl hover:bg-purple-600 transition"
            >
              <p className="font-semibold">WhatsApp</p>
            </a>

            {/* Email */}
            <a
              href="mailto:hammadabbasi01010@gmail.com"
              className="bg-black border border-gray-700 p-6 rounded-xl hover:bg-purple-600 transition"
            >
              <p className="font-semibold">Email</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/hammad-abbasi-b49033294"
              target="_blank"
              className="bg-black border border-gray-700 p-6 rounded-xl hover:bg-purple-600 transition"
            >
              <p className="font-semibold">LinkedIn</p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/filmatheist_1"
              target="_blank"
              className="bg-black border border-gray-700 p-6 rounded-xl hover:bg-purple-600 transition"
            >
              <p className="font-semibold">Instagram</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800">
        © 2026 Rana Umar
      </footer>
    </div>
  );
}
// https://vimeo.com/1187670526
//  https://vimeo.com/1187672378
//  https://vimeo.com/1187673354
