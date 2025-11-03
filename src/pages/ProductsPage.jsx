import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { catalogData } from '../data/catalogData.js'; // Import our new data
import { ArrowRight } from 'lucide-react';

/*// --- FIX: Added dummy data for preview environment, which can't access local files ---
const placeholder = "https://placehold.co/400x400/F3F4F6/7B7B7B?font=sans-serif&text=";
const catalogData = [
  {
    category: "Lab Equipments",
    subcategories: [
      {
        name: "Analytical Instruments",
        items: [
          {
            id: "sp-169",
            name: "Spectrophotometer 169",
            image: placeholder + "Spectrophotometer",
            description: "Micro-controller based, solid-state system for high stability and long life.",
            specs: [
              { key: "Model", value: "169" },
              { key: "Wavelength", value: "320-990nm" },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Glasswares",
    subcategories: [],
  }
];
// --- End of dummy data ---*/


// --- Product Card Component (NOW A LINK) ---
const ProductCard = ({ item }) => (
  <div className="card flex flex-col justify-between bg-white shadow rounded-xl hover:shadow-lg transition-shadow overflow-hidden">
    <div className="p-4">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
    </div>
    
    {/* This is now a <Link> component from react-router-dom */}
    <Link
      to={`/product/${item.id}`} // It points to our new dynamic route
      className="flex items-center justify-center gap-2 w-full text-left p-4 bg-gray-50 text-blue-600 font-medium hover:bg-gray-100 transition"
    >
      View Details <ArrowRight className="w-4 h-4" />
    </Link>
  </div>
);

// --- Main Products Page Component ---
export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(catalogData[0].category);

  const currentCategoryData = catalogData.find(c => c.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* --- Page Header --- */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Catalog</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer a wide variety of scientific and stationery items. Explore our
          categories and contact us for any inquiries.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* --- Sidebar: Categories --- */}
        <aside className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Categories</h3>
          <nav className="flex flex-col space-y-2">
            {catalogData.map(cat => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`p-3 rounded-lg text-left font-medium ${
                  selectedCategory === cat.category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </nav>
        </aside>

        {/* --- Main Content: Subcategories & Items --- */}
        <main className="w-full md:w-3/4">
          {!currentCategoryData ? (
             <div className="text-center p-12 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Please select a category</h3>
            </div>
          ) : currentCategoryData.subcategories.length === 0 ? (
            <div className="text-center p-12 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Coming Soon</h3>
              <p className="text-gray-600 mt-2">
                Products for {currentCategoryData.category} will be listed here soon. Please check back later.
              </p> 
            </div>
          ) : (
            currentCategoryData.subcategories.map(subcat => (
              <div key={subcat.name} className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-2 mb-6">
                  {subcat.name}
                </h3>
                {subcat.items.length === 0 ? (
                   <p className="text-gray-500">No items listed in this sub-category yet.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subcat.items.map(item => (
                      // We pass the item to our new <ProductCard>
                      <ProductCard key={item.id} item={item} /> 
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </main>
      </div>
      {/* All Modal and Portal code has been removed! */}
    </div>
  );
}

