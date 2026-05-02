import Image from "next/image"
import { CreditCard, Wallet, TrendingUp } from "@/components/ui/app-icon"

export function FinancialSolution() {
  return (
    <section id="financial" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-sm text-[#C9A961] mb-2 uppercase tracking-wider">Solutions 02</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Financial solutions</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            We are steely determined to deliver our customers the best trustee services. Yet, we will not allow
            ourselves to rest as we reimagine life today and set out a mission to put the tools people need to manage
            their money and assets in the palm of their own hand.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="p-8 bg-white rounded-lg shadow-sm">
            <CreditCard className="h-12 w-12 text-[#4357ef] mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Asset Link Credit Card</h3>
            <p className="text-gray-600 mb-4">
              Unique product allowing full-asset autonomy through creative uses of financial tools and technology.
            </p>
            <a href="/credit-card" className="text-[#C9A961] font-medium hover:underline">
              Explore Now →
            </a>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-sm">
            <Wallet className="h-12 w-12 text-[#4357ef] mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Asset Mobility</h3>
            <p className="text-gray-600">
              Execute funds movement, perform multi-jurisdiction transfers, and access investment options seamlessly.
            </p>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-sm">
            <TrendingUp className="h-12 w-12 text-[#4357ef] mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Investment Execution</h3>
            <p className="text-gray-600">
              Manage your investments with our proprietary platform offering 24/7 borderless asset allocation.
            </p>
          </div>
        </div>

        {/* Platform Image */}
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/financial-trading-charts-stock-market-screens-prof.jpg"
            alt="FinTech Platform"
            width={1200}
            height={600}
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
