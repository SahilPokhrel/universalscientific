import React from 'react';
import { User, Calendar, MapPin, TrendingUp, ShieldCheck, Users, HeartHandshake } from "lucide-react";

// --- Main About Page Component ---
export default function AboutPage() {
  return (
    <div>
      {/* --- 1. Hero Section --- */}
      <section className="bg-gray-50 py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Our Story
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Building a legacy of trust, knowledge, and service since 2011.
        </p>
      </section>

      {/* --- 2. Main Content Section --- */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        
        {/* --- Proprietor's Story --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-2">
            <span className="text-blue-600 font-semibold">Our Proprietor</span>
            <h2 className="text-4xl font-bold text-gray-900 my-4">
              The Vision of Mrs. Sita Gautam
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At the heart of our success is Mrs. Sita Gautam. A graduate in Commerce,
              she took on the bold challenge of entering the entirely different field
              of education and scientific supplies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through sheer determination, adaptability, and a commitment to excellence,
              she not only mastered this new domain but also turned a small dream into a
              thriving business respected across Shillong and beyond.
            </p>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg">
            <User className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">A Personal Mission</h3>
            <p className="text-gray-700">
              Mrs. Gautam's journey is a shining example of how passion and perseverance
              can turn challenges into opportunities.
            </p>
          </div>
        </div>

        {/* --- Our Journey (Timeline) --- */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Step 1: Founded */}
            <div>
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">2011: Founded</h3>
              <p className="text-gray-600 leading-relaxed">
                Our story began in a modest shop in the heart of Police Bazar, Shillong.
              </p>
            </div>
            
            {/* Step 2: Resilience */}
            <div>
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Adapting to Challenges</h3>
              <p className="text-gray-600 leading-relaxed">
                The COVID-19 pandemic tested our resilience. With courage and faith, we adapted.
              </p>
            </div>

            {/* Step 3: New Home */}
            <div>
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">A New Home</h3>
              <p className="text-gray-600 leading-relaxed">
                We moved to our current home in Upper Mawprem, continuing our mission
                with the same dedication.
              </p>
            </div>
          </div>
        </div>

        {/* --- Philosophy & Values --- */}
        <div className="bg-gray-50 rounded-xl p-12 mt-24">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What "Universal" Means</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The name <strong>Universal</strong> represents our belief that education and
                knowledge belong to everyone. We're here to provide the right
                tools for growth, curiosity, and creativity.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Core Values</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3 text-gray-700">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                  <strong>Quality & Integrity</strong>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Users className="w-6 h-6 text-blue-600" />
                  <strong>Customer Trust</strong>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <HeartHandshake className="w-6 h-6 text-blue-600" />
                  <strong>Service with Heart</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Community & Future --- */}
        <div className="text-center max-w-3xl mx-auto mt-24">
          <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mb-6">
            <TrendingUp className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Community & Our Future
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We proudly support schools, science fairs, and educational initiatives.
            As we look ahead, our mission is to blend this tradition of community
            support with modern innovation, expanding our presence to meet today’s
            educational and professional needs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-semibold">
            Thank you for being part of our journey.
          </p>
        </div>

      </section>
    </div>
  );
}

