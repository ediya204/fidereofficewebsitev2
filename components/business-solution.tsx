import { Building2, TrendingUp, Shield } from "lucide-react"

export function BusinessSolution() {
  return (
    <section id="business" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="text-sm text-[#C9A961] mb-2 uppercase tracking-wider">Solutions 03</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Business solutions</h2>
          <p className="text-gray-700 leading-relaxed">
            As a business owner, you would rightly focus on running your business. However, as your business grows,
            there are important things for you to consider: succession planning, corporate structure optimization, and
            employee benefits.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-8 bg-gray-50 rounded-lg">
            <Building2 className="h-12 w-12 text-[#4357ef] mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Corporate formation and administration</li>
              <li>• Registered office services</li>
              <li>• Tax compliance and planning</li>
              <li>• Business succession planning</li>
              <li>• Accounting services</li>
            </ul>
          </div>

          <div className="p-8 bg-gray-50 rounded-lg">
            <TrendingUp className="h-12 w-12 text-[#4357ef] mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Capital Market Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• SPV incorporation and management</li>
              <li>• Global escrow and custody services</li>
              <li>• Cash management expertise</li>
              <li>• Payments facilitation</li>
              <li>• Security and trustee services</li>
            </ul>
          </div>

          <div className="p-8 bg-gray-50 rounded-lg">
            <Shield className="h-12 w-12 text-[#4357ef] mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Compliance Solutions</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Regulatory business plan development</li>
              <li>• Compliance policies & procedures</li>
              <li>• KYC and KYB solutions</li>
              <li>• Transaction monitoring advisory</li>
              <li>• AML and financial crime training</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
