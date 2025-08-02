# 🎓 QA Engineer Bootcamp Portfolio – Aman Swasono

## Hallo 👋! 
Terima kasih telah mengunjungi repositori ini. Repositori ini berisi kumpulan tugas dari Bootcamp QA Engineer: Basic Automation & Testing.

---

## 📂 Struktur Tugas

### 1. 🧪 Testing & Bug Management  
Pengujian fungsional situs [SauceDemo](https://www.saucedemo.com/) meliputi:
- Login  
- Sorting Produk  
- Logout  

📄 **Dokumentasi**:
- ✅ Test Plan  
- ✅ Test Case (positif & negatif)  
- ✅ Bug Report (lengkap dengan langkah reproduksi, hasil aktual & ekspektasi)

📁 **Folder**: `Task_Testing_Bugs_Management/`

---

### 2. 💻 Programming Fundamental  
Latihan logika pemrograman dasar menggunakan JavaScript (Node.js).

📄 **Tugas**:
- Menampilkan pola segitiga siku-siku menggunakan perulangan

📁 **File**: `Task_Programming_Fundamental/segitiga_looping.js`

---

### 3. 🚀 Programming Advanced  
Aplikasi kalkulator interaktif berbasis terminal dengan Node.js.

📄 **Fitur**:
- Operasi Matematika: tambah, kurang, kali, bagi  
- Interaksi terminal dinamis  
- Pengulangan hingga pengguna memilih keluar

📁 **Folder**: `Task_Programming_Advanced/kalkulator/`  
Berisi:
- `menu.js` – Tampilan menu  
- `rumus.js` – Logika perhitungan  
- `package.json` – Informasi konfigurasi & dependencies

---

### 4. 🔌 API Automation Testing – Reqres.in  
Proyek ini adalah implementasi pengujian otomatis untuk API publik [Reqres.in](https://reqres.in) menggunakan **Node.js**, **Mocha**, dan **Mochawesome**, tanpa library tambahan seperti Chai atau AJV.

📄 **Fitur yang Diuji**:
- ✅ GET: Ambil daftar pengguna  
- ✅ POST: Tambah pengguna baru  
- ✅ PATCH: Perbarui data pengguna  
- ✅ DELETE: Hapus pengguna
- 

📁 **Folder**: `Task_Sesi_11_API_Automation/`  
Berisi:
- `tests/` – Kumpulan file test case:
  - `getUser.js` – Menguji endpoint GET pengguna
  - `createUser.js` – Menguji endpoint POST untuk membuat pengguna
  - `updateUser.js` – Menguji endpoint PATCH untuk memperbarui pengguna
  - `deleteUser.js` – Menguji endpoint DELETE untuk menghapus pengguna
- `mochawesome-report/` – Hasil laporan otomatis dalam format HTML
- `node_modules/` – Dependency dari project Node.js
- `package.json` – Konfigurasi dependencies dan script npm
- `package-lock.json` – File pengunci versi dependency yang terinstal


📌 **Catatan**:
- Menggunakan `assert` bawaan Node.js untuk validasi hasil
- Menggunakan `require()` (CommonJS), *bukan* `import`
- Report HTML dihasilkan otomatis oleh Mochawesome

---

## 📦 Tech Stack

| Tool         | Deskripsi                                |
|--------------|-------------------------------------------|
| Node.js 18+  | JavaScript runtime modern                |
| Mocha        | JavaScript test runner                   |
| Assert       | Assertion bawaan Node.js                 |
| Mochawesome  | Reporter HTML untuk hasil pengujian      |
| CommonJS     | Format module menggunakan `require()`    |

---

## ⚙️ Teknologi yang Digunakan
- JavaScript (Node.js)  
- Visual Studio Code  
- Git & GitHub  
- Microsoft Office (untuk dokumentasi QA)

---

## 📌 Lisensi
Repositori ini dilisensikan di bawah **MIT License** – bebas digunakan untuk keperluan pembelajaran.

---

## 🙋‍♂️ Kontributor
**Aman Swasono**  
Peserta Bootcamp QA Engineer  
Email: [amanswasono150899@gmail.com](mailto:amanswasono150899@gmail.com)

---

📁 **Folder**: `Task Sesi 11 - API Automation/`  
Struktur isi:
