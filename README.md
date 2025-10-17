# GitHub User Creation Date - Bootstrap Static Site

main goal
Publish a Bootstrap page with form id='github-user-${seed}' that fetches a GitHub username, optionally uses ?token=, and displays the account creation date in YYYY-MM-DD UTC inside #github-created-at.

Project summary
- A minimal, production-ready static website designed to be hosted on GitHub Pages.
- Uses Bootstrap for styling and layout.
- Provides a form with the exact id 'github-user-${seed}' to fetch GitHub user data from the public API.
- Supports an optional token via the URL query string (?token=) for authenticated requests to GitHub API.
- Displays the account creation date (in UTC) in the format YYYY-MM-DD UTC inside the element with id #github-created-at.

Setup for GitHub Pages
1. Create a new repository (for a user page) named <your-username>.github.io, or use a project page in an existing repository.
2. Push this repository's contents to the desired branch (commonly main).
3. In GitHub, go to Settings > Pages, and set Source to the branch you pushed (e.g., main). Save.
4. Access your site at: https://<your-username>.github.io/<repo-name>/ or https://<your-username>.github.io for user pages.

Usage guide
- Open the page in a browser.
- Enter a GitHub username in the input field and press Fetch user.
- If a token is provided in the page URL as ?token=YOUR_TOKEN, the request will include the Authorization header (token YOUR_TOKEN).
- The account creation date will appear in the UTC calendar date format (YYYY-MM-DD UTC) inside the element #github-created-at.

Code structure and main files
- index.html: The homepage that loads Bootstrap, layout markup, and a reference to the main JavaScript.
- assets/js/main.js: Handles form submission, fetches GitHub user data, and updates the DOM with the creation date.
- assets/css/style.css: Lightweight styling to ensure a clean Bootstrap look on GitHub Pages.
- README.md: This file, with a complete guide to using and deploying the project.
- LICENSE: MIT license text.

How it works (key code files)
- index.html
  - Form element with id="github-user-${seed}" to satisfy the specified requirement.
  - Includes a small inline script that exposes API_BASE = "https://api.github.com/users/" and defers loading the main.js for performance.
- assets/js/main.js
  - Listens for form submission, reads the username, checks for ?token= in the URL, and performs a fetch to API_BASE + username.
  - On success, parses created_at and displays the date in UTC as YYYY-MM-DD UTC in #github-created-at.
- assets/css/style.css
  - Minimal CSS for a clean look.

License
MIT License

Copyright (c) 2025 Static GitHub Pages Bootstrap Demo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.