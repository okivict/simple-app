# Docker Node + React + Nginx (Sample DevOps App)

Sample application to demonstrate:
- Docker Compose
- Nginx reverse proxy
- Internal networking
- Healthcheck per service

## Architecture

Client → Nginx → Backend / Frontend

## Services
- Backend: Node.js + Express
- Frontend: React (Vite)
- Reverse Proxy: Nginx

## Run locally

```bash
docker compose up -d --build
