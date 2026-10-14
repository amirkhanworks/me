# Amir Khan — Portfolio V2 Draft

An editorial-style, responsive portfolio for Amir Khan, showcasing experience across technology, business growth, SaaS, entrepreneurship, research, consulting and mentorship.

## Review this draft

- **Draft branch:** [portfolio-v2-draft](https://github.com/amirkhanworks/me/tree/portfolio-v2-draft)
- This branch is intentionally separate from `main`.
- The current `main` website is not changed by the V2 draft.
- No production GitHub Pages settings are changed by this branch.

## Run locally

This is a static HTML, CSS and vanilla JavaScript site. No build step or package manager is needed.

From the repository root, run:

```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser. On Windows, `py -m http.server 8000` may be used instead. Alternatively, open `index.html` directly.

## Structure

- `index.html` — semantic page structure, content, metadata and local imagery references.
- `styles.css` — responsive layout, editorial design system and reduced-motion handling.
- `script.js` — accessible mobile navigation and dynamic footer year.
- `favicon.svg` — lightweight AK monogram.
- `assets/` — portfolio and event photographs.

## Sections

About, professional experience, six highlights, SSRN research, Birkbeck mentoring story, education, skills and learning, and contact.

## Content notes

Career dates and reported metrics reflect the supplied portfolio material. Education labels follow the supplied CV wording. The research card links to the supplied SSRN paper and avoids claiming unverified findings. The Birkbeck mentorship summary is based on the university's published article: https://www.bbk.ac.uk/news/from-mentee-to-mentor-birkbeck-graduates-journey-comes-full-circle

## Deployment

Do not publish this branch over the existing site during review. A preview can be created separately if needed; production Pages settings have not been changed. When the draft is approved, review the diff and merge through a pull request rather than force-pushing to `main`.
