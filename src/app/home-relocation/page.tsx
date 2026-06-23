"use client";

import Link from "next/link";

export default function HomeRelocationPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* HERO */}

      <section className="relative flex min-h-[85vh] items-center overflow-hidden">

        <img
          src="/images/residential-relocation.webp"
          alt="Home Relocation"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">

          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-slate-300">
            Home Relocation Services
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Stress-Free Home
            <br />
            Relocation Services
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200">
            Whether you're moving across
            town or across the world,
            Guardian Shipping provides
            reliable and stress-free
            relocation services tailored
            to your needs.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/contact-us"
              className="rounded-full bg-[#355AA3] px-8 py-4 font-medium text-white transition hover:scale-105 hover:bg-[#29498a]"
            >
              Request Quote
            </Link>

            <Link
              href="/tracking"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900"
            >
              Track Shipment
            </Link>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[40px] shadow-2xl">

            <img
              src="/images/guardian-shipping-moving-forward.webp"
              alt="Guardian Relocation"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Complete Home Relocation
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C] leading-tight">
              Moving Homes
              <br />
              With Care & Precision
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              Guardian Shipping manages
              every stage of your move
              with professionalism and
              care, ensuring a smooth and
              stress-free experience for
              families and individuals.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              From packing and furniture
              moving to international
              relocation and storage, we
              provide complete end-to-end
              relocation support.
            </p>

          </div>

        </div>

      </section>

      {/* RELOCATION SERVICES */}

      <section className="bg-slate-100 py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Our Relocation Services
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C]">
              Everything You Need
              For A Smooth Move
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                title: "Household Relocation",
                text:
                  "Complete relocation services for apartments, villas and residential properties.",
              },
              {
                title: "Local Moving Services",
                text:
                  "Efficient and reliable moving solutions within the city or across the country.",
              },
              {
                title: "International Relocation",
                text:
                  "Door-to-door international moving services for families relocating overseas.",
              },
              {
                title: "Packing & Unpacking",
                text:
                  "Careful packing and organized unpacking to protect your belongings.",
              },
              {
                title: "Furniture Moving",
                text:
                  "Professional dismantling, transport and reassembly of household furniture.",
              },
              {
                title: "Personal Effects Shipping",
                text:
                  "Worldwide shipping solutions for household goods and personal belongings.",
              },
            ].map((service, i) => (

              <div
                key={i}
                className="rounded-[32px] bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <h3 className="text-2xl font-bold text-[#233F8C]">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {service.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* INTERNATIONAL MOVING */}

      <section className="py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              International Relocation
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C] leading-tight">
              Relocating Families
              Across Borders
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              Whether you're relocating
              for work, family or personal
              reasons, Guardian Shipping
              offers reliable international
              moving solutions with
              door-to-door service.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              We coordinate logistics,
              shipping, customs support
              and safe transportation for
              a smooth transition.
            </p>

          </div>

          <div className="overflow-hidden rounded-[40px] shadow-2xl">

            <img
              src="/images/guardian-operations.webp"
              alt="International Relocation"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </div>

      </section>

      {/* FRAGILE & SPECIAL HANDLING */}

      <section className="bg-[#0F172A] py-28 text-white">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[40px] shadow-2xl">

            <img
              src="/images/guardian-shipping-loading-dock-operations.webp"
              alt="Fragile Item Protection"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">
              Specialized Protection
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Fragile Item
              <br />
              Protection
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Valuable belongings deserve
              extra care. Guardian Shipping
              provides specialized crating
              and protective handling for
              artwork, antiques,
              electronics and fragile
              household items.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Our packing specialists use
              professional-grade materials
              and proven handling methods
              to ensure safe transportation.
            </p>

          </div>

        </div>

      </section>

      {/* STORAGE SOLUTIONS */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Storage Solutions
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C]">
              Flexible Storage
              For Every Need
            </h2>

          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">

            {/* SHORT TERM */}

            <div className="rounded-[40px] bg-slate-100 p-10 shadow-lg">

              <h3 className="text-3xl font-bold text-[#233F8C]">
                Short-Term Storage
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Convenient temporary
                storage solutions during
                relocation, renovation
                projects or transition
                periods.
              </p>

            </div>

            {/* LONG TERM */}

            <div className="rounded-[40px] bg-slate-100 p-10 shadow-lg">

              <h3 className="text-3xl font-bold text-[#233F8C]">
                Long-Term Storage
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Secure storage facilities
                for household goods,
                furniture and personal
                belongings with reliable
                protection.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY FAMILIES CHOOSE US */}

      <section className="bg-slate-100 py-28">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
            Why Families Choose Guardian
          </p>

          <h2 className="text-5xl font-bold text-[#233F8C]">
            Relocation You Can Trust
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              "Professional Packing",
              "Safe Transportation",
              "Reliable Scheduling",
              "Stress-Free Experience",
            ].map((item, i) => (

              <div
                key={i}
                className="rounded-[32px] bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <h3 className="text-2xl font-bold text-[#233F8C]">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* MOVING PROCESS */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Our Moving Process
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C]">
              Moving Made Easy
            </h2>

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-4">

            {[
              "Consultation",
              "Packing",
              "Transportation",
              "Delivery",
            ].map((step, i) => (

              <div
                key={i}
                className="rounded-[32px] bg-slate-100 p-10 text-center"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#355AA3] text-2xl font-bold text-white">
                  {i + 1}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#233F8C]">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#355AA3] py-28 text-white">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-bold leading-tight">
            Ready For A
            Stress-Free Move?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-200">
            Speak with Guardian Shipping
            for reliable home relocation,
            packing, storage and
            international moving solutions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact-us"
              className="rounded-full bg-white px-8 py-4 font-medium text-[#355AA3] transition hover:scale-105"
            >
              Request Quote
            </Link>

            <Link
              href="/tracking"
              className="rounded-full border border-white/50 px-8 py-4 font-medium text-white transition hover:bg-white hover:text-[#355AA3]"
            >
              Track Shipment
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}