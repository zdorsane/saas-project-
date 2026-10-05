# Nike Flow — Frontend Developer Live Test

A modern, dark-themed sneaker e-commerce website built with **React**, **Tailwind CSS** and **Vite**.
This repository contains my solution to the **Frontend Developer live test**: four UI changes made on top of the existing project.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)

---

## ✅ Test Tasks

| # | Task | Status | File(s) |
|---|------|:------:|---------|
| 1 | Change the color of the ratings (stars) to yellow | ✅ | `src/components/ProductDisplay.jsx` |
| 2 | Show the products in 3 columns instead of 4 | ✅ | `src/components/ProductList.jsx` |
| 3 | Change the cursor shape (not a circle) | ✅ | `src/main.jsx`, `src/index.css` |
| 4 | Zoom animation and top-to-bottom light-grey mask on product hover | ✅ | `src/components/Item.jsx` |

### 1. Yellow rating stars
The rating uses the `Star` icon from `lucide-react`. I set both `fill` (the inside of the star) and `color` (the outline) to `#FACC15`. The fifth star stays gray to show a 4/5 rating.

```jsx
<Star fill='#FACC15' color='#FACC15' />
```

### 2. Three-column product grid
I changed the grid's large-screen breakpoint from `lg:grid-cols-4` to `lg:grid-cols-3`. The mobile (1 column) and tablet (2 columns) layouts are unchanged.

```jsx
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ...'>
```

### 3. Custom star cursor
The circle cursor came from the `react-mouse-follower` library, so I removed the global `<MouseFollower />` component.
The new cursor is a yellow star: an SVG based on the [Feather Icons](https://feathericons.com) `star` icon, which is the icon set `lucide-react` is based on.
I encoded the SVG with [URL-encoder for SVG](https://yoksel.github.io/url-encoder/) and put it directly in CSS as a data URL, so the project needs no extra image file.

```css
* {
  cursor: url("data:image/svg+xml,...") 14 14, auto !important;
}
```

- `14 14` puts the click point at the center of the star.
- `auto` is the fallback cursor.
- `!important` overrides Tailwind's `cursor-pointer` utilities.

### 4. Hover zoom and top-to-bottom mask
The product card already has the Tailwind `group` class, so I could use `group-hover` utilities:
- **Zoom:** the image scales to 110% (`group-hover:scale-110`) with a 500ms transition. `overflow-hidden` keeps it inside the card.
- **Mask:** an absolutely positioned light-grey layer (`bg-gray-300/40`) starts at `scale-y-0` with `origin-top`. On hover it grows to `scale-y-100`, so it slides down from top to bottom. `pointer-events-none` keeps the product link clickable.

I also removed a class with a typo (`grup-hover:opacity-75`), which had no effect.

---

## ✨ Features

- 🛍️ **E-commerce flow**: product browsing, category filtering (Men / Women / Kids) and cart management
- 🎨 **Dark theme** with gradient background
- ✨ **Animations** with Framer Motion and Tailwind transitions
- 📱 **Fully responsive** layout
- 🗺️ **Contact page** with a form and Google Maps

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI library |
| Tailwind CSS 3 | Styling |
| Vite 6 | Dev server and build tool |
| React Router 7 | Routing |
| Framer Motion | Animations |
| lucide-react / react-icons | Icons |
| Vercel | Deployment |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open `http://localhost:5173`.

```bash
# Production build (output in /dist)
npm run build
```

## 📁 Project Structure

```
src/
├── components/   # Reusable UI components (Item, ProductList, ProductDisplay, ...)
├── Pages/        # Page components (Home, Cart, Contact)
├── context/      # ShopContext: cart state
├── Utils/        # Product data
├── assets/       # Images
├── App.jsx       # Routes and layout
└── index.css     # Tailwind layers and custom styles
```

## 📄 License

This project is for educational and portfolio purposes.
