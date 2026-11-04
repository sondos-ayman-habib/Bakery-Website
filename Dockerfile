# syntax=docker/dockerfile:1

# ---------- Stage 1: build (minify CSS/JS) ----------
FROM node:20-alpine AS builder
WORKDIR /build
COPY src/ ./src/
RUN npm install --no-save --no-audit --no-fund esbuild@0.24.0 \
 && npx esbuild src/style.css --minify --allow-overwrite --outfile=src/style.css \
 && npx esbuild src/script.js --minify --allow-overwrite --outfile=src/script.js

# ---------- Stage 2: runtime (tiny nginx image) ----------
FROM nginx:1.27-alpine
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /build/src/ /usr/share/nginx/html/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
