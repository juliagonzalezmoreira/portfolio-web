"use client";

import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  { name: "Project 1", description: "Brief description of the project.", link: "https://github.com/juliagonzalez/project1" },
  { name: "Project 2", description: "Brief description of the project.", link: "https://github.com/juliagonzalez/project2" }
];

export default function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen bg-white flex flex-col items-center justify-center">
        <Image src="/juliaphoto.jpg" alt="Julia Gonzalez Photo" width={150} height={150} className="rounded-full shadow-lg" priority />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text mt-8">Welcome to my portfolio</h1>
          <p className="mt-4 text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">Focused on innovation and technological challenges</p>
          <a href="#about" className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-full">About Me</a>
        </div>
      </section>

      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center shadow-md bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white">
        <h1 className="text-xl font-bold">Julia Gonzalez</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:underline">About Me</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>
      
      {/* About Me */}
      <section id="about" className="p-10 text-center">
        <div className="flex flex-col items-center">
          <Image src="/computer.png" alt="Computer Photo" width={350} height={350} className="rounded-full" priority />
          <h2 className="text-3xl font-semibold mt-4">About Me</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl">
            I'm a developer with experience in automated testing and web development. Passionate about technology, I'm always looking for new challenges.
          </p>
        </div>
      </section>
      
      {/* Skills */}
      <section id="skills" className="p-10 text-center">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <ul className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto list-disc list-inside">
          <li>JavaScript, TypeScript</li>
          <li>React, Next.js</li>
          <li>Cypress, Playwright</li>
          <li>Python, Flask</li>
          <li>SQL Databases</li>
        </ul>
      </section>
      
      {/* Projects */}
      <section id="projects" className="p-10 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div key={project.name} className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-6 rounded-lg shadow-lg text-white">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-gray-200">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white underline mt-2 inline-block">View on GitHub</a>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/juliagonzalezmoreira" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-900 hover:text-purple-500"><FaGithub /></a>
          <a href="https://linkedin.com/in/julia-gonzalez-moreira" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-900 hover:text-pink-500"><FaLinkedin /></a>
          <a href="mailto:juliagonzalezmoreira@gmail.com" className="text-2xl text-gray-900 hover:text-blue-500"><FaEnvelope /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>Made with 💜 by Julia Gonzalez</p>
      </footer>
    </div>
  );
}
