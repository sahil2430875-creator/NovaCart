# NovaCart — Login/Register backend

Your uploaded NovaCart HTML/CSS/JS pages are included, with login and registration connected to an Express API and MongoDB.

## Features
- Register users in MongoDB
- Login with email and password
- Passwords hashed with bcrypt
- JWT access token (7 days) and `/api/auth/me`
- Basic auth rate limiting, Helmet headers, input validation
- Existing storefront pages retained

## Requirements
Node.js 18+ and a MongoDB Atlas database.

## Windows setup
1. Extract this ZIP.
2. Open the extracted folder in VS Code.
3. In the terminal run `npm install`.
4. Copy the environment template: `Copy-Item .env.example .env`
5. Open `.env` and replace `MONGODB_URI` with your MongoDB Atlas connection string. Replace `JWT_SECRET` with a long random secret (32+ characters). Do not share or upload `.env`.
6. Start the backend: `npm run dev`.
7. Run the frontend using VS Code Live Server on port 5500 (open `index.html` with Live Server). Do not open the page using `file://`.
8. Open `login.html` or `register.html`. API defaults to `http://localhost:5000/api`.

Health check: `http://localhost:5000/api/health`

## API endpoints
- `POST /api/auth/register` body: `{ "name": "Example User", "email": "user@example.com", "password": "minimum8chars" }`
- `POST /api/auth/login` body: `{ "email": "user@example.com", "password": "minimum8chars" }`
- `GET /api/auth/me` header: `Authorization: Bearer <token>`

## Deploy notes
For Render, set `MONGODB_URI`, `JWT_SECRET`, `CLIENT_ORIGIN` and `PORT` (Render provides `PORT`). Set `CLIENT_ORIGIN` to your deployed frontend origin, e.g. `https://your-site.netlify.app`. Change `auth.js` `API_BASE` from localhost to your deployed Render API URL before deploying the frontend.

## Important
This ZIP implements backend login and registration only; product/order/admin APIs are not included. Checkout/payment remains demo functionality. Do not enter real payment-card data.
