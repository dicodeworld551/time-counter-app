import Image from 'next/image';
import Button from '@/components/Button';
import Card from '@/components/Card';

const services = [
  {
    title: 'Kitchen Remodeling',
    description:
      'Bespoke cabinetry, statement islands, and premium appliances coordinated by our in-house designers.',
    image:
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Bathroom Remodeling',
    description:
      'Elevated spa experiences with curated tile, modern lighting, and luxury fixtures.',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Basement Finishing',
    description:
      'Transform lower levels into media rooms, guest suites, or creative studios with layered lighting.',
    image:
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Full Home Renovation',
    description:
      'Comprehensive remodels that align every room with a cohesive architectural vision.',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-16 px-6 pb-24">
      <section className="pt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
          Services
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Design-build remodeling that adapts to your home.
        </h1>
        <p className="mt-4 text-base text-slate-300">
          From single-room transformations to comprehensive renovations, our team delivers a refined
          process, meticulous craftsmanship, and consistent communication.
        </p>
      </section>

      <section className="grid gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/60 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
                Signature Service
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {service.description}
              </p>
              <div className="mt-6">
                <Button href="/contact">Get Free Estimate</Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={service.image}
                alt={service.title}
                width={960}
                height={720}
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="White-Glove Project Management"
          description="From permits to punch lists, we keep your remodel on schedule with clear milestones."
        />
        <Card
          title="Curated Material Library"
          description="Choose from premium stone, hardwoods, and custom millwork tailored to your home."
        />
        <Card
          title="Dedicated Craft Teams"
          description="Skilled specialists handle each phase so every finish is detail-perfect."
        />
      </section>
    </div>
  );
}
