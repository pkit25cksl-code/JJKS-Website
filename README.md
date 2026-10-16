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
