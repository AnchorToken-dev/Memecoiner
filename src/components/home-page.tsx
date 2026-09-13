import {
  Anchor,
  ArrowUpRight,
  Coins,
  MapPin,
  Shield,
  Wallet,
} from "lucide-react";
import { CopyCa } from "@/components/copy-ca";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { asset } from "@/lib/asset";
import { BIO, LAUNCHES, PLATFORMS, RULES, SITE, SOCIALS } from "@/lib/site";

const telegram = SOCIALS.find((s) => s.network === "Telegram")!;

export function HomePage() {
  return (
    <div id="top" className="relative min-h-dvh bg-bg text-fg">
      <div className="grain" aria-hidden="true" />
      <SiteHeader />
      <main>
        <Hero />
        <CodeSection />
        <Launches />
        <About />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="stagger-in relative z-10 max-w-xl">
          <p className="font-mono text-xs tracking-label text-muted uppercase">
            {BIO.location} · {BIO.occupation}
          </p>
          <h1 className="mt-4 font-display text-6xl leading-none tracking-display text-fg sm:text-8xl">
            {SITE.name}
          </h1>
          <p className="mt-4 text-xl text-muted sm:text-2xl">
            I got tired of getting rugged.
            <br />
            So I build the way I wanted to buy.
          </p>
          <p className="mt-5 max-w-md text-base leading-normal text-subtle">
            Zero developer allocation. Same market, same price. No bundles. Open
            wallets. If I open a new wallet, I post it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#launches">View launches</a>
            </Button>
            <Button asChild variant="outline">
              <a href={telegram.href} target="_blank" rel="noreferrer">
                Telegram
                <ArrowUpRight />
              </a>
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {PLATFORMS.map((p) => (
              <div key={p.label}>
                <dt className="font-mono text-xs tracking-label text-subtle uppercase">
                  {p.label}
                </dt>
                <dd className="mt-1 text-sm text-fg">{p.detail}</dd>
              </div>
            ))}
            <div>
              <dt className="font-mono text-xs tracking-label text-subtle uppercase">
                Dev take
              </dt>
              <dd className="mt-1 text-sm text-fg">0%</dd>
            </div>
          </dl>
        </div>

        <div className="relative min-h-72 lg:min-h-full">
          <img
            src={asset("/images/hero-dragon.jpg")}
            alt="Bearded dragon in steel rim light — Draco mark"
            className="h-72 w-full rounded-xl object-cover object-center sm:h-80 lg:hidden"
          />
          <img
            src={asset("/images/mark-dragon.jpg")}
            alt="Studio portrait of a bearded dragon — Draco mark"
            className="hidden h-full w-full rounded-xl object-cover lg:absolute lg:inset-0 lg:block"
          />
        </div>
      </div>
    </section>
  );
}

