# 📝 Notes Application with JWT Authentication

A simple REST API for a Notes Application built using **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**.

This project allows users to:

* Register users
* Generate JWT tokens
* Create notes
* Read notes
* Update notes
* Delete notes
* Protect routes using authentication

---

# 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* Cookie Parser
* Dotenv

---

# 📁 Project Structure

```bash
notes-jwt/
│
├── build-me/
│   ├── src/
│   │   ├── app.js
│   │   ├── models/
│   │   └── config/
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
cd notes-jwt/build-me
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Create `.env` File

Create a `.env` file inside the `build-me` folder.

```env
PORT=3003
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 4️⃣ Start the Server

```bash
npm start
```

or

```bash
node server.js
```

---

# 🔐 Authentication

After user registration, a JWT token is generated and stored in cookies.

Protected routes use this token for authentication.

---

# 📌 API Endpoints

## 👤 Register User

### POST `/api/auth/register`

### Request Body

```json
{
  "name": "Dishant",
  "email": "dishant@gmail.com"
}
```

### Response

```json
{
  "message": "User registered successfully",
  "user": {}
}
```

---

# 📝 Create Note

### POST `/api/notes`

### Request Body

```json
{
  "title": "Learning JWT",
  "description": "JWT authentication is very useful for secure APIs"
}
```

### Response

```json
{
  "message": "Note created successfully",
  "note": {}
}
```

---

# 📖 Get All Notes

### GET `/api/notes`

### Response

```json
{
  "note": []
}
```

---

# ✏️ Update Note

### PATCH `/api/notes/:id`

### Request Body

```json
{
  "description": "Updated note description"
}
```

### Response

```json
{
  "message": "Note update successfully",
  "note": {}
}
```

---

# ❌ Delete Note

### DELETE `/api/notes/:id`

### Response

```json
{
  "message": "Note deleted successfully"
}
```

---

# ✅ Features

* JWT Authentication
* REST API
* MongoDB Integration
* CRUD Operations
* Input Validation
* Cookie-based Authentication
* Error Handling

---

