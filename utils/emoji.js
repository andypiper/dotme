/**
 * Emoji replacement utility for OpenMoji
 * Converts Unicode emojis to OpenMoji SVG images server-side
 */

/**
 * Replaces Unicode emojis in text with OpenMoji SVG img tags
 * @param {string} text - Text containing Unicode emojis
 * @returns {string} Text with emojis replaced by OpenMoji SVG images
 */
export function replaceEmojisWithOpenMoji(text) {
  if (!text) return text;
  
  // Unicode ranges for emojis
  const emojiRegex = /[\u{1F000}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{E000}-\u{F8FF}]|[\u{1F300}-\u{1F5FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]/gu;
  
  return text.replace(emojiRegex, (match) => {
    // Get Unicode codepoint in hex format
    const codePoint = match.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
    
    // Generate OpenMoji SVG img tag
    return `<img src="https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/${codePoint}.svg" alt="${match}" class="emoji" style="width:1.2em;height:1.2em;vertical-align:-0.2em;display:inline-block;" onerror="this.outerHTML='${match}';">`;
  });
}