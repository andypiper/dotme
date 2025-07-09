# dotme v1.x

(Andy's Glitch in Bio v3)

Move from Glitch to my own hosting.

## TODO

- ✅ is vite needed? or can we just use the static site generator? (NO - removed vite, using server-side rendering)
- is sw.js useful any more?
- switch to goatcounter for stats
- migrate other nice things from wita project
- add indieweb markup - use indiewebify.me
  - figure out where to add h-card (possibly in header)
- possibly add membership badges / credentials e.g. EFF, bcs, etc.
- add postmarks
- consider creating sections for social icons (audio/video/gaming/code/text etc)
- add PSN and Xbox and GOG https://www.gog.com/u/AndyPiper
- make a module for generating a humans.txt file? So that it gets updated automatically.

### Checks

- https://pagespeed.web.dev/
- wcag
- html and css validation

- twemoji plugin (scratchpad below, but as this is, it messes with alignment)
  - nice to have because it means you have the same emoji on all platforms
  - could also just put them in as images in the list items _shrug_
  - also twemoji are CC-BY-4.0 -> attribution req'd if used
- podcast / audio player plugin to unfold from the Podcast button? listed in page?
  - could point to latest episode, using the podcast RSS
- I'd quite like some stats of some kind to gauge vists / what content gets attention
- build more themes
  - check contrast when choosing palette
- Gravatar improvement: if the user adds an email address to settings, generate the Gravatar URL (it is the MD5 hash of an email address)
- a corner "(i)" icon with a popover to explain what this is / how it was made
- make the "by way of introduction" a collapsible embedded Toot
- highlighted code projects

## Code scratchpad

```html
<!-- twemoji -->
<script
  src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"
  crossorigin="anonymous"
></script>
<!-- render emojis as Twemoji -->
<script>
  window.onload = function() {
    // Parses the document body and
    // inserts <img> tags in place of Unicode Emojis
    twemoji.parse(
      document.body,
      { folder: "svg", ext: ".svg" } // This is to specify to Twemoji to use SVGs and not PNGs
    );
  };
</script>

<!-- CSS configurations to tweak how the Twemojis are displayed -->
<style>
img.emoji {
   transform: scale(0.5);
   height: 0.5em;
   width: 0.5em;
   margin: 0 .05em 0 .1em;
   vertical-align: -0.5em;
   pointer-events: none;
  }
</style>
```

```html
<iframe src="https://mastodon.social/@andypiper/108237453365199182/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://mastodon.social/embed.js" async="async"></script>
```
