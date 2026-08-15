# AURUM — Restaurant Landing Page · Production v2

Premium restaurant portfolio project built with **HTML5, CSS3 and Vanilla JavaScript**.

## Highlights

- Luxury 2026-inspired editorial UI
- Fully responsive layout
- Mobile navigation
- Interactive menu filtering
- Reservation modal and client-side validation
- Accessible labels, keyboard controls and skip link
- `prefers-reduced-motion` support
- SEO meta description
- Open Graph metadata
- SVG favicon and social preview
- IntersectionObserver reveal animations
- No framework or npm dependency
- GitHub Pages deployment workflow

## Run locally

Open `index.html` directly or use a local static server.

Example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages

1. Create a repository named `aurum-restaurant`.
2. Upload the project.
3. Push to the `main` branch.
4. Open **Settings → Pages**.
5. Select **GitHub Actions** as the source.
6. The workflow in `.github/workflows/deploy.yml` deploys the static site.

## Security architecture

This static demo deliberately sends no reservation data to a server. For a real restaurant, connect the form to a backend with:

- server-side validation
- authentication/authorization where required
- rate limiting
- CSRF protection where applicable
- input sanitization
- secure HTTP headers
- HTTPS
- secrets stored as environment variables
- database access restricted to the server

Never put database credentials or private API keys in frontend JavaScript.

## Performance

For production image assets, download and self-host optimized AVIF/WebP images, use responsive `srcset`, and preload only critical assets. The current remote Unsplash images are placeholders for the portfolio demo.