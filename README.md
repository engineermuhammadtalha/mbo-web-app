# MBO Web

Web companion for the MBO (Muslim Business Organisation) Android app. React + Vite + Tailwind, mock data only.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure
- `src/App.jsx`: shell (desktop sidebar, mobile bottom nav)
- `src/pages/`: Home, Feed (Social), Communities, Market (Products, Services, AutoTrade, PropertyTrade), Network, Businesses, Chat, Points (Sunnah Points), Alerts, Profile
- `src/data.js`: mock data, replace with API calls
- `tailwind.config.js`: brand colours and fonts (adjust to match the Android app)

## Deploy to Vercel
1. `git init && git add . && git commit -m "Initial MBO web app"`
2. Create an empty repo on GitHub, then:
   `git remote add origin https://github.com/<you>/mbo-web.git && git branch -M main && git push -u origin main`
3. On vercel.com: Add New > Project > import the repo. Framework preset: Vite (auto-detected). Build `npm run build`, output `dist`. Click Deploy.
4. Every push to `main` redeploys automatically.
