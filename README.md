<div align="center">

# ✨ Nova Studio ✨
### *Crafting Digital Experiences That Inspire and Perform*

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Material UI](https://img.shields.io/badge/Material--UI-9.1-blue?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![Framer Motion](https://img.shields.io/badge/Framer--Motion-12-purple?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Prisma](https://img.shields.io/badge/Prisma-7.8-1A202C?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)

---

**Nova Studio** is a premium, modern digital agency web application. Built with Next.js and styled using a customized Material UI theme featuring deep forest green (`#1c3a2e`) and gold (`#b8924a`) accents, it delivers an immersive and elegant visual identity.

[Live Demo](https://nova-studio-fe.vercel.app) • [Backend API](https://nova-studio-api-vyx5.onrender.com/) • [Admin Login](https://nova-studio-fe.vercel.app/admin/login)

</div>

---

## 🔑 Admin Access
To access the secure admin features, log in via the [Admin Login Page](https://nova-studio-fe.vercel.app/admin/login):
*   **Username:** `admin`
*   **Password:** `admin123`

---

## 🎨 Design Theme
Nova Studio leverages a luxury color palette designed to feel high-end, premium, and sophisticated:
*   **Primary Accent:** Deep Forest Green (`#1c3a2e`)
*   **Secondary Accent:** Warm Gold (`#b8924a`)
*   **Backgrounds:** Dark Emerald Paper (`#1f3d30` / `#1a3329`)
*   **Typography:** Elegant `Playfair Display` serif headlines combined with clean sans-serif body fonts.

---

## 🚀 Key Features

*   **✨ Seamless Animations:** Powered by `framer-motion` for elegant entry animations on page sections, cards, and buttons.
*   **💼 Dynamic Portfolio:** Fully dynamic work showcases fetched in real-time from the backend.
*   **🛠️ Service Directory:** Showcases core capabilities from the centralized database.
*   **📈 Live Counters:** Stats counter powered by `react-countup` highlighting agency accomplishments.
*   **📩 Interactive Contact Panel:** A contact form with frontend validation and automated email/message submission.
*   **🔒 Admin Dashboard (`/admin`):** Secure dashboard using JWT auth to manage incoming customer submissions and update portfolio items.
*   **📊 Integrated Analytics:** Automatically monitors and pushes page visit analytics to the API.

---

## 🛠️ Tech Stack

*   **Frontend Framework:** Next.js (App Router)
*   **UI Library:** Material UI (MUI v9) & Emotion
*   **Animations:** Framer Motion
*   **Icons & Counter:** MUI Icons & React CountUp
*   **Database Config:** Prisma Client (prepared for database integrations)

---

## 📁 Project Structure

```bash
nova-studio/
├── app/                  # Next.js App Router root
│   ├── admin/            # Secure administration panel
│   │   ├── login/        # Admin sign-in screen
│   │   └── page.js       # Admin panel console (leads & project manager)
│   ├── components/       # Reusable layout sections
│   │   ├── Contact.js    # Lead generation form
│   │   ├── Landing.js    # Hero splash section
│   │   ├── Navbar.js     # Top navigation
│   │   ├── Portfolio.js  # Project grid component
│   │   ├── Services.js   # Agency core services showcase
│   │   └── Stats.js      # Animated counters component
│   ├── globals.css       # Global styles & font overrides
│   ├── layout.js         # HTML core container & Theme provider wrapper
│   └── theme.js          # Material UI custom theme variables
├── public/               # Static assets & image resources
├── .env.local            # Environment configuration
└── package.json          # Dependency manifest
```

---

## ⚙️ Setup & Installation

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed. You will also need the backend API service running (usually on port `8000`).

### 2. Installation
Clone this repository and install the dependencies:
```bash
git clone https://github.com/Shahazadi-Shaguftha-Syed/Nova-Studio-FE.git
cd nova-studio
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory and define the backend API URL:
```env
NEXT_PUBLIC_API_URL=https://nova-studio-api-vyx5.onrender.com
# For local offline development:
# NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 4. Running Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 5. Build for Production
To build the static HTML and assets for production:
```bash
npm run build
npm start
```
