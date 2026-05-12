import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { buildCanonicalPageMetadata } from "@/lib/seo"

export const metadata = buildCanonicalPageMetadata("login")

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header forceDarkText={true} />
      <section className="flex min-h-[70vh] items-center pt-24">
        <div className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-[1fr_420px] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#4357ef]">
              Client Access
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-gray-950 md:text-5xl">
              FIDERE TRUST LIMITED Client Login
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Secure access for approved clients and service enquiries. Account access is subject to onboarding,
              verification and applicable Hong Kong compliance requirements.
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-gray-50 p-8">
            <h2 className="text-xl font-semibold text-gray-950">Access notice</h2>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              Online account features may be available only to approved clients. For onboarding, trust account or
              asset management support, contact the Hong Kong office.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-md bg-[#07072d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1c2454]"
            >
              Contact FIDERE TRUST
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
