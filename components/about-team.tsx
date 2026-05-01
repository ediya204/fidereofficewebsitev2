"use client"

import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

export function AboutTeam() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="mb-4 inline-block text-sm uppercase tracking-wide text-[#2563EB]">{t.about.team.label}</span>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{t.about.team.title}</h2>
        </div>
        <div className="space-y-6 text-slate-600">
          <p>{t.about.team.paragraph1}</p>
          <p>{t.about.team.paragraph2}</p>
          <p>{t.about.team.paragraph3}</p>
        </div>
      </div>
    </section>
  )
}
