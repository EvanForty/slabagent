# SlabAgent website

Static site, no build step. Deploy this folder to Vercel, Netlify, Cloudflare Pages or GitHub Pages.

Pages: `index.html` (home), `agent.html` (live agent), `strategy.html`, `ledger.html`, `token.html`.

Every page is self-contained: its styling, scripts and logo images are built into the HTML file,
so each page displays correctly on its own, even if opened without the rest of the folder.

## Settings (config.js)
- `RPC_URL`: use a dedicated Solana RPC (Helius, Triton, QuickNode). The public endpoint often blocks
  browsers, so SOL balance shows "Unavailable" without one.
- `CARD_IMAGES`: optional photos of your own slabs, keyed by card name, e.g.
  `"Charizard": "cards/charizard-psa10.jpg"`. These replace the official card image.

`config.js` is optional. If it's missing, the pages use the same defaults.

## Card images
The catalog is vintage Pokémon holos. Each slab shows the official card image from the Pokémon TCG API
CDN (`images.pokemontcg.io`). If an image can't load, the slab falls back to drawn artwork.

## Trade data
The live agent page, ledger and home snapshot read from a simulation (`SIM` in each page's script):
a fixed history of 23 closed trades ($1,115 net profit, $1,287 bought back), and a live feed that starts
at cycle #1 on each page load. Remove the "simulated preview" notes when it's swapped for real trades.

## Wallets
Connect uses the Solana Wallet Standard (Phantom, Solflare, Backpack and any compliant wallet) with
fallbacks for older injected providers, plus `@solana/web3.js` for address validation and balance.
Wallet extensions only inject on http(s) pages, so serve the folder (e.g. `npx serve .`) to test wallets.
