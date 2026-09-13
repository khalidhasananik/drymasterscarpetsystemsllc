# Dry Masters Carpet Systems LLC

React + Vite + Tailwind CSS marketing site, developed locally and deployed on Vercel at `drymasterscarpetsystemsllc.vercel.app`.

## Development Server

Run `npm run dev` to start the Vite dev server (default `http://localhost:5173`). It is not auto-started.

- Hot reload: Changes to source files are reflected immediately

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - Primary application component and the usual starting point for UI work
- `src/index.css` - Global CSS entrypoint and Tailwind CSS v4 import
- `index.html` - Vite HTML shell containing the `#root` element, static `<head>` metadata (title, description, Open Graph/Twitter tags), and the script tag loading `src/main.tsx`
- `package.json` - Project dependencies and the Vite build, development, preview, and formatting scripts
- `vite.config.ts` - Vite configuration with React, Tailwind CSS v4, and the `@` alias for `src`
- `.mise.toml` - Toolchain version for Node.js

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt
- Package manager: npm (`package-lock.json` is authoritative)

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/index.css`. This scaffold does not need a Tailwind config file or PostCSS config.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

## Metadata / SEO

`index.html` holds all `<head>` metadata directly (title, description, `og:*`, `twitter:*`) — there is no build-time injection step. Update it by hand when copy, the preview image, or the deployed URL changes. The `<meta name="robots">` tag currently blocks indexing (`noindex, nofollow`) because the Vercel URL is a staging deployment; flip it when the site is ready to go live at its production domain.

`public/robots.txt` disallows `User-agent: *` (search engines) but explicitly `Allow: /` for social link-preview crawlers (`facebookexternalhit`, `Facebot`, `Twitterbot`, `LinkedInBot`, `Pinterest`/`Pinterestbot`, `WhatsApp`, `Slackbot`, `Discordbot`, `TelegramBot`) — a blanket `Disallow: /` blocks those crawlers too, which silently breaks link previews in Facebook/Instagram/Messenger/WhatsApp/etc. even when the OG tags themselves are correct (Meta's Sharing Debugger reports this as a 403/robots.txt block). Keep this allowlist in sync if new social platforms need previews, and don't re-blanket-disallow it without re-adding the crawler exceptions.

## Deployment

Hosted on Vercel. Pushing to `main` (or opening a PR) triggers a deploy; there is no separate build/deploy script beyond `npm run build`.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.
