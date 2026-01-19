Live Links

Backend API: https://kaushlendra-profile.onrender.com

Frontend: https://kaushlendraprofile.netlify.app

GitHub Repo: https://github.com/kaushlendra112/Predusk_Assessment

Resume: https://drive.google.com/file/d/1ZfDqvtspCVz4PV7wIXadk9BNyBHaTOiG/view?usp=sharing



Architecture
Frontend (React.js + Tailwind CSS)
        |
        |  Axios API (CORS enabled)
        v
Backend (Node.js + Express)
        |
        |  Mongoose ODM
        v
MongoDB Atlas



Tech Stack

Backend: Node.js, Express.js

Database: MongoDB Atlas, Mongoose

Frontend: React.js + Tailwind CSS



Hosting:

Backend: Render

Frontend: Vercel 

DB: MongoDB Atlas



Features :
Health check endpoint for liveness

Store single candidate profile (me)

Public REST APIs to:

View, Update profile

Update Skills

Add, Edit, Delete Projects

Search project by used Skills

Add, Edit, Delete Work Experience

Very minimal frontend UI

CORS-enabled hosted API



Database Schema

Profile Schema (MongoDB)
Profile 
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },
        education: [
            {
                degree: String,
                institution: String,
                year: String
            }
        ],
        skills: [
            {
                type: String,
                lowercase: true,
                trim: true
            }
        ],
        projects: [
            {
                title: String,
                description: String,
                links: {
                    github: String,
                    live: String
                },
                skills: {
                    type: String
                },
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


API Base URL : https://kaushlendra-profile.onrender.com

API Endpoints :

🔹 Health Check
GET /health
Response:
{ 
  "status": "OK"
  "success": "true" 
}

🔹 Get Profile
GET /api/profile

🔹 Create Profile (one-time)
POST /api/profile

🔹 Update Profile
PUT /api/profile

🔹 Add Project
POST /api/projects

🔹 Update Project
PUT /api/projects/:projectId

🔹 Delete Project
DELETE /api/projects/:projectId

🔹 Search Project By Skills
GET /api/search/skills?skill=react

🔹 Get Top Skills
GET /skills/top

🔹 Update Skills
PUT /skills

🔹 Add work Experience
POST /api/experience

🔹 Update Project
PUT /api/experience/:experienceId

🔹 Delete Project
DELETE /api/experience/:experienceId



⚙️ Steps for Local Setup -

1️⃣ Clone Repository

git clone https://github.com/kaushlendra112/Predusk_Assessment.git

cd Predusk_Assessment

2️⃣ Install Dependencies

cd backend

npm install

cd ..

cd frontend

npm install


3️⃣ Environment Variables

Create .env file in backend root folder :

PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string


4️⃣ Run Server

backend :

npm run start

frontend : 

npm run dev

5️⃣ Create Profile (one-time)

POST /api/profile


👤 Author

Kaushlendra Chaurasiya

B.Tech CSE Student at NIT Delhi


GitHub: https://github.com/kaushlendra112

LinkedIn: https://www.linkedin.com/in/kaushlendra-chaurasiya-bb32aa2b8/

LeetCode: https://leetcode.com/u/Kkc_2024/


✅ Assessment Track: Backend (Track A – Me-API Playground)

✅ Status: Completed & Deployed
