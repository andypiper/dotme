# dotme

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> A configurable "link-in-bio" style personal website with server-side rendering and IndieWeb support.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Background

dotme is a personal website application that creates a customizable "link-in-bio" style landing page, and includes IndieWeb markup. It uses server-side rendering with Express.js.

Originally forked from Glitch in Bio, this project has been restructured to use pure server-side rendering without client-side JavaScript frameworks. Content is driven by a single `settings.json` configuration file and rendered through modular HTML templates.

Key features:
- Server-side rendering with Express.js
- IndieWeb microformat support (h-card, rel attributes)
- Configurable themes and styling
- Progressive Web App (PWA) support
- Social media integration
- Customizable content through a JSON configuration file

## Install

```bash
git clone https://github.com/yourusername/dotme.git
cd dotme
npm install
```

## Usage

1. Configure your site by editing `settings.json`:
   ```json
   {
     "name": "Your Name",
     "bio": "Your bio text",
     "url": "https://yoursite.com",
     "links": [...],
     "social": {...}
   }
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Visit `http://localhost:3000` to view your site.

## Configuration

### Content Configuration

Edit `settings.json` to customize your site:

- **`name`**: Your display name
- **`bio`**: Short biographical text
- **`url`**: Your primary website URL (used for IndieWeb rel=me)
- **`avatarImage`**: Primary avatar image URL
- **`avatarImageAlt`**: Alternative avatar image (for hover effects)
- **`links`**: Array of links to display on your page
- **`social`**: Social media profile URLs
- **`theme`**: Theme name (corresponds to CSS file in `public/styles/`)

### Project Structure

- **`index.html`**: Main page template with placeholder comments for content injection
- **`settings.json`**: Configuration file for all site content and settings
- **`templates/`**: HTML template modules that export render functions
- **`public/styles/`**: CSS stylesheets including theme files
- **`public/manifest.json`** and **`public/sw.js`**: Progressive Web App configuration

### Themes

Create custom themes by adding CSS files to `public/styles/` and specifying the theme name in `settings.json`. Built-in themes include `glitch`, `gallery`, `menu`, and others.

## Deployment

### Deployment Configuration

The `deployment` section in `settings.json` controls server configuration:

- **`port`**: The port number for the Express server (default: 3000)
- **`trustProxy`**: Set to `true` if running behind a reverse proxy (nginx, Caddy, etc.) or CDN. This allows the app to correctly detect client IP addresses and HTTPS connections from proxy headers like `X-Forwarded-For` and `X-Forwarded-Proto`. Set to `false` for direct deployment.

### Deployment Options

**Direct deployment:**
```json
{
  "deployment": {
    "port": 3000,
    "trustProxy": false
  }
}
```

**Behind reverse proxy:**
```json
{
  "deployment": {
    "port": 3000,
    "trustProxy": true
  }
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
