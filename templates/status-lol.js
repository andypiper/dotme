export const renderStatusLol = (settings) => `<div>
  <h2 class="subhead">
     <a href="${settings.social.statuslol}" style="border-bottom: none; text-decoration: underline" target="_blank">Currently</a>
  </h2>

  <script src="${settings.social.statuslol}.js?time&fluent&pretty" defer></script>

</div>`;
