# Copilot Instructions — game-ia

Purpose: Help AI coding agents be productive immediately in this small static web project.

- **Project type:** Single-page static web app (no build system, no backend). Entry point: `index.html`.
- **Primary languages:** HTML, CSS, JavaScript (ES6). Styling: `style.css`. Logic: `script.js`.

Quick architecture / big picture
- **UI + content:** `index.html` contains the full page structure and all game containers (robot, missions, quiz area). The DOM IDs used by scripts are authoritative (`#game-container`, `#question-container`, `#robot-text`, `#start-btn`, `#next-btn`, `#progress-bar`, `#result-container`).
- **Client logic:** `script.js` houses all interactive logic: the typewriter for the mascot (`robotMsgs` / `typeWriter()`), quiz lifecycle (`startGame()`, `setNextQuestion()`, `showQuestion()`), and the `questions` data array. Modifications to game behavior are most often made here.
- **Styling & visibility:** `style.css` controls visual state. The project uses a `.hidden` class to toggle visibility and `.fade-in` for simple animations. Button success/fail state uses `btn.correct` / `btn.wrong` classes.

Key files to inspect and edit
- `script.js` — edit `const questions = [...]` to change quiz content. Each question object has `question`, `answers` (array of `{text, correct}`) and `explanation` fields. Example entry:

  ```js
  { question: "...", answers: [{text: "...", correct: true}], explanation: "..." }
  ```

- `index.html` — layout and IDs. If you add DOM elements, update `script.js` selectors accordingly.
- `style.css` — theme and classes controlling visibility/feedback. Use existing classes for consistent UX (`hidden`, `btn`, `correct`, `wrong`, `fade-in`).

Developer workflows (how to run / test locally)
- There is no build step. To run locally, open `index.html` in a browser or serve with a simple static server. Examples:

  - Open file: double-click `index.html` or `file://` in browser.
  - Quick HTTP server (recommended to avoid CORS or asset issues):

    ```bash
    # from project root
    python3 -m http.server 8000
    # or (node): npx http-server . -p 8000
    ```

Project-specific conventions & patterns
- **Single-file logic:** All interactive behavior lives in `script.js` — prefer adding small, well-scoped functions there rather than creating many files.
- **Data-first quiz:** The quiz is data-driven via `questions`. To add features (e.g., categories, difficulty), extend the question objects and update `setNextQuestion()` and `showQuestion()` accordingly.
- **DOM-driven state:** Visibility toggles use `classList.add('hidden')` / `remove('hidden')`. Progress uses `#progress-bar.style.width` updated in `updateProgressBar()`.
- **No package/dependency management:** External assets (icons, textures) are loaded from CDNs inside `index.html`/CSS. Be cautious updating URLs.

Integration & external dependencies
- **External assets:** Robot and background icons are hotlinked (CDN URLs in `index.html` and `style.css`). No external JS libraries are included.
- **No server/back-end:** All logic and data are client-side. If adding analytics or a backend, document API endpoints and auth separately.

Editing & PR guidelines for agents
- Make minimal, focused changes. Keep UI IDs and class names stable unless the change includes consistent updates to `index.html`, `script.js`, and `style.css`.
- When modifying `questions`, preserve the object shape to avoid runtime errors.
- Add a short note in `README.md` for any behavioral changes that affect how a user plays the game.

What I looked at when drafting this file
- `index.html`, `script.js`, `style.css`, `README.md` in the repository root.

If anything here is unclear or you'd like deeper coverage (e.g., adding linting, tests, or expanding the data model for localization), tell me which area to expand and I will update this file.
