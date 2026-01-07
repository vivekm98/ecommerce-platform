🛒 E-Market – Full Stack E-Commerce Application

A full-stack E-Commerce web application built using Django REST Framework for the backend and React + Bootstrap for the frontend.
The platform supports user authentication, product browsing, cart management, and order placement.

✨ Features
🔐 Authentication

User Registration & Login

JWT Authentication (Access & Refresh Tokens)

Protected Routes (Frontend & Backend)

🛍️ Products

Category & Sub-Category based product listing

Product images and pricing

Responsive product cards

🛒 Cart

Add products to cart

Increase / decrease quantity

Prevent quantity greater than stock

Remove items from cart

Select specific items for ordering

📦 Orders

Place orders for selected cart items only

Order form with delivery details

View order history

Order detail page

🎨 UI / UX

Responsive design using Bootstrap

Sticky navigation bar

Clean and professional color theme

🧑‍💻 Tech Stack
Backend

Django

Django REST Framework

JWT Authentication

SQLite (can be replaced with PostgreSQL)

Frontend

React

React Router

Axios

Bootstrap 5

📂 Project Structure (Simplified)
backend/
 ├── products/
 ├── cart/
 ├── orders/
 ├── users/
 ├── requirements.txt
 └── manage.py

frontend/
 ├── components/
 ├── assets/
 ├── axiosinstance.js
 └── App.jsx

⚙️ Installation & Setup
🔹 Backend Setup
git clone https://github.com/your-username/your-repo-name.git
cd backend
python -m venv env
env\Scripts\activate   # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver


Backend runs on:

http://127.0.0.1:8000/

🔹 Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173/

🔑 API Endpoints (Sample)
Feature	Endpoint
Login	/api/v1/token/
Products	/api/v1/products/
Cart Items	/api/v1/cart/items/
Add to Cart	/api/v1/cart/items/add/
Place Order	/api/v1/place-order/
My Orders	/api/v1/orders/

## 📸 Screenshots

### 🏠 Home Page
![Home Page](screenshots/dashboard.png)

### 🛍️ category Page
![Products Page](screenshots/category.png)

### 🛒 Cart Page
![Cart Page](screenshots/cart.png)

### 📝 Login Form
![Order Form](screenshots/login.png)





(Add screenshots here for better impact on GitHub & LinkedIn)

🎯 Future Improvements

Online payment integration

Product reviews & ratings

Admin dashboard analytics

Order cancellation & returns

👨‍💻 Author

Vivek More
Python / Django Backend Developer
🔗 GitHub: https://github.com/vivekm98

🔗 Email: vivekmore45678@gmail.com 
