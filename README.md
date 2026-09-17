# framesbyestelle — Support

A "buy me a coffee" style site to help fund camera gear, modeled on
creator support pages like Buy Me a Coffee's own creator profiles
(Home / Membership / Posts / Wishlist). Kept separate from the main
[framesbyestelle-portfolio](../framesbyestelle-portfolio) site so it can be
linked from YouTube/Instagram and updated independently — the portfolio
is only linked to from here, not merged into it.

## Pages

- `index.html` — Home: banner, about, and the "buy a coffee" widget.
- `membership.html` — placeholder monthly membership tiers.
- `posts.html` — static update posts (no backend/CMS).
- `wishlist.html` — camera gear wishlist with funding progress bars.

## Before going live

- Create an account at [buymeacoffee.com](https://www.buymeacoffee.com) and
  replace the placeholder links (search for `TODO` in each file) with your
  real page/membership URLs.
- Rewrite the membership tier names, prices, and perks in `membership.html`
  to match what you actually want to offer.
- Everything is static — there's no backend tracking real donations. Update
  the wishlist progress bars (`wishlist-bar-fill` width %) and the "raised"
  dollar amounts by hand as you actually save up for each item.
- To add a new post, copy a `<a class="post-card">` block in `posts.html`.

## Deploying

No build step. Currently deployed via GitHub Pages from the `main` branch
(see repo settings). A `netlify.toml` is also included if you'd rather move
it to Netlify later.
