"use client";

import { useState } from "react";
import Link from "next/link";

export default function TrackingPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    trackingNumber: "",
    fullName: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
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
      const response = await fetch(
        "/api/tracking",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        alert(
          "Tracking request submitted successfully!"
        );

        setForm({
          trackingNumber: "",
          fullName: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert(
        "Failed to submit request."
      );
    }

    setLoading(false);
  };

  return (
    <main className="overflow-hidden bg-white">

      {/* HERO */}

      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden">

        <img
          src="/images/guardian-shipping-journey-ahead.webp"
          alt="Guardian Shipping Tracking"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center text-white">

          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-slate-300">
            Shipment Tracking
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Track Your
            <br />
            Shipment
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-200">
            Enter your shipment ID
            below and our logistics
            team will assist you with
            tracking updates.
          </p>

        </div>

      </section>

      {/* TRACKING CARD */}

      <section className="-mt-22 relative z-20 px-6 pb-24">

        <div className="mx-auto max-w-3xl rounded-[40px] bg-white p-10 shadow-[0_30px_80px_rgba(0,0,0,0.12)] md:p-14">

          <div className="text-center">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Shipment Portal
            </p>

            <h2 className="text-4xl font-bold text-[#233F8C]">
              Enter Tracking Details
            </h2>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5"
          >

            <input
              type="text"
              name="trackingNumber"
              value={form.trackingNumber}
              onChange={handleChange}
              placeholder="Tracking ID"
              required
              className="w-full rounded-2xl border border-slate-300 px-6 py-5 text-lg text-[#0E1946] placeholder:text-slate-400 outline-none transition focus:border-[#355AA3]"
              />

            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full rounded-2xl border border-slate-300 px-6 py-5 text-lg text-[#0E1946] placeholder:text-slate-400 outline-none transition focus:border-[#355AA3]"
              />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#355AA3] px-8 py-5 text-lg font-medium text-white transition duration-300 hover:scale-[1.02] hover:bg-[#29498a] disabled:opacity-70"
            >
              {loading
                ? "Submitting..."
                : "Track Shipment"}
            </button>

          </form>

        </div>

      </section>

      {/* IMAGE SECTION */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[40px] shadow-2xl">

            <img
              src="/images/guardian-shipping-moving-forward.webp"
              alt="Guardian Shipping"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Global Logistics
            </p>

            <h2 className="text-5xl font-bold leading-tight text-[#233F8C]">
              Reliable Shipment
              Tracking Support
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              Guardian Shipping
              supports businesses,
              families and commercial
              shipments with reliable
              logistics coordination and
              shipment assistance across
              Qatar and international
              destinations.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="tel:+97433706057"
                className="rounded-full bg-[#355AA3] px-8 py-4 font-medium text-white transition hover:scale-105"
              >
                Call Support
              </Link>

              <Link
                href="/contact-us"
                className="rounded-full border border-slate-300 px-8 py-4 font-medium text-[#233F8C] transition hover:bg-slate-100"
              >
                Contact Team
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}