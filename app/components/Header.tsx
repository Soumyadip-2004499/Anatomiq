"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Search, LibraryBig, NotebookPen, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import type { LocaleConfig } from "../i18n/config";
import type { UiDictionary } from "../i18n/types";
import { locales } from "../i18n/config";

export function LanguageSwitcher({ locale, t }: { locale: LocaleConfig; t: UiDictionary }) {
  return (
    <div className="language-switcher" title={t.language.label}>
      <span className="language-current">{locale.nativeName}</span>
      <select
        aria-label={t.language.choose}
        value={locale.code}
        onChange={(event) => {
          window.location.pathname = `/${event.target.value}`;
        }}
      >
        {locales.map((entry) => (
          <option key={entry.code} value={entry.code} lang={entry.code}>
            {entry.nativeName}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Header({
  locale,
  t,
  query,
  setQuery,
  onHome,
  onOpenLibrary,
}: {
  locale: LocaleConfig;
  t: UiDictionary;
  query: string;
  setQuery: (q: string) => void;
  onHome: () => void;
  onOpenLibrary: () => void;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="topbar">
      <button className="brand" type="button" onClick={onHome} aria-label="Anatomiq Home">
        <strong>Anatomiq</strong>
        <em>Explore Human Anatomy in 3D</em>
      </button>

      <label className="search-box">
        <Search size={17} />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.search.placeholder} />
      </label>

      <div className="header-actions">
        <LanguageSwitcher locale={locale} t={t} />
        {mounted && (
          <button
            className="theme-toggle"
            onClick={(e) => {
              const nextTheme = theme === "dark" ? "light" : "dark";
              
              if (
                !document.startViewTransition ||
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ) {
                setTheme(nextTheme);
                return;
              }

              const x = e.clientX;
              const y = e.clientY;
              const endRadius = Math.hypot(
                Math.max(x, window.innerWidth - x),
                Math.max(y, window.innerHeight - y)
              );

              const transition = document.startViewTransition(() => {
                setTheme(nextTheme);
              });

              transition.ready.then(() => {
                document.documentElement.animate(
                  {
                    clipPath: [
                      `circle(0px at ${x}px ${y}px)`,
                      `circle(${endRadius}px at ${x}px ${y}px)`,
                    ],
                  },
                  {
                    duration: 650,
                    easing: "ease-out",
                    pseudoElement: "::view-transition-new(root)",
                  }
                );
              });
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}
        <button className="mobile-library-trigger" onClick={onOpenLibrary} aria-label={t.library.open}>
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
