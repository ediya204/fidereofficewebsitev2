"use client"

import { useLanguage } from "@/contexts/language-context"

const content = {
  en: {
    title: "Compliance & KYC",
    subtitle: "AML/CTF, sanctions controls, onboarding standards and ongoing KYB governance",
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
        title: "1. AML/CTF Framework",
        items: [
          "FIDERE applies a risk-based AML/CTF program for client onboarding and ongoing monitoring.",
          "Control measures include customer due diligence (CDD), beneficial ownership verification, transaction monitoring, and suspicious activity escalation.",
          "Enhanced due diligence (EDD) may be required for high-risk clients, complex ownership structures, and unusual transaction patterns.",
          "AML/CTF controls are reviewed periodically to align with legal, regulatory, and operational risk requirements.",
        ],
      },
      {
        title: "2. KYC/KYB Documentation",
        items: [
          "Individual onboarding may require identity verification, address proof, source of funds/wealth evidence, and additional supporting documents.",
          "Corporate onboarding may require incorporation records, constitutional documents, director/shareholder registers, UBO information, and business profile.",
          "FIDERE may request supplementary documents where needed to satisfy legal, regulatory, operational, or risk requirements.",
          "Document acceptance and re-validation requirements may differ by jurisdiction, product, channel, and client risk profile.",
        ],
      },
      {
        title: "3. Typical Corporate KYB Pack",
        items: [
          "Certificate of incorporation, business registration, constitutional documents, and proof of registered address.",
          "Director and authorized signatory information, board resolutions or mandates, and ownership charts up to ultimate beneficial owners.",
          "Business model description, expected transaction profile, source of funds narrative, and key counterparty/market exposure details.",
          "Where applicable, audited financials, tax residency information, and licensing or regulatory filings relevant to the proposed activity.",
        ],
      },
      {
        title: "4. Sanctions, PEP and Ongoing Review",
        items: [
          "Clients and relevant connected parties may be screened against sanctions and watchlists during onboarding and periodically thereafter.",
          "Politically exposed person (PEP) status and adverse media may be considered as part of risk assessment.",
          "FIDERE reserves the right to delay, decline, restrict, or terminate services where risk acceptance criteria are not met.",
          "Material changes in ownership, control, transaction behavior, geography, or business activities may trigger re-screening and profile refresh.",
        ],
      },
      {
        title: "5. EDD Triggers and Risk Acceptance",
        items: [
          "EDD may apply to high-risk jurisdictions, opaque ownership chains, unusual transaction velocity, or mismatch between stated and observed activity.",
          "Additional checks may include independent corroboration of source of wealth, senior management approval, and tighter transaction controls.",
          "FIDERE may reject or exit relationships involving unacceptable sanctions, legal, fraud, or reputational risk.",
        ],
      },
      {
        title: "6. Compliance Cooperation and Recordkeeping",
        items: [
          "FIDERE may retain onboarding and transaction records for the period required by applicable law and regulation.",
          "Where legally required, FIDERE may cooperate with regulators, law enforcement, or competent authorities.",
          "Service availability remains subject to successful compliance review and ongoing risk monitoring.",
          "Clients are responsible for promptly providing accurate updates when there are material changes to corporate structure, controllers, or business operations.",
        ],
      },
    ],
  },
  "zh-CN": {
    title: "合规与KYC/KYB",
    subtitle: "反洗钱、制裁控制、开户标准与持续KYB治理框架",
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
        title: "1. AML/CTF 合规框架",
        items: [
          "FIDERE 采用基于风险的方法开展反洗钱/反恐融资管理，覆盖开户与持续监控。",
          "核心控制措施包括客户尽职调查（CDD）、受益所有人识别、交易监测与可疑活动上报流程。",
          "针对高风险客户、复杂股权结构或异常交易模式，可能触发增强尽调（EDD）。",
          "本公司会定期评估并更新 AML/CTF 控制措施，以满足法律、监管及运营风险要求。",
        ],
      },
      {
        title: "2. KYC/KYB 材料要求",
        items: [
          "个人客户可能需提供身份证明、地址证明、资金或财富来源证明及其他补充材料。",
          "机构客户可能需提供公司注册文件、章程文件、董事股东资料、UBO信息及业务说明。",
          "为满足法律、监管、运营或风险控制要求，本公司可要求提供额外资料。",
          "不同司法辖区、产品和客户风险等级下，材料准入与复核要求可能不同。",
        ],
      },
      {
        title: "3. 机构KYB常见资料包",
        items: [
          "公司注册证书、商业登记文件、章程文件及注册地址证明。",
          "董事与授权签字人资料、董事会决议或授权文件、股权结构图（穿透至最终受益所有人）。",
          "业务模式说明、预期交易画像、资金来源说明及主要交易对手或市场暴露信息。",
          "在适用情况下，可能要求审计财务报表、税务居民信息及相关牌照或监管备案文件。",
        ],
      },
      {
        title: "4. 制裁与PEP持续审查",
        items: [
          "在开户及存续期间，本公司可能对客户及相关方进行制裁名单与观察名单筛查。",
          "政治公众人物（PEP）状态及负面舆情可能纳入风险评估。",
          "如不满足风险准入标准，本公司有权延迟、拒绝、限制或终止服务。",
          "若出现所有权变更、控制权变化、交易行为异常、地区暴露变化等重大事项，可能触发重新筛查与档案更新。",
        ],
      },
      {
        title: "5. EDD触发条件与风险准入",
        items: [
          "对于高风险司法辖区、股权穿透不透明、交易频率异常或业务陈述与实际行为不一致等情形，可能启动增强尽调。",
          "增强尽调可能包括资金/财富来源的独立佐证、高层审批及更严格的交易控制措施。",
          "如涉及不可接受的制裁、法律、欺诈或声誉风险，本公司可拒绝开户或终止合作关系。",
        ],
      },
      {
        title: "6. 监管配合与记录保存",
        items: [
          "本公司将按适用法律及监管要求保存开户与交易记录。",
          "在法律要求范围内，本公司可配合监管机构、执法机关及有权机关调查。",
          "服务可用性以合规审查通过及持续风险监控结果为前提。",
          "如公司结构、控制人或经营范围发生重大变化，客户应及时、准确地更新资料。",
        ],
      },
    ],
  },
  "zh-TW": {
    title: "合規與KYC/KYB",
    subtitle: "反洗錢、制裁控制、開戶標準與持續KYB治理框架",
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
        title: "1. AML/CTF 合規框架",
        items: [
          "FIDERE 採用基於風險的方法開展反洗錢/反恐融資管理，覆蓋開戶與持續監控。",
          "核心控制措施包括客戶盡職調查（CDD）、受益所有人識別、交易監測與可疑活動上報流程。",
          "針對高風險客戶、複雜股權結構或異常交易模式，可能觸發增強盡調（EDD）。",
          "本公司會定期評估並更新 AML/CTF 控制措施，以滿足法律、監管及營運風險要求。",
        ],
      },
      {
        title: "2. KYC/KYB 材料要求",
        items: [
          "個人客戶可能需提供身份證明、地址證明、資金或財富來源證明及其他補充材料。",
          "機構客戶可能需提供公司註冊文件、章程文件、董事股東資料、UBO資訊及業務說明。",
          "為滿足法律、監管、營運或風險控制要求，本公司可要求提供額外資料。",
          "不同司法管轄區、產品和客戶風險等級下，材料准入與複核要求可能不同。",
        ],
      },
      {
        title: "3. 機構KYB常見資料包",
        items: [
          "公司註冊證書、商業登記文件、章程文件及註冊地址證明。",
          "董事與授權簽字人資料、董事會決議或授權文件、股權結構圖（穿透至最終受益所有人）。",
          "業務模式說明、預期交易畫像、資金來源說明及主要交易對手或市場暴露資訊。",
          "在適用情況下，可能要求審計財務報表、稅務居民資訊及相關牌照或監管備案文件。",
        ],
      },
      {
        title: "4. 制裁與PEP持續審查",
        items: [
          "在開戶及存續期間，本公司可能對客戶及相關方進行制裁名單與觀察名單篩查。",
          "政治公眾人物（PEP）狀態及負面輿情可能納入風險評估。",
          "如不滿足風險准入標準，本公司有權延遲、拒絕、限制或終止服務。",
          "若出現所有權變更、控制權變化、交易行為異常、地區暴露變化等重大事項，可能觸發重新篩查與檔案更新。",
        ],
      },
      {
        title: "5. EDD觸發條件與風險准入",
        items: [
          "對於高風險司法管轄區、股權穿透不透明、交易頻率異常或業務陳述與實際行為不一致等情形，可能啟動增強盡調。",
          "增強盡調可能包括資金/財富來源的獨立佐證、高層審批及更嚴格的交易控制措施。",
          "如涉及不可接受的制裁、法律、欺詐或聲譽風險，本公司可拒絕開戶或終止合作關係。",
        ],
      },
      {
        title: "6. 監管配合與記錄保存",
        items: [
          "本公司將按適用法律及監管要求保存開戶與交易記錄。",
          "在法律要求範圍內，本公司可配合監管機構、執法機關及有權機關調查。",
          "服務可用性以合規審查通過及持續風險監控結果為前提。",
          "如公司結構、控制人或經營範圍發生重大變化，客戶應及時、準確地更新資料。",
        ],
      },
    ],
  },
}

export function ComplianceKycContent() {
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
