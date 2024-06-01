# Deploy Tutorial

https://www.youtube.com/watch?v=cJvvCxjqzTc

1. push code to `main` branch
2. In `App.jsx`, update `createBrowserRouter` to `createHashRouter`
3. add `homepage` in `package.json` ("homepage": "https://jingwu2121.github.io/react3/",)
4. In `vite.config`, add `base`
5. `npm install gh-pages --save-dev`
6. Add in `package.json`
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
7. Commit changes
8. Local run `npm run deploy` and wait for the git action to complete