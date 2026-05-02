import { Wallet, Globe, Shield, Clock } from "@/components/ui/app-icon"

export function CreditCardFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* How It Works */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How it works</h2>
          <div className="grid gap-8 md:grid-cols-5">
            {[
              "Create a trust account online",
              "The credit card will be sent to you within a few working days",
              "Inject assets to increase the credit limit",
              "Enjoy global spending and cash withdrawal",
              "Repay the card directly on the trust platform",
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#C9A961] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <p className="text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Features and Benefits of our Trust Account
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 text-center">
              <Wallet className="h-12 w-12 text-[#4357ef] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Withdrawals</h3>
              <p className="text-sm text-gray-600">
                Withdraw cash at any time from any ATM with a Mastercard logo in 210 countries
              </p>
            </div>
            <div className="p-6 text-center">
              <Shield className="h-12 w-12 text-[#4357ef] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">High Level of Privacy</h3>
              <p className="text-sm text-gray-600">
                Protected by Trust Law and Personal Data Ordinance with utmost confidentiality
              </p>
            </div>
            <div className="p-6 text-center">
              <Globe className="h-12 w-12 text-[#4357ef] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Interest</h3>
              <p className="text-sm text-gray-600">
                Enable automatic repayment to deduct from current assets daily with no interest
              </p>
            </div>
            <div className="p-6 text-center">
              <Clock className="h-12 w-12 text-[#4357ef] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Repayment Cycle</h3>
              <p className="text-sm text-gray-600">No monthly billing cycle or minimum repayment requirements</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Open your trust account with us today and start enjoying the benefits of our Asset Link Credit Card. You
            might even be eligible for our sleek metal card!
          </p>
          <button className="px-8 py-3 bg-[#C9A961] text-white rounded-lg font-medium hover:bg-[#B89851] transition">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  )
}
