import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

function shorten(value: string, kind: "mint" | "evm") {
  if (kind === "evm") return `${value.slice(0, 6)}…${value.slice(-4)}`;
  return `${value.slice(0, 6)}…${value.slice(-6)}`;
}

function writeClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }
  return Promise.reject(new Error("clipboard unavailable"));
}

function fallbackCopy(value: string) {
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

export function CopyCa({
  value,
  kind,
  className,
}: {
  value: string;
  kind: "mint" | "evm";
  className?: string;
}) {
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

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-sm bg-elevated px-3 font-mono text-xs text-fg transition-[background-color,box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
        className,
      )}
      aria-label={copied ? "Copied" : `Copy contract ${value}`}
    >
      <span className="max-w-xs truncate sm:max-w-none">
        {shorten(value, kind)}
      </span>
      {copied ? (
        <Check className="size-3.5 text-primary" />
      ) : (
        <Copy className="size-3.5 text-muted" />
      )}
    </button>
  );
}
