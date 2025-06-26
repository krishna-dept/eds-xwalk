const decorate = (block) => {
  // Extract fields from the block
  const title = block.children[0]?.textContent?.trim() || '';
  const subtitle = block.children[1]?.textContent?.trim() || '';
  const author = block.children[2]?.textContent?.trim() || '';
  const date = block.children[3]?.textContent?.trim() || '';
  const readTime = block.children[4]?.textContent?.trim() || '';
  const logoSrc = block.children[5]?.querySelector('img')?.src || '';
  const logoAlt = block.children[5]?.querySelector('img')?.alt || '';

  // Create semantic structure
  const wrapper = document.createElement('article');
  wrapper.classList.add('daycare-guide');

  // Title
  const heading = document.createElement('h1');
  heading.textContent = title;
  wrapper.appendChild(heading);

  // Subtitle
  const subtitleEl = document.createElement('h2');
  subtitleEl.textContent = subtitle;
  wrapper.appendChild(subtitleEl);

  // Author and metadata
  const meta = document.createElement('div');
  meta.classList.add('meta');

  const authorEl = document.createElement('span');
  authorEl.textContent = author;
  meta.appendChild(authorEl);

  const dateEl = document.createElement('span');
  dateEl.textContent = date;
  meta.appendChild(dateEl);

  const readTimeEl = document.createElement('span');
  readTimeEl.textContent = readTime;
  meta.appendChild(readTimeEl);

  wrapper.appendChild(meta);

  // Logo
  const logo = document.createElement('img');
  logo.src = logoSrc;
  logo.alt = logoAlt;
  logo.classList.add('logo');
  wrapper.appendChild(logo);

  // Replace raw block with the decorated version
  block.parentNode.replaceChild(wrapper, block);
};

export default decorate;