export const renderMeta = (settings) => `
  <title>${settings.metaTitle}</title>

  <!-- Web Monetization -->
  <!-- should be configurable in settings.json -->
  <meta name="monetization" content="$ilp.uphold.com/xkwmiyHi47Rw">

  <!-- analytics -->
  <!-- should be configurable in settings.json -->
  <script data-goatcounter="https://dotme.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>

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

    <!-- should be configurable in settings.json -->
    <link href="https://andypiper.org" rel="me"/>
    <link href="https://macaw.social/@andypiper" rel="me"/>

  <!-- Load the configured custom theme -->
  <link rel="stylesheet" type="text/css" href="./styles/themes/${settings.theme}.css" />
`;
