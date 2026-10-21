# Xinbo Luo — academic website

A simple React + Vite website with About and Research Interests sections.

## Run locally on macOS

Install Node.js 22.12+ first, then run from this folder:

```bash
npm install
npm run dev
```

Open http://127.0.0.1:5173 (or the address printed in Terminal).
Stop the server with Control+C. Changes to source files appear automatically.
If node_modules was copied from Windows, run `npm ci` to reinstall it for your Mac.

## Add your photo and CV

1. In Finder, open the `public` folder in this project.
2. Copy your photo there as `headshot.jpg` and your CV as `xinbo-luo-cv.pdf`.
3. Open `src/profile.js` and change these fields:

```js
headshot: '/headshot.jpg',
cv: '/xinbo-luo-cv.pdf',
```

Use the exact filename and extension: for a PNG, use `/headshot.png`.
Files in `public/` use URLs starting with `/`, without `public/` in the URL.
The photo appears beside your introduction and the CV link appears near your name.
Leave either field empty to hide it. Missing photos are hidden automatically.

## Edit content

Edit `src/profile.js` for your name, role, biography, research interests,
photo, CV, email, and social links. Empty contact fields are hidden.
Edit `src/styles.css` for appearance and `index.html` for the browser title
and search description.

## Production build

```bash
npm run build
npm run preview
```

The build is saved in `dist/`.
