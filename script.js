/* ===================================
   BASO KITA - JAVASCRIPT
   Order Management & UI Interactions
   =================================== */

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  initAOS();
  renderMenu();
  setupEventListeners();
  calcTotal();
  hideLoaderAfterLoad();
});

// AOS Initialization
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({ 
      duration: 800, 
      once: false, 
      offset: 40 
    });
  }
}

// ===================================
// CONFIGURATION
// ===================================

const CONFIG = {
  ongkirFlat: 5000,
  whatsappNumber: '6285719607325',
  qrisLink: 'https://files.catbox.moe/2d33ob.jpeg',
  areaValid: 'majalengka'
};

// Menu data (dapat diganti dari JSON eksternal)
const menuData = [
  {
    id: 1,
    nama: 'Baso Cincang',
    deskripsi: 'Daging sapi pilihan, lembut dan empuk.',
    harga: 10000,
    gambar: 'https://images.unsplash.com/photo-1584635379229-f0ae6bc2ae7d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 4.9,
    rating_count: 245
  },
  {
    id: 2,
    nama: 'Baso Ndog',
    deskripsi: 'Baso dengan telur ayam kampung segar.',
    harga: 15000,
    gambar: 'https://images.unsplash.com/photo-1565557623262-b5c3c3a7b4b6?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 4.95,
    rating_count: 312
  },
  {
    id: 3,
    nama: 'Baso Iga',
    deskripsi: 'Iga sapi gurih dengan kuah kaldu premium.',
    harga: 15000,
    gambar: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 4.8,
    rating_count: 289
  },
  {
    id: 4,
    nama: 'Baso Mercon',
    deskripsi: 'Pedas nendang, untuk pecinta level tinggi.',
    harga: 15000,
    gambar: 'https://images.unsplash.com/photo-1584635379229-f0ae6bc2ae7d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 4.85,
    rating_count: 198
  }
];

// ===================================
// STATE MANAGEMENT
// ===================================

let cart = [];
let isAreaValid = false;

// ===================================
// MENU RENDERING
// ===================================

