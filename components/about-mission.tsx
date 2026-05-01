"use client"

import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

export function AboutMission() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative h-[400px] overflow-hidden rounded-lg"
            style={{
              backgroundImage: "url('/professional-business-people-working-on-tablet-and.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-block border-l-4 border-[#C9A961] pl-4 text-sm uppercase tracking-wide text-[#C9A961]">
              {t.about.mission.label}
            </span>
            <h2 className="mb-6 text-balance text-3xl font-bold text-slate-900 md:text-4xl">{t.about.mission.title}</h2>
            <p className="text-slate-600">{t.about.mission.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
