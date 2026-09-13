import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { asset } from "@/lib/asset";
import { NAV, SITE, SOCIALS } from "@/lib/site";

const telegram = SOCIALS.find((s) => s.network === "Telegram")!;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex min-h-11 items-center gap-3">
          <img
            src={asset("/images/mark-dragon.jpg")}
            alt=""
            className="size-8 rounded-full object-cover"
          />
          <span className="font-display text-lg tracking-brand text-fg">
            {SITE.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex h-11 items-center px-3 text-sm text-muted transition-colors duration-150 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="ml-2">
            <a href={telegram.href} target="_blank" rel="noreferrer">
              Telegram
            </a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>{SITE.name}</SheetTitle>
            <SheetDescription>Site navigation</SheetDescription>
            <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
              {NAV.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-base text-fg"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <a
                  href={telegram.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center text-base text-primary"
                >
                  Telegram
                </a>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
