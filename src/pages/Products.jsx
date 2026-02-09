export default function Products() {
  const items = [
    "Precision Machined Components",
    "CNC & VMC Parts",
    "Tooling & Assemblies",
    "Fabricated Components",
  ]

  return (
    <div className="max-w-6xl mx-auto py-12 grid md:grid-cols-2 gap-6">
      {items.map((i) => (
        <div key={i} className="p-6 shadow">{i}</div>
      ))}
    </div>
  )
}
