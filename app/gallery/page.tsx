import Image from 'next/image';
import Button from '@/components/Button';

const projects = [
  {
    title: 'Oakridge Kitchen',
    before:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
    after:
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Lakeside Primary Bath',
    before:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    after:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Willow Basement Retreat',
    before:
      'https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1200&q=80',
    after:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Full Home Refresh',
    before:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    after:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  }
];

const gridImages = [
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80'
];

export default function GalleryPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-16 px-6 pb-24">
      <section className="pt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
          Gallery
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Before-and-after transformations that inspire.
        </h1>
        <p className="mt-4 text-base text-slate-300">
          Explore our latest renovations and see how our design-build team reimagines each space.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {gridImages.map((image) => (
          <div key={image} className="overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={image}
              alt="Remodeling project"
              width={600}
              height={480}
              className="h-56 w-full object-cover"
            />
          </div>
        ))}
      </section>

      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
              Before & After
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Side-by-side results.
            </h2>
          </div>
          <Button href="/contact" variant="secondary">
            Start Your Project
          </Button>
        </div>
        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
                  Before / After
                </p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={project.before}
                    alt={`${project.title} before`}
                    width={640}
                    height={480}
                    className="h-64 w-full object-cover"
                  />
                  <div className="bg-slate-900/80 p-3 text-xs uppercase tracking-[0.3em] text-slate-300">
                    Before
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={project.after}
                    alt={`${project.title} after`}
                    width={640}
                    height={480}
                    className="h-64 w-full object-cover"
                  />
                  <div className="bg-slate-900/80 p-3 text-xs uppercase tracking-[0.3em] text-slate-300">
                    After
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
