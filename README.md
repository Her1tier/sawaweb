# SAWA Web

SAWA Studio web platform (Next.js frontend + FastAPI backend + PostgreSQL).

## Project structure

```
sawaweb/
├── frontend/   # Next.js app
├── backend/    # FastAPI app
└── ec2/        # deployment notes
```

## Local setup (no Docker)

### 1) PostgreSQL (via pgAdmin)

1. Install PostgreSQL + pgAdmin.
2. In pgAdmin, create a database (example: `sawaweb`).
3. Ensure your PostgreSQL user and password are known (example: `postgres` / `postgres`).

### 2) Backend (FastAPI)

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

Create `backend/.env`:

```env
PROJECT_NAME=SAWA Web Admin Dashboard
DATABASE_URL=postgresql+asyncpg://postgres:postgres@localhost:5432/sawaweb
SECRET_KEY=change_me
```

Run backend:

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Backend URL: [http://localhost:8000](http://localhost:8000)

### 3) Frontend (Next.js)

```bash
cd frontend
npm install
```

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Run frontend:

```bash
npm run dev
```

Frontend URL: [http://localhost:3000](http://localhost:3000)
