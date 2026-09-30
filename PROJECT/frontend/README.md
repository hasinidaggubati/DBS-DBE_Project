# AgriSahayak Frontend

Static HTML/CSS/JavaScript frontend containing the complete farmer-facing UI.

## Start
1. Start the AgriSahayak backend first at `http://localhost:8080`.
2. Open this folder in VS Code.
3. Use the **Live Server** extension and open `index.html`, or serve the folder with any local static web server.

The backend URL is configured at the top of `app.js`:

```js
const API_BASE = "http://localhost:8080";
```

## Features
- Login and registration
- Online crop recommendation
- Browser-side offline crop recommendation fallback
- Offline crop-data entry and local storage
- Automatic pending sync after internet returns and the farmer logs in
- Previous crop history
- Live weather and 7-day forecast
- Multilingual UI: English, Hindi, Telugu and Tamil
- Farmer tools/calculators
