export default function decorate(block) {
  const heading = block.children[0]?.textContent?.trim() || '';
  const subheading = block.children[1]?.textContent?.trim() || '';
  const author = block.children[2]?.textContent?.trim() || '';
  const date = block.children[3]?.textContent?.trim() || '';
  const readTime = block.children[4]?.textContent?.trim() || '';
  const logo = block.children[5];

  // Transform into semantic HTML structure
  const wrapper = document.createElement('div');
  wrapper.classList.add('daycare-business-guide');

  const header = document.createElement('header');
  header.classList.add('daycare-business-guide__header');

  const headingElement = document.createElement('h1');
  headingElement.textContent = heading;
  headingElement.classList.add('daycare-business-guide__heading');

  const subheadingElement = document.createElement('h2');
  subheadingElement.textContent = subheading;
  subheadingElement.classList.add('daycare-business-guide__subheading');

  header.appendChild(headingElement);
  header.appendChild(subheadingElement);

  const meta = document.createElement('div');
  meta.classList.add('daycare-business-guide__meta');

  const authorElement = document.createElement('span');
  authorElement.textContent = author;
  authorElement.classList.add('daycare-business-guide__author');

  const dateElement = document.createElement('span');
  dateElement.textContent = date;
  dateElement.classList.add('daycare-business-guide__date');

  const readTimeElement = document.createElement('span');
  readTimeElement.textContent = readTime;
  readTimeElement.classList.add('daycare-business-guide__read-time');

  meta.appendChild(authorElement);
  meta.appendChild(dateElement);
  meta.appendChild(readTimeElement);

  const logoElement = logo?.querySelector('picture') || null;
  if (logoElement) {
    logoElement.classList.add('daycare-business-guide__logo');
    meta.appendChild(logoElement);
  }

  wrapper.appendChild(header);
  wrapper.appendChild(meta);

  block.replaceWith(wrapper);
}
