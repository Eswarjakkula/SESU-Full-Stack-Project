[Project_Report.pdf](https://github.com/user-attachments/files/22201192/Project_Report.pdf)Swingy Clone (SESU Project)

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
<img width="599" height="786" alt="Screenshot 2025-08-26 105703" src="https://github.com/user-attachments/assets/b878ed63-bd2c-4435-be4a-134eb744111b" />
<img width="1900" height="908" alt="Screenshot 2025-09-08 094612" src="https://github.com/user-attachments/assets/b7563188-5e34-44f1-99cd-569bc1b53800" />
<img width="1898" height="902" alt="Screenshot 2025-09-08 094630" src="https://github.com/user-attachments/assets/a8547e05-501d-4f76-964c-405c3572857c" />
<img width="1897" height="911" alt="Screenshot 2025-09-08 095847" src="https://github.com/user-attachments/assets/b6f1a9f7-5c99-47f6-a3c2-5914fa65c7cb" />
<img width="1898" height="913" alt="Screenshot 2025-09-08 094836" src="https://github.com/user-attachments/assets/84c81f9a-434e-4bcf-b754-681132a2f335" />
<img width="1900" height="910" alt="Screenshot 2025-09-08 094925" src="https://github.com/user-attachments/assets/23dda3d0-1df6-4c60-b0f4-479ee73e19cf" />
<img width="1900" height="908" alt="Screenshot 2025-09-08 094938" src="https://github.com/user-attachments/assets/542b2c9a-a776-427a-a8e0-45c9f856c0eb" />

Mobile View Images 
<img width="356" height="799" alt="Screenshot 2025-09-08 100127" src="https://github.com/user-attachments/assets/6178caae-72b3-46bb-a4f6-c829b021b8b7" />

<img width="361" height="798" alt="Screenshot 2025-09-08 100149" src="https://github.com/user-attachments/assets/eea96e28-808d-412b-aca7-1737d9e6bfed" />

<img width="357" height="801" alt="Screenshot 2025-09-08 100203" src="https://github.com/user-attachments/assets/7c9d11ff-3246-43e2-8596-bda8bb03e21d" />




