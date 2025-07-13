import { replaceEmojisWithOpenMoji } from '../utils/emoji.js';

export const renderHeader = (settings) => `<div class="h-card">
  <!-- Avatar Image -->
  <!-- fades between two images on hover; remove the second img if not wanted -->

  <div class="avatar-container">
    <img src="${settings.avatarImage}" width="200" height="200" class="avatar u-photo" alt="${settings.name}" />
    <img src="${settings.avatarImageAlt}" width="200" height="200" class="avatar avatar-hover" alt="${settings.name}" loading="lazy" />
  </div>
  <h1 class="name p-name">${settings.name}</h1>
  <div class="subhead p-note">${replaceEmojisWithOpenMoji(settings.bio)}</div>
  ${settings.url ? `<a class="u-url" href="${settings.url}" style="display:none">${settings.url}</a>` : ''}
  ${settings.locality ? `<span class="p-locality" style="display:none">${settings.locality}</span>` : ''}
  ${settings.country ? `<span class="p-country-name" style="display:none">${settings.country}</span>` : ''}
</div>`;
