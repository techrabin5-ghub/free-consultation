"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: "",
};

export default function CTAForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const nextErrors: Errors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Full Name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Active Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.whatsapp.trim()) {
      nextErrors.whatsapp = "WhatsApp Number is required.";
    }

    if (!formData.businessName.trim()) {
      nextErrors.businessName = "Business Name is required.";
    }

    if (
      formData.website.trim() &&
      !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i.test(formData.website)
    ) {
      nextErrors.website = "Please enter a valid website or Facebook URL.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    router.push("/thank-you");
  };

  return (
    <section id="lead-form" className="px-6 py-18 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)]">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">
            Booking section
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Book the Call
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--foreground-soft)]">
            1:1 Consultation
          </p>
          <p className="text-base leading-8 text-[var(--foreground-soft)]">
            Customized Strategy for Your Business
          </p>
          <div className="mt-8 rounded-3xl bg-[var(--surface-soft)] p-6">
            <p className="text-lg font-semibold text-[var(--foreground)]">
              Limited slots available each week
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--foreground-soft)]">
              If you want practical guidance for your business, fill the form now to secure your
              consultation request.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)]"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Full Name"
              placeholder="Your full name"
              value={formData.fullName}
              error={errors.fullName}
              onChange={(value) => setFormData((prev) => ({ ...prev, fullName: value }))}
            />
            <Field
              type="email"
              label="Active Email"
              placeholder="you@example.com"
              value={formData.email}
              error={errors.email}
              onChange={(value) => setFormData((prev) => ({ ...prev, email: value }))}
            />
            <Field
              label="WhatsApp Number"
              placeholder="Your active WhatsApp number"
              value={formData.whatsapp}
              error={errors.whatsapp}
              onChange={(value) => setFormData((prev) => ({ ...prev, whatsapp: value }))}
            />
            <Field
              label="Business Name"
              placeholder="Your business name"
              value={formData.businessName}
              error={errors.businessName}
              onChange={(value) => setFormData((prev) => ({ ...prev, businessName: value }))}
            />
          </div>

          <div className="mt-5">
            <Field
              label="Website / Facebook URL"
              placeholder="https://yourwebsite.com or Facebook page link"
              value={formData.website}
              error={errors.website}
              onChange={(value) => setFormData((prev) => ({ ...prev, website: value }))}
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
              Anything you want to say
            </label>
            <textarea
              rows={5}
              placeholder="Share anything important about your business or current marketing"
              value={formData.message}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, message: event.target.value }))
              }
              className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-4 focus:ring-[rgba(47,99,211,0.12)]"
            />
          </div>

          <p className="mt-5 text-sm text-[var(--foreground-soft)]">
            We respect your privacy. No spam.
          </p>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[var(--primary)] px-6 text-base font-semibold text-white shadow-[0_18px_30px_rgba(47,99,211,0.24)] transition hover:bg-[var(--primary-dark)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Submitting..." : "Book Free Consultation Call"}
          </button>
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
};

function Field({ label, placeholder, value, error, onChange, type = "text" }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[var(--foreground)]">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-4 focus:ring-[rgba(47,99,211,0.12)]"
      />
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
