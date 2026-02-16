import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import Card from '@/components/Card';

const services = [
  {
    title: 'Kitchen Remodeling',
    description:
      'Custom cabinetry, stone surfaces, and chef-ready layouts designed around how you cook and host.'
  },
  {
    title: 'Bathroom Remodeling',
    description:
      'Spa-inspired bathrooms with premium tile work, lighting design, and water-efficient fixtures.'
  },
  {
    title: 'Basement Finishing',
    description:
      'Transform unused square footage into media rooms, guest suites, or home gyms.'
  }
];

const testimonials = [
  {
    name: 'Megan L.',
    quote:
      'They delivered our kitchen renovation ahead of schedule and the craftsmanship is stunning.'
  },
  {
    name: 'Carlos R.',
    quote:
      'Every detail was handled with care. The project manager kept us in the loop the entire time.'
  },
  {
    name: 'Priya S.',
    quote:
      'The team respected our home, stayed on budget, and gave us a bathroom that feels like a retreat.'
  }
];

const gallery = [
  {
    title: 'Sunlit Kitchen Renewal',
    image:
      'https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Modern Spa Bathroom',
    image:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Basement Lounge',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brass-500/10 via-slate-950 to-slate-950" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brass-200">
              Premium Home Remodeling
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Craftsmanship-led renovations that elevate the way you live.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-300">
              Everbright Remodeling is your partner for high-touch kitchen, bath, and whole-home
              transformations. We blend architectural design, refined finishes, and disciplined project
              management to deliver spaces that feel tailor-made.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact">Get Free Estimate</Button>
              <Button href="/services" variant="secondary">
                Explore Services
              </Button>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { label: '25+ Years', value: 'Experience' },
                { label: '5-Star', value: 'Client Reviews' },
                { label: 'Design + Build', value: 'Full Service' }
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-center"
                >
                  <p className="text-xl font-semibold text-white">{stat.label}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-brass-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury kitchen renovation"
                width={960}
                height={1100}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 left-8 rounded-2xl border border-white/10 bg-slate-900/80 p-5 text-sm text-slate-200 shadow-card">
              "Every detail feels intentional and refined."
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-brass-200">
                — Local Homeowner
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Full-service remodeling, curated for your lifestyle.
            </h2>
          </div>
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
              Why Choose Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              A renovation partner as disciplined as you are.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Our design-build process keeps everything under one roof: design, permits, construction,
              and finishing. You receive weekly updates, transparent budgets, and a dedicated project
              manager who keeps the schedule moving.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {[
                'Dedicated project manager and on-site lead',
                'Architectural-grade renderings before we build',
                'Premium materials sourced from trusted partners',
                'Clean, respectful job sites with daily check-ins'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brass-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6">
            {[
              {
                title: 'Design Consultation',
                description:
                  'Collaborative planning to align your vision, budget, and timeline.'
              },
              {
                title: 'Precision Craftsmanship',
                description:
                  'Experienced trades deliver refined finishes with rigorous quality checks.'
              },
              {
                title: 'Concierge Experience',
                description:
                  'We manage permits, scheduling, and material logistics so you stay focused on life.'
              }
            ].map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
                className="bg-slate-900/40"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Clients who love their new spaces.
            </h2>
          </div>
          <Link href="/contact" className="text-sm font-semibold text-brass-200">
            Schedule a Consultation →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-8"
            >
              <p className="text-sm leading-relaxed text-slate-200">“{testimonial.quote}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
              Gallery Preview
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Signature transformations, before and after.
            </h2>
          </div>
          <Button href="/gallery" variant="secondary">
            View Gallery
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={item.image}
                alt={item.title}
                width={720}
                height={560}
                className="h-60 w-full object-cover"
              />
              <div className="bg-slate-900/80 p-4">
                <p className="text-sm font-semibold text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-brass-400/40 bg-gradient-to-r from-brass-500/20 via-slate-950 to-slate-900 px-8 py-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
            Ready to begin?
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Schedule a complimentary design consultation.
          </h2>
          <p className="mt-4 text-sm text-slate-200">
            Share your vision and we will create a remodeling plan that aligns with your goals.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Get Free Estimate</Button>
            <Button href="/services" variant="secondary">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
