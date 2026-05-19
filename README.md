# demo-prototype — Enterprise landing (Gembox)

React + Vite prototype of the Forage enterprise landing page. Uses Gembox tokens, components, and the internal-use site banner.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/`).

Production build preview (matches GitHub Pages base path):

```bash
GITHUB_PAGES=true npm run build
npm run preview
```

## Live site

https://dennis-best.github.io/demo-prototype/

## Gembox integration

See [Gembox Cursor Integration](https://www.notion.so/34150ba3919d804bac88fed97249ed3a) for workflow and tokens.

## GitHub Pages

Pushes to `main` run `.github/workflows/deploy-pages.yml` (Vite build → `dist/`).
