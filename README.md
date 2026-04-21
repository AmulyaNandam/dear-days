🌸 DearDays

DearDays is a full-stack web application designed to help users store, organize, and manage meaningful moments, events, and personal reminders in a simple and intuitive way.

⸻

🚀 Features

* Add and manage important days/events
* Search and filter events easily
* Create, update, and delete entries
* Secure backend with structured database
* Responsive and user-friendly interface

⸻

🛠️ Tech Stack

Frontend

* React.js
* HTML5
* CSS3
* JavaScript

Backend

* Node.js
* Express.js

Database

* MongoDB
* Mongoose

⸻

📁 Project Structure

DearDays/
│
├── frontend/        # React frontend
│   ├── src/
│   └── public/
│
├── backend/         # Node + Express backend
│   ├── models/
│   ├── routes/
│   └── app.js
│
├── .gitignore
└── README.md

⸻

⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/your-username/DearDays.git
cd DearDays

⸻

2. Backend Setup

cd backend
npm install

Create a .env file inside backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Run backend:

npm start

⸻

3. Frontend Setup

cd frontend
npm install
npm start

⸻

🔌 API Endpoints

GET /products        → Fetch all items
POST /products       → Add new item
PUT /products/:id    → Update item
DELETE /products/:id → Delete item

⸻

📌 Future Enhancements

* User authentication (Login/Signup)
* Notifications and reminders
* Calendar integration
* Cloud deployment

⸻

👩‍💻 Author

Amulya Nandam

⸻
