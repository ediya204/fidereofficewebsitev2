"use client"

import { useLanguage } from "@/contexts/language-context"

const content = {
  en: {
    title: "Risk & Fees",
    subtitle: "Risk disclosures, service pricing principles and complaints handling",
    meta: {
      effectiveDate: "Effective Date: 1 April 2026",
      version: "Version: 1.0",
      owner: "Policy Owner: Compliance Department",
      contact: "Contact: info@fideretrust.com",
      reviewCycle: "Review Cycle: At least annually or when required by law/regulation",
    },
    documentControl: {
      title: "Document Control",
      approver: "Approver: Authorized Management",
      nextReview: "Next Review Date: 1 April 2027",
      changeLog: "Change Log: Initial release",
    },
    sections: [
      {
        title: "1. Risk Disclosure",
        items: [
          "Services may involve regulatory, operational, market, FX, settlement, counterparty, and technology risks.",
          "Cross-border transactions may be subject to local legal restrictions, cut-off times, intermediary processing, and settlement delays.",
          "Nothing on this website constitutes guaranteed returns, principal protection, or personalized investment advice.",
        ],
      },
      {
        title: "2. Fees and Charges",
        items: [
          "Applicable fees may include service fees, transaction fees, custody or administrative fees, and third-party charges.",
          "Exchange rates, spreads, and intermediary deductions may affect final settlement amounts.",
          "Exact charges depend on service type, jurisdiction, transaction complexity, and partner institution requirements.",
        ],
      },
      {
        title: "3. Payments, Reversals and Refunds",
        items: [
          "Processing timelines vary by payment rail, jurisdiction, compliance checks, and banking cut-off times.",
          "Certain payment instructions may become irreversible once accepted by upstream institutions.",
          "Refunds, where available, remain subject to legal, operational, and counterparty constraints.",
        ],
      },
      {
        title: "4. Complaints Handling",
        items: [
          "Clients may submit complaints via info@fideretrust.com with relevant case details and supporting documents.",
          "FIDERE aims to acknowledge receipt and process complaints within a reasonable timeframe.",
          "Where required, unresolved matters may be escalated according to applicable regulatory dispute channels.",
        ],
      },
    ],
  },
  "zh-CN": {
    title: "风险与费用披露",
    subtitle: "风险提示、收费原则与投诉处理机制",
    meta: {
      effectiveDate: "生效日期：2026年4月1日",
      version: "版本号：1.0",
      owner: "责任部门：合规部",
      contact: "联系邮箱：info@fideretrust.com",
      reviewCycle: "审核周期：至少每年一次，或按法律/监管要求更新",
    },
    documentControl: {
      title: "文档控制",
      approver: "批准人：管理层授权代表",
      nextReview: "下次复审日期：2027年4月1日",
      changeLog: "变更记录：首次发布",
    },
    sections: [
      {
        title: "1. 风险披露",
        items: [
          "相关服务可能涉及监管、运营、市场、汇率、结算、对手方及技术风险。",
          "跨境交易可能受到当地法律限制、处理时点、中间机构流程及结算延迟影响。",
          "本网站任何信息均不构成收益保证、本金保障或个性化投资建议。",
        ],
      },
      {
        title: "2. 费用与收费",
        items: [
          "适用费用可能包括服务费、交易费、托管或管理费及第三方费用。",
          "汇率、点差及中间行扣费可能影响最终到账金额。",
          "具体收费取决于服务类型、司法辖区、交易复杂度及合作机构要求。",
        ],
      },
      {
        title: "3. 支付、撤销与退款",
        items: [
          "处理时效可能因支付通道、司法辖区、合规审核及银行截单时间而不同。",
          "部分支付指令一经上游机构受理后可能不可撤销。",
          "在可退款场景下，退款仍受法律、运营及对手方条件约束。",
        ],
      },
      {
        title: "4. 投诉处理",
        items: [
          "客户可通过 info@fideretrust.com 提交投诉，并附上相关案例信息与证明材料。",
          "本公司将尽力在合理时限内确认并处理投诉。",
          "如适用，未解决事项可按监管要求通过相应争议渠道升级处理。",
        ],
      },
    ],
  },
  "zh-TW": {
    title: "風險與費用披露",
    subtitle: "風險提示、收費原則與投訴處理機制",
    meta: {
      effectiveDate: "生效日期：2026年4月1日",
      version: "版本號：1.0",
      owner: "責任部門：合規部",
      contact: "聯絡郵箱：info@fideretrust.com",
      reviewCycle: "審核週期：至少每年一次，或按法律/監管要求更新",
    },
    documentControl: {
      title: "文件控制",
      approver: "批准人：管理層授權代表",
      nextReview: "下次複審日期：2027年4月1日",
      changeLog: "變更記錄：首次發布",
    },
    sections: [
      {
        title: "1. 風險披露",
        items: [
          "相關服務可能涉及監管、營運、市場、匯率、結算、對手方及技術風險。",
          "跨境交易可能受到當地法律限制、處理時點、中間機構流程及結算延遲影響。",
          "本網站任何資訊均不構成收益保證、本金保障或個人化投資建議。",
        ],
      },
      {
        title: "2. 費用與收費",
        items: [
          "適用費用可能包括服務費、交易費、託管或管理費及第三方費用。",
          "匯率、點差及中間行扣費可能影響最終到帳金額。",
          "具體收費取決於服務類型、司法管轄區、交易複雜度及合作機構要求。",
        ],
      },
      {
        title: "3. 支付、撤銷與退款",
        items: [
          "處理時效可能因支付通道、司法管轄區、合規審核及銀行截單時間而不同。",
          "部分支付指令一經上游機構受理後可能不可撤銷。",
          "在可退款場景下，退款仍受法律、營運及對手方條件約束。",
        ],
      },
      {
        title: "4. 投訴處理",
        items: [
          "客戶可透過 info@fideretrust.com 提交投訴，並附上相關案例資訊與證明材料。",
          "本公司將盡力在合理時限內確認並處理投訴。",
          "如適用，未解決事項可按監管要求透過相應爭議渠道升級處理。",
        ],
      },
    ],
  },
}

export function RiskFeesContent() {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.en

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="mb-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <div className="grid gap-3 md:grid-cols-2">
            <p className="text-sm text-gray-700">{t.meta.effectiveDate}</p>
            <p className="text-sm text-gray-700">{t.meta.version}</p>
            <p className="text-sm text-gray-700">{t.meta.owner}</p>
            <p className="text-sm text-gray-700">{t.meta.contact}</p>
          </div>
          <p className="mt-3 text-sm text-gray-700">{t.meta.reviewCycle}</p>
        </div>

        <div className="space-y-10">
          {t.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-gray-600 leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.documentControl.title}</h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-700">{t.documentControl.approver}</p>
            <p className="text-sm text-gray-700">{t.documentControl.nextReview}</p>
            <p className="text-sm text-gray-700">{t.documentControl.changeLog}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
