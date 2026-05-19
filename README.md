# demo-prototype — Enterprise landing (Gembox)

React + Vite prototype of the Forage enterprise landing page. Uses Gembox tokens, components, and the internal-use site banner (no access gate).

## Run locally

**Easiest — dev server (live reload while you edit):**

```bash
npm install   # first time only
npm start
```

Or double-click **`start.sh`** in Finder (macOS).

Vite prints a URL, usually `http://localhost:5173/`.

**Open a built copy in the browser (no dev server):**

```bash
npm run serve
```

Builds to `dist/`, starts a tiny static server on `http://127.0.0.1:8765/`, and opens your browser.

**`file://` (open `dist/index.html` directly):**

```bash
npm run open
```

Uses relative asset paths (`base: './'`). Some browsers are stricter with `file://` modules; prefer `npm run serve` if anything fails to load.

## Live site (GitHub Pages)

https://dennis-best.github.io/demo-prototype/

## Gembox integration

See [Gembox Cursor Integration](https://www.notion.so/34150ba3919d804bac88fed97249ed3a) for workflow and tokens.

## GitHub Pages deploy

Pushes to `main` run `.github/workflows/deploy-pages.yml` (`npm run build:pages` → `dist/`).
