# 🍜 Baso Parapatan - Toko Online Baso Premium

Website landing page dan toko online untuk usaha jualan Baso dengan desain modern, estetik, dan responsif.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Daftar File

### 1. **baso-lezat-premium.html** ⭐
File HTML all-in-one yang lengkap dengan CSS dan JavaScript di dalamnya. Gunakan file ini untuk deployment yang mudah dan cepat.

**Kelebihan:**
- Tidak perlu file eksternal
- Loading lebih cepat untuk production
- Cocok untuk hosting gratis

### 2. **index.html** (Production Version)
HTML dengan referensi ke CSS dan JavaScript eksternal. Gunakan untuk struktur yang lebih modular dan maintainable.

**Kelebihan:**
- Struktur lebih rapi
- Mudah untuk dikembangkan
- Cache browser lebih efisien

### 3. **style.css**
File CSS terpisah berisi:
- Styling custom untuk warna merah, coklat, putih
- Animasi halus (fade-in, slide-up, pulse, bounce, shake)
- Responsive design untuk mobile, tablet, desktop
- Hover effects dan transitions
- Scrollbar custom
- Print styles

### 4. **script.js**
File JavaScript terpisah berisi:
- Manajemen keranjang belanja
- Perhitungan subtotal dan total otomatis
- Validasi area pengiriman
- Integrasi WhatsApp
- Toast notifications
- Event listeners

### 5. **config.json**
File konfigurasi JSON yang berisi:
- Data toko (nama, alamat, telepon, WhatsApp, email)
- Menu dan harga
- Area pengiriman
- Link QRIS
- Media sosial

### 6. **README.md**
File dokumentasi ini dengan panduan lengkap penggunaan.

---

## 🚀 Quick Start

### Opsi 1: File All-in-One (Recommended untuk Beginner)

1. Download file `baso-lezat-premium.html`
2. Buka file tersebut di browser
3. Atau upload ke hosting Anda

```bash
# Contoh menggunakan Python
python -m http.server 8000
# Buka http://localhost:8000
```

### Opsi 2: Production Version (Recommended untuk Developer)

1. Download semua file:
   - `index.html`
   - `style.css`
   - `script.js`
   - `config.json` (optional, untuk referensi)

2. Upload ke server Anda

3. Akses melalui domain Anda

---

## ⚙️ Kustomisasi

### 1. Mengubah Data Toko

**File: baso-lezat-premium.html atau script.js**

Cari bagian:
```javascript
const CONFIG = {
  ongkirFlat: 5000,
  whatsappNumber: '6281234567890',
  qrisLink: 'https://payment.example.com/qris-basokita',
  areaValid: 'majalengka'
};
```

Ubah sesuai kebutuhan Anda:
```javascript
const CONFIG = {
  ongkirFlat: 10000,  // Ubah ongkir
  whatsappNumber: '6281234567890',  // Ubah nomor WA Anda
  qrisLink: 'https://payment.example.com/qris-your-code',  // Ubah link QRIS
  areaValid: 'surabaya'  // Ubah area validasi
};
```

### 2. Mengubah Menu dan Harga

**File: baso-lezat-premium.html atau script.js**

Cari bagian:
```javascript
const menuData = [
  { 
    id: 1, 
    nama: 'Baso Cincang', 
    deskripsi: '...', 
    harga: 10000, 
    gambar: 'URL_GAMBAR',
    rating: 4.9,
    rating_count: 245
  },
  // ... lebih banyak menu
];
```

Tambah atau ubah menu:
```javascript
const menuData = [
  { 
    id: 1, 
    nama: 'Baso Cincang', 
    deskripsi: 'Daging sapi pilihan, lembut dan empuk.', 
    harga: 12000,  // Ubah harga
    gambar: 'https://images.unsplash.com/...',
    rating: 4.9,
    rating_count: 245
  },
  { 
    id: 5,  // ID baru
    nama: 'Baso Seafood',  // Menu baru
    deskripsi: 'Baso dengan udang dan cumi premium.',
    harga: 20000,
    gambar: 'https://images.unsplash.com/...',
    rating: 5.0,
    rating_count: 150
  }
];
```

### 3. Mengubah Warna Brand

**File: style.css atau HTML inline styles**

```css
/* Custom Colors Section */
.bg-merah { background-color: #B22222; }  /* Merah */
.bg-coklat { background-color: #6F4E37; }  /* Coklat */
```

Ubah hex color sesuai keinginan:
```css
.bg-merah { background-color: #FF6B6B; }  /* Merah lebih cerah */
.bg-coklat { background-color: #8B5A3C; }  /* Coklat lebih terang */
```

