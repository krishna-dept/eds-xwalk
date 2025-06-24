import { createOptimizedPicture } from '../../scripts/aem.js';

    export default function decorate(block) {
      // Parse the raw div structure
      const blogItems = Array.from(block.children);

      // Transform each blog item into semantic HTML
      blogItems.forEach((item) => {
        const thumbnail = item.children[0]?.querySelector('picture');
        const category = item.children[1]?.textContent?.trim() || '';
        const title = item.children[2]?.textContent?.trim() || '';
        const date = item.children[3]?.textContent?.trim() || '';
        const readTime = item.children[4]?.textContent?.trim() || '';

        // Optimize the thumbnail image
        // if (thumbnail) {
        //   createOptimizedPicture(thumbnail, 'fill', false, item.parentElement);
        // }

        // Wrap the content in semantic HTML
        item.innerHTML = `
          <article class="blog-item">
            <div class="blog-thumbnail">
              ${thumbnail ? thumbnail.outerHTML : ''}
            </div>
            <div class="blog-content">
              <span class="blog-category">${category}</span>
              <h3 class="blog-title">${title}</h3>
              <div class="blog-meta">
                <span class="blog-date">${date}</span>
                <span class="blog-read-time">${readTime}</span>
              </div>
            </div>
          </article>
        `;
      });
    }