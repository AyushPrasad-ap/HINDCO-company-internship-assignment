# 📌 My Review App — HINDCO Screening Assignment

This project was created as part of the **HINDCO / Jobringer.com** screening test. The task required building a **React application** that allows users to submit reviews and store them using **localStorage**, ensuring the comments persist even after the page is refreshed.

---

## ⭐ Project Overview

**My Review App** is a simple yet modern review management interface built using **React (Vite)** and **plain CSS**. It supports:

- Adding user reviews
- Selecting a rating (1–5)
- Adding written comments
- Automatically saving reviews to browser **localStorage**
- Displaying all reviews dynamically
- Showing the date in **dd/mm/yyyy** format
- Fully responsive UI
- Modern glassmorphism design

---

## 🧩 Key Features

### ✔ Add Review

Users can enter:

- Username
- Rating (1–5)
- Comment text

Reviews are immediately displayed in the right panel.

### ✔ Local Storage Persistence

- Reviews persist after page refresh.
- Uses `useEffect` to read and write localStorage.

### ✔ Date Formatting

- Every review is timestamped using a custom formatter.
- Format: `dd/mm/yyyy`.

### ✔ Responsive UI

- Two-column layout on laptop/desktop
- Stacked layout on mobile

### ✔ Modern Glass UI Design

- Frosted glassmorphism cards
- Blurred backgrounds
- Smooth hover animations

---

## 🛠️ Tech Stack

| Component        | Technology                        |
| ---------------- | --------------------------------- |
| Frontend         | React (Vite)                      |
| Styling          | Pure CSS (Glassmorphism)          |
| State Management | React Hooks (useState, useEffect) |
| Data Persistence | Browser localStorage              |

---

## 📁 Project Structure

```
my-review-app/
│   vite.config.js
│   package.json
│   index.html
│
└───src/
    │   App.jsx
    │   main.jsx
    │   ReviewSystem.jsx
    │   ReviewSystem.css
    │   index.css
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Start development server

```
npm run dev
```

Vite will show a local development URL such as:

```
http://localhost:5173
```

Open this in your browser.

---

## 📌 How Local Storage Works

The app uses two `useEffect` hooks:

### 🔄 Load reviews on page load

```javascript
useEffect(() => {
  const saved = localStorage.getItem("reviews");
  if (saved) setReviews(JSON.parse(saved));
}, []);
```

### 🔁 Save reviews whenever they change

```javascript
useEffect(() => {
  localStorage.setItem("reviews", JSON.stringify(reviews));
}, [reviews]);
```

This ensures complete persistence of the review list.

---

## 🎨 UI & Styling

The design uses **custom CSS** implementing:

- Soft gradients
- Transparent glass panes
- Blurred backgrounds (`backdrop-filter`)
- Responsive flex layouts
- Smooth animation transitions

The final UI is clean, professional, and modern.

---

## 📅 Date Formatting (dd/mm/yyyy)

A helper function formats the date for every review:

```javascript
const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};
```

---

## 🧪 Testing the App

To test functionality:

1. Add a review
2. Confirm it appears on the right panel
3. Refresh the page
4. The review must persist (localStorage)

Open Developer Tools → Application → Local Storage to view saved reviews.

---

## 🏁 Conclusion

This project fulfills all the requirements of the HINDCO screening task by providing:

- A working React review submission system
- Persistent storage
- Modern UI
- Responsive layout
- Clean code structure

If extended further, it can support authentication, backend APIs, or advanced UI animations.

---

## 👤 Author

**Ayush Prasad**

Developed as part of the **HINDCO Executive Search Screening Assignment**.
