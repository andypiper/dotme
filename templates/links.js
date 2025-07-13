import { replaceEmojisWithOpenMoji } from '../utils/emoji.js';

function renderLink(link, personalUrl) {
  const classes = link.url
    ? link.url.replace(/[^a-z0-9]/gi, "-").toLowerCase()
    : "";
  
  // Determine rel attribute based on URL pattern
  let rel = '';
  if (link.url && personalUrl) {
    // Extract domain from personal URL for comparison
    const personalDomain = new URL(personalUrl).hostname;
    const linkDomain = new URL(link.url).hostname;
    
    // Same domain as personal URL gets rel="me"
    if (linkDomain === personalDomain) {
      rel = ' rel="me"';
    } else {
      rel = ' rel="bookmark"';
    }
  } else if (link.url) {
    rel = ' rel="bookmark"';
  }
  
  return `
    <li class="${classes}">
      <a href="${link.url}"${rel}>
        ${link.img ? `<img src="${link.img}" alt="${link.altText}" />` : ""}
        <span>${replaceEmojisWithOpenMoji(link.text)}</span>
      </a>
    </li>
  `;
}

export const renderLinks = (links, settings) => `
    <ul class="link-list">
      ${links.map(link => renderLink(link, settings.url)).join("")}
    </ul>
  `;
