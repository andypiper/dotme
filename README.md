# dotme: formerly, Glitch in Bio

> [!IMPORTANT]
> This used to be a Glitch app. For now, I am running it on my own hosting.
---

## What's in this project?

← `README.md`: That’s this file. You can delete it, or keep it handy so you don't lose the instructions.

← `index.html`: This is the main page template the Express server uses to render your site. You'll see placeholder comments where content gets injected from `settings.json` using the template functions.

← `settings.json`: Settings for your name, links, images, and social media. The `index.html` page includes the data.

← `templates/`: HTML templates — you can edit every line of HTML or never even look at any of it. The data you specify in `settings.json` will be built into the page using the template functions in here that return HTML strings.

← `public/styles/`: Stylesheets for Glitch in Bio, including alternate themes. Change your theme in `settings.json`. You can create a new theme by adding a CSS file to this folder and specifying it using its name in the settings (e.g. `glitch`, `gallery`, `menu`, or whatever yours is called!)

← `public/manifest.json` and `public/sw.js`: These set your site up to function as a Progressive Web App (PWA)–if you add new assets (e.g. stylesheets) you can include them in the list in `sw.js` to cache your site for offline viewing.
