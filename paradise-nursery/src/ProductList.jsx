import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import Navbar from './Navbar.jsx';

// Small inline SVG "photo" so thumbnails always load (no external image dependency).
// Replace `image` with a real photo URL if you like.
const makeImage = (emoji, bg) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="220">` +
      `<rect width="100%" height="100%" fill="${bg}"/>` +
      `<text x="50%" y="55%" font-size="110" text-anchor="middle" dominant-baseline="middle">${emoji}</text>` +
    `</svg>`
  );

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: makeImage('🌿', '#d7f0d2'), description: 'Produces oxygen at night and removes toxins from the air.', cost: 15 },
      { name: 'Spider Plant', image: makeImage('🍃', '#e2f4d0'), description: 'Absorbs formaldehyde and xylene; very easy to grow.', cost: 12 },
      { name: 'Peace Lily', image: makeImage('🌼', '#f1f7e4'), description: 'Removes mold spores and purifies the air with elegant white blooms.', cost: 18 },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', image: makeImage('💜', '#e8dcf5'), description: 'Calming scent that promotes relaxation and better sleep.', cost: 20 },
      { name: 'Jasmine', image: makeImage('🌸', '#fde7ef'), description: 'Sweet floral fragrance that lifts the mood.', cost: 18 },
      { name: 'Mint', image: makeImage('🌱', '#d9f2e3'), description: 'Refreshing aroma, great for teas and cooking.', cost: 10 },
    ],
  },
  {
    category: 'Succulents and Cacti',
    plants: [
      { name: 'Aloe Vera', image: makeImage('🪴', '#dcefd6'), description: 'Soothing gel for skin; needs very little water.', cost: 14 },
      { name: 'Jade Plant', image: makeImage('☘️', '#d3ecd9'), description: 'Symbol of good luck; long-living and low maintenance.', cost: 16 },
      { name: 'Barrel Cactus', image: makeImage('🌵', '#f7ecd0'), description: 'Hardy desert plant that loves bright sunlight.', cost: 22 },
    ],
  },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
  };

  return (
    <div>
      <Navbar onNavigate={onNavigate} />
      <div className="product-page">
        {plantsArray.map((group) => (
          <div key={group.category}>
            <div className="category-wrap">
              <h2 className="category-title">{group.category}</h2>
            </div>
            <div className="product-grid">
              {group.plants.map((plant) => (
                <div className="product-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p className="description">{plant.description}</p>
                  <p className="price">${plant.cost}</p>
                  <button
                    className="add-to-cart-button"
                    disabled={isInCart(plant.name)}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
