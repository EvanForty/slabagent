// SlabAgent settings. Optional: every page has these defaults built in.
window.SLABAGENT_CONFIG = {
  // Dedicated Solana RPC (Helius, Triton, QuickNode...). The public endpoint often blocks browsers,
  // so SOL balance shows "Unavailable" without one.
  RPC_URL: "https://api.mainnet-beta.solana.com",

  // Optional photos of your own slabs, keyed by card name. These replace the official card image.
  // Put the photos in a "cards" folder next to this file, e.g. "Charizard": "cards/charizard-psa10.jpg"
  CARD_IMAGES: {},

  // Replace the simulation with the agent's live feed here when it ships.
  LIVE_FEED_URL: ""
};
