import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, 'public');

const siteUrl = 'https://peepultreeschool.com'; // Replace with actual domain

const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    // Since it's a single page app with sections, we mainly list the root.
    // However, if we had accurate history API routing for sections, we could add them.
    // For now, let's keep it simple and effective for the main landing.
];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map(route => `
    <url>
        <loc>${siteUrl}${route.path}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>
    `).join('')}
</urlset>`;

    if (!fs.existsSync(PUBLIC_DIR)) {
        fs.mkdirSync(PUBLIC_DIR);
    }

    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
    console.log('✅ sitemap.xml generated');
};

const generateRobots = () => {
    const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

    fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robots);
    console.log('✅ robots.txt generated');
};

generateSitemap();
generateRobots();
