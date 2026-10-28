# Paradise Nursery

**Project name:** Paradise Nursery – Online Houseplant Shopping Cart

Paradise Nursery is a React + Redux Toolkit shopping cart application for an online plant shop.
Visitors land on a welcome page, click **Get Started** to browse houseplants grouped by category,
add plants to the cart, and manage quantities in the shopping cart.

## Features
- Landing page with company name, background image and a "Get Started" button
- About Us section describing the company
- Product listing: 9 unique houseplants in 3 categories (Air Purifying, Aromatic, Succulents)
- "Add to Cart" button per plant (disabled once added)
- Navbar with Home, Plants and Cart links plus a live cart item count
- Shopping cart page: thumbnail, name, unit price, +/- quantity buttons, delete button,
  per-item subtotal, total cart amount, Checkout ("Coming Soon") and Continue Shopping buttons
- State managed with Redux Toolkit (`addItem`, `removeItem`, `updateQuantity`)

## Tech stack
React 18, Redux Toolkit, React-Redux, Vite

## Run locally
```bash
npm install
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

## Project structure
```
src/
  main.jsx        entry point (Redux Provider)
  store.js        Redux store
  CartSlice.jsx   cart slice: addItem, removeItem, updateQuantity
  App.jsx         landing page + simple view navigation
  App.css         landing page styles (background image)
  AboutUs.jsx     company details
  Navbar.jsx      navigation bar with cart count
  ProductList.jsx plant listing page
  CartItem.jsx    shopping cart page
```
