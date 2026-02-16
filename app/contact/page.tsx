'use client';

import { useState } from 'react';
import Button from '@/components/Button';

const projectTypes = [
  'Kitchen remodeling',
  'Bathroom remodeling',
  'Basement finishing',
  'Full home renovation',
  'Other'
];

const budgetRanges = [
  '$20k - $50k',
  '$50k - $100k',
  '$100k - $200k',
  '$200k+'
];

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  projectType: string;
  budgetRange: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: '',
  phone: '',
  email: '',
  address: '',
  projectType: '',
  budgetRange: '',
  message: ''
};

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  );

  const validate = (values: FormState) => {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!values.phone.trim()) {
      nextErrors.phone = 'Please provide a phone number.';
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!values.address.trim()) {
      nextErrors.address = 'Please share the project address.';
    }

    if (!values.projectType) {
      nextErrors.projectType = 'Please select a project type.';
    }

    if (!values.budgetRange) {
      nextErrors.budgetRange = 'Please select a budget range.';
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Please tell us a bit about your project.';
    }

    return nextErrors;
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(formState);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      setFormState(initialState);
      setErrors({});
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-6 pb-24">
      <section className="pt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Tell us about your remodeling vision.
        </h1>
        <p className="mt-4 text-base text-slate-300">
          Complete the form below and our team will respond within one business day to schedule your
          complimentary consultation.
        </p>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-slate-900/60 p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                value={formState.fullName}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white focus:border-brass-400 focus:outline-none"
                placeholder="Jordan Smith"
              />
              {errors.fullName ? (
                <p className="mt-2 text-xs text-red-300">{errors.fullName}</p>
              ) : null}
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white focus:border-brass-400 focus:outline-none"
                placeholder="(555) 123-4567"
              />
              {errors.phone ? (
                <p className="mt-2 text-xs text-red-300">{errors.phone}</p>
              ) : null}
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white focus:border-brass-400 focus:outline-none"
                placeholder="you@email.com"
              />
              {errors.email ? (
                <p className="mt-2 text-xs text-red-300">{errors.email}</p>
              ) : null}
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="address">
                Address
              </label>
              <input
                id="address"
                name="address"
                value={formState.address}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white focus:border-brass-400 focus:outline-none"
                placeholder="123 Elm Street"
              />
              {errors.address ? (
                <p className="mt-2 text-xs text-red-300">{errors.address}</p>
              ) : null}
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="projectType">
                Type of Project
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formState.projectType}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white focus:border-brass-400 focus:outline-none"
              >
                <option value="">Select project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="text-slate-900">
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType ? (
                <p className="mt-2 text-xs text-red-300">{errors.projectType}</p>
              ) : null}
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="budgetRange">
                Budget Range
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formState.budgetRange}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white focus:border-brass-400 focus:outline-none"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range} className="text-slate-900">
                    {range}
                  </option>
                ))}
              </select>
              {errors.budgetRange ? (
                <p className="mt-2 text-xs text-red-300">{errors.budgetRange}</p>
              ) : null}
            </div>
          </div>
          <div className="mt-6">
            <label className="text-sm font-semibold text-slate-200" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formState.message}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white focus:border-brass-400 focus:outline-none"
              placeholder="Tell us about your space, timeline, and goals."
            />
            {errors.message ? (
              <p className="mt-2 text-xs text-red-300">{errors.message}</p>
            ) : null}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button type="submit">
              {status === 'submitting' ? 'Submitting...' : 'Get Free Estimate'}
            </Button>
            {status === 'success' ? (
              <p className="text-sm text-brass-200">
                Thanks! We received your request and will be in touch shortly.
              </p>
            ) : null}
            {status === 'error' && Object.keys(errors).length === 0 ? (
              <p className="text-sm text-red-300">
                Something went wrong. Please try again shortly.
              </p>
            ) : null}
          </div>
        </form>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
              Consultation
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Let’s plan your remodel.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Share a few project details and we will schedule a walkthrough to review your space,
              timeline, and material preferences.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li>• Design guidance and material suggestions</li>
              <li>• Transparent budget planning</li>
              <li>• Dedicated project manager assigned</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass-200">
              Call Us
            </p>
            <p className="mt-4 text-lg font-semibold text-white">(555) 218-4410</p>
            <p className="mt-2 text-sm text-slate-300">
              Monday–Friday, 8:30am–6:00pm
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
