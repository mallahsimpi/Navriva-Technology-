# NAVRIVA TECHNOLOGY — website + enquiry backend

Premium responsive marketing website built with Next.js App Router, TypeScript and Tailwind CSS v4, with a separate Express + MongoDB API and a protected admin inbox.

## 1. Requirements
- Node.js 20+
- MongoDB local instance or MongoDB Atlas database

## 2. Frontend setup
From this project folder:
```bash
npm install
cp .env.local.example .env.local
npm run dev
```
Open http://localhost:3000.

## 3. Backend setup
Open a second terminal:
```bash
cd backend
npm install
cp .env.example .env
```
Edit `backend/.env`: set your MongoDB connection string, a random JWT secret of at least 32 characters, admin email and a strong admin password (12+ characters). Keep `.env` private and never commit it.

Start the API:
```bash
npm run dev
```
In another terminal, from the project root:
```bash
npm run backend:seed-admin
```
The seed command creates or updates the admin account using `ADMIN_EMAIL` and `ADMIN_PASSWORD` from `backend/.env`.

## 4. Environment values
- `.env.local.example` controls the browser-to-API URL and optional WhatsApp number.
- `backend/.env.example` documents server settings. Copy it to `backend/.env` and fill real values.
- `CLIENT_ORIGIN` must match the deployed frontend origin.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` must be the WhatsApp number in international digits only (country code + number, no plus sign or spaces).

## 5. Features
- Public contact form saves name, email, optional phone, service and message in MongoDB.
- Express API validates inputs, applies request rate limits and security headers.
- Admin login uses bcrypt password hashes and JWT authentication.
- Admin inbox lists enquiries, changes status (new/contacted/closed), and deletes records.
- Admin page: http://localhost:3000/admin
- Optional floating WhatsApp CTA appears only after configuring a number.

## 6. API endpoints
- `GET /api/health` — health check
- `POST /api/enquiries` — public enquiry submission
- `POST /api/auth/login` — admin login
- `GET /api/enquiries` — admin-only list
- `PATCH /api/enquiries/:id/status` — admin-only status update
- `DELETE /api/enquiries/:id` — admin-only delete

## Before going live
- Add real company email, phone and WhatsApp details.
- Configure HTTPS, production MongoDB, a strong unique JWT secret and production CORS origin.
- Add transactional email notifications if you want enquiry alerts by email; currently enquiries are stored in MongoDB and shown in the admin inbox.
- For stronger production security, consider HttpOnly secure cookies, CAPTCHA, audit logs and backups.
- Replace generated logo concept artwork with approved vector logo files and verify trademark/domain availability before public launch.
