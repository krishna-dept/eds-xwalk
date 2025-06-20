import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const benefitItems = Array.from(block.children);

  benefitItems.forEach((item) => {
    const title = item.children[0]?.textContent?.trim() || '';
    const description = item.children[1]?.innerHTML?.trim() || '';
    const image = createOptimizedPicture(item.children[2], 'benefit-image', 'Benefit Image');

    // Wrap each benefit in a structured container
    const benefitWrapper = document.createElement('div');
    benefitWrapper.classList.add('benefit-item');
    benefitWrapper.setAttribute('role', 'article');

    benefitWrapper.innerHTML = `
      <div class="benefit-image-wrapper">
        ${image.outerHTML}
      </div>
      <div class="benefit-content">
        <h3 class="benefit-title">${title}</h3>
        <div class="benefit-description">${description}</div>
      </div>
    `;

    item.replaceWith(benefitWrapper);
  });

  // Wrap the entire block in a semantic section
  const blockWrapper = document.createElement('section');
  blockWrapper.classList.add('emi-calculator-benefits');
  blockWrapper.setAttribute('role', 'region');
  blockWrapper.setAttribute('aria-labelledby', 'emi-calculator-heading');

  blockWrapper.innerHTML = `
    <h2 id="emi-calculator-heading" class="emi-calculator-heading">What are the benefits of using a Personal Loan EMI Calculator?</h2>
    <div class="benefits-grid">
      ${benefitItems.map((item) => item.outerHTML).join('')}
    </div>
  `;

  block.replaceWith(blockWrapper);
}
