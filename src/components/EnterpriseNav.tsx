/* Gembox / Navigation Bar — prototype frame: https://www.figma.com/design/8q2oWbbhF5UiIgRXwuJL6M/Demo-Enterprise-Landing-%E2%80%94-Prototype-Frames?node-id=5-13 */

const NAV_LINKS = [
  { label: "Job Simulations", href: "#", active: false },
  { label: "For Educators", href: "#", active: false },
  { label: "Jobs", href: "#", active: false },
  { label: "For Enterprise", href: "#", active: true },
] as const;

export function EnterpriseNav() {
  return (
    <nav className="elp-nav" aria-label="Primary">
      <div className="elp-nav__inner">
        <a className="elp-nav__logo" href="#" aria-label="Forage home">
          <img src="/assets/enterprise/forage-logo.svg" alt="" width={107} height={32} />
        </a>
        <ul className="elp-nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                className={`elp-nav__link${link.active ? " elp-nav__link--active" : ""}`}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="elp-nav__actions">
          <a className="elp-nav__signup" href="#">
            Sign Up
          </a>
          <a className="elp-nav__signin" href="#">
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}
