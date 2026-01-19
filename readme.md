# Dockerized Node.js + React + Nginx

Repositori ini berisi contoh aplikasi full-stack sederhana yang dikemas menggunakan Docker dan Docker Compose, dengan arsitektur mendekati praktik production.

---

## Tujuan Project

Project ini bertujuan untuk mendemonstrasikan:

- Penggunaan Docker Compose untuk multi-service
- Nginx sebagai reverse proxy
- Networking internal antar container
- Healthcheck di setiap service
- Dependency antar service menggunakan `depends_on`
- SQLite embedded di backend
- File database dipersist (bukan di layer image)
- Data tidak hilang walau container restart

---

## Arsitektur
Client > Nginx (Reverse Proxy) > Frontend (React) > Backend (Node.js / Express) > Database (SQLite)

Pastikan sudah terinstall:
- Docker >= 20.x
- Docker Compose v2
- Git

Instalasi:
```bash
#Clone Repo
git clone https://github.com/USERNAME/simple-app.git
cd simple-app
docker compose up -d --build


