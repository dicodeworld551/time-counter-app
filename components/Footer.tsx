import Link from 'next/link';
import Button from '@/components/Button';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brass-200">
            Everbright Remodeling
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Premium remodeling with craftsmanship you can see. Serving the greater metro
            area with award-winning design, transparent timelines, and dedicated project
            management.
          </p>
          <div className="mt-6">
            <Button href="/contact">Get Free Estimate</Button>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/services" className="hover:text-brass-200">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-brass-200">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brass-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brass-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Call: (555) 218-4410</li>
            <li>Email: hello@everbrightremodeling.com</li>
            <li>Visit: 1420 Cedar Ridge Dr, Suite 200</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © 2024 Everbright Remodeling. All rights reserved.
      </div>
    </footer>
  );
}
