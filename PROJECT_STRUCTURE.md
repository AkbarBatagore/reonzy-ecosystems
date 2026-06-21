# 🎨 RE-ONZY ECOSYSTEMS - Project Structure Guide

## 📁 Struktur Folder & File

```
reonzy-ecosystems/
│
├── 📄 index.html                 # Main page (Entry point)
├── 📄 style.css                  # Main stylesheet (backward compatibility)
├── 📄 script.js                  # Main JavaScript (backward compatibility)
├── 📄 reference-v1-by-reonzy.png # Design reference
│
├── 📁 AI-NOTES/                  # ⭐ Dokumentasi wajib untuk semua AI
│   ├── README.md                 # Panduan utama
│   ├── SESSION_LOG.md            # Catatan setiap session
│   ├── PROMPTS_USED.md           # Daftar prompts
│   ├── CODEBASE_NOTES.md         # Catatan teknis
│   ├── BUG_FIXES.md              # Bug tracker
│   └── DEPLOYMENT_GUIDE.md       # Panduan deploy
│
├── 📁 css/                       # Stylesheet terpisah
│   ├── style.css                 # Main styles
│   └── fonts.css                 # Font declarations
│
├── 📁 js/                        # JavaScript terpisah
│   └── script.js                 # Main JavaScript
│
├── 📁 pages/                     # HTML pages terpisah
│   ├── home.html                 # Home page
│   ├── list.html                 # List page (not functional)
│   └── workstation.html          # Workstation page (not functional)
│
├── 📁 data/                      # Data files
│   └── apps.json                 # Aplikasi data
│
├── 📁 img/                       # Main image folder
│   ├── 📁 slideshow/             # Slideshow images (12 files)
│   │   ├── slideshow-1.png
│   │   ├── slideshow-2.png
│   │   └── ... (sampai slideshow-12.png)
│   │
│   ├── 📁 icon-apps/             # Application icons (up to 999 files)
│   │   ├── apps-1.png
│   │   ├── apps-2.png
│   │   └── ... (sampai apps-999.png)
│   │
│   ├── 📁 img-fake/              # Fake images folder
│   │   └── reonzy.png
│   │
│   └── reonzy.png                # Profile photo (from GitHub API)
│
├── 📁 .git/                      # Git repository
└── 📁 .vscode/                   # VS Code configuration

```

---

## 🚀 Quick Start

### 1. Local Testing
```bash
# Use Python
python -m http.server 8000

# Or use Node.js (if installed)
npx http-server

# Then open browser:
http://localhost:8000
```

### 2. Adding Slideshow Images
- Place 12 PNG images di `/img/slideshow/`
- Name: `slideshow-1.png`, `slideshow-2.png`, ... `slideshow-12.png`
- Recommended size: 1280x400px

### 3. Adding App Icons
- Place PNG icons di `/img/icon-apps/`
- Name: `apps-1.png`, `apps-2.png`, ... `apps-N.png`
- Recommended size: 60x60px

### 4. Adding Apps
- Edit `/data/apps.json`
- Tambahkan app objects dengan struktur:
```json
{
  "id": 1,
  "title": "App Name",
  "description": "Description",
  "type": "IMG-EDITOR",
  "icon": "apps-1.png",
  "url": "link-ke-app"
}
```

### 5. App Types Available
- `ALL` - Show all apps
- `DOWNLOADER` - Download tools
- `IMG-EDITOR` - Image editors
- `IMG-CONVERT` - Image converters
- `VID-EDITOR` - Video editors
- `VID-CONVERT` - Video converters
- `PDF-XLCX-MORE` - PDF/Excel tools
- `CONVERT` - General converters

---

## 🎯 Main Features

### ✅ Implemented
- [x] Responsive header dengan profile, search, navigation
- [x] Slideshow dengan 12 gambar & auto-play
- [x] Filter aplikasi berdasarkan TYPE
- [x] Search functionality (title + description)
- [x] Expandable search bar
- [x] Grid layout untuk app cards
- [x] Sidebar dengan filter
- [x] Hamburger menu (mobile)
- [x] GitHub profile integration
- [x] Smooth animations & transitions
- [x] Dark mode styling
- [x] Responsive design (desktop, tablet, mobile)

### ⏳ To Do
- [ ] Upload slideshow images (12 images)
- [ ] Upload app icons (as needed)
- [ ] Populate apps.json dengan data lengkap
- [ ] Setup LIST page functionality
- [ ] Setup WORKSTATION page functionality
- [ ] Add keyboard shortcuts
- [ ] Add favorites system
- [ ] Add PWA support

---

## 🎨 Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Primary | Lime Green | #A5FF00 |
| Dark Background | Almost Black | #1A1A1A |
| Accent | Magenta | #FF00FF |
| Text Light | White | #FFFFFF |
| Text Dark | Black | #000000 |

---

## 🔤 Fonts

| Font | Usage |
|------|-------|
| Roboto (Regular) | Body text, descriptions |
| Game of Squids | Titles, headings, headers |

---

## 📱 Responsive Breakpoints

| Device | Max Width |
|--------|-----------|
| Desktop | 1920px |
| Tablet | 1024px |
| Mobile | 768px |
| Small Mobile | 480px |

---

## 🔗 Links & Resources

- **GitHub Profile:** https://github.com/AkbarBatagore
- **Design Reference:** `reference-v1-by-reonzy.png`
- **AI Notes:** `/AI-NOTES/README.md`
- **Bug Tracker:** `/AI-NOTES/BUG_FIXES.md`

---

## 📝 Important Notes for AI

⚠️ **SEBELUM MENGERJAKAN PROJECT INI:**

1. **Baca terlebih dahulu:**
   - `/AI-NOTES/README.md` - Panduan umum
   - `/AI-NOTES/CODEBASE_NOTES.md` - Catatan teknis
   - `/AI-NOTES/SESSION_LOG.md` - History updates

2. **Saat membuat changes:**
   - Update `/AI-NOTES/SESSION_LOG.md`
   - Dokumentasi file apa yang diubah
   - Catat bugs atau issues yang ditemukan

3. **Format penulisan:**
   - Gunakan template yang ada di `/AI-NOTES/`
   - Ikuti struktur dan naming conventions
   - Backup file sebelum major changes

4. **Testing:**
   - Test di browser (Chrome, Firefox, Safari)
   - Test responsive design di mobile
   - Verify semua links & buttons working

---

**Last Updated:** 2026-06-21
**Status:** ✅ Core Implementation Complete, Awaiting Image Assets
