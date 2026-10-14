# Expert Movers Packer — Static Website

Premium, responsive marketing website for **Expert Movers Packer** (movers & packers, Dubai, UAE).
Built with plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step.

## Files

| File | Purpose |
|---|---|
| `index.html` | Homepage: hero, services, why-choose-us, process, quote CTA, footer |
| `blogs.html` | Blog listing with working category filter |
| `style.css` | Shared styles, responsive breakpoints |
| `script.js` | Mobile nav, blog filter, current-page highlighting |
| `assets/images/` | 9 optimized local photos (JPG, 122–204 KB each) |

## Publish on GitHub Pages

1. Create a new GitHub repository (e.g. `expert-movers-packer-site`).
2. Upload **all** files, keeping the folder structure (`assets/images/` must stay intact).
3. Go to **Settings → Pages** → under *Build and deployment*, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then save.
5. Your site will be live at `https://<username>.github.io/<repository>/` —
   `index.html` is the homepage and `blogs.html` opens at `/blogs.html`.

No server-side code or build process is required.

## Notes

- All article and service links point to the live `expertmoverspacker.com` pages
  (each destination was verified to return HTTP 200 on 2026-10-15).
- The "Get a Quote" buttons link to the on-page quote section (`#quote`), which
  offers a tap-to-call button (`tel:+971502312653`) and a link to the real
  contact page at `https://expertmoverspacker.com/contact/`. There is no fake
  form submission anywhere on the site.
- Business details used: phone **+971 50 231 2653** and address
  **Office 202, IT Plaza, Dubai Silicon Oasis, Nadd Hessa Street 47, Dubai**.
  No ratings, testimonials, or other credentials are claimed.
- To swap the logo, replace the inline SVG `.brand-mark` in both HTML files.
