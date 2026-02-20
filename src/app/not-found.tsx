import { PageTransition } from "@/components/page-transition";
import { AnimatedLink } from "@/components/animated-link";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="w-[600px] max-w-full mx-auto px-6 pt-24 pb-16">
        <h1 className="text-[48px] leading-[54px] font-[560] tracking-[-0.05px] text-[#090909] dark:text-[#e5e5e5] mb-4">
          Page not found
        </h1>
        <p className="text-[14px] leading-[20px] font-[460] text-[#1D1D21] dark:text-[#e5e5e5] mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <AnimatedLink href="/" className="text-[14px] leading-[20px] font-[460] text-[#1D1D21] dark:text-[#e5e5e5]">
          &larr; Back to work
        </AnimatedLink>
      </section>
    </PageTransition>
  );
}
