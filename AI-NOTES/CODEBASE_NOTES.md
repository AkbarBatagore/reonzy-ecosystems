# 💻 CATATAN KODE & IMPLEMENTASI

## Struktur File & Folder

### `/index.html` - Main Entry Point
- Header dengan logo, search bar, navigation menu, hamburer icon
- Sidebar untuk filter kategori aplikasi
- Main content area dengan slideshow & app cards
- Right sidebar dengan scrollbar

### `/css/style.css` - Main Stylesheet
**Color Scheme:**
- Primary Green: `#A5FF00` (Bright Lime Green)
- Dark Background: `#1A1A1A` (Almost Black)
- Magenta Accent: `#FF00FF`
- Sidebar Gray: `#1D1D1D` (Dark Gray)
- Text Dark: `#000000`
- Text Light: `#FFFFFF`

**Breakpoints:**
- Desktop: 1920px
- Tablet: 768px
- Mobile: 375px

**Font:**
- Body: "Roboto", sans-serif (from DaFont.com)
- Title/Heading: "Game of Squids", sans-serif (from DaFont.com)

### `/js/script.js` - Main JavaScript
**Modules/Functions:**
1. `initSlideshow()` - Initialize slideshow dengan auto-play
2. `nextSlide() / prevSlide()` - Navigation slideshow
3. `filterApps(type)` - Filter apps berdasarkan TYPE
4. `searchApps(query)` - Search functionality
5. `toggleSidebar()` - Toggle sidebar menu
6. `expandSearchBar()` - Expandable search input
7. `openGitHubProfile()` - Open GitHub profile
8. `loadAppsData()` - Load dari apps.json

### `/data/apps.json` - Data Aplikasi
```json
{
  "apps": [
    {
      "id": 1,
      "title": "App Title",
      "description": "Description text",
      "type": "IMG-EDITOR",
      "icon": "apps-1.png",
      "url": "/pages/app.html"
    }
  ]
}
```

### `/pages/` - Folder untuk Pages Terpisah
- `home.html` - Home page
- `list.html` - List page (Not functional yet)
- `workstation.html` - Workstation page (Not functional yet)

---

## Key Implementation Details

### 1. Slideshow
- Auto-play setiap 5 detik
- Smooth sliding animation
- Images dari `/img/slideshow/slideshow-1.png` ... `slideshow-12.png`
- Manual navigation dengan prev/next buttons

### 2. App Filter System
**Struktur TYPE:**
- `ALL` - Tampilkan semua
- `IMG-EDITOR` - Image Editor apps
- `IMG-CONVERT` - Image Converter apps
- `VID-EDITOR` - Video Editor apps
- `VID-CONVERT` - Video Converter apps
- `DOWNLOADER` - Downloader tools
- `PDF-XLCX-MORE` - PDF/Excel tools
- `CONVERT` - General converter

Implementasi dengan mengubah CSS class `display: none` untuk hidden apps.

### 3. Search Bar
- Expandable saat diklik
- Max-width: 500px (agar tidak mengcover elemen lain)
- Search pada title & description
- Real-time filtering
- Enter/Magnifying glass untuk submit

### 4. Sidebar Menu
- Hamburger icon (3 lines)
- Smooth slide animation (transform: translateX)
- Overlay dark background saat terbuka
- Close saat diklik overlay atau tombol close

### 5. GitHub Profile Integration
- Magenta circle di header
- Profile foto dari GitHub API
- Click untuk membuka profile di tab baru

---

## Important Notes
- Semua fitur built-in menggunakan Vanilla JavaScript (No jQuery/Framework)
- Mobile responsive design
- Smooth animations dengan CSS3 transitions & transforms
- Lazy loading untuk images (future improvement)

---

