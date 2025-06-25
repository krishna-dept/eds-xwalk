export default function decorate(block) {
  // Extract field values from raw divs
  const fields = {
    category: block.children[0]?.textContent?.trim() || '',
    title: block.children[1]?.textContent?.trim() || '',
    subtitle: block.children[2]?.textContent?.trim() || '',
    author: block.children[3]?.textContent?.trim() || '',
    date: block.children[4]?.textContent?.trim() || '',
    readTime: block.children[5]?.textContent?.trim() || ''
  };

  // Create the structured HTML
  const wrapper = document.createElement('div');
  wrapper.classList.add('article-title');

  const category = document.createElement('div');
  category.classList.add('category');
  category.textContent = fields.category;

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = fields.title;

  const subtitle = document.createElement('h2');
  subtitle.classList.add('subtitle');
  subtitle.textContent = fields.subtitle;

  const meta = document.createElement('div');
  meta.classList.add('meta');
  meta.innerHTML = `
    <span class="author">${fields.author}</span>
    <span class="date">${fields.date}</span>
    <span class="read-time">${fields.readTime}</span>
  `;

  // Append elements to the wrapper
  wrapper.appendChild(category);
  wrapper.appendChild(title);
  wrapper.appendChild(subtitle);
  wrapper.appendChild(meta);

  // Replace the original block with the structured HTML
  block.parentNode.replaceChild(wrapper, block);
}