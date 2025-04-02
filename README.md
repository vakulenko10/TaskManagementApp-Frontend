# ⚡ Task Management App (Electron + React + Vite)

A lightweight and responsive **desktop task manager** built with:

- 🖥️ **Electron** – to run as a native desktop app  
- ⚛️ **React + Vite** – for fast and modern frontend
- 🚀 100% offline capable, no cloud dependencies

---

## 📦 Features

- ✅ Create, update, delete tasks
- 🔍 Search and filter tasks by completion status
- 🪄 Clean UI with dialogs and notifications

---

## 🚀 Getting Started
Make sure backend is running, so that frontend would have connection to the data

### 1. 📥 Clone the repository

```bash
git clone https://github.com/vakulenko10/TaskManagementApp-Frontend.git .

```


### 2. Install dependencies
```
npm install
```

### 3. Insert this line in your .env file
```
VITE_API_URL=http://localhost:3000
```

### 4. Run react dev mode
run this in console
```
npm run dev:react
```
### 5. Build frontend dist-react folder for running electronjs 
run this in console
```
npm run build
```
### 6.Run electron dev mode
run this in console
```
npm run dev:electron
```
### 6. Create dist folder for the project with the exe inside for your OS
from package.json
```
  "dist:mac": "npm run transpile:electron && npm run build && electron-builder --mac --arm64",
  "dist:win": "npm run transpile:electron && npm run build && electron-builder --win --x64",
  "dist:linux": "npm run transpile:electron && npm run build && electron-builder --linux --x64"
```
so just run any of this depending on your OS, for example:
```
npm run dist:win
```
