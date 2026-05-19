import { FormEvent, useRef, useState } from "react";
import { EnterpriseNav } from "./EnterpriseNav";
import { GemboxButton } from "./gembox/GemboxButton";
import { GemboxInput } from "./gembox/GemboxInput";
import { GemboxSelect } from "./gembox/GemboxSelect";

/* Figma frame: https://www.figma.com/design/8q2oWbbhF5UiIgRXwuJL6M/Demo-Enterprise-Landing-%E2%80%94-Prototype-Frames?node-id=5-2 */
/* Notion spec: https://www.notion.so/35f50ba3919d805c9d15f5cb5468fd7e */

const ENTERPRISE_LOGOS = [
  { src: "/assets/enterprise/logo-commbank.png", alt: "CommBank" },
  { src: "/assets/enterprise/logo-redbull.png", alt: "Red Bull" },
  { src: "/assets/enterprise/logo-deloitte.png", alt: "Deloitte" },
  { src: "/assets/enterprise/logo-ashurst.png", alt: "Ashurst" },
  { src: "/assets/enterprise/logo-citi.png", alt: "Citi" },
  { src: "/assets/enterprise/logo-jpmorgan.png", alt: "JPMorgan Chase" },
  { src: "/assets/enterprise/logo-bofa.png", alt: "Bank of America" },
];

const UNIVERSITY_LOGOS = [
  { src: "/assets/enterprise/logo-usc.png", alt: "USC" },
  { src: "/assets/enterprise/logo-monash.png", alt: "Monash University" },
  { src: "/assets/enterprise/logo-purdue.png", alt: "Purdue University" },
  { src: "/assets/enterprise/logo-warwick.png", alt: "University of Warwick" },
  { src: "/assets/enterprise/logo-nyu.png", alt: "NYU" },
];

const STATS = [
  { value: "2M+", label: "Students building skills on Forage" },
  { value: "300+", label: "Job simulations across industries" },
  { value: "10K+", label: "University partnerships worldwide" },
];

const STEPS = [
  {
    title: "Students Engage With a Simulation",
    description:
      "Learners explore real tasks in a low-risk environment and build evidence of skills before they apply.",
  },
  {
    title: "Your Team Posts Jobs via TalentMatch",
    description:
      "Surface opportunities to students who have already shown intent and context for your work.",
  },
  {
    title: "Students Apply for Jobs",
    description:
      "Candidates arrive with richer signals than a resume alone — clearer fit for recruiters and hiring managers.",
  },
  {
    title: "You Hire Prepared Candidates",
    description:
      "Shorter ramp, better conversations, and a fairer view of readiness across your pipeline.",
  },
];

const COMPANY_SIZES = [
  "1–50 employees",
  "51–200 employees",
  "201–1,000 employees",
  "1,000+ employees",
];

