import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const { title, subtitle, description, image, ctaText, ctaLink } = parseBlockFields(block);
  console.log(title, subtitle, description, image, ctaText, ctaLink);
  const isAuthoring = block.dataset.auth === 'true';

  // Transform the block into semantic HTML
  const blockRoot = document.createElement('article');
  blockRoot.classList.add('daycare-business');

  if (isAuthoring) {
    blockRoot.classList.add('authoring');
  } else {
    blockRoot.classList.add('published');
  }

  // Add the title and subtitle
  const header = document.createElement('header');
  header.classList.add('daycare-business__header');

  if (title) {
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    titleElement.classList.add('daycare-business__title');
    header.appendChild(titleElement);
  }

  if (subtitle) {
    const subtitleElement = document.createElement('p');
    subtitleElement.textContent = subtitle;
    subtitleElement.classList.add('daycare-business__subtitle');
    header.appendChild(subtitleElement);
  }

  blockRoot.appendChild(header);

  // Add the description
  if (description) {
    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('daycare-business__description');
    descriptionElement.innerHTML = description;
    blockRoot.appendChild(descriptionElement);
  }

  // Add the image
  if (image) {
    const imageElement = createOptimizedPicture(image, 'Daycare Business Image', false);
    imageElement.classList.add('daycare-business__image');
    blockRoot.appendChild(imageElement);
  }

  // Add the CTA
  if (ctaText && ctaLink) {
    const ctaElement = document.createElement('a');
    ctaElement.href = ctaLink;
    ctaElement.textContent = ctaText;
    ctaElement.classList.add('daycare-business__cta');
    ctaElement.setAttribute('role', 'button');
    blockRoot.appendChild(ctaElement);
  }

  block.replaceWith(blockRoot);
}

function parseBlockFields(block) {
  debugger;
  return {
    title: block.children[0].children[0]?.textContent?.trim() || '',
    subtitle: block.children[0].children[1]?.textContent?.trim() || '',
    description: block.children[0].children[2]?.innerHTML?.trim() || '',
    image: block.children[0].children[3]?.querySelector('picture') || null,
    ctaText: block.children[0].children[4]?.textContent?.trim() || '',
    ctaLink: block.children[0].children[5]?.querySelector('a')?.href || ''
  };
}