### 4. Mengubah Gambar Hero

**File: index.html atau baso-lezat-premium.html**

Cari:
```html
<img src="https://images.unsplash.com/photo-1565557623262-b5c3c3a7b4b6?..." 
     alt="Mangkuk Baso" ...>
```

Ganti dengan URL gambar Anda sendiri.

### 5. Mengubah Link Media Sosial

**File: index.html atau baso-lezat-premium.html**

Cari bagian footer:
```html
<a href="https://instagram.com/basokita"><i class="fab fa-instagram"></i></a>
<a href="https://facebook.com/basokita"><i class="fab fa-facebook"></i></a>
<a href="https://youtube.com/@basokita"><i class="fab fa-youtube"></i></a>
```

Ganti dengan link akun Anda.

### 6. Mengubah Area Pengiriman

**File: script.js**

```javascript
// Ganti validation area
if (alamat.includes('majalengka')) {  // Ubah ke area Anda
```

Menjadi:
```javascript
if (alamat.includes('jakarta') || alamat.includes('bekasi')) {  // Multiple area
```

---

## 🎨 Fitur Utama

### ✨ Visual & Design
- ✅ Tema minimalis modern dengan warna merah, putih, coklat
- ✅ Responsive di desktop, tablet, smartphone
- ✅ Animasi smooth (fade-in, slide-up, pulse, bounce)
- ✅ Gradient dan shadows untuk kedalaman visual
- ✅ Hover effects pada semua interactive elements

### 🛒 Shopping Cart
- ✅ Tambah/kurangi jumlah pesanan
- ✅ Hitung subtotal otomatis
- ✅ Hitung total pembayaran otomatis
- ✅ Hapus item dari keranjang
- ✅ Tampilkan badge counter

### 📝 Formulir
- ✅ Validasi nama
- ✅ Validasi nomor WhatsApp
- ✅ Input alamat lengkap
- ✅ Input kecamatan & desa
- ✅ Catatan pesanan (opsional)

### 🗺️ Area Pengiriman
- ✅ Validasi area otomatis
- ✅ Pesan error jika di luar area
- ✅ Disable checkout button jika tidak valid
- ✅ Flat rate ongkir yang jelas

### 💳 Pembayaran
- ✅ Integrasi QRIS
- ✅ Link QRIS custom yang mudah diganti
- ✅ Validasi sebelum checkout

### 📞 WhatsApp Integration
- ✅ Floating WhatsApp button
- ✅ Pesan pesanan otomatis ke admin
- ✅ Format pesan yang rapi dan profesional
- ✅ Enkripsi URL otomatis

### 🎯 Lainnya
- ✅ Sticky navbar dengan smooth scroll
- ✅ Loading animation saat page dibuka
- ✅ Back to top button
- ✅ Toast notifications (success, error, info)
- ✅ Floating WhatsApp button dengan pulse animation
- ✅ Smooth scrolling ke section
- ✅ Custom scrollbar
- ✅ Mobile-optimized

---

## 📱 Browser Support

| Browser | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Chrome  | ✅      | ✅     | ✅     |
| Firefox | ✅      | ✅     | ✅     |
| Safari  | ✅      | ✅     | ✅     |
| Edge    | ✅      | ✅     | ✅     |

---

## 📦 Dependencies

### External CDN (sudah included):
- **Tailwind CSS** - CSS utility framework
- **AOS (Animate On Scroll)** - Scroll animation library
- **Font Awesome** - Icon library

Semua dependencies sudah disertakan melalui CDN, jadi tidak perlu instalasi tambahan!

---

## 🔧 Struktur Kode

### HTML Structure
```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Meta tags, external CSS, CDN links -->
  </head>
  <body>
    <!-- Loader -->
    <!-- Navbar -->
    <!-- Hero Section -->
    <!-- Menu Section -->
    <!-- Order & Area Section -->
    <!-- Footer -->
    <!-- Floating Buttons -->
    <!-- Scripts -->
  </body>
</html>
```

### CSS Organization
```css
/* Reset & Global */
/* Custom Colors */
/* Buttons & CTA */
/* Cards */
/* Navbar */
/* Hero Section */
/* Loader */
/* Floating Buttons */
/* Form Inputs */
/* Notifications */
/* Section Animations */
/* Utility Classes */
/* Footer Links */
/* Quantity Buttons */
/* Scrollbar Custom */
/* Responsive Design */
/* Print Styles */
```

