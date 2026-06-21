# ⚡ QUICK REFERENCE GUIDE - RE-ONZY ECOSYSTEMS

## 🎯 Essential Commands

### Start Local Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```
Then open: `http://localhost:8000`

---

## 📋 Checklist: Adding Content

### Adding Slideshow Images
- [ ] Create or get 12 PNG images
- [ ] Resize to 1280x400px or similar ratio
- [ ] Place in `/img/slideshow/`
- [ ] Name as: `slideshow-1.png`, `slideshow-2.png`, ... `slideshow-12.png`

### Adding App Icons
- [ ] Create or get app icons (PNG format)
- [ ] Resize to 60x60px
- [ ] Place in `/img/icon-apps/`
- [ ] Name as: `apps-1.png`, `apps-2.png`, ... `apps-N.png`

### Populating Apps Data
- [ ] Open `/data/apps.json`
- [ ] Add app objects following this structure:
```json
{
  "id": 1,
  "title": "App Name",
  "description": "Short description of the app",
  "type": "IMG-EDITOR",
  "icon": "apps-1.png",
  "url": "https://link-to-app-or-#"
}
```
- [ ] Save the file
- [ ] Test in browser

### Custom Styling
- [ ] Colors: Edit `:root` variables in `/css/style.css`
- [ ] Fonts: Edit `/css/fonts.css`
- [ ] Layout: Modify grid settings in `.apps-container`
- [ ] Animations: Adjust transition times in variables

---

## 🔍 Common Issues & Solutions

### Images not showing
**Problem:** Slideshow or app icons tidak muncul
**Solution:**
1. Check file path & naming convention
2. Verify image files exist in correct folder
3. Check browser console for error messages
4. Try different image format (JPEG, WebP)

### Slideshow not moving
**Problem:** Slideshow images not changing
**Solution:**
1. Check `/img/slideshow/` folder exists
2. Verify images named correctly
3. Clear browser cache (Ctrl+Shift+Del)
4. Check browser console for errors

### Filter not working
**Problem:** Filter buttons tidak filter aplikasi
**Solution:**
1. Check app TYPE value di apps.json
2. Verify filter type name matches exactly
3. Clear browser cache
4. Check browser console for errors

### Search not working
**Problem:** Search feature tidak find apps
**Solution:**
1. Check app TITLE & DESCRIPTION di apps.json
2. Ensure search input is not empty
3. Check if apps actually match query
4. Clear browser cache

### Sidebar not opening
**Problem:** Hamburger menu tidak buka sidebar
**Solution:**
1. Check if JavaScript loaded correctly
2. Check browser console for errors
3. Verify CSS for sidebar (display & position)
4. Test on different browser

---

## 🎨 Customization Guide

### Change Primary Color
```css
:root {
    --color-primary: #A5FF00;  /* Change this color */
}
```

### Change Font
```css
@font-face {
    font-family: 'Game of Squids';
    /* Change font source here */
}
```

### Change Slideshow Duration
```javascript
autoPlayInterval = setInterval(() => {
    nextSlide();
}, 5000); // Change 5000 to desired milliseconds
```

### Add More Filter Types
1. Add new `<li>` in HTML filter list:
```html
<li><a href="#" class="filter-btn" data-filter="NEW-TYPE">NEW-TYPE</a></li>
```
2. Add apps dengan type `NEW-TYPE` di apps.json
3. Save & refresh

### Change Grid Columns
```css
.apps-container {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    /* Change minmax value untuk adjust card width */
}
```

---

## 📚 File Reference

| File | Purpose |
|------|---------|
| `index.html` | Main HTML structure |
| `css/style.css` | Main stylesheet |
| `js/script.js` | Main JavaScript logic |
| `data/apps.json` | Application data |
| `css/fonts.css` | Font declarations |
| `/pages/` | Separate HTML pages |
| `/img/slideshow/` | Slideshow images |
| `/img/icon-apps/` | App icons |

---

## 🔗 Function Reference

### JavaScript Functions
- `initSlideshow()` - Initialize slideshow
- `nextSlide()` / `prevSlide()` - Navigate slideshow
- `loadAppsData()` - Load apps from JSON
- `displayApps()` - Render app cards
- `applyFilter(type)` - Filter apps by type
- `performSearch(query)` - Search apps
- `toggleSidebar()` - Open/close sidebar
- `initGitHubProfile()` - Load GitHub profile

---

## 📞 Support & Documentation

- **Main Guide:** `/AI-NOTES/README.md`
- **Technical Notes:** `/AI-NOTES/CODEBASE_NOTES.md`
- **Bug Reports:** `/AI-NOTES/BUG_FIXES.md`
- **Session History:** `/AI-NOTES/SESSION_LOG.md`
- **Project Structure:** `/PROJECT_STRUCTURE.md`
- **Deployment:** `/AI-NOTES/DEPLOYMENT_GUIDE.md`

---

## ✅ Testing Checklist

- [ ] All images loaded correctly
- [ ] Slideshow working with auto-play
- [ ] Slideshow indicators clickable
- [ ] Filter buttons working
- [ ] Search functionality working
- [ ] Hamburger menu appears on mobile
- [ ] Sidebar opens/closes smoothly
- [ ] GitHub profile link working
- [ ] All GO buttons clickable
- [ ] Responsive design working (mobile, tablet, desktop)
- [ ] No console errors
- [ ] All fonts loading correctly
- [ ] Scrollbar visible on right side

---

**Last Updated:** 2026-06-21
**Status:** ✅ Ready for Image Assets & Data Population
