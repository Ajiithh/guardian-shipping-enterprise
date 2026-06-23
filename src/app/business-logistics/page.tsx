"use client";

import Link from "next/link";

export default function BusinessLogisticsPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* HERO */}

      <section className="relative flex min-h-[85vh] items-center overflow-hidden">

        <img
          src="/images/corporate-logistics.webp"
          alt="Business Logistics"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">

          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-slate-300">
            Corporate & Commercial Services
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Business Logistics
            <br />
            & Relocation
            <br />
            Solutions
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200">
            Guardian Shipping provides
            comprehensive relocation,
            logistics, storage and freight
            solutions designed to support
            businesses, government
            entities, educational
            institutions and commercial
            enterprises.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/contact-us"
              className="rounded-full bg-[#355AA3] px-8 py-4 font-medium text-white transition hover:scale-105 hover:bg-[#29498a]"
            >
              Request Consultation
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
              src="/images/commercial-logistics.webp"
              alt="Corporate Logistics"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Enterprise Logistics Partner
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C] leading-tight">
              Supporting Businesses
              <br />
              With Reliable Logistics
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              Our experienced team ensures
              operational continuity while
              managing every aspect of
              relocation, logistics,
              freight and storage
              requirements.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              We support corporations,
              government organizations,
              healthcare providers,
              educational institutions and
              commercial enterprises with
              professional logistics
              solutions.
            </p>

          </div>

        </div>

      </section>

      {/* BUSINESS SERVICES */}

      <section className="bg-slate-100 py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Business Services
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C]">
              Comprehensive Corporate
              Logistics Solutions
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                title: "Office Relocation",
                text:
                  "Professional office moving with planning, transport, installation and setup.",
              },
              {
                title: "Employee Relocation",
                text:
                  "Seamless relocation support for executives, employees and staff transfers.",
              },
              {
                title: "International Freight",
                text:
                  "Reliable air, sea and land freight for domestic and global shipments.",
              },
              {
                title: "Commercial Cargo",
                text:
                  "Secure transportation of equipment, inventory and commercial assets.",
              },
              {
                title: "Packing & Unpacking",
                text:
                  "Professional packing using industry-standard protection methods.",
              },
              {
                title: "Crating & Palletizing",
                text:
                  "Custom crating solutions for fragile, oversized and export shipments.",
              },
            ].map((service, i) => (

              <div
                key={i}
                className="rounded-[32px] bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl text-[#233F8C]"
              >

                <h3 className="text-2xl font-bold">
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

      {/* OFFICE RELOCATION */}

      <section className="py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Office Relocation
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C] leading-tight">
              Minimize Downtime.
              <br />
              Maximize Efficiency.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              Guardian Shipping handles
              office relocation projects
              with precision, ensuring
              business continuity through
              detailed planning,
              transportation and workspace
              setup.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              From office furniture to IT
              infrastructure and business
              records, our team ensures a
              smooth transition.
            </p>

          </div>

          <div className="overflow-hidden rounded-[40px] shadow-2xl">

            <img
              src="/images/guardian-operations.webp"
              alt="Office Relocation"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </div>

      </section>
      
      {/* ADVANCED BUSINESS SERVICES */}

      <section className="bg-[#0F172A] py-28 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">
              Advanced Business Solutions
            </p>

            <h2 className="text-5xl font-bold">
              Complete Commercial
              Logistics Support
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                title: "Asset Tagging & Inventory",
                text:
                  "Detailed asset tracking, inventory recording, labeling and reporting for relocation projects.",
              },
              {
                title: "FF&E Services",
                text:
                  "Specialized handling, relocation and installation of furniture, fixtures and equipment.",
              },
              {
                title: "Carpentry & Installation",
                text:
                  "Professional dismantling, reassembly and installation support during office relocation.",
              },
              {
                title: "Document Storage",
                text:
                  "Secure storage and management of confidential business records and documentation.",
              },
              {
                title: "Warehousing Solutions",
                text:
                  "Flexible short-term and long-term warehousing for inventory and commercial assets.",
              },
              {
                title: "Commercial Storage",
                text:
                  "Secure storage for equipment, furniture and operational assets.",
              },
            ].map((service, i) => (

              <div
                key={i}
                className="rounded-[32px] border border-slate-800 bg-slate-900 p-10 transition duration-300 hover:-translate-y-2 hover:border-[#355AA3]"
              >

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {service.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WAREHOUSING */}

      <section className="py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[40px] shadow-2xl">

            <img
              src="/images/warehousing-&-storage.webp"
              alt="Warehousing Solutions"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Warehousing & Storage
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C] leading-tight">
              Flexible Storage
              For Businesses
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              Guardian Shipping offers
              secure short-term and
              long-term warehousing
              solutions for commercial
              inventory, furniture,
              equipment and logistics
              operations.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Our storage facilities are
              designed to support business
              continuity and supply chain
              efficiency.
            </p>

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}

      <section className="bg-slate-100 py-28">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
            Industries We Serve
          </p>

          <h2 className="text-5xl font-bold text-[#233F8C]">
            Trusted Across Industries
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              "Government",
              "Corporate Offices",
              "Healthcare",
              "Educational Institutions",
              "Retail & Commerce",
              "Construction",
              "Oil & Gas",
              "Commercial Enterprises",
            ].map((industry, i) => (

              <div
                key={i}
                className="rounded-[32px] bg-white p-10 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <h3 className="text-2xl font-bold text-[#233F8C]">
                  {industry}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY BUSINESS CHOOSE US */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
            Why Businesses Choose Guardian
          </p>

          <h2 className="text-5xl font-bold text-[#233F8C]">
            Logistics Built For
            Operational Continuity
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              "Minimal Business Disruption",
              "Professional Project Planning",
              "Secure Asset Handling",
              "End-to-End Logistics Support",
            ].map((item, i) => (

              <div
                key={i}
                className="rounded-[32px] bg-slate-100 p-10"
              >

                <h3 className="text-2xl font-bold text-[#233F8C]">
                  {item}
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
            Need A Reliable
            Corporate Logistics Partner?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-200">
            Speak with Guardian Shipping
            for professional business
            relocation, logistics,
            warehousing and freight
            solutions tailored to your
            organization.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact-us"
              className="rounded-full bg-white px-8 py-4 font-medium text-[#355AA3] transition hover:scale-105"
            >
              Request Consultation
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