### JavaScript Organization
```javascript
// Initialization
// Configuration
// Menu Rendering
// Cart Management
// Calculations
// Area Validation
// Checkout Process
// WhatsApp Confirmation
// Notifications
// Back to Top
// Loader Handling
// Event Listeners
// Helper Functions
```

---

## 🚀 Deployment Guide

### 1. **Hosting Gratis (Netlify)**

1. Push code ke GitHub
2. Login ke [Netlify](https://netlify.com)
3. Connect repository Anda
4. Deploy otomatis setiap kali push

### 2. **Hosting Gratis (Vercel)**

1. Push code ke GitHub
2. Login ke [Vercel](https://vercel.com)
3. Import project Anda
4. Deploy

### 3. **Hosting Berbayar (Traditional)**

1. Upload file ke server via FTP
2. Pastikan struktur folder:
   ```
   /public_html/
   ├── index.html
   ├── style.css
   ├── script.js
   ├── config.json
   └── baso-lezat-premium.html
   ```
3. Akses melalui domain Anda

### 4. **Localhost Testing**

```bash
# Gunakan Python
python -m http.server 8000

# Atau gunakan Node.js
npx http-server

# Atau gunakan Live Server di VS Code
# Install extension "Live Server" kemudian right-click > Open with Live Server
```

---

## 🎓 Tips & Tricks

### 1. Mengoptimalkan Gambar
Gunakan tools seperti [TinyPNG](https://tinypng.com) untuk compress gambar dan mempercepat loading.

### 2. Menambah Analytics
Tambahkan Google Analytics:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 3. SEO Optimization
Ubah meta tags di `<head>`:
```html
<meta name="description" content="Deskripsi bisnis Anda">
<meta name="keywords" content="baso, makanan, delivery, kota Anda">
<meta property="og:title" content="BasoKita - Baso Lezat Terbaik">
<meta property="og:image" content="URL_GAMBAR">
```

### 4. Backup & Version Control
```bash
git init
git add .
git commit -m "Initial commit - BasoKita"
git push origin main
```

---

## 🐛 Troubleshooting

### Masalah: Gambar tidak muncul
**Solusi:** Pastikan URL gambar masih aktif dan accessible. Gunakan HTTPS.

### Masalah: WhatsApp link tidak berfungsi
**Solusi:** Pastikan nomor WhatsApp format internasional (62XXXXXXXX), tanpa karakter spesial.

### Masalah: Animasi lag
**Solusi:** Reduce animation duration, disable AOS untuk mobile, optimize gambar.

### Masalah: Form tidak submit
**Solusi:** Pastikan semua field wajib sudah diisi sebelum submit.

---

## 📈 Performance Tips

- ✅ Gunakan CDN untuk external resources
- ✅ Minify CSS dan JavaScript untuk production
- ✅ Compress gambar sebelum upload
- ✅ Enable GZIP compression di server
- ✅ Cache browser untuk static assets
- ✅ Lazy load images (optional improvement)

---

## 📄 Lisensi

Project ini gratis untuk digunakan, dimodifikasi, dan didistribusikan.

---

## 💬 FAQ

**Q: Apakah saya bisa mengubah desain?**
A: Ya, full customizable. Ubah warna, font, layout sesuai keinginan.

**Q: Bagaimana cara menambah produk?**
A: Tambah object baru di array `menuData` di script.js

**Q: Apakah support payment gateway lain?**
A: Ya, QRIS link bisa diganti dengan gateway manapun (Midtrans, Stripe, dll).

**Q: Berapa hosting cost minimal?**
A: Bisa gratis (Netlify, Vercel) atau mulai dari Rp 50k/bulan (hosting lokal).

**Q: Apakah support multi-language?**
A: Saat ini hanya Bahasa Indonesia. Bisa ditambah dengan modify template.

---

## 🎯 Roadmap Fitur Mendatang

- [ ] Multi-language support
- [ ] Dark mode
- [ ] Advanced payment gateway
- [ ] Order tracking
- [ ] Customer reviews
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Email notifications

---

## 📞 Support & Contact

Jika ada pertanyaan atau butuh bantuan:
- Baca dokumentasi ini dengan seksama
- Check troubleshooting section
- Inspect browser console (F12) untuk error messages

---

## 🙏 Terima Kasih

Dibuat dengan ❤️ untuk membantu bisnis Anda sukses!

---

**Version:** 1.0.0  
**Last Updated:** 2024  
**Made with:** HTML5, CSS3, JavaScript, Tailwind CSS

---

## 📚 Resources & Links

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)

---

**Happy Selling! 🍜✨**
