# React Hello World

A simple Vite + React Hello World app for GitHub Pages.

Custom domain:

```text
react.learnwithchampak.live
```

## Local run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Push to the `main` branch. GitHub Actions will build the app and deploy the `dist` folder to GitHub Pages.

In GitHub repository settings, use:

```text
Settings → Pages → Source → GitHub Actions
```

DNS record:

```text
Type: CNAME
Name: react
Value: programmer-s-picnic.github.io
```
