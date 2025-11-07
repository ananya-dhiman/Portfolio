"use client";
import { Button } from "@/components/ui/button";
import { useLayoutEffect } from "react"; 
import { VaultSection } from "@/components/vault-section";
import Link from "next/link";
import Color from "color";
export default function Page() {
  useLayoutEffect(() => {
  const savedColor = localStorage.getItem("primaryColor");
  if (savedColor) {
    const base = Color(savedColor);
    document.documentElement.style.setProperty("--primary", savedColor);
    document.documentElement.style.setProperty("--color-primary", savedColor);
    document.documentElement.style.setProperty("--primary-light", base.lighten(0.25).hsl().string());
    document.documentElement.style.setProperty("--primary-dark", base.darken(0.25).hsl().string());
  }
}, []);

  return (
    <main className="relative min-h-[100dvh] bg-background text-foreground overflow-hidden">
      {/* Logo */}
    
     

      {/* Main Content */}
      <div className="mx-auto w-full max-w-3xl px-6 pt-16 pb-10 relative z-10">
        <header className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {"ANANYA’S VAULT"}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {"Version 3.0 — Now with 23% more clarity."}
          </p>

          <div className="mt-10 flex justify-center">
            <Link href="/vault">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 cursor-pointer"
              size="lg"
            >
              {"Quick Start"}
            </Button>
            </Link>
          </div>
        </header>

        <section aria-label="Main actions" className="mt-16 space-y-6">
          <VaultSection
            title="ACCESS PORTFOLIO"
            description="See my work"
            actionLabel="Start"
            actionStyle="primary"
          />
          <VaultSection
            title="RESUME"
            description="View my journey"
            actionLabel="Load"
            actionStyle="secondary"
          />
          <VaultSection
            title="CONNECT"
            description="Ping me across the web"
            actionLabel="Sync"
            actionStyle="secondary"
          />
        </section>

        <footer className="mt-10 flex items-start justify-center text-sm text-muted-foreground">
          <span
            aria-hidden
            className="mt-0.5 mr-2 inline-flex h-5 w-5 items-center justify-center rounded-md border border-border text-[10px] text-primary"
          >
            {"▢"}
          </span>
          <p className="text-pretty">
            {"Sometimes I get bored and switch to light mode"}
          </p>
        </footer>
      </div>
    </main>
  );
}
