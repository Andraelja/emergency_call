# EmergencyyCall — Wellness Tracker Dashboard (Prototype)

## Ringkasan
Proyek ini adalah prototipe dashboard "Wellness Tracker" yang dibangun dengan **React + Vite** dan sebuah server Node (Express) minimal untuk memudahkan preview hasil build. Tidak ada backend aktif yang diperlukan — data bersifat dummy dan client-side.

## Struktur
- `src/` — kode sumber React (komponen sederhana: Summary, MoodChart, Motivation).
- `server/` — server Express kecil untuk serve `dist/` hasil build dan endpoint placeholder `/api/hello`.
- `package.json` — skrip untuk menjalankan dev, build, dan server.

## Cara menjalankan (lokal)
1. Pastikan Node.js (>=18) dan npm terpasang.
2. Jalankan:
   ```bash
   npm install
   npm run dev        # untuk development (Vite)
   ```
3. Untuk melihat hasil build production:
   ```bash
   npm run build
   npm start          # menjalankan server Express di port 3000
   ```

## Desain & Alasan Pilihan
- **Framework**: React + Vite dipilih untuk kecepatan pengembangan dan pengalaman dev yang ringan.
- **UI**: Warna-warna lembut (hijau muda/cream) untuk nuansa tenang; desain card sederhana supaya terasa hangat dan minimal.
- **Komponen**: Dipisah agar mudah diintegrasikan dengan backend nanti (Summary, MoodChart, Motivation).

## Integrasi Backend (rencana singkat)
- **API sesi**: `GET /api/sessions` -> mengembalikan daftar sesi untuk populate Summary dan history.
- **API mood**: `GET /api/moods` -> data mood time-series untuk chart.
- **API motivation**: `GET /api/motivation` -> pesan motivasi yang dapat di-rotate.
- Autentikasi via JWT, dan caching ringan di client untuk membuat dashboard tetap responsif saat koneksi lambat.

## Catatan
- Prototipe ini didesain agar mudah di-extend: cukup ganti source data state dengan hasil fetch ke API nyata.
- Fokus pada pengalaman pengguna: transisi lembut, hover effects, dan responsivitas.

--- 