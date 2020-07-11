# MY-TODOS

## Pengenalan

Web aplikasi ini berguna untuk menyimpan catatan agar jadwal-mu lebih terorganisir.

## Langkah Pengerjaan

Berikut merupakan ringkasan dari apa saja yang harus dilakukan untuk men-_deploy_ aplikasi ini ke AWS EC2 :

### Proses Develop Backend (Server) `./server/*`

Bagian backend dibuat menggunakan **expressJS**, **knex** sebagai query builder, dan **morgan** sebagai logger.

#### ExpressJS

File utama yang digunakan adalah `index.js`. Di dalam folder `src/` terdapat beberapa bagian folder di antaranya :

- `config/` folder tempat konfigurasi knex (knexfile)
- `migrations/` folder tempat log migrasi untuk database
- `routes/` folder tempat register route yang dibuat
- `tools/` folder tempat inisiasi _instance_ knex untuk digunakan

#### Knex

Karena lingkup projeknya yang kecil, sehingga model tidak dibutuhkan agar mempermudah pengerjaan dan meningkatkan efektifitas kode program. Setiap request yang masuk akan dijadikan sebuah query dengan knex untuk langsung mengakses database.

#### Morgan

Digunakan untuk melihat request yang masuk, _package_ morgan akan membuat file bernama `access.log` pada folder `src/` untuk menyimpan log request.

### Proses Develop Frontend (Client) `./client/*`

Bagian frontend dibuat dengan framework `nextJS` yaitu framework untuk library `reactJS`, selain itu untuk bagian _styling_ menggunakan `tailwindcss`.

#### NextJS

File utama berada pada `src/pages/_app.js` sebagai root file nya. Karena lingkup nya yang sederhana, hanya terdapat 5 file utama yaitu:

- `components/` bagian-bagian kecil dari user interface yang digunakan pada _pages_
- `layout/` struktur design yang digunakan pada tiap halaman.
- `pages/` halaman utama sesuai dengan endpoint.
- `styles/` tempat file css untuk _styling_
- `utils/` folder untuk utilitas tambahan

#### tailwindcss

Tidak banyak yang dikerjakaan karena menggunakan settingan bawaan dari `tailwind`.

### Proses Setup Server AWS Frontend (pada EC2)

Pertama-tama, aktifkan/buat instance terlebih dahulu. Setelah mengaktifkan instance (buat di halaman aws console) langkah selanjutnya adalah :

- konek ke instance aws yang akan digunakan menggunakan ssh
- update dan upgrade repository jika diperlukan lalu menginstall node dan npm
- clone repository [https://github.com/mhilmyh/my-todos](https://github.com/mhilmyh/my-todos)
- lakukan build pada folder `client/` untuk build file nextJS, setelah itu jalankan dengan command `npm run start` sehingga frontend sudah berjalan pada port 3000 (default)
- kembali ke aws console, pada bagian security group, tambahkan inbound rules untuk custom tcp dengan port 3000
- akses ke ip instance dengan port 3000 untuk uji coba
- setelah berhasil, jangan lupa ganti base url di environtment file ke arah backend (setelah backend selesai)

### Proses Setup Server AWS Backend (pada EC2)

Mirip seperti yang sebelumnya

- konek ke instance aws yang akan digunakan menggunakan ssh
- update dan upgrade repository jika diperlukan lalu menginstall node dan npm
- clone repository [https://github.com/mhilmyh/my-todos](https://github.com/mhilmyh/my-todos)
- jalankan express js dengan environtment produksi dan jangan lupa setting environtment variable nya sesuai dengan database yang digunakan
- set inbound rule tapi kalo ini ke port 8080
- test dengan postman, jalankan kembali tetapi dengam `pm2`

### Proses Setup Database dengan RDS

Buat instance pada AWS RDS, dan sertakan nama database, dan pilih mysql sebagai database. Pada backend ubah environtment file config database sesuai dengan yang ada di RDS dan setup selesai.

### Testing

### Link

- Repository Github : [https://github.com/mhilmyh/my-todos](https://github.com/mhilmyh/my-todos)
- Alamat Frontend : 13.250.63.243:3000
- Alamat Backend : 54.169.149.237:8000
