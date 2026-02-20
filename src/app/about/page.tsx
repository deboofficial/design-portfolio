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
      <section className="w-[600px] max-w-full mx-auto px-6 pt-24 pb-16">
        <h1 className="text-[48px] leading-[54px] font-[560] tracking-[-0.05px] text-[#090909] dark:text-[#e5e5e5] mb-8">
          About
        </h1>

        <div className="space-y-5 text-[16px] leading-[22px] font-[460] tracking-[-0.05px] text-[#1D1D21] dark:text-[#e5e5e5] mb-12">
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
          <h2 className="text-[11px] leading-[15px] font-[460] uppercase tracking-[-0.05px] text-[#747474] dark:text-[#999] mb-4">
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
                className="flex items-baseline justify-between text-[14px] leading-[20px] font-[460]"
              >
                <div>
                  <span className="text-[#1D1D21] dark:text-[#e5e5e5]">{job.role}</span>
                  <span className="text-[#747474] dark:text-[#999]">{" — "}{job.company}</span>
                </div>
                <span className="text-[12px] leading-[17px] text-[#747474] dark:text-[#999] tabular-nums">
                  {job.period}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border pt-8">
          <h2 className="text-[11px] leading-[15px] font-[460] uppercase tracking-[-0.05px] text-[#747474] dark:text-[#999] mb-4">
            Get in touch
          </h2>
          <p className="text-[16px] leading-[22px] font-[460] text-[#1D1D21] dark:text-[#e5e5e5]">
            I&apos;m currently open to new opportunities.{" "}
            <AnimatedLink
              href="mailto:ali.adebolaa@gmail.com"
              className="text-[#1D1D21] dark:text-[#e5e5e5]"
            >
              Send me an email
            </AnimatedLink>{" "}
            or find me on{" "}
            <AnimatedLink
              href="https://linkedin.com"
              className="text-[#1D1D21] dark:text-[#e5e5e5]"
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
