import { SVGs } from "./social-svgs.js"; // Note: ensure this file path is correct and it exports SVGs correctly

function renderSocial(settings, platform) {
  // Check that this platform exists in the settings
  if (settings.social && settings.social[platform.name]) {
    return `
      <a
        aria-label="${settings.name} on ${platform.name}"
        href="${settings.social[platform.name]}"
        tabindex="-1"
        rel="${platform.rel || ''}"
        >${SVGs[platform.name]}</a
      >
    `;
  }
  return ''; // Return an empty string if the social link doesn't exist
}

function renderEmail(settings) {
  if (settings.social && settings.social.email) {
    return `
      <a
        aria-label="${settings.name} on email"
        href="mailto:${settings.social.email}"
        tabindex="-1"
        >${SVGs.email}</a
      >
    `;
  }
  return ''; // Return an empty string if email doesn't exist
}

// This is the original array of social platforms
const socials = [
    { name: "mastodon", altText: "Mastodon", rel: "me" },
    { name: "pixelfed", altText: "Pixelfed" },
    { name: "podcast", altText: "Podcast" },
    { name: "threads", altText: "Threads" },
    { name: "applemusic", altText: "Apple Music" },
    { name: "lastfm", altText: "Last.FM" },
    { name: "arena", altText: "Arena" },
    { name: "bluesky", altTest: "Bluesky" },
    { name: "bookwyrm", altTest: "Bookwyrm" },
    { name: "buttondown", altText: "Buttondown" },
    { name: "codeberg", altText: "Codeberg" },
    { name: "devTo", altText: "DEV.to" },
    { name: "facebook", altText: "Facebook" },
    { name: "flickr", altText: "Flickr" },
    { name: "flipboard", altText: "Flipboard" },
    { name: "friendica", altText: "Friendica" },
    { name: "github", altText: "GitHub" },
    { name: "gitlab", altText: "GitLab" },
    { name: "hackaday", altText: "Hackaday" },
    { name: "hashnode", altText: "Hashnode" },
    { name: "instagram", altText: "Instagram" },
    { name: "bgg", altText: "BoardGameGeek" },
    { name: "itchio", altText: "Itch.io" },
    { name: "keybase", altText: "Keybase" },
    { name: "keyoxide", altText: "Keyoxide" },
    { name: "kofi", altText: "Ko-fi" },
    { name: "lemmy", altText: "Lemmy" },
    { name: "lexaloffle", altText: "Lexaloffle BBS (PICO-8)" },
    { name: "letterboxd", altText: "Letterboxd" },
    { name: "linkedin", altText: "LinkedIn" },
    { name: "matrix", altText: "Matrix" },
    { name: "medium", altText: "Medium" },
    { name: "onlyfans", altText: "OnlyFans" },
    { name: "patreon", altText: "Patreon" },
    { name: "peertube", altText: "PeerTube" },
    { name: "pinboard", altText: "Pinboard" },
    { name: "pinterest", altText: "Pinterest" },
    { name: "replit", altText: "Replit" },
    { name: "spotify", altText: "Spotify" },
    { name: "soundcloud", altText: "Soundcloud" },
    { name: "steam", altText: "Steam" },
    { name: "substack", altText: "Substack" },
    { name: "tiktok", altText: "TikTok" },
    { name: "twitch", altText: "Twitch" },
    { name: "tumblr", altText: "Tumblr" },
    { name: "wordpress", altText: "WordPress" },
    { name: "youtube", altText: "YouTube" },
    { name: "bandcamp", altText: "Bandcamp" },
    { name: "gog", altText: "GOG" },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const renderSocialIcons = (settings) => {
  // Create a copy of the socials array before shuffling
  const shuffledSocials = shuffleArray([...socials]);

  return `
  <p>
    Visit my profiles on other platforms below
  </p>
  <div class="social-icons">
    ${shuffledSocials.map(platform => renderSocial(settings, platform)).join('')}
    ${renderEmail(settings)}
  </div>
`;
};
