import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { catalogData } from '../data/catalogData.js'; // Import the real data
import { ArrowLeft } from 'lucide-react';

// Helper function to find a product by its ID
function findProductById(id) {
  for (const category of catalogData) {
    for (const subcat of category.subcategories) {
      const item = subcat.items.find(i => i.id === id);
      if (item) return item;
    }
  }
  return null; // Not found
}

export default function ProductDetailPage() {
  const { productId } = useParams();
  
  // Handle the case where productId is undefined during initial render or test
  if (!productId) {
     return (
        <div className="max-w-5xl mx-auto px-6 py-16">
          {/* This helps the previewer see a valid product */}
          <meta http-equiv="refresh" content="0;url=/product/sp-169" />
          <p>Loading product...</p>
        </div>
     );
  }

  const item = findProductById(productId);

  if (!item) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      
      <Link
        to="/products"
        className="flex items-center gap-2 text-blue-600 font-medium mb-8 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to All Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-white shadow-xl rounded-xl">
        {/* Left Side: Image */}
        <div>
          <img src={item.image} alt={item.name} className="w-full h-auto object-cover rounded-xl shadow-md" />
        </div>
        
        {/* --- FIX: Right Side: Details --- */}
        {/* We make this a flex column that takes the full height of the grid cell.
            This allows us to 'justify-between' the content and the button. */}
        <div className="flex flex-col justify-between h-full">
          
          {/* Top section with info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{item.name}</h1>
            <p className="text-lg text-gray-600 mb-6">{item.description}</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Specifications</h3>
            <div className="border-t border-gray-200">
              {item.specs.length === 0 ? (
                <p className="text-gray-500 py-3">No specifications listed for this item.</p>
              ) : (
                item.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-600">{spec.key}</span>
                    <span className="text-gray-800 text-right">{spec.value}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Bottom section with button (will be pushed to the bottom) */}
          <Link to="/contact" className="btn-primary mt-8 w-full text-center">
            Contact for Price & Enquiries
          </Link>
        </div>
      </div>
    </div>
  );
}

