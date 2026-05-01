"use client"

import { useLanguage } from "@/contexts/language-context"

const content = {
  en: {
    title: "Regulatory Status",
    subtitle: "Company information, licensing status and service scope disclosure",
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
        title: "1. Legal Entity Information",
        items: [
          "Operating Entity: FIDERE TRUST LIMITED.",
          "Registered Jurisdiction: Hong Kong SAR.",
          "Registered Office: RM 32, 1/F, Kaiser Estate Phase 3, KT Hok Yuen Street, Hung Hom, Hong Kong.",
          "Official Contact: info@fideretrust.com | +852 5128 6593.",
        ],
      },
      {
        title: "2. Licensing and Supervisory Status",
        items: [
          "Trust or Company Service Provider Licensees Number: TC010497.",
          "Services are provided subject to applicable laws and regulatory requirements in relevant jurisdictions.",
          "Where licensing is required for a specific service type, client segment, or territory, services will only be offered within the permitted scope.",
          "Regulatory status and license coverage may differ by product and location. Additional eligibility checks may apply before onboarding.",
        ],
      },
      {
        title: "3. Permitted Scope and Restrictions",
        items: [
          "Information on this website is for general information and does not constitute legal, tax, or investment advice.",
          "Certain solutions may be available only to eligible or professional clients under applicable law.",
          "FIDERE may decline, restrict, suspend, or terminate access where onboarding, compliance, or legal conditions are not met.",
        ],
      },
      {
        title: "4. Restricted Jurisdictions",
        items: [
          "Services may not be available in sanctioned or restricted jurisdictions.",
          "Users are responsible for ensuring that access and use of this website is lawful in their location.",
          "FIDERE reserves the right to update jurisdiction restrictions and client eligibility criteria without prior notice.",
        ],
      },
    ],
  },
  "zh-CN": {
    title: "监管与牌照声明",
    subtitle: "公司主体、监管状态与服务范围披露",
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
        title: "1. 公司主体信息",
        items: [
          "运营主体：FIDERE TRUST LIMITED。",
          "注册司法辖区：中国香港特别行政区。",
          "注册地址：香港红磡鹤园街KT Kaiser Estate Phase 3 一号地下32室。",
          "官方联系方式：info@fideretrust.com | +852 5128 6593。",
        ],
      },
      {
        title: "2. 监管与牌照状态",
        items: [
          "信托或公司服务提供者牌照编号：TC010497。",
          "本公司在相关司法辖区内，依据适用法律与监管要求提供服务。",
          "对于特定服务类型、客户类别或地区如需持牌经营，本公司仅在许可范围内开展服务。",
          "不同产品与地区的监管状态及牌照覆盖范围可能不同，开户前可能需要额外资格审核。",
        ],
      },
      {
        title: "3. 服务范围与限制",
        items: [
          "本网站信息仅供一般参考，不构成法律、税务或投资建议。",
          "部分解决方案仅向符合适用法规要求的合格或专业客户提供。",
          "如未满足开户、合规或法律条件，本公司可拒绝、限制、暂停或终止服务访问。",
        ],
      },
      {
        title: "4. 受限司法辖区",
        items: [
          "受制裁或受限制司法辖区用户可能无法使用本公司服务。",
          "用户有责任确保其访问和使用本网站符合所在地法律法规。",
          "本公司保留在不预先通知的情况下更新受限地区和客户准入标准的权利。",
        ],
      },
    ],
  },
  "zh-TW": {
    title: "監管與牌照聲明",
    subtitle: "公司主體、監管狀態與服務範圍披露",
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
        title: "1. 公司主體資訊",
        items: [
          "營運主體：FIDERE TRUST LIMITED。",
          "註冊司法管轄區：中國香港特別行政區。",
          "註冊地址：香港紅磡鶴園街KT Kaiser Estate Phase 3 一號地下32室。",
          "官方聯絡方式：info@fideretrust.com | +852 5128 6593。",
        ],
      },
      {
        title: "2. 監管與牌照狀態",
        items: [
          "信託或公司服務提供者牌照編號：TC010497。",
          "本公司在相關司法管轄區內，依據適用法律與監管要求提供服務。",
          "對於特定服務類型、客戶類別或地區如需持牌經營，本公司僅在許可範圍內開展服務。",
          "不同產品與地區的監管狀態及牌照覆蓋範圍可能不同，開戶前可能需要額外資格審核。",
        ],
      },
      {
        title: "3. 服務範圍與限制",
        items: [
          "本網站資訊僅供一般參考，不構成法律、稅務或投資建議。",
          "部分解決方案僅向符合適用法規要求的合格或專業客戶提供。",
          "如未滿足開戶、合規或法律條件，本公司可拒絕、限制、暫停或終止服務訪問。",
        ],
      },
      {
        title: "4. 受限司法管轄區",
        items: [
          "受制裁或受限制司法管轄區用戶可能無法使用本公司服務。",
          "用戶有責任確保其訪問和使用本網站符合所在地法律法規。",
          "本公司保留在不預先通知的情況下更新受限地區和客戶准入標準的權利。",
        ],
      },
    ],
  },
}

export function RegulatoryStatusContent() {
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
