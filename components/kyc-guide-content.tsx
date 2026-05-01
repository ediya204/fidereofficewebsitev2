"use client"

import { useLanguage } from "@/contexts/language-context"

const content = {
  en: {
    title: "Corporate Account Opening",
    subtitle: "Required KYC & UBO Information",
    intro:
      "To complete corporate account opening and compliance due diligence, the platform requires corporate customers and their relevant individuals to provide the following information and documents prior to account activation.",
    sections: [
      {
        title: "1. Corporate Basic Information",
        items: [
          "Legal entity name",
          "Company registration number",
          "Date of incorporation",
          "Country / jurisdiction of incorporation",
          "Registered address, including:",
          "  • Street address",
          "  • City",
          "  • State / Province",
          "  • Postal code",
        ],
      },
      {
        title: "2. Corporate Contact Information",
        items: ["Company phone number", "Official company email address"],
      },
      {
        title: "3. Corporate Legal and Operational Documents",
        intro: "The company is required to provide:",
        items: [
          "Certificate of Incorporation and/or Business Registration",
          "Articles of Association",
          "Register of Directors and Shareholders",
          "Board Resolution authorizing account opening and appointment of authorized representative",
          "Description of nature of business",
          "Mailing address",
          "Proof of corporate address",
        ],
      },
      {
        title: "4. Source of Funds and Source of Wealth",
        subsections: [
          {
            subtitle: "Source of Funds (multiple selections allowed)",
            items: [
              "Business revenue",
              "Shareholder injection",
              "Investment returns",
              "Asset sales",
              "Loans / financing",
              "Government grants",
              "Other",
            ],
          },
          {
            subtitle: "Source of Wealth (multiple selections allowed)",
            items: ["Operating profits", "Capital investment", "Asset appreciation", "Inheritance / gift", "Other"],
          },
          {
            subtitle: "Annual revenue range",
            items: [
              "Less than USD 1,000,000",
              "USD 1,000,000 – 10,000,000",
              "USD 10,000,000 – 50,000,000",
              "USD 50,000,000 – 100,000,000",
              "Over USD 100,000,000",
            ],
          },
        ],
        extra: "Narrative description of main business activities",
      },
      {
        title: "5. Compliance Declarations",
        intro: "The company is required to declare:",
        items: [
          "Whether the entity is subject to U.S. or other international sanctions",
          "Whether any shareholder or key individual is a Politically Exposed Person (PEP)",
          "Whether any individual is related to or associated with a PEP",
          "Whether the entity maintains AML/KYC policies or is regulated",
          "AML Manual (if applicable)",
          "Purpose of account opening",
        ],
      },
      {
        title: "6. Authorized Representative",
        intro: "The company must appoint an authorized representative and provide:",
        subsections: [
          {
            subtitle: "Personal information",
            items: ["Nationality", "Gender", "Full legal name", "Date of birth"],
          },
          {
            subtitle: "Identification documents",
            items: [
              "ID type",
              "ID number",
              "ID issue date",
              "ID expiry date",
              "Copy of identification document (front side)",
            ],
          },
          {
            subtitle: "Position and contact details",
            items: ["Corporate position", "Mobile phone number", "Email address"],
          },
          {
            subtitle: "Residential address",
            items: ["Country", "Street address", "City", "State / Province", "Postal code", "Proof of address"],
          },
        ],
      },
      {
        title: "7. Directors",
        intro: "The company is required to provide information on all directors, including:",
        items: ["Director name", "Director title (e.g. Chairman, Director)"],
      },
      {
        title: "8. Ultimate Beneficial Owners (UBOs)",
        definition:
          "A UBO refers to any natural person who directly or indirectly owns 20% or more of the company, or otherwise exercises ultimate control over the company.",
        intro: "Required UBO information includes:",
        subsections: [
          {
            subtitle: "Personal information",
            items: [
              "Nationality",
              "Gender",
              "Last name (English / transliteration)",
              "First name (English / transliteration)",
              "Date of birth",
            ],
          },
          {
            subtitle: "Identification documents",
            items: [
              "ID type",
              "ID number",
              "ID issue date",
              "ID expiry date",
              "Copy of identification document (front side)",
            ],
          },
          {
            subtitle: "Relationship to the company",
            items: ["Shareholder / Senior management / Ultimate controller", "Position (if applicable)"],
          },
          {
            subtitle: "Contact information",
            items: ["Mobile phone number", "Email address"],
          },
          {
            subtitle: "Residential address",
            items: ["Country", "Street address", "City", "State / Province", "Postal code", "Proof of address"],
          },
        ],
      },
      {
        title: "9. PEP, Sanctions and Ongoing Monitoring for UBOs",
        items: [
          "All UBOs are subject to PEP identification and sanctions screening",
          "Additional information may be required for UBOs identified as PEPs or high-risk individuals",
          "During the account lifecycle, changes in UBO information, ownership structure, or risk profile may require updated information",
        ],
      },
      {
        title: "10. Electronic Confirmation",
        items: [
          "Electronic signature is completed by the authorized representative",
          "The signature confirms the accuracy, completeness, and legal validity of the information provided",
        ],
      },
    ],
  },
  "zh-CN": {
    title: "企业账户开户",
    subtitle: "所需 KYC 和 UBO 信息",
    intro: "为完成企业账户开户及合规尽职调查，平台要求企业客户及相关人员在账户激活前提供以下信息和文件。",
    sections: [
      {
        title: "1. 企业基本信息",
        items: [
          "法定实体名称",
          "公司注册号",
          "成立日期",
          "注册国家/司法管辖区",
          "注册地址，包括：",
          "  • 街道地址",
          "  • 城市",
          "  • 州/省",
          "  • 邮政编码",
        ],
      },
      {
        title: "2. 企业联系方式",
        items: ["公司电话号码", "公司官方电子邮件地址"],
      },
      {
        title: "3. 企业法律和运营文件",
        intro: "公司需提供：",
        items: [
          "公司注册证书和/或商业登记证",
          "公司章程",
          "董事及股东名册",
          "授权开户及委任授权代表的董事会决议",
          "业务性质说明",
          "通讯地址",
          "企业地址证明",
        ],
      },
      {
        title: "4. 资金来源和财富来源",
        subsections: [
          {
            subtitle: "资金来源（可多选）",
            items: ["营业收入", "股东注资", "投资回报", "资产出售", "贷款/融资", "政府补贴", "其他"],
          },
          {
            subtitle: "财富来源（可多选）",
            items: ["经营利润", "资本投资", "资产增值", "继承/赠与", "其他"],
          },
          {
            subtitle: "年收入范围",
            items: [
              "少于 100万美元",
              "100万 – 1,000万美元",
              "1,000万 – 5,000万美元",
              "5,000万 – 1亿美元",
              "超过 1亿美元",
            ],
          },
        ],
        extra: "主要业务活动的详细说明",
      },
      {
        title: "5. 合规声明",
        intro: "公司需声明：",
        items: [
          "该实体是否受到美国或其他国际制裁",
          "任何股东或关键人员是否为政治公众人物 (PEP)",
          "任何个人是否与 PEP 有关联",
          "该实体是否有 AML/KYC 政策或受到监管",
          "反洗钱手册（如适用）",
          "开户目的",
        ],
      },
      {
        title: "6. 授权代表",
        intro: "公司必须委任授权代表并提供：",
        subsections: [
          {
            subtitle: "个人信息",
            items: ["国籍", "性别", "法定全名", "出生日期"],
          },
          {
            subtitle: "身份证明文件",
            items: ["证件类型", "证件号码", "签发日期", "到期日期", "身份证明文件副本（正面）"],
          },
          {
            subtitle: "职位及联系方式",
            items: ["公司职位", "手机号码", "电子邮件地址"],
          },
          {
            subtitle: "居住地址",
            items: ["国家", "街道地址", "城市", "州/省", "邮政编码", "地址证明"],
          },
        ],
      },
      {
        title: "7. 董事",
        intro: "公司需提供所有董事的信息，包括：",
        items: ["董事姓名", "董事职称（如主席、董事）"],
      },
      {
        title: "8. 最终受益所有人 (UBO)",
        definition: "UBO 是指直接或间接持有公司 20% 或以上股份，或以其他方式对公司行使最终控制权的任何自然人。",
        intro: "所需 UBO 信息包括：",
        subsections: [
          {
            subtitle: "个人信息",
            items: ["国籍", "性别", "姓氏（英文/音译）", "名字（英文/音译）", "出生日期"],
          },
          {
            subtitle: "身份证明文件",
            items: ["证件类型", "证件号码", "签发日期", "到期日期", "身份证明文件副本（正面）"],
          },
          {
            subtitle: "与公司的关系",
            items: ["股东/高管/最终控制人", "职位（如适用）"],
          },
          {
            subtitle: "联系方式",
            items: ["手机号码", "电子邮件地址"],
          },
          {
            subtitle: "居住地址",
            items: ["国家", "街道地址", "城市", "州/省", "邮政编码", "地址证明"],
          },
        ],
      },
      {
        title: "9. UBO 的 PEP、制裁和持续监控",
        items: [
          "所有 UBO 均须进行 PEP 识别和制裁筛查",
          "被识别为 PEP 或高风险人员的 UBO 可能需要提供额外信息",
          "在账户生命周期内，UBO 信息、股权结构或风险状况的变化可能需要更新信息",
        ],
      },
      {
        title: "10. 电子确认",
        items: ["由授权代表完成电子签名", "签名确认所提供信息的准确性、完整性和法律效力"],
      },
    ],
  },
  "zh-TW": {
    title: "企業帳戶開戶",
    subtitle: "所需 KYC 和 UBO 資訊",
    intro: "為完成企業帳戶開戶及合規盡職調查，平台要求企業客戶及相關人員在帳戶啟用前提供以下資訊和文件。",
    sections: [
      {
        title: "1. 企業基本資訊",
        items: [
          "法定實體名稱",
          "公司註冊號",
          "成立日期",
          "註冊國家/司法管轄區",
          "註冊地址，包括：",
          "  • 街道地址",
          "  • 城市",
          "  • 州/省",
          "  • 郵遞區號",
        ],
      },
      {
        title: "2. 企業聯絡方式",
        items: ["公司電話號碼", "公司官方電子郵件地址"],
      },
      {
        title: "3. 企業法律和營運文件",
        intro: "公司需提供：",
        items: [
          "公司註冊證書和/或商業登記證",
          "公司章程",
          "董事及股東名冊",
          "授權開戶及委任授權代表的董事會決議",
          "業務性質說明",
          "通訊地址",
          "企業地址證明",
        ],
      },
      {
        title: "4. 資金來源和財富來源",
        subsections: [
          {
            subtitle: "資金來源（可多選）",
            items: ["營業收入", "股東注資", "投資回報", "資產出售", "貸款/融資", "政府補貼", "其他"],
          },
          {
            subtitle: "財富來源（可多選）",
            items: ["經營利潤", "資本投資", "資產增值", "繼承/贈與", "其他"],
          },
          {
            subtitle: "年收入範圍",
            items: [
              "少於 100萬美元",
              "100萬 – 1,000萬美元",
              "1,000萬 – 5,000萬美元",
              "5,000萬 – 1億美元",
              "超過 1億美元",
            ],
          },
        ],
        extra: "主要業務活動的詳細說明",
      },
      {
        title: "5. 合規聲明",
        intro: "公司需聲明：",
        items: [
          "該實體是否受到美國或其他國際制裁",
          "任何股東或關鍵人員是否為政治公眾人物 (PEP)",
          "任何個人是否與 PEP 有關聯",
          "該實體是否有 AML/KYC 政策或受到監管",
          "反洗錢手冊（如適用）",
          "開戶目的",
        ],
      },
      {
        title: "6. 授權代表",
        intro: "公司必須委任授權代表並提供：",
        subsections: [
          {
            subtitle: "個人資訊",
            items: ["國籍", "性別", "法定全名", "出生日期"],
          },
          {
            subtitle: "身份證明文件",
            items: ["證件類型", "證件號碼", "簽發日期", "到期日期", "身份證明文件副本（正面）"],
          },
          {
            subtitle: "職位及聯絡方式",
            items: ["公司職位", "手機號碼", "電子郵件地址"],
          },
          {
            subtitle: "居住地址",
            items: ["國家", "街道地址", "城市", "州/省", "郵遞區號", "地址證明"],
          },
        ],
      },
      {
        title: "7. 董事",
        intro: "公司需提供所有董事的資訊，包括：",
        items: ["董事姓名", "董事職稱（如主席、董事）"],
      },
      {
        title: "8. 最終受益所有人 (UBO)",
        definition: "UBO 是指直接或間接持有公司 20% 或以上股份，或以其他方式對公司行使最終控制權的任何自然人。",
        intro: "所需 UBO 資訊包括：",
        subsections: [
          {
            subtitle: "個人資訊",
            items: ["國籍", "性別", "姓氏（英文/音譯）", "名字（英文/音譯）", "出生日期"],
          },
          {
            subtitle: "身份證明文件",
            items: ["證件類型", "證件號碼", "簽發日期", "到期日期", "身份證明文件副本（正面）"],
          },
          {
            subtitle: "與公司的關係",
            items: ["股東/高管/最終控制人", "職位（如適用）"],
          },
          {
            subtitle: "聯絡方式",
            items: ["手機號碼", "電子郵件地址"],
          },
          {
            subtitle: "居住地址",
            items: ["國家", "街道地址", "城市", "州/省", "郵遞區號", "地址證明"],
          },
        ],
      },
      {
        title: "9. UBO 的 PEP、制裁和持續監控",
        items: [
          "所有 UBO 均須進行 PEP 識別和制裁篩查",
          "被識別為 PEP 或高風險人員的 UBO 可能需要提供額外資訊",
          "在帳戶生命週期內，UBO 資訊、股權結構或風險狀況的變化可能需要更新資訊",
        ],
      },
      {
        title: "10. 電子確認",
        items: ["由授權代表完成電子簽名", "簽名確認所提供資訊的準確性、完整性和法律效力"],
      },
    ],
  },
}

