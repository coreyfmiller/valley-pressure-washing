const stats = [
  { value: "100+", label: "Properties Cleaned" },
  { value: "5★", label: "Average Rating" },
  { value: "3", label: "Core Services" },
  { value: "100%", label: "Satisfaction Guarantee" },
]

export default function Stats() {
  return (
    <section className="bg-primary py-14" aria-label="Company statistics">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <dt className="text-3xl md:text-4xl font-bold text-white">{value}</dt>
              <dd className="text-sm text-white/70 font-medium">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
