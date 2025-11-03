import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Users,
  HeartHandshake,
  Zap,
  BookOpen,
  FlaskConical,
  Beaker,
  PenTool,
  Tractor,
  Sun,
  ShoppingCart,
} from "lucide-react";

// --- Core Values Data ---
const coreValues = [
  {
    icon: ShieldCheck,
    title: "Quality & Integrity",
    text: "Every product we offer is selected with care and responsibility.",
  },
  {
    icon: Users,
    title: "Customer Trust",
    text: "We believe in long-term relationships built on honesty and reliability.",
  },
  {
    icon: HeartHandshake,
    title: "Service with Heart",
    text: "Every customer is valued and respected — our success is measured by their satisfaction.",
  },
];

// --- Featured Categories Data ---
const featuredCategories = [
  { icon: FlaskConical, name: "Lab Equipments" },
  { icon: Beaker, name: "Glasswares & Chemicals" },
  { icon: PenTool, name: "Stationery Items" },
  { icon: Tractor, name: "Agricultural Equipments" },
  { icon: Sun, name: "Solar Items" },
  { icon: ShoppingCart, name: "Consumables" },
];

// --- Main Homepage Component ---
export default function HomePage() {
  return (
    <div className="bg-white">
      {/* --- 1. Hero Section (Rewritten for Clarity) --- */}
      {/* FIX: Reduced vertical padding (py-16) and text sizes for mobile.
        These now scale up on larger screens (sm: and md: prefixes).
        This pulls the buttons "above the fold" on phone screens.
      */}
      <section className="bg-gray-50 flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 min-h-[80vh]">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
            Shillong's Premier Source for Scientific & Stationery Supplies
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 italic mb-8">
            “Where Learning Meets Legacy.”
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            From lab equipment, chemicals, and glassware to all your stationery needs,
            we are Shillong's one-stop shop for schools, colleges, and professionals.
            What began as a small family dream has grown into a trusted name
            in educational supplies, serving our community since 2011.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
            <Link to="/about" className="btn-secondary">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. "What We Provide" Section (NEW) --- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900">What We Provide</h2>
          <p className="text-lg text-gray-600 mt-4">
            We stock a comprehensive range of quality supplies for education,
            research, and professional use.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {featuredCategories.map((category) => (
            <div
              key={category.name}
              className="card flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition"
            >
              <category.icon className="text-blue-600 w-10 h-10" />
              <span className="font-semibold text-center">{category.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/products" className="btn-primary">
            Explore Our Full Catalog
          </Link>
        </div>
      </section>

      {/* --- 3. Our Story Section (Heritage) --- */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold">Our Journey</span>
              <h2 className="text-4xl font-bold text-gray-900 my-4">
                Building a legacy of trust, knowledge, and service since 2011.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our journey began in the heart of Police Bazar, Shillong. What started
                as a modest shop soon became a mission: to make quality educational
                materials accessible to every learner.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At the heart of this success is <strong>Mrs. Sita Gautam</strong>, our proprietor.
                Through sheer determination and a commitment to excellence,
                she built a thriving business respected across Shillong and beyond.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">A Legacy of Commitment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                From <strong>Police Bazar (2011)</strong> to <strong>Upper Mawprem (Post-COVID)</strong>,
                our story is one of courage and unwavering dedication.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Though the location changed, the values of quality, integrity, and
                dedication remain the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. Core Values Section (Trust) --- */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-lg text-gray-600 mt-4">
              These principles guide every decision we make and every interaction we have.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="bg-gray-50 p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. "What Universal Means" Section (Brand) --- */}
      <section className="bg-blue-600 text-white px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl font-bold mb-6">What “Universal” Means to Us</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            The name <strong>Universal</strong> represents our belief that education and
            knowledge belong to everyone. Whether it’s a young student buying
            their first pencil box or a teacher setting up a laboratory, we’re
            here to provide the right tools for growth, curiosity, and creativity.
          </p>
        </div>
      </section>
      
      {/* --- 6. Looking Ahead Section (Future) --- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-semibold">Our Mission</span>
            <h2 className="text-4xl font-bold text-gray-900 my-4">
              Supporting Education & Community
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We proudly support schools, science fairs, and educational initiatives.
              We believe true success lies in contributing to the community — by
              helping students learn better, teachers teach better, and institutions
              grow stronger.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As we look ahead, our mission is to blend tradition with modern
              innovation, expand our presence, and offer a wider range of quality
              products that meet today’s needs.
            </p>
          </div>
          <div className="text-center">
             <div className="inline-flex items-center justify-center h-40 w-40 bg-gray-100 text-gray-700 rounded-full mb-6">
                  <Zap className="w-20 h-20 text-blue-600" />
                </div>
            <h3 className="text-2xl font-semibold text-gray-900">Thank You!</h3>
            <p className="text-lg text-gray-600 mt-2">
              To our loyal customers, schools, and community — thank you for
              being part of our journey.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

