# Amir Khan Portfolio

Static GitHub Pages portfolio for Amir Khan.

## Stack

Plain HTML5, CSS and minimal vanilla JavaScript. No framework, build step, npm dependency, tracker, or external JavaScript library. Fonts use Google Fonts only.

## Deploy on GitHub Pages

1. Push all files to the `main` branch root.
2. In GitHub, open **Settings → Pages**.
3. Choose **Deploy from branch**, then `main` / `(root)`.
4. For a custom domain, add the domain in Settings → Pages and commit a `CNAME` file containing only the domain. At the DNS provider, set the apex A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` and the `www` CNAME to `<username>.github.io`. Then enable **Enforce HTTPS**.
5. Replace every `[SITE_URL]` placeholder with the final site URL.

## Before launch

- [ ] `[EMAIL]`: contact email
- [ ] `[SITE_URL]`: final domain
- [ ] `[SSRN_URL]`: link to the SSRN paper
- [ ] Headshot files (web, JPG fallback, hi-res for press)
- [ ] Analytics snippet (optional)
- [ ] Decide whether to keep the three "In draft" essays listed

## Notes

- Headshots are placeholders and need to be supplied.
- `assets/img/og-image.svg` is the source for the requested social card; PNG export still needs to be generated before launch.
- Binary favicon fallbacks are not generated in this connector workflow and should be supplied before launch if required.
- No custom domain is set because the final domain is not provided.
- Hard content rules were applied: restricted ventures and roles are excluded, CamelX client is anonymised as "GCC client", Luminox public title is "Co-founder", FutureMatch/Recruitics contains pipeline only, and no em dashes appear in copy.