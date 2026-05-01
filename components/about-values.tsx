"use client"

import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

export function AboutValues() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm uppercase tracking-wide text-[#2563EB]">
            {t.about.values.label}
          </span>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{t.about.values.title}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {t.about.values.items.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#2563EB] text-lg font-bold text-[#2563EB]">
                  {item.number}
                </span>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
