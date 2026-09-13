export const SITE = {
  name: "DRACO",
  person: "Mark",
  tagline: "Memecoin developer. Zero allocation. Same price as you.",
  description:
    "Mark builds memecoins on Solana and WETH with zero developer allocation. Open wallets, no bundles, no hidden buys.",
} as const;

export const SOCIALS = [
  {
    id: "x-draco",
    label: "@Draco4226",
    href: "https://x.com/Draco4226",
    network: "X",
  },
  {
    id: "x-dev",
    label: "@Memecoindev46",
    href: "https://x.com/Memecoindev46",
    network: "X",
  },
  {
    id: "tg",
    label: "@Dracobarbatus",
    href: "https://t.me/Dracobarbatus",
    network: "Telegram",
  },
] as const;

export const RULES = [
  {
    n: "01",
    title: "Zero allocation",
    body: "I take 0% of any project I build. No founder bag off the top. No team wallet sitting on a cliff.",
  },
  {
    n: "02",
    title: "Same market. Same price.",
    body: "I buy off the same market and the same price as everyone else. If I want in, I get in like you do.",
  },
  {
    n: "03",
    title: "No bundles. No hiding.",
    body: "I will never bundle or hide what I buy. If it is mine, you can see it.",
  },
  {
    n: "04",
    title: "Wallets stay open",
    body: "My wallets will be open. If I open a new wallet, I post it. No stealth wallets. No surprises.",
  },
] as const;

export const PLATFORMS = [
  { label: "Solana", detail: "pump.fun" },
  { label: "WETH", detail: "gekko.cash" },
] as const;

export const LAUNCHES = [
  {
    id: "anchor",
    name: "Anchor Token",
    ticker: "ANCHOR",
    chain: "Solana",
    venue: "pump.fun",
    image: "/images/token-anchor.jpg",
    imageAlt: "Weathered iron ship’s anchor on dark wet stone",
    blurb:
      "Fair launch on Solana. Zero-dev allocation, public bonding curve, same rules for everyone from block one.",
    site: "https://anchortoken.vip",
    trade: "https://pump.fun/coin/3jhApg98ukHe2EZFDsZ92J2KhMuMY5CW3NpCdt5spump",
    contract: "3jhApg98ukHe2EZFDsZ92J2KhMuMY5CW3NpCdt5spump",
    contractKind: "mint" as const,
  },
  {
    id: "jimothy",
    name: "JimothyonRobin",
    ticker: "LOAF",
    chain: "WETH",
    venue: "gekko.cash",
    image: "/images/token-jimothy.jpg",
    imageAlt: "Jimothy the raccoon in a Robin Hood hat and red cape",
    blurb:
      "Launched on gekko.cash. Same builder rules: no hidden allocation, no bundled buys, books open.",
    site: "https://www.gekko.cash/coin/0x588026D8099a36FD178C7B4EB2B5fE469Ab04fF2",
    trade: "https://www.gekko.cash/coin/0x588026D8099a36FD178C7B4EB2B5fE469Ab04fF2",
    contract: "0x588026D8099a36FD178C7B4EB2B5fE469Ab04fF2",
    contractKind: "evm" as const,
  },
] as const;

export const BIO = {
  name: "Mark",
  age: 42,
  location: "Georgia, USA",
  occupation: "Computer Technician",
  lines: [
    "Gamer",
    "Crypto enthusiast",
    "Trader — crypto and stocks",
    "Nerd",
    "Firearms enthusiast",
    "2A supporter",
  ],
  story:
    "I create memecoins because I am tired of getting rugged. I build the way I always wanted to buy: no insider edge, no stealth wallets, no games with the supply.",
} as const;

export const NAV = [
  { href: "#code", label: "The code" },
  { href: "#launches", label: "Launches" },
  { href: "#about", label: "About" },
  { href: "#connect", label: "Connect" },
] as const;
