export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="min-h-[85vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1581093588401-22d8f8a6c1f7)",
        }}
      >
        <div className="bg-black/60 w-full h-full">
          <div className="max-w-7xl mx-auto px-6 py-32 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Precision Manufacturing <br /> You Can Trust
            </h1>
            <p className="max-w-xl mb-6 text-gray-200">
              ISO 9001:2015 Certified manufacturer of precision machined and
              fabricated components for Automotive, Railways & Farm Equipment.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#0f2a44] px-6 py-3 font-semibold rounded"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat title="20+" subtitle="Years Experience" />
          <Stat title="ISO" subtitle="9001:2015 Certified" />
          <Stat title="15+" subtitle="Crore Turnover" />
          <Stat title="100%" subtitle="On-Time Delivery" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee67c6c73d29"
            alt="Manufacturing"
            className="rounded shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              About Choyal Industries
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Established in 2003, Choyal Industries has grown into a trusted
              manufacturing partner, guided by over 37 years of industry
              experience. We deliver quality-driven solutions with a strong
              commitment to timelines and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card title="CNC & VMC Machining" />
            <Card title="Precision Machined Components" />
            <Card title="Tooling & Assemblies" />
            <Card title="Fabrication Work" />
            <Card title="SS & Metal Components" />
            <Card title="Quality Inspection Systems" />
          </div>
        </div>
      </section>
      {/* CLIENTS */}
<section className="py-14 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h3 className="text-center text-gray-500 text-sm mb-6">
      Trusted by Industry Partners
    </h3>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-80">
      <img src="https://dummyimage.com/200x80/cccccc/000&text=Client+1" />
      <img src="https://dummyimage.com/200x80/cccccc/000&text=Client+2" />
      <img src="https://dummyimage.com/200x80/cccccc/000&text=Client+3" />
      <img src="https://dummyimage.com/200x80/cccccc/000&text=Client+4" />
    </div>
  </div>
</section>
    </>
  )
}

function Stat({ title, subtitle }) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-[#0f2a44]">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  )
}

function Card({ title }) {
  return (
    <div className="bg-white p-6 shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-[#0f2a44]">{title}</h3>
    </div>
  )
}
