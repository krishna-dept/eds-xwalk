export default function decorate(block) {
  // Parse configuration and items
  const configuration = {
    layout: block.children[0]?.textContent?.trim() || 'default',
    columns: parseInt(block.children[1]?.textContent?.trim() || '2', 10)
  };

  const items = Array.from(block.children).slice(2);

  // Process each blog item
  const blogItems = items.map((item) => {
    return {
      title: item.children[0]?.textContent?.trim() || '',
      date: item.children[1]?.textContent?.trim() || '',
      readTime: item.children[2]?.textContent?.trim() || '',
      image: item.children[3]?.querySelector('picture') || null,
      description: item.children[4]?.innerHTML || '',
      category: item.children[5]?.textContent?.trim() || ''
    };
  });

  // Transform the block into semantic HTML
  const wrapper = document.createElement('section');
  wrapper.classList.add('blogs-component');

  const container = document.createElement('div');
  container.classList.add('blogs-container');

  blogItems.forEach((item) => {
    const article = document.createElement('article');
    article.classList.add('blog-item');

    const header = document.createElement('header');
    header.classList.add('blog-header');

    const title = document.createElement('h3');
    title.textContent = item.title;
    header.appendChild(title);

    const meta = document.createElement('div');
    meta.classList.add('blog-meta');
    meta.innerHTML = `<span>${item.date}</span> • <span>${item.readTime}</span>`;
    header.appendChild(meta);

    article.appendChild(header);

    if (item.image) {
      const figure = document.createElement('figure');
      figure.classList.add('blog-image');
      figure.appendChild(item.image);
      article.appendChild(figure);
    }

    const content = document.createElement('div');
    content.classList.add('blog-content');
    content.innerHTML = item.description;
    article.appendChild(content);

    const footer = document.createElement('footer');
    footer.classList.add('blog-footer');
    footer.textContent = item.category;
    article.appendChild(footer);

    container.appendChild(article);
  });

  wrapper.appendChild(container);
  block.parentNode.replaceChild(wrapper, block);
}