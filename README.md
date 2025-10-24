
# REST API Daftar Barang Cuci Sepatu

## Deskripsi Umum
Proyek ini merupakan tugas responsi untuk modul Pembuatan API dengan JavaScript. API ini dibuat menggunakan **Node.js + Express.js** dan data disimpan menggunakan **Supabase** sebagai database. API ini berfungsi untuk mengelola daftar sepatu yang sedang dicuci pada sebuah layanan jasa cuci sepatu secara digital.

API ini telah dideploy menggunakan **Vercel**, sehingga dapat diakses secara publik.

---

## Tujuan Proyek
1. Mengimplementasikan proses CRUD (Create, Read, Update, Delete) dalam REST API.
2. Meningkatkan pemahaman penggunaan Express.js sebagai backend framework.
3. Menyimpan data menggunakan database Supabase.
4. Menyediakan sistem pencatatan sederhana yang relevan dengan kebutuhan bisnis.

---

## Fitur Utama API

| Metode | Endpoint        | Deskripsi                                                                |
| ------ | ----------------| ------------------------------------------------------------------------ |
| GET    | /api/items      | Menampilkan seluruh daftar sepatu yang sedang dicuci.                    |
| GET    | /api/items/:id  | Menampilkan detail sepatu berdasarkan ID.                                |
| GET    | /api/items?status=Selesai | Menampilkan daftar sepatu berdasarkan status.                   |
| POST   | /api/items      | Menambahkan data sepatu baru.                                            |
| PUT    | /api/items/:id  | Memperbarui data sepatu tertentu.                                        |
| DELETE | /api/items/:id  | Menghapus data sepatu tertentu.                                          |

---

## Struktur Data di Supabase (Tabel `items`)

```json
{
  "id": "uuid",
  "customer_name": "string",
  "item_name": "string",
  "status": "Pending/Proses/Selesai",
  "price": 25000,
  "notes": "string",
  "tanggal_masuk": "date",
  "tanggal_selesai": "date|null"
}
````

---

## Contoh Request & Response

### GET /api/items

Response:

```json
[
  {
    "id": "f6bd26a0-0fc5-42df-b2c8-569b95df2df1",
    "customer_name": "Converse Chuck Taylor",
    "status": "Selesai",
    "tanggal_masuk": "2025-10-01",
    "tanggal_selesai": "2025-10-03"
  }
]
```

---

### POST /api/items

Request Body:

```json
{
  "customer_name": "Budi",
  "item_name": "Nike Air Max",
  "status": "Pending",
  "price": 25000,
  "notes": "Cuci + waxing",
  "tanggal_masuk": "2025-10-08"
}
```

Response:

```json
{ "message": "Data sepatu berhasil ditambahkan." }
```

---

### PUT /api/items/:id

Request Body:

```json
{
  "status": "Selesai",
  "tanggal_selesai": "2025-10-09"
}
```

Response:

```json
{ "message": "Status sepatu berhasil diperbarui." }
```

---

### DELETE /api/items/:id

Response:

```json
{ "message": "Data sepatu berhasil dihapus." }
```

---

## Teknologi yang Digunakan

* **Node.js** — server runtime
* **Express.js** — framework REST API
* **Supabase** — database Postgres + ORM
* **Vercel** — deployment serverless

---

## Instalasi & Menjalankan API Secara Lokal

```bash
git clone https://github.com/nailazza/shoe-wash-api.git
cd shoe-wash-api
npm install
```

Buat file `.env`:

```
SUPABASE_URL=https://xagxefwchsyhpomavouy.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhZ3hlZndjaHN5aHBvbWF2b3V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyOTMxNjgsImV4cCI6MjA3Njg2OTE2OH0.84CNQOU4l67LkBaJHy_tztopjfdqD0JfM30jQcglt9c
PORT=3000
PORT=3000
```

Jalankan server:

```bash
npm run dev
```

---

## Deploy Link Vercel

API publik dapat diakses via:

https://shoe-wash-api-three.vercel.app/api/items



## Repository GitHub

[https://github.com/nailazza/shoe-wash-api/](https://github.com/nailazza/shoe-wash-api/)




