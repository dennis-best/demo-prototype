import { useState } from "react";

export function SiteBanner() {
  const [hidden, setHidden] = useState(false);

  if (hidden) {
    return null;
  }

  return (
    <header className="site-banner" role="banner">
      {/* Gembox / Site Banner — Severity=Warning: https://www.figma.com/design/IgohaddARKIJHihXX0OE4Z/Gembox-Components?node-id=5942-8423 */}
      <div className="site-banner__inner">
        <div className="site-banner__icon" aria-hidden="true">
          <img
            src="/assets/gembox/site-banner-warning-icon.svg"
            alt=""
            width={32}
            height={32}
          />
        </div>
        <p className="site-banner__text">
          Prototype internal use only. May 2026 AI Summit demo — not a production page. Copy has
          not had a final human editorial pass (see Voice and Tone in Gembox Design System).
        </p>
        <button
          type="button"
          className="site-banner__close"
          aria-label="Dismiss banner"
          onClick={() => setHidden(true)}
        >
          <img src="/assets/gembox/site-banner-close.svg" alt="" width={30} height={30} />
        </button>
      </div>
    </header>
  );
}
