Swingy Clone (SESU Project)

A Swingy Clone App built with the MERN (MongoDB, Express, React, Node.js) stack.
This project is part of the SESU (Social Engagement Scheduling Utility) initiative, designed to replicate core features of the original Swingy application while adding custom improvements.

🚀 Features

User authentication (JWT-based login/signup)

Real-time interactions using WebSockets

Profile management (upload/update profile data & images)

Interactive UI with React

RESTful APIs with Express & Node.js

MongoDB database integration

Responsive design for mobile & desktop

🛠️ Tech Stack

Frontend: React, React Router, Axios, TailwindCSS/Bootstrap (if used)
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JWT (JSON Web Tokens), bcrypt
Other Tools: Multer (for file uploads), Socket.io (if used), Cloudinary (if used for images)

📂 Project Structure
swingy-clone/
│── client/               # React frontend
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page-level views
│   │   ├── App.js        # Main app file
│   │   └── index.js      # Entry point
│
│── server/               # Express backend
│   ├── controllers/      # API logic
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── middlewares/      # JWT/Auth middlewares
│   ├── server.js         # Entry point
│
│── package.json          # Project config
│── README.md             # Documentation

⚙️ Installation & Setup
1️⃣ Clone the repo
git clone https://github.com/yourusername/swingy-clone.git
cd swingy-clone

2️⃣ Setup Backend
cd server
npm install


Create a .env file inside server/ with:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_URL=your_cloudinary_url   # if used


Run the backend:

npm run dev

3️⃣ Setup Frontend
cd ../client
npm install
npm start

4️⃣ Visit App

Frontend: http://localhost:5173
DashBoard: http://localhost:5174
Backend API: http://localhost:4000

📸 Screenshots

<img width="1898" height="866" alt="image" src="https://github.com/user-attachments/assets/9351530a-1728-44b4-a499-536b52478f68" />
<img width="1897" height="868" alt="image" src="https://github.com/user-attachments/assets/022265ef-aca7-4e55-b738-25c31658f9c2" />


