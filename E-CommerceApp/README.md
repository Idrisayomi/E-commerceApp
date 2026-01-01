This is a multi-page e-commerce website built using HTML, CSS, and JavaScript.
The project focuses on core shopping-cart functionality, user authentication (client-side), and persistent state using localStorage.

At its current stage, products are manually defined in code, and the cart system works fully on the frontend.

🚀 Features Implemented
✅ Product Listing

Products are displayed on the homepage (index.html)

Each product includes:

Image

Name

Price

Quantity controls (+ and −)

Product images are centered and responsive

✅ Cart Functionality

Clicking the + button:

Increases product quantity

Automatically adds the product to the cart

Clicking the − button:

Decreases quantity

Removes product from cart when quantity reaches 0

Cart icon updates in real time to reflect total quantity

Cart data persists after page refresh using localStorage

✅ Cart / Checklist Page

Dedicated cart page (cart.html)

Displays:

Product image

Product name

Price

Quantity controls

Calculated total price

Cart updates are synced with the product page

Fully responsive and modern UI design

✅ Authentication (Frontend Only)

Login and signup system using localStorage

Protected pages redirect unauthenticated users to login

Logged-in user’s first name is displayed:

Welcome, UserName!


Logout functionality implemented

⚠️ Authentication is client-side only (no backend yet)

✅ Theme Support

Light and Dark mode support

CSS variables used for theme colors

Theme toggle button available in the header

Theme persists across pages

🧱 Tech Stack

HTML5

CSS3

Flexbox & Grid

CSS variables

JavaScript (Vanilla JS)

localStorage for:

Cart persistence

User authentication state

Theme preference

📁 Project Structure
project-root/
│
├── index.html          # Product dashboard
├── cart.html           # Cart / checklist page
├── login.html          # Login page
├── signup.html         # Signup page
│
├── css/
│   ├── main.css        # Global styles & theme variables
│   ├── store.css       # Product card styles
│   └── cart.css        # Cart page styles
│
├── js/
│   ├── products.js     # Product data
│   ├── cart.js         # Product page cart logic
│   ├── cartPage.js     # Cart page logic
│   ├── auth.js         # Login & signup logic
│   └── theme.js        # Theme toggle logic
│
├── assets/
│   └── images/
│       └── products/
│
└── README.md

🔒 Data Persistence

This project uses localStorage to persist:

Cart items and quantities

Logged-in user session

Theme preference

This ensures:

Cart does not reset on refresh

User remains logged in

UI state remains consistent

📌 Current Limitations

No backend (no database or API)

Products are manually defined in products.js

Authentication is not secure (frontend only)

No real payment or checkout system yet

🛠️ Planned Improvements (Next Steps)

Admin dashboard for managing products

Backend integration (Node.js / Firebase / Supabase)

Real authentication system

Checkout & order history

Migration to React

🙌 Author

Built by Idris Ayomide
Learning-focused project aimed at understanding real-world frontend architecture and state management.