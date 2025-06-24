export default function decorate(block) {
  const title = block.children[0].children[0]?.textContent?.trim() || '';
  const subtitle = block.children[0].children[1]?.textContent?.trim() || '';
  const author = block.children[0].children[2]?.textContent?.trim() || '';
  const date = block.children[0].children[3]?.textContent?.trim() || '';
  const readTime = block.children[0].children[4]?.textContent?.trim() || '';

  // Transform the raw div structure into semantic HTML
  block.innerHTML = `
    <article class="daycare-guide">
      <header class="daycare-guide-header">
        <h1 class="daycare-guide-title">${title}</h1>
        <h2 class="daycare-guide-subtitle">${subtitle}</h2>
      </header>
      <footer class="daycare-guide-footer">
        <div class="daycare-guide-meta">
          <span class="daycare-guide-author">${author}</span>
          <span class="daycare-guide-date">${date}</span>
          <span class="daycare-guide-read-time">${readTime}</span>
        </div>
      </footer>
    </article>
  `;
}