export function KycGuideContent() {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content.en

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t.title}</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">{t.subtitle}</h2>
        </div>

        {/* Introduction */}
        <div className="mb-10 p-6 bg-muted/30 rounded-xl border border-border">
          <p className="text-foreground leading-relaxed">{t.intro}</p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {t.sections.map((section, index) => (
            <div key={index} className="bg-card rounded-xl border border-border p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-4 pb-3 border-b border-border">{section.title}</h3>

              {/* Definition if exists */}
              {"definition" in section && section.definition && (
                <div className="mb-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-sm text-foreground italic">{section.definition}</p>
                </div>
              )}

              {/* Section intro if exists */}
              {"intro" in section && section.intro && <p className="text-muted-foreground mb-4">{section.intro}</p>}

              {/* Regular items */}
              {"items" in section && section.items && (
                <ul className="space-y-2 mb-4">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`text-foreground ${item.startsWith("  •") ? "ml-4 text-muted-foreground" : ""}`}
                    >
                      {item.startsWith("  •") ? item : `• ${item}`}
                    </li>
                  ))}
                </ul>
              )}

              {/* Subsections */}
              {"subsections" in section && section.subsections && (
                <div className="space-y-6">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide text-primary">
                        {subsection.subtitle}
                      </h4>
                      <ul className="space-y-1 ml-4">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-muted-foreground text-sm">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Extra content */}
              {"extra" in section && section.extra && (
                <p className="mt-4 text-muted-foreground italic">• {section.extra}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
