function renderLink(link) {
  const classes = link.url
    ? link.url.replace(/[^a-z0-9]/gi, "-").toLowerCase()
    : "";
  // This function now returns a string
  return `
    <li class="${classes}">
      <a href="${link.url}">
        ${link.img ? `<img src="${link.img}" alt="${link.altText}" />` : ""}
        <span>${link.text}</span>
      </a>
    </li>
  `;
}

// This function now returns a string
export const renderLinks = (links) => `
    <ul class="link-list">
      ${links.map(renderLink).join("")}
    </ul>
  `;
