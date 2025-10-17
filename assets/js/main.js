(function () {
  const dateEl = document.getElementById('currentDate');
  const searchInput = document.getElementById('searchInput');
  const itemsContainer = document.getElementById('items');
  const emptyHint = document.getElementById('emptyHint');
  let data = [];

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function render(list) {
    itemsContainer.innerHTML = '';
    if (!list || list.length === 0) {
      emptyHint.style.display = 'block';
      return;
    }
    emptyHint.style.display = 'none';
    list.forEach(item => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <div class="card-meta">${escapeHtml(formatDate(item.date))}</div>
        <p class="card-desc">${escapeHtml(item.description)}</p>
      `;
      itemsContainer.appendChild(card);
    });
  }

  function filterAndRender(query) {
    const q = (query || '').toLowerCase();
    const filtered = data.filter(d =>
      (d.title || '').toLowerCase().includes(q) ||
      (d.description || '').toLowerCase().includes(q)
    );
    render(filtered);
  }

  function loadData() {
    fetch('./data/data.json')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(d => {
        data = Array.isArray(d) ? d : [];
        render(data);
      })
      .catch(() => {
        itemsContainer.innerHTML = '<p class="error">Failed to load data.</p>';
      });
  }

  // date
  function setDateNow() {
    const now = new Date();
    if (dateEl) dateEl.textContent = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  setDateNow();
  loadData();

  if (searchInput) {
    searchInput.addEventListener('input', (e) => filterAndRender(e.target.value));
  }
})();
