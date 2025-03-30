# Backend - Express & Prisma Authentication API

This backend provides a simple authentication API using **Node.js**, **Express**, and **Prisma** with **PostgreSQL**.

## 🚀 Features
- User login functionality
- Password hashing with bcrypt
- JWT authentication
- Prisma ORM with PostgreSQL
- Secure API with helmet & cors

---

## 📌 Prerequisites
Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [PostgreSQL](https://www.postgresql.org/) (Ensure it's running locally or via Docker)
- [Git](https://git-scm.com/)

---

## 📂 Project Setup

### 1️⃣ Clone the Repository
```sh
git clone <your-repo-url>
cd backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/db1"
JWT_SECRET="your_secret_key"
PORT=5000
```
Replace `USER`, `PASSWORD`, and `db1` with your PostgreSQL credentials.

### 4️⃣ Initialize Prisma & Database
```sh
npx prisma migrate dev --name init
npx prisma generate
```

### 5️⃣ Start the Server
```sh
npm start
```
The backend should now be running on `http://localhost:5000/`

---

## 📌 API Endpoints

### 🔹 User Authentication
#### 🔑 Login
```http
POST /api/users/login
```
**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```
**Response:**
```json
{
  "message": "Login successful",
  "user": { "id": 1, "email": "user@example.com" }
}
```

---

## 🛠 Development
### Run Server with Nodemon
```sh
npm run dev
```

### Prisma Studio (Database Explorer)
```sh
npx prisma studio
```

---

## 🚀 Deployment
1. **Build the Project**
```sh
npm run build
```
2. **Run in Production**
```sh
npm run start
```
