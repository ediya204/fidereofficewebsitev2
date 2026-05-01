"use client"

import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"
import Image from "next/image"

export function AboutHero() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-black to-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hong-kong-peak-view.jpg"
          alt="Hong Kong Peak View"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="container relative z-10 mx-auto px-6 py-24 text-center">
        <p className="mx-auto max-w-4xl text-balance text-lg text-white leading-relaxed md:text-xl">
          {t.about.hero.title}
        </p>
        <p className="mt-6 mx-auto max-w-3xl text-base text-white/80 leading-relaxed">{t.about.hero.subtitle}</p>
      </div>
    </section>
  )
}
