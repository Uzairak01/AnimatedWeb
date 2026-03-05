# AnimatedWeb

# 🎬 Live Wallpapers

A personal project to browse and upload live wallpaper videos and images. Built with just HTML, CSS, and JavaScript — no frameworks needed!

---

## 📁 Files

```
live-wallpapers/
├── index.html       # The main page
├── upload.html      # The upload page
├── style.css        # All the styling
├── script.js        # All the interactivity
└── pics/            # Your wallpaper images and videos go here
```

---

## 📄 What Each Page Does

**`index.html`** — The main page. Has a hero section with a featured video, a scrolling text banner, a list of wallpaper images you can hover to preview, and a video carousel at the bottom.

**`upload.html`** — Opens in a new tab when you click Upload. Drag and drop your own videos here and they'll show up in a grid (3 per row). Videos are stored in memory so they disappear on refresh — that's a future improvement!

---

## 🛠 Tools Used

- **HTML, CSS, JS** — the core building blocks
- **Swiper.js** — powers the video carousel
- **Locomotive Scroll** — makes scrolling smooth

---

## ▶️ How to Run

Just open `index.html` in your browser! If videos don't load, use a local server instead:

```bash
# Python
python -m http.server 3000
```

Then go to `http://localhost:3000` in your browser.

---

## 🔮 What's Next

- [ ] Save uploaded videos so they don't disappear on refresh
- [ ] Add download buttons to the video carousel
- [ ] Add scroll animations with GSAP

---

*Personal learning project — 2026* 🚀
