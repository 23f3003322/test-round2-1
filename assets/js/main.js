(function() {
  const formId = "github-user-${seed}";
  const form = document.getElementById(formId);
  const createdAtEl = document.getElementById("github-created-at");
  createdAtEl.textContent = "Awaiting input";

  const apiBase = window.API_BASE || "https://api.github.com/users/";

  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const usernameInput = form.querySelector('[name="username"]');
    const username = (usernameInput && usernameInput.value || "").trim();
    if (!username) {
      createdAtEl.textContent = "Please enter a username";
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const headers = token ? { "Authorization": "token " + token } : {};

    try {
      const resp = await fetch(apiBase + encodeURIComponent(username), { headers });
      if (!resp.ok) {
        createdAtEl.textContent = "User not found or API error";
        return;
      }
      const data = await resp.json();
      if (data && data.created_at) {
        const d = new Date(data.created_at);
        const iso = d.toISOString().slice(0, 10);
        createdAtEl.textContent = iso + " UTC";
      } else {
        createdAtEl.textContent = "Date unavailable";
      }
    } catch (err) {
      createdAtEl.textContent = "Error fetching data";
    }
  });
})();
