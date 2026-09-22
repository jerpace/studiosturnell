# sturnell.com — hand-coded rebuild

Astro + Sanity (content) + Rive (the S-mark interaction), replacing the Webflow plan to cut recurring cost.

## What's built so far
- Project scaffold, design tokens (`src/styles/tokens.css`) pulled from the Figma file
- Nav + footer components (desktop and mobile), with EN/MT routing wired (`/` = English, `/mt/...` = Maltese)
- **All five page types, desktop + mobile, matched pixel-for-pixel against the Figma file:**
  Home, Studio, Work (grid + hover captions), Contact, and the dynamic Project detail page (`/work/[slug]`, driven by Sanity)
- Mobile nav: hamburger + language overlay panels, matching the Figma overlay components
- **Real brand assets** — wordmark, ghasfur mark, and both S-mark variants are now the actual Figma exports (`public/brand/`), not placeholders
- `RiveMark` component: loads `/rive/s-mark.riv` when present, falls back to the static SVG when it isn't — so the site never breaks while the Rive file is still in progress
- Sanity schema (`sanity/schemaTypes/`) for Home, Studio, Work projects (now with a `client` field), Contact (now with Instagram/LinkedIn URLs), and site-wide nav/footer copy — every text field is EN + MT paired

## What's still open
1. **The `.riv` file itself** — once the Rive build is done, it goes in `public/rive/s-mark.riv` and the interaction activates automatically, no code changes needed.
2. **Abridge font** — the headline typeface isn't on Google Fonts. Still flagged as open on the asset checklist; the site currently falls back to Inter for headlines until we know the license situation.
3. **Real content and photos** — every page currently renders on placeholder copy/images. Once the Sanity Studio has real entries, everything pulls from there automatically.
4. **A push to the live preview** — see below.

## Two bugs found and fixed during the Figma-accuracy pass
Worth knowing about since they were subtle:
- A browser layout bug where an `aspect-ratio` container combined with percentage-height absolutely-positioned children could compute a wildly wrong height. Fixed by switching those layouts to the more robust `padding-top` percentage technique.
- An Astro scoped-CSS gotcha: a class passed into a child component (like `<RiveMark class="home__mark" />`) doesn't carry the *parent* page's style scope, so the parent's rule targeting that class silently never matched. Fixed with `:global()`. Worth remembering if more components get this treatment later.

## Getting you a refreshed preview link

Your last permissions change opened up network access from this sandbox to Netlify, Sanity, and Figma's asset servers — all three now work directly, which is why the real brand assets could be pulled automatically this time instead of needing manual exports.

I don't currently have your Netlify access token in this session (it wasn't carried over), so I can't push straight to your site from here yet. Two options:
1. **Manual, same as before:** unzip the attached `sturnell-preview-dist.zip` and drag the `dist` folder onto your Netlify dashboard's upload box again.
2. **Hand me the token again** (or better — connect Netlify to a GitHub repo instead, which removes this step permanently going forward) and I can push updates directly from here each time.

The Sanity Studio (`studiosturnell.sanity.studio`) doesn't need redeploying for schema changes to take effect in the editor — but if you want the new `client`/Instagram/LinkedIn fields to show up in the Studio's field list, re-run `npx sanity deploy` from the `sanity/` folder once more.
