export const renderMeta = (settings) => `
  <title>${settings.metaTitle}</title>

  <!-- Web Monetization -->
  <meta name="monetization" content="$ilp.uphold.com/xkwmiyHi47Rw">

  <!-- analytics -->
  <!-- Google tag (gtag.js) -->
  <!-- should be configurable in settings.json -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-GKZGDYRC6J"></script>
  <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GKZGDYRC6J');
  </script>

  <!-- OpenGraph/Social sharing -->

    <meta
      name="description"
      content="${settings.metaDescription}"
    />
    <meta
      name="og:description"
      content="${settings.metaDescription}"
    />
    <meta
      property="og:image"
      content="${settings.avatarImage}"
    />
    <meta property="og:title" content="${settings.metaTitle}" />
    <meta property="og:type" content="website" />
    <meta property="fediverse:creator" content="${settings.creator}">

    <link href="https://andypiper.org" rel="me"/>
    <link href="https://macaw.social/@andypiper" rel="me"/>

  <!-- Load our custom theme -->
  <link rel="stylesheet" type="text/css" href="./styles/themes/${settings.theme}.css" />
`;
