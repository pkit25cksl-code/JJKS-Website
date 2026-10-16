# JJKS — Promotional website

Static website for JJKS, a student-led software studio at the University of Sunderland.
Built from the Task A6 wireframes and the Figma prototype
(https://www.figma.com/design/mGkggI4LzOhfGDrrnSitBx), using the JJKS corporate identity.

Plain HTML, CSS and a small amount of JavaScript. No build step, no frameworks,
no cookies, no tracking. Total cost: £0.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `services.html` | Services (web apps, desktop/mobile apps, prototyping, pricing, process) |
| `portfolio.html` | Portfolio with filters |
| `case-study-safe360.html` | Case study: 360° health & safety training |
| `about.html` | About: mission, vision, values, team, how we work |
| `blog.html` + 2 posts | Blog |
| `contact.html` | Enquiry form with GDPR consent, contact details, FAQs |
| `privacy.html`, `cookies.html`, `accessibility.html` | Legal footer pages |
| `404.html` | Not-found page (used automatically by GitHub Pages) |

Shared files: `css/styles.css` (all styling, brand colours at the top), `js/main.js`
(mobile menu, portfolio filter, form validation), `assets/` (fonts, logo, icons).

## Before going live: replace the placeholders

Search all files for these values and replace them (VS Code: Edit → Replace in Files):

| Placeholder | Replace with |
| --- | --- |
| `info@jjks.com` | The team's real email address |
| `https://www.linkedin.com/company/YOUR-PAGE` | The JJKS LinkedIn company page |
| `https://github.com/YOUR-ORG` | The JJKS GitHub profile |
| `https://formspree.io/f/YOUR_FORM_ID` | Your Formspree form endpoint (see below) |
| `https://buttondown.com/api/emails/embed-subscribe/YOUR_USERNAME` | Your Buttondown sign-up URL (see below) |
| `https://YOUR-USERNAME.github.io/jjks` | The live site address (used in `sitemap.xml`, `robots.txt` and social previews) |

Until the form placeholders are replaced, the forms still validate but show a friendly
"being connected" message instead of sending.

## Deploy free on GitHub Pages

1. Create a free GitHub account and a new **public** repository called `jjks`.
2. Upload the *contents* of this folder (so `index.html` is at the top level).
3. Repository **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)` → **Save**.
4. After a minute the site is live at `https://YOUR-USERNAME.github.io/jjks/`.
   This is the URL to submit.

Alternative: drag this folder onto https://app.netlify.com/drop for an instant free URL.

## Connect the forms (free)

- **Contact form:** create a free account at https://formspree.io, add a form, and copy its
  endpoint (`https://formspree.io/f/xxxxxxx`) into the `action` of the form in `contact.html`.
- **Newsletter:** create a free account at https://buttondown.com and use
  `https://buttondown.com/api/emails/embed-subscribe/<your-username>` as the `action` of the
  newsletter form in the footer of every page.

## Editing content

Every page is a normal HTML file. Edit the text between the tags and save. The header and
footer are repeated on each page, so change them everywhere (Replace in Files) to keep them
consistent. Brand colours are CSS variables at the top of `css/styles.css`.

## Testing record (14 October 2026)

| Check | Result |
| --- | --- |
| Lighthouse (Home, Portfolio, Contact; mobile and desktop) | Performance 100, Accessibility 100, Best practices 100, SEO 100 |
| axe-core automated accessibility (WCAG 2.2 A/AA + best practice), all 13 pages, 1440px and 390px | 0 violations |
| HTML validation (html-validate), all pages | 0 errors |
| Horizontal scrolling at 390px | None on any page |
| Keyboard: first Tab lands on "Skip to main content"; menu opens/closes, Escape closes it | Pass |
| Contact form: empty submit shows 5 text errors and focuses the first field | Pass |
| Portfolio filter announces result count; empty category shows message | Pass |

## Credits and licences

- Font: Open Sans, self-hosted, SIL Open Font Licence 1.1 (`assets/fonts/OFL-LICENSE.txt`).
- Logo, icons and illustrations: original work by the JJKS team.