function CodeSection() {
  return (
    <section id="code" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-xs tracking-label text-muted uppercase">
          01 — The code
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-wide text-fg sm:text-5xl">
          How every launch is built
        </h2>
        <p className="mt-4 max-w-xl text-base leading-normal text-muted">
          I do not ask anyone to trust a story. The rules are the product.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {RULES.map((rule) => (
            <article
              key={rule.n}
              className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)] sm:p-8"
            >
              <p className="font-mono text-xs text-subtle">{rule.n}</p>
              <h3 className="mt-3 font-display text-2xl tracking-wide text-fg">
                {rule.title}
              </h3>
              <p className="mt-3 text-sm leading-normal text-muted">
                {rule.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Launches() {
  return (
    <section id="launches" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-xs tracking-label text-muted uppercase">
          02 — Launches
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-fg sm:text-5xl">
          Live work
        </h2>
        <p className="mt-4 max-w-xl text-base leading-normal text-muted">
          Built on Solana through pump.fun and on WETH through gekko.cash.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {LAUNCHES.map((coin) => (
            <article
              key={coin.id}
              className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]"
            >
              <img
                src={asset(coin.image)}
                alt={coin.imageAlt}
                className="aspect-4/3 w-full object-cover"
              />
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>${coin.ticker}</Badge>
                  <Badge>{coin.chain}</Badge>
                  <Badge>{coin.venue}</Badge>
                </div>
                <h3 className="mt-4 font-display text-3xl tracking-wide text-fg">
                  {coin.name}
                </h3>
                <p className="mt-3 text-sm leading-normal text-muted">
                  {coin.blurb}
                </p>
                <div className="mt-6">
                  <CopyCa value={coin.contract} kind={coin.contractKind} />
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={coin.trade} target="_blank" rel="noreferrer">
                      Trade
                      <ArrowUpRight />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={coin.site} target="_blank" rel="noreferrer">
                      Project
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div className="grid min-h-96 grid-cols-2 grid-rows-2 gap-3">
          <img
            src={asset("/images/mark-dragon.jpg")}
            alt="Studio portrait of a bearded dragon"
            className="row-span-2 h-full w-full rounded-lg object-cover"
          />
          <img
            src={asset("/images/about-bench.jpg")}
            alt="Night workbench with an opened computer tower and charts on a monitor"
            className="h-full w-full rounded-lg object-cover"
          />
          <div className="flex flex-col justify-center rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
            <p className="font-mono text-xs tracking-label text-subtle uppercase">
              Name
            </p>
            <p className="mt-1 font-display text-2xl tracking-wide">{BIO.name}</p>
            <p className="mt-4 font-mono text-xs tracking-label text-subtle uppercase">
              Age
            </p>
            <p className="mt-1 text-lg">{BIO.age}</p>
          </div>
        </div>
        <div>
          <p className="font-mono text-xs tracking-label text-muted uppercase">
            03 — About
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-fg sm:text-5xl">
            Mark. Builder. Same side of the book.
          </h2>
          <p className="mt-5 text-base leading-normal text-muted">{BIO.story}</p>
          <ul className="mt-8 space-y-3 text-sm text-fg">
            <li className="flex min-h-11 items-center gap-3">
              <MapPin className="size-4 text-muted" />
              {BIO.location}
            </li>
            <li className="flex min-h-11 items-center gap-3">
              <Shield className="size-4 text-muted" />
              {BIO.occupation} by day
            </li>
            <li className="flex min-h-11 items-center gap-3">
              <Wallet className="size-4 text-muted" />
              Wallets posted when they open
            </li>
            <li className="flex min-h-11 items-center gap-3">
              <Coins className="size-4 text-muted" />
              SOL · pump.fun · WETH · gekko.cash
            </li>
            <li className="flex min-h-11 items-center gap-3">
              <Anchor className="size-4 text-muted" />
              2A supporter · gamer · trader
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            {BIO.lines.map((line) => (
              <Badge key={line}>{line}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section id="connect" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-xs tracking-label text-muted uppercase">
          04 — Connect
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-fg sm:text-5xl">
          Find me where I post
        </h2>
        <p className="mt-4 max-w-xl text-base leading-normal text-muted">
          New wallets, new launches, and the books go up here first.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {SOCIALS.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-24 flex-col justify-between rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <span className="font-mono text-xs tracking-label text-subtle uppercase">
                {social.network}
              </span>
              <span className="mt-6 flex items-center justify-between font-display text-xl tracking-wide text-fg">
                {social.label}
                <ArrowUpRight className="size-4 text-muted transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
        <div className="mt-10 rounded-xl bg-elevated p-6 sm:p-8">
          <h3 className="font-display text-2xl tracking-wide">Open books</h3>
          <p className="mt-3 max-w-2xl text-sm leading-normal text-muted">
            I do not keep stealth wallets. When a wallet is used on a project, it
            is posted on X and Telegram. If you cannot find it there, it is not
            mine.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Separator className="mb-8" />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-lg tracking-brand">{SITE.name}</p>
            <p className="mt-2 max-w-md text-xs leading-normal text-subtle">
              Memecoins are volatile and can go to zero. Nothing here is
              financial advice, an offer, or a solicitation. Do your own
              research. You are responsible for your own trades.
            </p>
          </div>
          <p className="text-xs text-subtle">
            © {new Date().getFullYear()} {BIO.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
