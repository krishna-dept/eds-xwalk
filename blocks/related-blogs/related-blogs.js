export default function decorate(block) {
  // Parse the raw div structure
  debugger;
  const blogItems = Array.from(block.children);

  // Transform each blog item into a semantic structure
  const transformedItems = blogItems.map((item) => {
    const title = item.children[0]?.textContent?.trim() || '';
    const category = item.children[1]?.textContent?.trim() || '';
    const date = item.children[2]?.textContent?.trim() || '';
    const readTime = item.children[3]?.textContent?.trim() || '';
    const image = item.children[4]?.querySelector('picture') || null;

    return `
          <article class="blog-item">
            <div class="blog-image">
              ${image ? image.outerHTML : ''}
            </div>
            <div class="blog-content">
              <h3 class="blog-title">${title}</h3>
              <p class="blog-category">${category}</p>
              <p class="blog-meta">
                <span class="blog-date">${date}</span> •
                <span class="blog-read-time">${readTime}</span>
              </p>
            </div>
          </article>
        `;
  }).join('');

  // Wrap the transformed items in a container
  block.innerHTML = `
        <div class="related-blogs">
          ${transformedItems}
        </div>
      `;
}
