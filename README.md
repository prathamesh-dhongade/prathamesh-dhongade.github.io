# Prathamesh Dhongade — Portfolio Site

A single-page robotics portfolio: dark theme, lightweight Three.js point-cloud
hero (evokes a LiDAR/SLAM scan), stat counters, filterable project grid, and a
fully responsive layout. No build step — just static HTML/CSS/JS.

## Before you deploy — things to edit

1. **`script.js`** — near the top:
   - `LINKEDIN_URL` — replace with your real LinkedIn profile URL.
   - Each project's `link` — replace the placeholder GitHub URLs
     (marked `// TODO`) with your real repo links.
2. **`assets/`** — add:
   - `Prathamesh_Dhongade_CV.pdf` — your downloadable résumé (linked from the
     nav bar and hero "Download CV" button).
   - A profile photo, if you want to add one (not currently used on the page —
     ask Claude to wire one into the hero/about section if you'd like one).
3. **Contact section** — both WhatsApp numbers are already wired as
   click-to-chat links (`wa.me/...`) rather than plain text, to cut down on
   scraper spam. Swap to plain text in `index.html` under `#contact` if you'd
   rather show the raw numbers.

## Deploy to GitHub Pages

```bash
# 1. Clone the empty hosting repo you created on GitHub
git clone https://github.com/prathameshdhongade999-lgtm/prathameshdhongade999-lgtm.github.io.git
cd prathameshdhongade999-lgtm.github.io

# 2. Copy these three files (+ assets folder) into that repo folder
#    index.html, style.css, script.js, assets/

# 3. Commit and push
git add .
git commit -m "Initial portfolio site"
git push origin main
```

Your site will be live at `https://prathameshdhongade999-lgtm.github.io`
within a minute or two of the push (check the repo's Settings → Pages tab if
it doesn't appear).

## Notes

- The 3D hero uses Three.js from a CDN — it degrades gracefully (hero still
  looks good, just without the particle animation) if the CDN is ever
  unreachable or on very old browsers.
- Respects `prefers-reduced-motion` — the 3D scene renders a single static
  frame instead of animating for users who've asked for reduced motion.
- All sections (skills, experience, projects, education, publications) are
  already filled in from your CV. Projects are filterable by category
  (Navigation & SLAM / Perception / Manipulation / Other).
