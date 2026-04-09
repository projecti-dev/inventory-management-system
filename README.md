# IT Asset Inventory Management System

A full-stack web application for managing internal IT assets — tracking equipment, assignments, and maintenance status across an organization.

---

## Tech Stack

**Frontend**

- React 18 + TypeScript
- Vite
- Material UI (MUI v6)
- React Router DOM

**Backend** _(coming soon)_

- Node.js + Express
- PostgreSQL
- JWT Authentication

---

## Features

- 📊 Dashboard with asset overview and stats
- 📋 Asset list with search and filtering
- ➕ Add, edit, and delete assets
- 👤 Assign assets to employees
- 🔖 Track status — Assigned, Available, Maintenance
- 🔐 Login and signup with JWT auth _(in progress)_
- 🏠 Public landing page

---

## Project Structure

inventory-management-system/
├── client/ # React + TypeScript frontend
│ └── src/
│ ├── components/ # Reusable UI components
│ ├── constants/ # Static data and config
│ ├── pages/ # Page-level components
│ ├── types/ # TypeScript interfaces
│ └── theme.ts # MUI theme
│
└── server/ # Node.js + Express backend
├── controllers/
├── middleware/
├── models/
└── routes/

---

## Getting Started

### Prerequisites

- Node.js v18+
- Git

### Run the frontend locally

```bash
git clone https://github.com/projecti-dev/inventory-management-system.git
cd inventory-management-system/client
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Branch Strategy

| Branch      | Purpose                        |
| ----------- | ------------------------------ |
| `main`      | Stable, production-ready code  |
| `dev`       | Integration branch for testing |
| `feature/*` | Individual feature development |

---

## Roadmap

- [x] Project setup and folder structure
- [x] React + TypeScript + MUI frontend scaffold
- [x] Dashboard, Assets, and AddAsset pages
- [x] Reusable component architecture
- [ ] Landing page, Login, and Signup
- [ ] PostgreSQL database schema
- [ ] REST API with Express
- [ ] JWT authentication
- [ ] Asset detail and edit pages
- [ ] Search, filters, and CSV export

---

## License

This project is private and not licensed for public use.
