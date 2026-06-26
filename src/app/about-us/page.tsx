import Link from "next/link";

export const metadata = {
  title: "About Guardian Shipping",
  description:
    "Learn about Guardian Shipping and our logistics expertise in Qatar.",
};

export default function AboutUsPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}

      <section className="relative flex min-h-[85vh] items-center overflow-hidden">

        <img
          src="/images/guardian-shipping-loading-dock-operations.webp"
          alt="Guardian Shipping"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">

          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-slate-300">
            About Guardian Shipping
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Moving Businesses
            <br />
            Forward Across
            <br />
            The World
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200">
            Guardian Shipping delivers
            premium logistics, relocation,
            warehousing and freight
            solutions with reliability,
            speed and professional care
            across Qatar, India and global
            destinations.
          </p>

        </div>

      </section>

      {/* COMPANY STORY */}

      <section className="py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div className="overflow-hidden rounded-[40px] shadow-2xl">

            <img
              src="/images/guardian-about.webp"
              alt="Guardian Shipping Operations"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Our Story
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C] leading-tight">
              Built On Trust.
              <br />
              Driven By Precision.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              Guardian Shipping was built
              with a commitment to provide
              dependable logistics,
              relocation and freight
              solutions for businesses,
              families and corporate
              clients.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              From Qatar to international
              destinations, we manage
              transportation, cargo,
              storage, office relocation,
              residential moving and
              logistics operations with
              efficiency and care.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="rounded-[28px] bg-slate-100 p-6">

                <h3 className="text-3xl font-bold text-[#355AA3]">
                  Qatar
                </h3>

                <p className="mt-2 text-slate-600">
                  Strategic Base
                </p>

              </div>

              <div className="rounded-[28px] bg-slate-100 p-6">

                <h3 className="text-3xl font-bold text-[#355AA3]">
                  Global
                </h3>

                <p className="mt-2 text-slate-600">
                  Logistics Reach
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MISSION & VISION */}

      <section className="bg-slate-100 py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
              Mission & Vision
            </p>

            <h2 className="text-5xl font-bold text-[#233F8C]">
              Built For Long-Term Trust
            </h2>

          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">

            {/* MISSION */}

            <div className="rounded-[40px] bg-white p-10 shadow-lg">

              <h3 className="text-3xl font-bold text-[#233F8C]">
                Our Mission
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                To deliver dependable,
                secure and efficient
                logistics and relocation
                solutions that simplify
                movement for businesses,
                corporations and families
                worldwide.
              </p>

            </div>

            {/* VISION */}

            <div className="rounded-[40px] bg-white p-10 shadow-lg">

              <h3 className="text-3xl font-bold text-[#233F8C]">
                Our Vision
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                To become a globally
                trusted logistics and
                relocation partner known
                for reliability, service
                excellence and operational
                precision.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY GUARDIAN */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
            Why Guardian Shipping
          </p>

          <h2 className="text-5xl font-bold text-[#233F8C]">
            A Logistics Partner
            You Can Depend On
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              "Global Freight Solutions",
              "Corporate Relocation",
              "Warehousing & Storage",
              "End-to-End Logistics",
            ].map((item, i) => (

              <div
                key={i}
                className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <h3 className="text-2xl font-bold text-[#233F8C]">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>
    
      {/* GLOBAL CAPABILITIES */}

      <section className="bg-[#0F172A] py-28 text-white">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">
              Global Capabilities
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Qatar Based.
              <br />
              Internationally Connected.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Guardian Shipping provides
              comprehensive logistics,
              freight forwarding,
              relocation and warehousing
              services for businesses and
              individuals across global
              destinations.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Our capabilities span air
              freight, sea freight,
              commercial logistics,
              corporate movement,
              residential relocation and
              secure storage solutions.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="rounded-[28px] border border-slate-700 bg-slate-900 p-6">
                <h3 className="text-3xl font-bold text-[#355AA3]">
                  24/7
                </h3>
                <p className="mt-2 text-slate-400">
                  Operations Support
                </p>
              </div>

              <div className="rounded-[28px] border border-slate-700 bg-slate-900 p-6">
                <h3 className="text-3xl font-bold text-[#355AA3]">
                  Global
                </h3>
                <p className="mt-2 text-slate-400">
                  Service Coverage
                </p>
              </div>

            </div>

          </div>

          <div className="overflow-hidden rounded-[40px] shadow-2xl">

            <img
              src="/images/guardian-operations.webp"
              alt="Guardian Shipping Global Operations"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </div>

      </section>

      {/* TRUST SECTION */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#355AA3]">
            Why Clients Trust Us
          </p>

          <h2 className="text-5xl font-bold text-[#233F8C]">
            Logistics Built Around
            Reliability
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                title: "Professional Handling",
                text: "Carefully managed logistics operations with precision.",
              },
              {
                title: "Secure Storage",
                text: "Reliable warehousing and storage solutions.",
              },
              {
                title: "Corporate Expertise",
                text: "Supporting business and HR relocation needs.",
              },
              {
                title: "Global Logistics",
                text: "Seamless movement across borders.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="rounded-[32px] bg-slate-100 p-10 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <h3 className="text-2xl font-bold text-[#233F8C]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-600">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#355AA3] py-28 text-white">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-bold leading-tight">
            Let Guardian Shipping
            Move Your Business Forward
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-200">
            Speak with our logistics team
            for relocation, cargo,
            warehousing and freight
            solutions tailored to your
            business or family.
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