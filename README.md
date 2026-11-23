# Patsakorn Portfolio (Next.js)

Personal portfolio website built with Next.js App Router and TypeScript.

## Run locally

1. Install Node.js 20.9 or newer.
2. Open this project folder in VS Code.
3. In terminal, run:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000

## Build

```bash
npm run build
```

This project is configured for static export to GitHub Pages (`out/`) using `output: 'export'`.

## Deploy to GitHub Pages

The included GitHub Actions workflow builds and deploys the static output. Create a repository named `patsakorn-portfolio`, push this project to the `main` branch, then in GitHub Settings > Pages select **GitHub Actions** as the source.

The config uses `/patsakorn-portfolio` as the production base path. If the repository name changes, update `basePath` in `next.config.ts` and the workflow target as appropriate.
