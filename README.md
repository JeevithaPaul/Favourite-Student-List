# ⭐ Favourite Student List

A simple and interactive **Favourite Student List** application built using **React JS**.

This project demonstrates **React Router, Context API, useContext, useState, conditional rendering, reusable components, and array methods**. Tailwind CSS is used for styling.

---

## 📌 Project Overview

The application allows users to:

- View a list of students
- Add students to their favourite list
- Prevent duplicate students
- View favourite students on a separate page
- Remove students from favourites
- Navigate between pages without refreshing

The project uses **React Context API** to manage favourite students globally.

---

## 🚀 Features

### 👨‍🎓 Student List

- Displays students dynamically
- Shows student name and roll number
- Add students to favourites

### ❤️ Favourite Students

- View all favourite students
- Remove students from favourites
- Prevent duplicate favourites
- Shows an empty message when there are no favourites

### 🔄 Navigation

- Student List page
- Favourite Students page
- Navigation using React Router and `Link`

### 🌐 Global State Management

Uses:

- `createContext()`
- `useContext()`
- `useState()`

to manage favourite students globally.

### 🎨 Styling

- Tailwind CSS
- Responsive layout
- Clean and simple UI

---

## 🛠️ Technologies Used

- React JS
- JavaScript
- React Router DOM
- Context API
- Tailwind CSS
- HTML
- Git & GitHub

---

## 📂 Project Structure

```text
favourite-student-list
│
├── public
│
├── src
│   ├── Components
│   │   └── StudentItem.jsx
│   │
│   ├── Context
│   │   └── StudentContext.js
│   │
│   ├── Pages
│   │   ├── StudentList.js
│   │   └── FavouriteStudents.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.css
│   └── index.js
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md













