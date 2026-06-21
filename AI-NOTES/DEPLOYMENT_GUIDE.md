# 🚀 DEPLOYMENT GUIDE

## Checklist Sebelum Deploy
- [ ] Semua images sudah di-upload ke folder yang sesuai
- [ ] `/img/slideshow/` berisi `slideshow-1.png` ... `slideshow-12.png`
- [ ] `/img/icon-apps/` berisi `apps-1.png` ... `apps-N.png`
- [ ] `data/apps.json` sudah filled dengan data aplikasi lengkap
- [ ] Semua links di test dan working
- [ ] GitHub profile integration berfungsi
- [ ] Search & filter berfungsi dengan baik
- [ ] Responsive design sudah di-test di mobile
- [ ] Fonts sudah loaded dengan benar

## Local Testing
```bash
# Gunakan local server (jangan buka file:// langsung)
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js (http-server)
npx http-server

# Option 3: PHP
php -S localhost:8000
```

## File Structure untuk Deploy
```
public/
├── index.html
├── style.css
├── script.js
├── css/
│   └── [additional css files]
├── js/
│   └── [additional js files]
├── pages/
│   ├── home.html
│   ├── list.html
│   └── workstation.html
├── data/
│   └── apps.json
├── img/
│   ├── slideshow/
│   │   ├── slideshow-1.png
│   │   ├── slideshow-2.png
│   │   └── ... (sampai slideshow-12.png)
│   ├── icon-apps/
│   │   ├── apps-1.png
│   │   ├── apps-2.png
│   │   └── ... (sampai apps-999.png)
│   └── reonzy.png (profile picture)
└── AI-NOTES/
    ├── README.md
    ├── SESSION_LOG.md
    └── [documentation files]
```

## Performance Optimization
1. Compress images sebelum upload
2. Use WebP format untuk images (fallback ke PNG)
3. Minify CSS & JavaScript di production
4. Enable gzip compression di server
5. Use CDN untuk assets statis

## Troubleshooting

### Images tidak muncul
- Check folder path dan file naming convention
- Verify image files ada di lokasi yang benar
- Check browser console untuk error messages

### Slideshow tidak jalan
- Verify JavaScript file sudah loaded
- Check browser console untuk JavaScript errors
- Verify images ada di `/img/slideshow/`

### Sidebar animation lag
- Check CSS transitions settings
- Reduce animation duration jika terlalu long
- Check browser hardware acceleration setting

---

