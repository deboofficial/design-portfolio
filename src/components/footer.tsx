import { AnimatedLink } from "./animated-link";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border/50 mt-24 py-12"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[13px] text-muted">
            &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-6">
            <AnimatedLink
              href="mailto:hello@example.com"
              className="text-[13px] text-muted"
            >
              Email
            </AnimatedLink>
            <AnimatedLink
              href="https://linkedin.com"
              className="text-[13px] text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </AnimatedLink>
            <AnimatedLink
              href="https://read.cv"
              className="text-[13px] text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read.cv
            </AnimatedLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