function renderMenu() {
  const container = document.getElementById('menuContainer');
  if (!container) return;

  container.innerHTML = '';

  menuData.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'card-menu p-5 shadow-md';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', idx * 100);
    card.innerHTML = `
      <div class="relative overflow-hidden h-48">
        <img src="${item.gambar}" alt="${item.nama}" class="w-full h-full object-cover rounded-2xl">
        <div class="absolute top-3 right-3 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <i class="fas fa-star"></i> ${item.rating}
        </div>
      </div>
      <div class="pt-5">
        <h4 class="font-bold text-lg text-coklat">${item.nama}</h4>
        <p class="text-gray-600 text-sm leading-relaxed mt-1">${item.deskripsi}</p>
        <div class="flex items-center gap-1 mt-2 text-xs text-gray-500">
          <i class="fas fa-star text-yellow-400"></i> (${item.rating_count} review)
        </div>
        <p class="text-red-700 font-bold text-xl mt-3">Rp ${item.harga.toLocaleString('id-ID')}</p>
        <button class="add-to-cart mt-4 bg-gradient-to-r from-red-600 to-red-700 text-white w-full py-3 rounded-full hover:shadow-lg transition text-sm font-semibold flex items-center justify-center gap-2" data-id="${item.id}">
          <i class="fas fa-plus-circle"></i> Tambah ke Keranjang
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  attachAddToCartListeners();
}

function attachAddToCartListeners() {
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = parseInt(this.dataset.id);
      addToCart(id);
      
      this.classList.add('scale-95');
      setTimeout(() => this.classList.remove('scale-95'), 200);
    });
  });
}

function addToCart(id) {
  const item = menuData.find(m => m.id === id);
  const existing = cart.find(c => c.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  showToast(`${item.nama} ditambahkan ke keranjang!`, 'success');
  updateCartUI();
}

// ===================================
// CART MANAGEMENT
// ===================================

function updateCartUI() {
  const cartDiv = document.getElementById('cartItems');
  if (!cartDiv) return;

  if (cart.length === 0) {
    cartDiv.innerHTML = `
      <div class="text-center py-12">
        <i class="fas fa-shopping-cart text-5xl text-gray-300 mb-4"></i>
        <p class="text-gray-400 font-medium">Keranjang kosong</p>
        <p class="text-gray-500 text-sm">Pilih menu favorit untuk memulai pemesanan</p>
      </div>
    `;
  } else {
    cartDiv.innerHTML = cart.map((item, idx) => `
      <div class="flex items-center justify-between border-b pb-4 hover:bg-gray-50 p-3 rounded-lg transition group">
        <div class="flex-1">
          <span class="font-semibold text-coklat">${item.nama}</span>
          <span class="text-sm text-gray-500 ml-2">x${item.qty}</span>
          <p class="text-xs text-gray-400 mt-1">Rp ${item.harga.toLocaleString('id-ID')} per item</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="font-bold text-red-700 min-w-24 text-right">Rp ${(item.harga * item.qty).toLocaleString('id-ID')}</span>
          <button class="qty-btn qty-minus" data-index="${idx}" title="Kurangi">−</button>
          <span class="w-8 text-center font-semibold">${item.qty}</span>
          <button class="qty-btn qty-plus" data-index="${idx}" title="Tambah">+</button>
          <button class="qty-btn text-gray-400 hover:text-red-600 hover:bg-red-50 px-3 delete-item" data-index="${idx}" title="Hapus">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    `).join('');

    attachCartEventListeners();
  }

  calcTotal();
  updateCartCount();
}

function attachCartEventListeners() {
  document.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = parseInt(this.dataset.index);
      if (cart[idx].qty > 1) {
        cart[idx].qty -= 1;
      } else {
        const itemName = cart[idx].nama;
        cart.splice(idx, 1);
        showToast(`${itemName} dihapus dari keranjang`, 'info');
      }
      updateCartUI();
    });
  });

  document.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = parseInt(this.dataset.index);
      cart[idx].qty += 1;
      updateCartUI();
    });
  });

  document.querySelectorAll('.delete-item').forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = parseInt(this.dataset.index);
      const itemName = cart[idx].nama;
      cart.splice(idx, 1);
      showToast(`${itemName} dihapus dari keranjang`, 'info');
      updateCartUI();
    });
  });
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    cartCount.textContent = cart.reduce((acc, i) => acc + i.qty, 0);
  }
}

// ===================================
// CALCULATIONS
// ===================================

function calcTotal() {
  const subtotal = cart.reduce((acc, i) => acc + (i.harga * i.qty), 0);
  const ongkir = isAreaValid ? CONFIG.ongkirFlat : 0;
  
  const subtotalEl = document.getElementById('subtotal');
  const ongkirEl = document.getElementById('ongkirDisplay');
  const totalEl = document.getElementById('totalPayment');

  if (subtotalEl) subtotalEl.textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
  if (ongkirEl) ongkirEl.textContent = ongkir > 0 ? `Rp ${ongkir.toLocaleString('id-ID')}` : 'Rp 0';
  if (totalEl) totalEl.textContent = `Rp ${(subtotal + ongkir).toLocaleString('id-ID')}`;

  return { subtotal, ongkir, total: subtotal + ongkir };
}

// ===================================
// AREA VALIDATION
// ===================================

function setupAreaValidation() {
  const validateBtn = document.getElementById('validateAreaBtn');
  if (!validateBtn) return;

  validateBtn.addEventListener('click', validateArea);
}

function validateArea() {
  const alamatInput = document.getElementById('alamatCheck');
  const statusDiv = document.getElementById('areaStatus');

  if (!alamatInput || !statusDiv) return;

  const alamat = alamatInput.value.toLowerCase().trim();

  if (alamat === '') {
    statusDiv.innerHTML = '<span class="text-yellow-600"><i class="fas fa-exclamation-circle"></i> Masukkan nama kabupaten atau desa</span>';
    return;
  }

  if (alamat.includes(CONFIG.areaValid)) {
    isAreaValid = true;
    statusDiv.innerHTML = '<span class="text-green-600"><i class="fas fa-check-circle"></i> ✓ Alamat dalam Kabupaten Majalengka. Ongkir Rp 5.000</span>';
    document.getElementById('areaWarning')?.classList.add('hidden');
    updateCheckoutButton(false);
    showToast('Area tervalidasi! Anda dapat melanjutkan pemesanan.', 'success');
  } else {
    isAreaValid = false;
    statusDiv.innerHTML = '<span class="text-red-600"><i class="fas fa-times-circle"></i> ✗ Maaf, kami hanya melayani Kabupaten Majalengka</span>';
    document.getElementById('areaWarning')?.classList.remove('hidden');
    updateCheckoutButton(true);
    showToast('Area pengiriman tidak tersedia untuk lokasi Anda', 'error');
  }

  calcTotal();
}

function updateCheckoutButton(isDisabled) {
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (!checkoutBtn) return;

  if (isDisabled) {
    checkoutBtn.disabled = true;
    checkoutBtn.classList.add('disabled-btn');
  } else {
    checkoutBtn.disabled = false;
    checkoutBtn.classList.remove('disabled-btn');
  }
}

// ===================================
// CHECKOUT PROCESS
// ===================================

function setupCheckout() {
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (!checkoutBtn) return;

  checkoutBtn.addEventListener('click', handleCheckout);
}

function handleCheckout() {
  if (!isAreaValid) {
    showToast('Silakan validasi area pengiriman terlebih dahulu', 'error');
    return;
  }

  if (cart.length === 0) {
    showToast('Keranjang kosong. Silakan pilih menu terlebih dahulu', 'error');
    return;
  }

  if (!document.getElementById('nama').value) {
    showToast('Silakan isi nama lengkap', 'error');
    document.getElementById('nama').classList.add('shake');
    setTimeout(() => document.getElementById('nama').classList.remove('shake'), 300);
    return;
  }

  if (!document.getElementById('wa').value) {
    showToast('Silakan isi nomor WhatsApp', 'error');
    document.getElementById('wa').classList.add('shake');
    setTimeout(() => document.getElementById('wa').classList.remove('shake'), 300);
    return;
  }

  const checkoutBtn = event.target;
  const originalHTML = checkoutBtn.innerHTML;
  checkoutBtn.innerHTML = '<i class="fas fa-spinner animate-spin"></i> Memproses...';
  checkoutBtn.disabled = true;

  setTimeout(() => {
    window.open(CONFIG.qrisLink, '_blank');
    checkoutBtn.innerHTML = originalHTML;
    checkoutBtn.disabled = false;
    showToast('Silakan selesaikan pembayaran QRIS, lalu konfirmasi via WhatsApp', 'info');
  }, 1000);
}

// ===================================
// WHATSAPP CONFIRMATION
// ===================================

function setupWhatsAppConfirm() {
  const waBtn = document.getElementById('whatsappConfirm');
  if (!waBtn) return;

  waBtn.addEventListener('click', handleWhatsAppConfirm);
}

function handleWhatsAppConfirm() {
  if (cart.length === 0) {
    showToast('Keranjang kosong. Silakan pilih menu terlebih dahulu', 'error');
    return;
  }

  const nama = document.getElementById('nama').value || 'Tidak diisi';
  const wa = document.getElementById('wa').value || 'Tidak diisi';
  const alamat = document.getElementById('alamat').value || 'Tidak diisi';
  const kec = document.getElementById('kecamatan').value || '-';
  const desa = document.getElementById('desa').value || '-';
  const catatan = document.getElementById('catatan').value || '-';
  const total = calcTotal();

  const daftarPesanan = cart.map(item =>
    `${item.nama} x${item.qty} = Rp ${(item.harga * item.qty).toLocaleString('id-ID')}`
  ).join('\n');

  const msg = `*📋 PESANAN BASO KITA*

${daftarPesanan}

*💰 Total Pembayaran:* Rp ${total.total.toLocaleString('id-ID')}

*👤 Data Pemesan:*
Nama: ${nama}
WhatsApp: ${wa}
Alamat: ${alamat}
Kecamatan: ${kec}
Desa/Kelurahan: ${desa}

*📝 Catatan:* ${catatan}

Terima kasih telah memesan baso kami! 🙏`;

  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  showToast('Dibuka chat WhatsApp, silakan kirim pesanan Anda', 'success');
}

// ===================================
// NOTIFICATIONS / TOAST
// ===================================

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const iconClass = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';
  
  toast.innerHTML = `<div class="flex items-center gap-3">
    <i class="fas fa-${iconClass}"></i>
    <span>${message}</span>
  </div>`;
  
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOut 0.4s ease forwards';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ===================================
// BACK TO TOP BUTTON
// ===================================

function setupBackToTop() {
  const topBtn = document.getElementById('backToTop');
  if (!topBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      topBtn.classList.remove('opacity-0', 'invisible');
    } else {
      topBtn.classList.add('opacity-0', 'invisible');
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===================================
// LOADER HANDLING
// ===================================

function hideLoaderAfterLoad() {
  window.addEventListener('load', function() {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 600);
      }
    }, 1200);
  });
}

// ===================================
// EVENT LISTENERS SETUP
// ===================================

function setupEventListeners() {
  setupAreaValidation();
  setupCheckout();
  setupWhatsAppConfirm();
  setupBackToTop();
  addSlideOutAnimation();
}

// ===================================
// HELPER FUNCTIONS
// ===================================

function addSlideOutAnimation() {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes slideOut {
      to { transform: translateX(400px); opacity: 0; }
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #B22222;
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #8b1a1a;
    }
  `;
  document.head.appendChild(style);
}

// ===================================
// EXPORT FUNCTIONS FOR GLOBAL ACCESS
// ===================================

window.updateCartUI = updateCartUI;
window.validateArea = validateArea;
window.handleCheckout = handleCheckout;
window.handleWhatsAppConfirm = handleWhatsAppConfirm;
