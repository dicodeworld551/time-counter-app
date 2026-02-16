import Image from 'next/image';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-16 px-6 pb-24">
      <section className="pt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
          About Us
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          A boutique remodeling studio built on craftsmanship and trust.
        </h1>
        <p className="mt-4 text-base text-slate-300">
          Everbright Remodeling partners with homeowners who value intentional design. Our award-winning
          designers, seasoned carpenters, and project managers collaborate to deliver spaces that feel
          elevated, functional, and timeless.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <Card
            eyebrow="Our Promise"
            title="Clear communication, elevated results."
            description="We pair a detailed pre-construction plan with weekly walkthroughs, budget transparency, and proactive scheduling updates."
          />
          <Card
            eyebrow="Craft"
            title="An artisan approach to every finish."
            description="Our trades are hand-selected for their attention to detail. From millwork to lighting, we curate every layer."
          />
          <Card
            eyebrow="Experience"
            title="Guided by seasoned designers."
            description="We bring architectural insight and a deep material library to ensure your remodel feels cohesive."
          />
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80"
            alt="Remodeling team planning"
            width={960}
            height={980}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
          Our Process
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white">
          Design, build, and refine—without the stress.
        </h2>
        <p className="mt-4 text-sm text-slate-300">
          We orchestrate every step: discovery, conceptual design, construction, and final styling. Our
          proven system keeps projects on schedule and ensures the experience feels personal.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Get Free Estimate</Button>
          <Button href="/services" variant="secondary">
            View Services
          </Button>
        </div>
      </section>
    </div>
  );
}
