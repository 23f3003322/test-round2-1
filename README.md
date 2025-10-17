# Data-Driven Static Site

Main Goal:
Provide a lightweight, accessible, data-driven static site with search and date display.

What’s included:
- A responsive, data-driven listing rendered from a static JSON data source (data/data.json).
- A client-side search that filters items in real-time as you type.
- A live date display in the header.
- Clean, accessible HTML structure and lightweight CSS.
- Fully static deployment-friendly: no server required beyond GitHub Pages.

How to use
- Files:
  - index.html: entry point. It renders a header with the main goal, a live date, a search input, and a grid of data-driven cards.
  - data/data.json: sample dataset. Edit to add/remove items.
  - assets/js/main.js: client-side logic for loading data, rendering items, and search filtering.
  - assets/css/style.css: styling for layout and components.
  - README.md: this documentation.
- GitHub Pages deployment: push to gh-pages branch or main/master depending on your repo settings. The site will be available at https://<username>.github.io/<repo>/

How it works
- On load, the app fetches data from data/data.json and renders a grid of cards.
- The search input filters the rendered cards by title or description in real time.
- The header shows the current date for a small but useful touch.

Data format
- data.json is an array of objects with the following shape:
  {
    "id": 1,
    "title": "Item title",
    "date": "YYYY-MM-DD",
    "description": "Short description."
  }

Extending the site
- To add items, edit data/data.json and refresh the page. The UI will re-render with the new data.
- You can adjust styling in assets/css/style.css to match your design system.

Notes
- All existing features are preserved. The previous code’s structure is kept, and new enhancements are added incrementally.
- Accessibility: semantic headings, ARIA labels, and readable contrast are maintained.

Enjoy building with a lightweight, fast static site powered by a simple JSON dataset and client-side rendering.
