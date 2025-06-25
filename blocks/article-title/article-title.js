export default function decorate(block) {
  const title = block.children[0]?.textContent?.trim() || '';
  const subtitle = block.children[1]?.textContent?.trim() || '';
  const author = block.children[2]?.textContent?.trim() || '';
  const date = block.children[3]?.textContent?.trim() || '';
  const readTime = block.children[4]?.textContent?.trim() || '';
  const logo = block.children[5]?.querySelector('picture') || null;

  // Create the transformed structure
  const header = document.createElement('header');
  header.classList.add('article-title');

  const logoElement = logo ? logo.cloneNode(true) : null;
  if (logoElement) {
    logoElement.classList.add('logo');
    header.appendChild(logoElement);
  }

  const titleElement = document.createElement('h1');
  titleElement.textContent = title;

  const subtitleElement = document.createElement('p');
  subtitleElement.textContent = subtitle;
  subtitleElement.classList.add('subtitle');

  const meta = document.createElement('div');
  meta.classList.add('meta');

  const authorElement = document.createElement('span');
  authorElement.textContent = author;
  authorElement.classList.add('author');

  const dateElement = document.createElement('span');
  dateElement.textContent = date;
  dateElement.classList.add('date');

  const readTimeElement = document.createElement('span');
  readTimeElement.textContent = readTime;
  readTimeElement.classList.add('read-time');

  meta.appendChild(authorElement);
  meta.appendChild(document.createTextNode(' • '));
  meta.appendChild(dateElement);
  meta.appendChild(document.createTextNode(' • '));
  meta.appendChild(readTimeElement);

  header.appendChild(logoElement);
  header.appendChild(titleElement);
  header.appendChild(subtitleElement);
  header.appendChild(meta);

  block.appendChild(header);
}