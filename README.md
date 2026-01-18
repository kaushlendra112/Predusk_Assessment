Live Links

Backend API: https://your-backend-url.onrender.com

Frontend: https://your-frontend-url.vercel.app

GitHub Repo: https://github.com/your-username/me-api-playground

Resume: https://your-resume-link
 (Google Drive / Portfolio)

🏗 Architecture
Frontend (HTML / React)
        |
        |  Fetch API (CORS enabled)
        v
Backend (Node.js + Express)
        |
        |  Mongoose ODM
        v
MongoDB Atlas

🛠 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB Atlas, Mongoose

Frontend: Plain HTML + JavaScript (or React)

Hosting:

Backend: Render

Frontend: Vercel / Netlify

DB: MongoDB Atlas

📦 Features

Store single candidate profile (me)

Public REST APIs to:

View profile

Query projects by skill

Search across profile data

Health check endpoint for liveness

Very minimal frontend UI

CORS-enabled hosted API

🗄 Database Schema
Profile Schema (MongoDB)
Profile {
  name: String,
  email: String,

  education: [
    {
      degree: String,
      institution: String,
      year: String
    }
  ],

  skills: [String],

  projects: [
    {
      title: String,
      description: String,
      links: {
        github: String,
        live: String
      }
    }
  ],

  work: [
    {
      company: String,
      role: String,
      duration: String
    }
  ],

  links: {
    github: String,
    linkedin: String,
    portfolio: String
  }
}


⚠️ Only one profile document exists in the database.

🚀 API Endpoints
🔹 Health Check
GET /health


Response:

{ "status": "OK" }

🔹 Get Profile
GET /profile

🔹 Create Profile (one-time)
POST /profile

🔹 Update Profile
PUT /profile

🔹 Query Projects by Skill
GET /projects?skill=react

🔹 Get Top Skills
GET /skills/top

🔹 Global Search
GET /search?q=node


Searches across:

Skills

Project titles

Project descriptions

🧪 Sample curl Requests
curl https://your-backend-url.onrender.com/health

curl https://your-backend-url.onrender.com/profile

curl "https://your-backend-url.onrender.com/projects?skill=javascript"

curl "https://your-backend-url.onrender.com/search?q=node"

🖥 Frontend

The frontend is intentionally very basic and allows:

Viewing my profile

Searching projects by skill

Listing projects dynamically

It communicates with the hosted backend API using fetch() with CORS enabled.

⚙️ Local Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/me-api-playground.git
cd me-api-playground

2️⃣ Install Dependencies
npm install

3️⃣ Environment Variables

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string

4️⃣ Run Server
npm run dev


Server will start at:

http://localhost:5000

🌱 Seed Data

The database is seeded with my real profile data using a seed script.

node seed.js

🚫 Known Limitations

No authentication (intentionally single-profile)

Only one profile document allowed

Basic text search (no ranking or pagination)

Minimal frontend UI

🎯 Why This Project?

This project demonstrates:

REST API design

MongoDB schema modeling

Query endpoints

Full-stack deployment

Clear technical documentation

👤 Author

Kaushlendra Chaurasiya
B.Tech CSE Student

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile

Portfolio: https://your-portfolio-link

✅ Assessment Track: Backend (Track A – Me-API Playground)
✅ Status: Completed & Deployed
