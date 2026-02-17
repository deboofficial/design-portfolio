import { PageTransition } from "@/components/page-transition";
import { AnimatedLink } from "@/components/animated-link";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="max-w-[680px] mx-auto px-6 pt-24 pb-16">
        <h1 className="text-[2rem] font-medium tracking-tight mb-4">
          Page not found
        </h1>
        <p className="text-[15px] text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <AnimatedLink href="/" className="text-[14px] text-foreground">
          &larr; Back to work
        </AnimatedLink>
      </section>
    </PageTransition>
  );
}
