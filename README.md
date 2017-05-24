NW.js + Svelte + webpack + nwjs-builder-phoenix

Svelte is modern JS UI framework, which runs at compile time, not in the browser. It generates JS.

- `app` - root directory for NW.js.
- `app/index.html` - default file (entry point) for NW.js.
- `src` - application sources.
- `src/index.js` - entry point of the app.
- `src/scripts/prepare_dist.js` - script to change field `main` in `package.json` in the build.
- `npm start` starts webpack-dev-server and NW.js with it.
- `npm run webpack` calls webpack which compiles all required JS-code (including node modules) to `app/index.js` and all required CSS to `app/styles.css`.
- `npm run dist` calls webpack and then makes the build to the directory `dist`.
