const decorate = (block) => {
  // Extract fields from the block
  const category = block.children[0]?.textContent?.trim() || '';
  const title = block.children[1]?.textContent?.trim() || '';
  const author = block.children[2]?.textContent?.trim() || '';
  const date = block.children[3]?.textContent?.trim() || '';
  const readTime = block.children[4]?.textContent?.trim() || '';
  const logoSrc = block.children[5]?.querySelector('img')?.src || '';
  const logoAlt = block.children[5]?.querySelector('img')?.alt || '';

  // Create semantic structure
  const wrapper = document.createElement('article');
  wrapper.classList.add('daycare-guide');

  // Category
  const categoryEl = document.createElement('h2');
  categoryEl.textContent = category;
  categoryEl.classList.add('category');
  wrapper.appendChild(categoryEl);

  // Title
  const titleEl = document.createElement('h1');
  titleEl.textContent = title;
  wrapper.appendChild(titleEl);

  // Meta container
  const meta = document.createElement('div');
  meta.classList.add('meta');

  // Author and date-time container
  const authorDateTime = document.createElement('div');
  authorDateTime.classList.add('author-datetime');

  const authorEl = document.createElement('div');
  authorEl.textContent = author;
  authorDateTime.appendChild(authorEl);

  const dateEl = document.createElement('span');
  dateEl.textContent = date;
  dateEl.classList.add('date');
  authorDateTime.appendChild(dateEl);

  const separator = document.createElement('span');
  separator.textContent = '|';
  separator.classList.add('separator');
  authorDateTime.appendChild(separator);

  const readTimeEl = document.createElement('span');
  readTimeEl.textContent = readTime;
  authorDateTime.appendChild(readTimeEl);

  // Logo
  const logo = document.createElement('img');
  logo.src = logoSrc;
  logo.alt = logoAlt;
  logo.classList.add('logo');

  // Append logo and author-datetime side by side
  meta.appendChild(logo);
  meta.appendChild(authorDateTime);

  wrapper.appendChild(meta);

  // Replace raw block with the decorated version
  block.parentNode.replaceChild(wrapper, block);
};

export default decorate;