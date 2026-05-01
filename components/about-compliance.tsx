"use client"

import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"
import { Check } from "lucide-react"

export function AboutCompliance() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="mb-4 inline-block text-sm uppercase tracking-wide text-[#2563EB]">
            {t.about.compliance.label}
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">{t.about.compliance.title}</h2>
        </div>
        <div className="space-y-6 text-white/80">
          <p>{t.about.compliance.paragraph1}</p>
          <p>{t.about.compliance.paragraph2}</p>
          <ul className="space-y-3 pl-6">
            {t.about.compliance.items.map((item, index) => (
              <li key={index} className="flex gap-3">
                <Check className="h-5 w-5 flex-shrink-0 text-[#C9A961]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>{t.about.compliance.paragraph3}</p>
          <p>{t.about.compliance.paragraph4}</p>
        </div>
      </div>
    </section>
  )
}
