import { n as asset } from "./router-A9s6RL07.js";
import * as React from "react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Anchor, ArrowUpRight, Check, Coins, Copy, MapPin, Menu, Shield, Wallet, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/copy-ca.tsx
function shorten(value, kind) {
	if (kind === "evm") return `${value.slice(0, 6)}…${value.slice(-4)}`;
	return `${value.slice(0, 6)}…${value.slice(-6)}`;
}
function writeClipboard(value) {
	if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(value);
	return Promise.reject(/* @__PURE__ */ new Error("clipboard unavailable"));
}
function fallbackCopy(value) {
	const ta = document.createElement("textarea");
	ta.value = value;
	ta.setAttribute("readonly", "");
	ta.className = "sr-only";
	document.body.appendChild(ta);
	ta.select();
	const ok = document.execCommand("copy");
	document.body.removeChild(ta);
	if (!ok) throw new Error("copy failed");
}
function CopyCa({ value, kind, className }) {
	const [copied, setCopied] = useState(false);
	async function copy() {
		try {
			try {
				await writeClipboard(value);
			} catch {
				fallbackCopy(value);
			}
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1600);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		onClick: copy,
		className: cn("inline-flex min-h-11 items-center gap-2 rounded-sm bg-elevated px-3 font-mono text-xs text-fg transition-[background-color,box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]", className),
		"aria-label": copied ? "Copied" : `Copy contract ${value}`,
		children: [/* @__PURE__ */ jsx("span", {
			className: "max-w-xs truncate sm:max-w-none",
			children: shorten(value, kind)
		}), copied ? /* @__PURE__ */ jsx(Check, { className: "size-3.5 text-primary" }) : /* @__PURE__ */ jsx(Copy, { className: "size-3.5 text-muted" })]
	});
}
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-primary/90",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-elevated",
			ghost: "bg-transparent text-fg hover:bg-elevated",
			link: "bg-transparent text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-6",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/components/ui/sheet.tsx
