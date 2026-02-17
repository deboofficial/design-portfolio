import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { AnimatedLink } from "@/components/animated-link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product designer with a focus on crafting thoughtful, user-centered digital experiences.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="max-w-[680px] mx-auto px-6 pt-24 pb-16">
        <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-tight leading-[1.15] mb-8">
          About
        </h1>

        <div className="space-y-5 text-[15px] leading-[1.7] text-foreground mb-12">
          <p>
            I&apos;m a product designer who believes the best design disappears.
            When everything works as it should, people don&apos;t notice the
            design — they just accomplish what they set out to do.
          </p>
          <p>
            My work sits at the intersection of user needs and business goals.
            I spend most of my time understanding problems deeply before
            reaching for solutions, because the quality of the question
            determines the quality of the answer.
          </p>
          <p>
            Previously, I&apos;ve worked across fintech, health tech, and SaaS
            — environments where clarity and trust in the interface directly
            impact outcomes. I care about typography, spacing, and the small
            details that signal craft.
          </p>
        </div>

        <div className="border-t border-border pt-8 mb-12">
          <h2 className="text-[13px] uppercase tracking-wider text-muted mb-4">
            Experience
          </h2>
          <ul className="space-y-4">
            {[
              {
                role: "Senior Product Designer",
                company: "Company A",
                period: "2022 — Present",
              },
              {
                role: "Product Designer",
                company: "Company B",
                period: "2020 — 2022",
              },
              {
                role: "UI/UX Designer",
                company: "Company C",
                period: "2018 — 2020",
              },
            ].map((job) => (
              <li
                key={job.company}
                className="flex items-baseline justify-between text-[14px]"
              >
                <div>
                  <span className="text-foreground">{job.role}</span>
                  <span className="text-muted">{" — "}{job.company}</span>
                </div>
                <span className="text-[12px] text-muted tabular-nums">
                  {job.period}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border pt-8">
          <h2 className="text-[13px] uppercase tracking-wider text-muted mb-4">
            Get in touch
          </h2>
          <p className="text-[15px] leading-[1.7] text-foreground">
            I&apos;m currently open to new opportunities.{" "}
            <AnimatedLink
              href="mailto:hello@example.com"
              className="text-foreground"
            >
              Send me an email
            </AnimatedLink>{" "}
            or find me on{" "}
            <AnimatedLink
              href="https://linkedin.com"
              className="text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </AnimatedLink>
            .
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
