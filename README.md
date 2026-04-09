# X-NoTES

![Last Modified](https://img.shields.io/badge/last%20modified-April%202026-blue)
![Version](https://img.shields.io/badge/version-0.1-green)
![License](https://img.shields.io/badge/license-MIT-yellow)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows-lightgray)

A cross-platform sticky notes desktop app built with ReactJS and Electron.

---

## Getting Started
 
### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Clone the Repository
```bash
git clone https://github.com/solisware/x-notes.git
cd x-notes
npm install
```
> **Note:** `--legacy-peer-deps` is required due to peer dependency conflicts between some packages and React 18. This is a known compatibility issue and does not affect the app's functionality.

### Run in Development Mode
```bash
npm run electron:dev
```

This starts the React dev server and Electron concurrently. The app will reload automatically on code changes.
> **Note:** Changes to `electron/electron.ts` or `electron/preload.ts` require a full restart of the dev process to take effect.

---

## Building for Production
 
Build the app:
```bash
npm run build
```
> **Note:** This step will trigger automatically when running any of the `dist` targets.
 
### Distribute for macOS
```bash
npm run dist-mac
```
Output: `dist/` — produces a `.dmg` installer.

### Distribute for Windows
```bash
npm run dist-win
```
Output: `dist/` — produces an NSIS `.exe` installer.

---
 
## Project Structure
```
x-notes/
├── electron/          # Electron main process, preload, and menu
├── src/               # React renderer (components, pages, theme, models)
├── assets/            # App icons and installer assets
├── build/             # Compiled output (generated, do not edit or commit)
├── dist/              # Distribution packages (generated, do not edit or commit)
└── public/            # Static assets for the React app
```

---
 
## Contributing
Contributions are welcome — whether that's bug fixes, new features, documentation improvements, or raising issues and feature requests.

### Raising Issues & Feature Requests
Found a bug or have an idea? [Open an issue](https://github.com/SolisWare/sticky-notes-desktop/issues) and describe it clearly. For feature requests, explain the use case and why it would be valuable.

### Submitting a Pull Request
1. Fork the repository
2. Create a feature branch from `develop`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit with clear, descriptive messages
4. Push your branch and open a Pull Request against `develop` branch

### PR Review Policy
All pull requests must be reviewed and approved by the **SolisWare team** before merging. We aim to review PRs promptly. Please be patient — we appreciate your effort.

---

## License
X-NoTES is open source software licensed under the [MIT License](LICENSE.txt).
 
You are free to use, modify, and distribute this software. Attribution is not required but is greatly appreciated — if you use our code in your project, a mention or a link back to this repository means a lot to us.
