# 🛡️ Next.js Custom Authentication (with NextAuth.js)

This project demonstrates a simple and secure authentication system using **Next.js App Router** and **NextAuth.js** with a **custom UI** (no prebuilt components). It includes protected routes and logout functionality.

---

## 🚀 Features

- ✅ Custom Login Page (built from scratch)
- 🔒 JWT-based authentication with **NextAuth.js**
- 🔐 Protected Dashboard Route
- 🚪 Logout functionality
- 🔧 Built with **App Router** & **TypeScript**

---


---

## 🔐 Authentication Flow

1. **User** visits `/login`
2. Submits **email & password**
3. `signIn()` from `next-auth/react` sends data to `/api/auth/callback/credentials`
4. If credentials match (hardcoded for now), a **JWT session** is created
5. User is redirected to `/dashboard`
6. If unauthorized, user is redirected back to `/login`
7. Logout via `POST /api/auth/signout`

---

## 🧪 Test Credentials


Email: test@example.com  
Password: password123
---


## Workflow Diagram
.I have attached WorkFlow diagram in github File . Please review it.
 



