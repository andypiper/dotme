import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Import updated template functions
import { renderMeta } from './templates/meta.js';
import { renderHeader } from './templates/header.js';
import { renderStatusLol } from './templates/status-lol.js';
import { renderLinks } from './templates/links.js';
import { renderNewsletter } from './templates/newsletter.js';
import { renderFooter } from './templates/footer.js';
import { renderSocialIcons } from './templates/social.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Define placeholders as constants (avoid typos)
const BODY_PLACEHOLDER = '<!-- BODY-CONTENT -->';
const HEAD_PLACEHOLDER = '<!-- HEAD-CONTENT -->';

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    try {
        // Asynchronously read the necessary files
        const [indexHtml, jsonld, settings] = await Promise.all([
            fs.readFile(path.join(__dirname, 'index.html'), 'utf-8'),
            fs.readFile(path.join(__dirname, 'templates/json-ld.json'), 'utf-8'),
            fs.readFile(path.join(__dirname, 'settings.json'), 'utf-8').then(JSON.parse)
        ]);

        // Build the content for the body
        const bodyContent = [
            renderHeader(settings),
            renderLinks(settings.links, settings),
            renderStatusLol(settings),
            renderNewsletter(),
            renderSocialIcons(settings),
            renderFooter()
        ].join('\n');

        // Build the content for the head
        const headContent = [
            renderMeta(settings),
            `<script type="application/ld+json">${jsonld}</script>`
        ].join('\n');

        // ensure the placeholders actually exist in the template.
        // This will catch any copy-paste errors or typos.
        if (!indexHtml.includes(BODY_PLACEHOLDER) || !indexHtml.includes(HEAD_PLACEHOLDER)) {
            console.error('CRITICAL: Placeholder comments not found in index.html! Check for typos.');
            return res.status(500).send('Server configuration error: HTML template is missing placeholders.');
        }

        // Chain the replace() calls for final HTML string
        const finalHtml = indexHtml
            .replace(HEAD_PLACEHOLDER, headContent)
            .replace(BODY_PLACEHOLDER, bodyContent);

        res.send(finalHtml);

    } catch (error) {
        console.error('Error rendering page:', error);
        res.status(500).send('Server error');
    }
});

// Catch-all 404 handler - MUST be the last route
app.use(async (req, res, next) => {
    try {
        const [template404, settings] = await Promise.all([
            fs.readFile(path.join(__dirname, 'public', '404.html'), 'utf-8'),
            fs.readFile(path.join(__dirname, 'settings.json'), 'utf-8').then(JSON.parse)
        ]);

        const headContent = renderMeta(settings);
        const headerHtml = renderHeader(settings);
        const footerHtml = renderFooter();

        const finalHtml = template404
            .replace(HEAD_PLACEHOLDER, headContent)
            .replace('<!-- HEADER_PLACEHOLDER -->', headerHtml)
            .replace('<!-- FOOTER_PLACEHOLDER -->', footerHtml);

        res.status(404).send(finalHtml);
    } catch (error) {
        console.error('Error rendering 404 page:', error);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`dotme app listening at http://localhost:${port}`);
});