var Sheet = DialogPrimitive.Root;
var SheetTrigger = DialogPrimitive.Trigger;
var SheetClose = DialogPrimitive.Close;
var SheetPortal = DialogPrimitive.Portal;
var SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-bg/80", className),
	...props
}));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;
var SheetContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
	ref,
	className: cn("fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-xs flex-col border-l border-border bg-surface p-6 shadow-lg", className),
	...props,
	children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
		className: "absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-sm text-muted transition-colors hover:text-fg",
		children: [/* @__PURE__ */ jsx(X, { className: "size-5" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close menu"
		})]
	})]
})] }));
SheetContent.displayName = DialogPrimitive.Content.displayName;
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(DialogPrimitive.Title, {
		className: cn("font-display text-lg tracking-wide text-fg", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(DialogPrimitive.Description, {
		className: cn("sr-only", className),
		...props
	});
}
//#endregion
//#region src/lib/site.ts
var SITE = {
	name: "DRACO",
	person: "Mark",
	tagline: "Memecoin developer. Zero allocation. Same price as you.",
	description: "Mark builds memecoins on Solana and WETH with zero developer allocation. Open wallets, no bundles, no hidden buys."
};
var SOCIALS = [
	{
		id: "x-draco",
		label: "@Draco4226",
		href: "https://x.com/Draco4226",
		network: "X"
	},
	{
		id: "x-dev",
		label: "@Memecoindev46",
		href: "https://x.com/Memecoindev46",
		network: "X"
	},
	{
		id: "tg",
		label: "@Dracobarbatus",
		href: "https://t.me/Dracobarbatus",
		network: "Telegram"
	}
];
var RULES = [
	{
		n: "01",
		title: "Zero allocation",
		body: "I take 0% of any project I build. No founder bag off the top. No team wallet sitting on a cliff."
	},
	{
		n: "02",
		title: "Same market. Same price.",
		body: "I buy off the same market and the same price as everyone else. If I want in, I get in like you do."
	},
	{
		n: "03",
		title: "No bundles. No hiding.",
		body: "I will never bundle or hide what I buy. If it is mine, you can see it."
	},
	{
		n: "04",
		title: "Wallets stay open",
		body: "My wallets will be open. If I open a new wallet, I post it. No stealth wallets. No surprises."
	}
];
var PLATFORMS = [{
	label: "Solana",
	detail: "pump.fun"
}, {
	label: "WETH",
	detail: "gekko.cash"
}];
var LAUNCHES = [{
	id: "anchor",
	name: "Anchor Token",
	ticker: "ANCHOR",
	chain: "Solana",
	venue: "pump.fun",
	image: "/images/token-anchor.jpg",
	imageAlt: "Weathered iron ship’s anchor on dark wet stone",
	blurb: "Fair launch on Solana. Zero-dev allocation, public bonding curve, same rules for everyone from block one.",
	site: "https://anchortoken.vip",
	trade: "https://pump.fun/coin/3jhApg98ukHe2EZFDsZ92J2KhMuMY5CW3NpCdt5spump",
	contract: "3jhApg98ukHe2EZFDsZ92J2KhMuMY5CW3NpCdt5spump",
	contractKind: "mint"
}, {
	id: "jimothy",
	name: "JimothyonRobin",
	ticker: "LOAF",
	chain: "WETH",
	venue: "gekko.cash",
	image: "/images/token-jimothy.jpg",
	imageAlt: "Jimothy the raccoon in a Robin Hood hat and red cape",
	blurb: "Launched on gekko.cash. Same builder rules: no hidden allocation, no bundled buys, books open.",
	site: "https://www.gekko.cash/coin/0x588026D8099a36FD178C7B4EB2B5fE469Ab04fF2",
	trade: "https://www.gekko.cash/coin/0x588026D8099a36FD178C7B4EB2B5fE469Ab04fF2",
	contract: "0x588026D8099a36FD178C7B4EB2B5fE469Ab04fF2",
	contractKind: "evm"
}];
var BIO = {
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
		"2A supporter"
	],
	story: "I create memecoins because I am tired of getting rugged. I build the way I always wanted to buy: no insider edge, no stealth wallets, no games with the supply."
};
var NAV = [
	{
		href: "#code",
		label: "The code"
	},
	{
		href: "#launches",
		label: "Launches"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#connect",
		label: "Connect"
	}
];
//#endregion
//#region src/components/site-header.tsx
var telegram$1 = SOCIALS.find((s) => s.network === "Telegram");
function SiteHeader() {
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "flex min-h-11 items-center gap-3",
					children: [/* @__PURE__ */ jsx("img", {
						src: asset("/images/mark-dragon.jpg"),
						alt: "",
						className: "size-8 rounded-full object-cover"
					}), /* @__PURE__ */ jsx("span", {
						className: "font-display text-lg tracking-brand text-fg",
						children: SITE.name
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Primary",
					children: [NAV.map((item) => /* @__PURE__ */ jsx("a", {
						href: item.href,
						className: "inline-flex h-11 items-center px-3 text-sm text-muted transition-colors duration-150 hover:text-fg",
						children: item.label
					}, item.href)), /* @__PURE__ */ jsx(Button, {
						asChild: true,
						size: "sm",
						className: "ml-2",
						children: /* @__PURE__ */ jsx("a", {
							href: telegram$1.href,
							target: "_blank",
							rel: "noreferrer",
							children: "Telegram"
						})
					})]
				}),
				/* @__PURE__ */ jsxs(Sheet, { children: [/* @__PURE__ */ jsx(SheetTrigger, {
					asChild: true,
					children: /* @__PURE__ */ jsx(Button, {
						variant: "ghost",
						size: "icon",
						className: "md:hidden",
						"aria-label": "Open menu",
						children: /* @__PURE__ */ jsx(Menu, {})
					})
				}), /* @__PURE__ */ jsxs(SheetContent, { children: [
					/* @__PURE__ */ jsx(SheetTitle, { children: SITE.name }),
					/* @__PURE__ */ jsx(SheetDescription, { children: "Site navigation" }),
					/* @__PURE__ */ jsxs("nav", {
						className: "mt-8 flex flex-col gap-1",
						"aria-label": "Mobile",
						children: [NAV.map((item) => /* @__PURE__ */ jsx(SheetClose, {
							asChild: true,
							children: /* @__PURE__ */ jsx("a", {
								href: item.href,
								className: "inline-flex min-h-11 items-center text-base text-fg",
								children: item.label
							})
						}, item.href)), /* @__PURE__ */ jsx(SheetClose, {
							asChild: true,
							children: /* @__PURE__ */ jsx("a", {
								href: telegram$1.href,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-4 inline-flex min-h-11 items-center text-base text-primary",
								children: "Telegram"
							})
						})]
					})
				] })] })
			]
		})
	});
}
//#endregion
//#region src/components/ui/badge.tsx
var badgeVariants = cva("inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-elevated text-fg",
		outline: "text-muted",
		primary: "border-transparent bg-primary text-primary-fg"
	} },
	defaultVariants: { variant: "outline" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
//#region src/components/ui/separator.tsx
var Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(SeparatorPrimitive.Root, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
	...props
}));
Separator.displayName = SeparatorPrimitive.Root.displayName;
//#endregion
//#region src/components/home-page.tsx
var telegram = SOCIALS.find((s) => s.network === "Telegram");
function HomePage() {
	return /* @__PURE__ */ jsxs("div", {
		id: "top",
		className: "relative min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "grain",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx(SiteHeader, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(CodeSection, {}),
				/* @__PURE__ */ jsx(Launches, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(Connect, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ jsx("section", {
		className: "relative overflow-hidden border-b border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-6xl items-stretch gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "stagger-in relative z-10 max-w-xl",
				children: [
					/* @__PURE__ */ jsxs("p", {
						className: "font-mono text-xs tracking-label text-muted uppercase",
						children: [
							BIO.location,
							" · ",
							BIO.occupation
						]
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-4 font-display text-6xl leading-none tracking-display text-fg sm:text-8xl",
						children: SITE.name
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-4 text-xl text-muted sm:text-2xl",
						children: [
							"I got tired of getting rugged.",
							/* @__PURE__ */ jsx("br", {}),
							"So I build the way I wanted to buy."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 max-w-md text-base leading-normal text-subtle",
						children: "Zero developer allocation. Same market, same price. No bundles. Open wallets. If I open a new wallet, I post it."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsx(Button, {
							asChild: true,
							children: /* @__PURE__ */ jsx("a", {
								href: "#launches",
								children: "View launches"
							})
						}), /* @__PURE__ */ jsx(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ jsxs("a", {
								href: telegram.href,
								target: "_blank",
								rel: "noreferrer",
								children: ["Telegram", /* @__PURE__ */ jsx(ArrowUpRight, {})]
							})
						})]
					}),
					/* @__PURE__ */ jsxs("dl", {
						className: "mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6",
						children: [PLATFORMS.map((p) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
							className: "font-mono text-xs tracking-label text-subtle uppercase",
							children: p.label
						}), /* @__PURE__ */ jsx("dd", {
							className: "mt-1 text-sm text-fg",
							children: p.detail
						})] }, p.label)), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
							className: "font-mono text-xs tracking-label text-subtle uppercase",
							children: "Dev take"
						}), /* @__PURE__ */ jsx("dd", {
							className: "mt-1 text-sm text-fg",
							children: "0%"
						})] })]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative min-h-72 lg:min-h-full",
				children: [/* @__PURE__ */ jsx("img", {
					src: asset("/images/hero-dragon.jpg"),
					alt: "Bearded dragon in steel rim light — Draco mark",
					className: "h-72 w-full rounded-xl object-cover object-center sm:h-80 lg:hidden"
				}), /* @__PURE__ */ jsx("img", {
					src: asset("/images/mark-dragon.jpg"),
					alt: "Studio portrait of a bearded dragon — Draco mark",
					className: "hidden h-full w-full rounded-xl object-cover lg:absolute lg:inset-0 lg:block"
				})]
			})]
		})
	});
}
function CodeSection() {
	return /* @__PURE__ */ jsx("section", {
		id: "code",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-mono text-xs tracking-label text-muted uppercase",
					children: "01 — The code"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-3 max-w-2xl font-display text-4xl tracking-wide text-fg sm:text-5xl",
					children: "How every launch is built"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-xl text-base leading-normal text-muted",
					children: "I do not ask anyone to trust a story. The rules are the product."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2",
					children: RULES.map((rule) => /* @__PURE__ */ jsxs("article", {
						className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)] sm:p-8",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "font-mono text-xs text-subtle",
								children: rule.n
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-3 font-display text-2xl tracking-wide text-fg",
								children: rule.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-normal text-muted",
								children: rule.body
							})
						]
					}, rule.n))
				})
			]
		})
	});
}
function Launches() {
	return /* @__PURE__ */ jsx("section", {
		id: "launches",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-mono text-xs tracking-label text-muted uppercase",
					children: "02 — Launches"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-4xl tracking-wide text-fg sm:text-5xl",
					children: "Live work"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-xl text-base leading-normal text-muted",
					children: "Built on Solana through pump.fun and on WETH through gekko.cash."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-2",
					children: LAUNCHES.map((coin) => /* @__PURE__ */ jsxs("article", {
						className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ jsx("img", {
							src: asset(coin.image),
							alt: coin.imageAlt,
							className: "aspect-4/3 w-full object-cover"
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-6 sm:p-8",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ jsxs(Badge, { children: ["$", coin.ticker] }),
										/* @__PURE__ */ jsx(Badge, { children: coin.chain }),
										/* @__PURE__ */ jsx(Badge, { children: coin.venue })
									]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-4 font-display text-3xl tracking-wide text-fg",
									children: coin.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm leading-normal text-muted",
									children: coin.blurb
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-6",
									children: /* @__PURE__ */ jsx(CopyCa, {
										value: coin.contract,
										kind: coin.contractKind
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ jsx(Button, {
										asChild: true,
										children: /* @__PURE__ */ jsxs("a", {
											href: coin.trade,
											target: "_blank",
											rel: "noreferrer",
											children: ["Trade", /* @__PURE__ */ jsx(ArrowUpRight, {})]
										})
									}), /* @__PURE__ */ jsx(Button, {
										asChild: true,
										variant: "outline",
										children: /* @__PURE__ */ jsx("a", {
											href: coin.site,
											target: "_blank",
											rel: "noreferrer",
											children: "Project"
										})
									})]
								})
							]
						})]
					}, coin.id))
				})
			]
		})
	});
}
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid min-h-96 grid-cols-2 grid-rows-2 gap-3",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: asset("/images/mark-dragon.jpg"),
						alt: "Studio portrait of a bearded dragon",
						className: "row-span-2 h-full w-full rounded-lg object-cover"
					}),
					/* @__PURE__ */ jsx("img", {
						src: asset("/images/about-bench.jpg"),
						alt: "Night workbench with an opened computer tower and charts on a monitor",
						className: "h-full w-full rounded-lg object-cover"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col justify-center rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "font-mono text-xs tracking-label text-subtle uppercase",
								children: "Name"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 font-display text-2xl tracking-wide",
								children: BIO.name
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 font-mono text-xs tracking-label text-subtle uppercase",
								children: "Age"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-lg",
								children: BIO.age
							})
						]
					})
				]
			}), /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-mono text-xs tracking-label text-muted uppercase",
					children: "03 — About"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-4xl tracking-wide text-fg sm:text-5xl",
					children: "Mark. Builder. Same side of the book."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-5 text-base leading-normal text-muted",
					children: BIO.story
				}),
				/* @__PURE__ */ jsxs("ul", {
					className: "mt-8 space-y-3 text-sm text-fg",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "flex min-h-11 items-center gap-3",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "size-4 text-muted" }), BIO.location]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex min-h-11 items-center gap-3",
							children: [
								/* @__PURE__ */ jsx(Shield, { className: "size-4 text-muted" }),
								BIO.occupation,
								" by day"
							]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex min-h-11 items-center gap-3",
							children: [/* @__PURE__ */ jsx(Wallet, { className: "size-4 text-muted" }), "Wallets posted when they open"]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex min-h-11 items-center gap-3",
							children: [/* @__PURE__ */ jsx(Coins, { className: "size-4 text-muted" }), "SOL · pump.fun · WETH · gekko.cash"]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex min-h-11 items-center gap-3",
							children: [/* @__PURE__ */ jsx(Anchor, { className: "size-4 text-muted" }), "2A supporter · gamer · trader"]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: BIO.lines.map((line) => /* @__PURE__ */ jsx(Badge, { children: line }, line))
				})
			] })]
		})
	});
}
function Connect() {
	return /* @__PURE__ */ jsx("section", {
		id: "connect",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-mono text-xs tracking-label text-muted uppercase",
					children: "04 — Connect"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-4xl tracking-wide text-fg sm:text-5xl",
					children: "Find me where I post"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-xl text-base leading-normal text-muted",
					children: "New wallets, new launches, and the books go up here first."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-3",
					children: SOCIALS.map((social) => /* @__PURE__ */ jsxs("a", {
						href: social.href,
						target: "_blank",
						rel: "noreferrer",
						className: "group flex min-h-24 flex-col justify-between rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-mono text-xs tracking-label text-subtle uppercase",
							children: social.network
						}), /* @__PURE__ */ jsxs("span", {
							className: "mt-6 flex items-center justify-between font-display text-xl tracking-wide text-fg",
							children: [social.label, /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4 text-muted transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						})]
					}, social.id))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-10 rounded-xl bg-elevated p-6 sm:p-8",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl tracking-wide",
						children: "Open books"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-2xl text-sm leading-normal text-muted",
						children: "I do not keep stealth wallets. When a wallet is used on a project, it is posted on X and Telegram. If you cannot find it there, it is not mine."
					})]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
			children: [/* @__PURE__ */ jsx(Separator, { className: "mb-8" }), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "font-display text-lg tracking-brand",
					children: SITE.name
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 max-w-md text-xs leading-normal text-subtle",
					children: "Memecoins are volatile and can go to zero. Nothing here is financial advice, an offer, or a solicitation. Do your own research. You are responsible for your own trades."
				})] }), /* @__PURE__ */ jsxs("p", {
					className: "text-xs text-subtle",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						BIO.name
					]
				})]
			})]
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	return /* @__PURE__ */ jsx(HomePage, {});
}
//#endregion
export { Home as component };
