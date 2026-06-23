"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactUsPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    serviceType: "Home Relocation",
    requirement: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Message sent successfully!");

        setForm({
          fullName: "",
          company: "",
          phone: "",
          email: "",
          serviceType: "Home Relocation",
          requirement: "",
          message: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <main className="overflow-hidden bg-white">

      {/* HERO */}

      <section className="relative flex min-h-[70vh] items-center overflow-hidden">

        <img
          src="/images/guardian-shipping-loading-dock-operations.webp"
          alt="Contact Guardian Shipping"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">

          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-slate-300">
            Contact Guardian Shipping
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Let’s Move
            <br />
            Your Business
            <br />
            Forward
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200">
            Speak with our logistics
            specialists for relocation,
            freight, cargo, storage and
            global shipping solutions.
          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section className="py-28">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Get In Touch
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C] leading-tight">
              Speak With
              <br />
              Our Team
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              Whether you need home
              relocation, business
              logistics, freight,
              warehousing or storage
              services, Guardian Shipping
              is ready to help.
            </p>

            {/* CONTACT CARDS */}

            <div className="mt-10 space-y-5">

              <div className="rounded-[28px] bg-slate-100 p-6">
                <h3 className="font-bold text-slate-900">
                  Call Us
                </h3>
                <p className="mt-2 text-slate-600">
                  +974 33706057
                </p>
              </div>

              <div className="rounded-[28px] bg-slate-100 p-6">
                <h3 className="font-bold text-slate-900">
                  Email
                </h3>
                <p className="mt-2 text-slate-600">
                  info@guardianshipping.com
                </p>
              </div>

              <div className="rounded-[28px] bg-slate-100 p-6">
                <h3 className="font-bold text-slate-900">
                  Website
                </h3>
                <p className="mt-2 text-slate-600">
                  www.guardianshipping.com
                </p>
              </div>

            </div>

          </div>

          {/* FORM */}

          <div className="rounded-[40px] bg-white p-10 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

            <h3 className="text-3xl font-bold text-[#233F8C]">
              Request A Quote
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full rounded-2xl border border-slate-300 px-6 py-5 text-lg text-[#0E1946] placeholder:text-slate-400 outline-none transition focus:border-[#355AA3]"
              />

              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Name"
               className="w-full rounded-2xl border border-slate-300 px-6 py-5 text-lg text-[#0E1946] placeholder:text-slate-400 outline-none transition focus:border-[#355AA3]"
              />

              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+974"
                required
                className="w-full rounded-2xl border border-slate-300 px-6 py-5 text-lg text-[#0E1946] placeholder:text-slate-400 outline-none transition focus:border-[#355AA3]"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full rounded-2xl border border-slate-300 px-6 py-5 text-lg text-[#0E1946] placeholder:text-slate-400 outline-none transition focus:border-[#355AA3]"
              />


              <select
                name="serviceType"
                value={form.serviceType}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 px-6 py-5 text-lg text-[#0E1946] placeholder:text-slate-400 outline-none transition focus:border-[#355AA3]"
              >

                <option>Home Relocation</option>
                <option>Business Logistics</option>
                <option>Air Freight</option>
                <option>Sea Freight</option>
                <option>Warehousing</option>
                <option>Storage</option>
                <option>Cargo Services</option>
                <option>Corporate Relocation</option>
                <option>Other</option>
              </select>

              <input
                type="text"
                name="requirement"
                value={form.requirement}
                onChange={handleChange}
                placeholder="Requirement"
                className="w-full rounded-2xl border border-slate-300 px-6 py-5 text-lg text-[#0E1946] placeholder:text-slate-400 outline-none transition focus:border-[#355AA3]"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your requirement..."
                rows={6}
                className="w-full rounded-2xl border border-slate-300 px-6 py-5 text-lg text-[#0E1946] placeholder:text-slate-400 outline-none transition focus:border-[#355AA3]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#355AA3] px-8 py-5 font-medium text-white transition duration-300 hover:scale-[1.02] hover:bg-[#29498a] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading
                  ? "Sending..."
                  : "Request Quote"}
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* OFFICE DETAILS */}

      <section className="bg-slate-100 py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Office Information
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C]">
              Visit Or Contact Us
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-[32px] bg-white p-10 shadow-lg">

              <h3 className="text-2xl font-bold text-[#233F8C]">
                Qatar Office
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Guardian Shipping
                <br />
                Doha, Qatar
              </p>

            </div>

            <div className="rounded-[32px] bg-white p-10 shadow-lg">

              <h3 className="text-2xl font-bold text-[#233F8C]">
                Contact
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                +974 33706057
                <br />
                info@guardianshipping.com
              </p>

            </div>

            <div className="rounded-[32px] bg-white p-10 shadow-lg">

              <h3 className="text-2xl font-bold text-[#233F8C]">
                Working Hours
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                24/7 Logistics Support
                <br />
                Available For Enquiries
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#355AA3] py-28 text-white">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-bold leading-tight">
            Need Logistics
            <br />
            Support?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-200">
            Contact Guardian Shipping
            today for relocation,
            freight, cargo, storage
            and logistics solutions
            tailored to your needs.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="tel:+97433706057"
              className="rounded-full bg-white px-8 py-4 font-medium text-[#355AA3] transition hover:scale-105"
            >
              Call Now
            </Link>

            <Link
              href="mailto:info@guardianshipping.com"
              className="rounded-full border border-white/50 px-8 py-4 font-medium text-white transition hover:bg-white hover:text-[#355AA3]"
            >
              Email Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
