"use client"

import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

export function AboutExperience() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-balance text-3xl font-bold text-slate-900 md:text-4xl">{t.about.experience.title}</h2>
          </div>
          <div className="space-y-6 text-slate-600">
            <p>{t.about.experience.paragraph1}</p>
            <p>{t.about.experience.paragraph2}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
