import React, { useState, useEffect } from 'react'; // 1. Import new hooks
import { Link, useParams, Navigate } from 'react-router-dom';
import { catalogData } from '../data/catalogData.js'; // Import the real data
import { ArrowLeft, X, Phone } from 'lucide-react'; // 2. Import new icons


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

// 3. --- NEW POPUP COMPONENT ---
const EnquiryPopup = ({ onClose }) => {
  return (
    // This div positions the popup at the bottom-right of the screen
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 animate-slideInUp">
      <div className="relative max-w-sm rounded-xl bg-white p-6 shadow-2xl border border-gray-200">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute -top-3 -right-3 rounded-full bg-gray-800 p-1.5 text-white shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        
        {/* Content */}
        <div className="flex items-center gap-3 mb-3">
          <Phone className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Have Questions?</h3>
        </div>
        <p className="text-gray-600 mb-5">
          Contact us for any enquiries, questions, or for the latest pricing details on this product.
        </p>
        <Link to="/contact" onClick={onClose} className="btn-primary w-full text-center">
          Contact Us Now
        </Link>
      </div>
    </div>
  );
};

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [showPopup, setShowPopup] = useState(false); // 4. Add state for popup

  // 5. Add timer logic
  useEffect(() => {
    // Set a timer for 10 seconds (10000 milliseconds)
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    // Clean up the timer if the user navigates away before 10s
    return () => clearTimeout(timer);
  }, [productId]); // Re-run timer if the user navigates to a *different* product page

  
  // Find the product
  const item = findProductById(productId);

  if (!productId) {
     return <div className="max-w-5xl mx-auto px-6 py-16"><p>Loading...</p></div>;
  }
  
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
        
        {/* Right Side: Details */}
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

          {/* Bottom section with button */}
          <Link to="/contact" className="btn-primary mt-8 w-full text-center">
            Contact for Price & Enquiries
          </Link>
        </div>
      </div>
      
      {/* 6. Render the popup conditionally */}
      {showPopup && <EnquiryPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