function LogoStrip({
  logos,
  label,
}: {
  logos: { src: string; alt: string }[];
  label: string;
}) {
  const track = [...logos, ...logos];
  return (
    <section className="elp-logos" aria-label={label}>
      <div className="elp-logos__viewport">
        <div className="elp-logos__track" aria-hidden="true">
          {track.map((logo, index) => (
            <img
              key={`${logo.src}-${index}`}
              className="elp-logos__img"
              src={logo.src}
              alt={index < logos.length ? logo.alt : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function EnterpriseLandingPage() {
  const formRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [companySize, setCompanySize] = useState("");

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="elp">
      <EnterpriseNav />

      <main className="elp-main">
        {/* Gembox / Layout — Full: https://www.figma.com/design/IgohaddARKIJHihXX0OE4Z/Gembox-Components?node-id=7666-4485 */}
        <section className="elp-hero">
          <div className="elp-container elp-hero__grid">
            <div className="elp-hero__copy">
              <p className="elp-eyebrow">Enterprise</p>
              <h1 className="elp-hero__title">
                Early Talent Experiences That Scale With Your Team
              </h1>
              <p className="elp-hero__lead">
                Show candidates what the work is really like, connect learning to hiring, and grow
                a pipeline of prepared applicants — built on simulations students already trust.
              </p>
              <div className="elp-hero__actions">
                {/* Gembox / Button — Primary: https://www.figma.com/design/IgohaddARKIJHihXX0OE4Z/Gembox-Components?node-id=7027-24415 */}
                <GemboxButton variant="primary-lg" onClick={scrollToForm}>
                  Get in Touch
                </GemboxButton>
                <GemboxButton variant="secondary-lg" onClick={scrollToForm}>
                  Is Forage Right for Me?
                </GemboxButton>
              </div>
            </div>
            <div className="elp-hero__visual">
              <img
                className="elp-hero__image"
                src="/assets/enterprise/hero-login-illustration.png"
                alt=""
                width={420}
                height={406}
              />
            </div>
          </div>
        </section>

        <section className="elp-panel elp-panel--muted" aria-labelledby="elp-stats-heading">
          <div className="elp-container">
            <h2 id="elp-stats-heading" className="elp-h2">
              Why Teams Partner With Forage
            </h2>
            <ul className="elp-stats">
              {STATS.map((item) => (
                <li key={item.label} className="elp-card elp-stats__card">
                  <p className="elp-stats__value">{item.value}</p>
                  <p className="elp-stats__label">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <LogoStrip logos={ENTERPRISE_LOGOS} label="Enterprise partner logos" />

        <section className="elp-section" aria-labelledby="elp-steps-heading">
          <div className="elp-container">
            <h2 id="elp-steps-heading" className="elp-h2">
              How It Works
            </h2>
            <p className="elp-section__lead">
              From first touch to hire, Forage connects learning on simulations to the roles you
              recruit for — including applications through TalentMatch.
            </p>
            <ol className="elp-steps">
              {STEPS.map((step) => (
                <li key={step.title} className="elp-card elp-steps__card">
                  <span className="elp-steps__dot" aria-hidden="true" />
                  <h3 className="elp-steps__title">{step.title}</h3>
                  <p className="elp-steps__desc">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <LogoStrip logos={UNIVERSITY_LOGOS} label="University partner logos" />

        <section className="elp-panel elp-panel--muted" aria-labelledby="elp-fit-heading">
          <div className="elp-container elp-fit">
            <h2 id="elp-fit-heading" className="elp-h2">
              Is Forage Right for My Team?
            </h2>
            <p className="elp-fit__lead">
              Forage fits when you need volume and quality in early talent pipelines, want candidates
              to understand the work before day one, and are ready to connect learning signals to
              hiring decisions. If that sounds like your roadmap, the next step is a short
              conversation with our team.
            </p>
            <GemboxButton variant="primary-lg" onClick={scrollToForm}>
              Talk With Us
            </GemboxButton>
          </div>
        </section>

        <section ref={formRef} className="elp-section elp-form-wrap" aria-labelledby="elp-form-heading">
          <div className="elp-container">
            <div className="elp-card elp-form-card">
              <h2 id="elp-form-heading" className="elp-form-card__title">
                Request a Follow-Up
              </h2>
              <p className="elp-form-card__lead">
                Share a few details and we will route your request to the right person. This
                prototype does not submit data anywhere.
              </p>
              {submitted ? (
                <p className="elp-form-success" role="status">
                  Thank you. Your request has been recorded for this prototype session.
                </p>
              ) : (
                <form className="elp-form" onSubmit={handleSubmit} noValidate>
                  <GemboxInput label="First Name" name="firstName" required autoComplete="given-name" />
                  <GemboxInput label="Last Name" name="lastName" required autoComplete="family-name" />
                  <GemboxInput
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                  <GemboxInput
                    label="Job Title"
                    name="jobTitle"
                    required
                    autoComplete="organization-title"
                  />
                  <GemboxInput label="Company" name="company" required autoComplete="organization" />
                  <GemboxSelect
                    label="Company Size"
                    name="companySize"
                    required
                    value={companySize}
                    onChange={setCompanySize}
                    options={COMPANY_SIZES}
                    placeholder="Select company size"
                  />
                  <GemboxInput
                    label="Company URL"
                    name="companyUrl"
                    type="url"
                    required
                    autoComplete="url"
                    helpText="Use a full web address, for example https://example.com"
                  />
                  <GemboxButton variant="primary" type="submit">
                    Submit Request
                  </GemboxButton>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="elp-footer">
        <div className="elp-container">
          <p>
            © Forage — Enterprise landing prototype. Patterns reference Gembox Full Page layout
            and Gembox Components as linked in source comments.
          </p>
        </div>
      </footer>
    </div>
  );
}
