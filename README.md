# FashionGeek — Full-Stack Fashion E-Commerce Platform

FashionGeek is a full-stack fashion e-commerce platform built using the MERN stack. It provides a complete online shopping experience with user authentication, product browsing, filtering, cart management, order placement, online payments, and a dedicated admin panel for managing products and orders.

## Live Demo

### Customer Website

https://fashiongeek.vercel.app/

### Admin Panel

https://fashiongeek-admin.vercel.app/

---

## Features

### User Features

* User registration and login
* JWT-based authentication
* Secure user sessions
* Browse fashion products
* Product category filtering
* Product search and discovery
* Product details and size selection
* Add and remove products from cart
* Update cart quantities
* Place orders
* Online payment integration with Razorpay
* View order history
* Responsive user interface

### Admin Features

* Admin authentication
* Add new products
* Upload product images
* Manage existing products
* Delete products
* View customer orders
* Update order status
* Dedicated admin dashboard

### Backend Features

* RESTful API architecture
* JWT authentication and authorization
* MongoDB database integration
* Mongoose ODM
* Cloudinary image storage
* Razorpay payment integration
* Express.js API routes
* Middleware-based authentication
* Error handling and API validation
* CORS configuration

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Axios
* React Toastify

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Cloudinary
* Razorpay

### Tools and Deployment

* Git
* GitHub
* VS Code
* Postman
* Vercel

---

## Project Structure

```text
FashionGeek
│
├── Frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## Application Architecture

```text
                    Customer
                       |
                       v
               React Frontend
               Vite + Tailwind
                       |
                   Axios API
                       |
                       v
               Express Backend
                       |
          +------------+------------+
          |            |            |
          v            v            v
       MongoDB     Cloudinary    Razorpay
       Database      Images       Payments
```

---

## Authentication

FashionGeek uses JWT-based authentication to protect user and admin resources.

```text
User
 |
 v
Login / Register
 |
 v
Backend Authentication
 |
 v
JWT Authentication
 |
 v
Authenticated Request
 |
 v
Protected API Route
```

Protected operations include:

* Cart management
* Order creation
* Order history
* Admin operations
* Product management

---

## Payment Integration

The application integrates Razorpay for online payments.

```text
Customer
   |
   v
Checkout
   |
   v
Create Order
   |
   v
Razorpay Payment
   |
   v
Payment Verification
   |
   v
Order Confirmation
```

---

## Image Management

Product images are uploaded and stored using Cloudinary. The backend stores and works with the resulting image URLs rather than storing image files directly on the application server.

---

## API Routes

### User Routes

```text
/api/user
```

Handles:

* User registration
* User login
* User logout
* Authentication

### Product Routes

```text
/api/product
```

Handles:

* Get products
* Add products
* Delete products
* Product management
* Product filtering

### Cart Routes

```text
/api/cart
```

Handles:

* Add to cart
* Update cart
* Remove from cart
* Retrieve cart

### Order Routes

```text
/api/order
```

Handles:

* Create orders
* Retrieve orders
* Order history
* Admin order management
* Payment processing

---

## Responsive Design

FashionGeek provides a responsive shopping experience across:

* Desktop
* Tablet
* Mobile

The frontend uses Tailwind CSS to create responsive layouts and reusable UI components.

---

## Security

The project implements:

* JWT-based authentication
* Protected API routes
* Admin authorization
* Backend request validation
* Secure payment verification
* Environment-based configuration for sensitive credentials
* Separation of frontend and backend responsibilities

---

## What I Learned

Through this project, I gained practical experience in:

* Building a complete MERN stack application
* Designing REST APIs
* React component architecture
* State management using React Context
* JWT authentication and authorization
* MongoDB database operations
* Mongoose schemas and models
* Cloudinary image uploads
* Razorpay payment integration
* API testing with Postman
* Git and GitHub workflow
* Full-stack deployment using Vercel
* Connecting frontend and backend in a production environment

---

## Future Improvements

* Wishlist functionality
* Product reviews and ratings
* Advanced product search
* Pagination
* Coupon and discount system
* Improved admin analytics dashboard
* Email notifications
* Inventory management
* Order tracking
* Enhanced security and validation

---

## Developer

**Nitish Yadav**

B.Tech CSE | Full-Stack Developer

GitHub: https://github.com/nitish-x18

LinkedIn: https://www.linkedin.com/in/nitish-yadav-x18/

---

## Project Highlights

```text
MERN Stack
|
+-- React + Vite
+-- Tailwind CSS
+-- Node.js + Express
+-- MongoDB + Mongoose
+-- JWT Authentication
+-- Cloudinary
+-- Razorpay
+-- REST APIs
+-- Postman
+-- Vercel Deployment
```
