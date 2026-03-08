<p align="center">
  <h1 align="center">💬 ChatApp</h1>
  <p align="center">
    A full-stack real-time chat application built with the MERN stack and Socket.IO.
    <br />
    <a href="#getting-started"><strong>Get Started »</strong></a>
    &nbsp;&middot;&nbsp;
    <a href="#features">Features</a>
    &nbsp;&middot;&nbsp;
    <a href="#api-reference">API Reference</a>
    &nbsp;&middot;&nbsp;
    <a href="#tech-stack">Tech Stack</a>
  </p>
</p>

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Reference](#api-reference)
  - [Authentication](#authentication)
  - [User & Messaging](#user--messaging)
- [WebSocket Events](#websocket-events)
- [Screenshots](#screenshots)
- [Author](#author)
- [License](#license)

---

## About the Project

ChatApp is a modern, real-time messaging platform that enables users to communicate instantly through a clean and intuitive interface. It supports both traditional email/password registration and Google OAuth sign-in. Messages are delivered in real time using WebSockets, with full chat history persistence via MongoDB.

---

## Features

| Category            | Details                                                              |
|---------------------|----------------------------------------------------------------------|
| **Authentication**  | Email/password registration & login with bcrypt hashing              |
| **Google OAuth**    | One-click Google sign-in with server-side ID token verification      |
| **Real-Time Chat**  | Instant messaging powered by Socket.IO                               |
| **Online Presence** | Live online/offline user status tracking                             |
| **Chat History**    | Persistent message storage and retrieval via MongoDB                  |
| **Profile Management** | Update full name, email, and mobile number                       |
| **Secure Sessions** | JWT-based auth stored in HTTP-only cookies (7-day expiry)            |
| **Responsive UI**   | Modern interface built with Tailwind CSS v4 and FlyonUI              |
| **Toast Notifications** | User-friendly feedback via React Hot Toast                      |
| **Request Logging** | HTTP request logging with Morgan                                     |

---

## Tech Stack

### Frontend

| Technology         | Purpose                 |
|--------------------|-------------------------|
| React 19           | UI framework            |
| React Router v7    | Client-side routing     |
| Tailwind CSS v4    | Utility-first styling   |
| FlyonUI            | UI component library    |
| Axios              | HTTP client             |
| Socket.IO Client   | Real-time communication |
| React Hot Toast    | Toast notifications     |
| React Icons        | Icon library            |
| Vite 7             | Build tool & dev server |

### Backend

| Technology          | Purpose                        |
|---------------------|--------------------------------|
| Node.js + Express   | REST API server                |
| MongoDB + Mongoose   | Database & ODM                |
| Socket.IO           | WebSocket server               |
| JSON Web Tokens      | Authentication tokens         |
| bcrypt              | Password hashing               |
| Google Auth Library  | Google OAuth verification      |
| Cloudinary          | Cloud media storage            |
| Multer              | File upload handling           |
| Nodemailer          | Email services                 |
| Morgan              | HTTP request logger            |
| cookie-parser       | Cookie handling                |
| dotenv              | Environment variable management|

---

## Project Structure

```
ChatAppFSD45/
├── client/                     # React frontend
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/             # Images, fonts, etc.
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Top navigation bar
│   │   │   └── chat/
│   │   │       ├── ChatWindow.jsx      # Main chat panel
│   │   │       ├── ContactBar.jsx      # Contact/user list sidebar
│   │   │       └── QuickNavigation.jsx # Quick nav sidebar
│   │   ├── config/
│   │   │   ├── api.jsx         # Axios instance configuration
│   │   │   ├── GoogleAuth.jsx  # Google OAuth client setup
│   │   │   └── WebSocket.jsx   # Socket.IO client instance
│   │   ├── context/
│   │   │   └── AuthContext.jsx # Authentication context provider
│   │   ├── pages/
│   │   │   ├── Chating.jsx     # Chat page layout
│   │   │   ├── Home.jsx        # Home page
│   │   │   ├── Login.jsx       # Login page
│   │   │   ├── Register.jsx    # Registration page
│   │   │   └── UserDashboard.jsx # User profile dashboard
│   │   ├── App.jsx             # Root component with routing
│   │   ├── main.jsx            # Application entry point
│   │   └── index.css           # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                     # Express backend
│   ├── src/
│   │   ├── config/
│   │   │   ├── authToken.js    # JWT token generation & cookie setup
│   │   │   ├── db.js           # MongoDB connection
│   │   │   └── websocket.js    # Socket.IO event handlers
│   │   ├── controllers/
│   │   │   ├── authController.js  # Register, Login, Google Login
│   │   │   └── userController.js  # Users, Profile, Messages
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js   # JWT verification middleware
│   │   │   └── googleMiddleware.js # Google ID token verification
│   │   ├── models/
│   │   │   ├── messageModel.js # Message schema
│   │   │   └── userModel.js    # User schema
│   │   └── routers/
│   │       ├── authRouter.js   # Auth routes
│   │       └── userRouter.js   # User & messaging routes
│   ├── index.js                # Server entry point
│   └── package.json
│
├── Google_Login_Guide.md       # Google OAuth setup guide
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- **MongoDB** (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))
- **Google Cloud Console** project with OAuth 2.0 credentials ([setup guide](Google_Login_Guide.md))

### Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/chatapp
JWT_SECRET=your_jwt_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
NODE_ENV=development
```

> **Note:** Never commit `.env` files to version control. Add them to `.gitignore`.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/ChatAppFSD45.git
   cd ChatAppFSD45
   ```

2. **Install server dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**

   ```bash
   cd ../client
   npm install
   ```

### Running the Application

Open **two terminal windows** from the project root:

**Terminal 1 — Start the backend server:**

```bash
cd server
npm run dev
```

The API server will start on `http://localhost:5000`.

**Terminal 2 — Start the frontend dev server:**

```bash
cd client
npm run dev
```

The React app will be available at `http://localhost:5173`.

---

## API Reference

### Authentication

| Method | Endpoint              | Description                    | Auth Required |
|--------|-----------------------|--------------------------------|:-------------:|
| POST   | `/auth/register`      | Register a new user            | No            |
| POST   | `/auth/login`         | Login with email & password    | No            |
| POST   | `/auth/googleLogin`   | Login with Google OAuth        | No*           |

> *Google login requires a valid Google ID token in the request body.

#### Register

```http
POST /auth/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "mobileNumber": "1234567890",
  "password": "securepassword"
}
```

#### Login

```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword"
}
```

#### Google Login

```http
POST /auth/googleLogin
Content-Type: application/json

{
  "idToken": "google_id_token",
  "name": "John Doe",
  "email": "john@example.com",
  "id": "google_sub_id",
  "imageUrl": "https://..."
}
```

### User & Messaging

| Method | Endpoint                          | Description                       | Auth Required |
|--------|-----------------------------------|-----------------------------------|:-------------:|
| GET    | `/user/allUsers`                  | Get all registered users          | Yes           |
| PUT    | `/user/profile`                   | Update current user's profile     | Yes           |
| GET    | `/user/fetchMessages/:receiverId` | Fetch chat history with a user    | Yes           |
| POST   | `/user/sendMessage/:receiverId`   | Send a message to a user          | Yes           |

> Authenticated routes require a valid JWT cookie (automatically set on login).

---

## WebSocket Events

| Event          | Direction       | Payload                                        | Description                          |
|----------------|-----------------|-------------------------------------------------|--------------------------------------|
| `createPath`   | Client → Server | `userID` (string)                               | Register user as online              |
| `destroyPath`  | Client → Server | `userID` (string)                               | Mark user as offline                 |
| `onlineUsers`  | Server → Client | `{ userID: socketID, ... }`                     | Broadcast current online users       |
| `send`         | Client → Server | `{ senderId, receiverId, message }`             | Send a message                       |
| `receive`      | Server → Client | `{ senderId, receiverId, message, createdAt }`  | Deliver a message to the receiver    |

---

## Screenshots

> _Add screenshots of your application here to showcase the UI._
>
> ```
> ![Login Page](screenshots/login.png)
> ![Chat Interface](screenshots/chat.png)
> ```

---

## Author

**Raj Vardhan**

---

## License

This project is licensed under the **ISC License**. See the `LICENSE` file for details.
