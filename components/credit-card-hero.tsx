import Image from "next/image"

export function CreditCardHero() {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-zinc-100 via-white to-zinc-50 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hong-kong-financial-district.jpg"
          alt="Hong Kong Financial District"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-white/60" />
      </div>

      {/* Decorative Background Shape */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full opacity-30 z-1"
        style={{
          background: "linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%)",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <h1 className="mb-8 text-7xl md:text-8xl font-bold text-gray-900 tracking-tight">
            FIDERE <span className="text-[#C9A961]">|</span> CARD
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Introducing the FIDERE Asset Link Credit Card, an unique product allowing full-asset autonomy through
            creative uses of financial tools and technology.
          </p>
        </div>
      </div>

      {/* Card Visual */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block">
        <div
          className="w-96 h-60 rounded-2xl shadow-2xl transform rotate-12"
          style={{
            background: "linear-gradient(135deg, #C9A961 0%, #A68B4C 100%)",
          }}
        />
      </div>
    </section>
  )
}
