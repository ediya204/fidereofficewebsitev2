"use client"

import { CheckCircle2, User, Phone, FileText, Shield, ClipboardCheck, Info, Lock } from "@/components/ui/app-icon"

interface PersonalKycGuideContentProps {
  locale: string
}

const translations = {
  en: {
    title: "Personal Trust Account – KYC & Onboarding Guide",
    subtitle:
      "This guide introduces the account opening process, required documents, and identity verification requirements for FIDERE Personal Trust Accounts. All information collected is used to fulfill legal and compliance obligations and to protect client assets.",

    // Section 1: Account Description
    accountSection: "1. Account Description",
    accountDesc: "Personal Trust Accounts are used under trust arrangements to assist clients with:",
    accountPurposes: [
      "Asset Custody",
      "Asset Servicing & Management",
      "Custodial or Supervised Arrangements",
      "Investment Holding & Long-term Asset Management",
    ],
    accountNote:
      "FIDERE provides only management and compliance support services within the trust structure, and does not act as the beneficial owner of assets or user of funds.",

    // Section 2: Process Overview
    processSection: "2. Account Opening Process Overview",
    processDesc:
      "The Personal Trust Account opening process consists of 5 steps. Please prepare the relevant documents before starting to complete your application smoothly in one session.",

    // Section 3: Steps
    stepsSection: "3. Account Opening Steps & Required Information",
    steps: [
      {
        number: 1,
        title: "Personal Information",
        description: "You need to provide basic identity information and economic background, including:",
        details: [
          "Legal name (as shown on ID document)",
          "Name in native language or alias (if applicable)",
          "Date of birth and place of birth",
          "Nationality (please indicate if you have dual citizenship)",
        ],
        subSection: "Additionally, please provide:",
        subDetails: [
          "Occupation, employer, and position description",
          "Purpose of account opening (e.g., asset custody, investment, trust management)",
          "Source of funds (e.g., salary income, savings, investment returns, asset sales, inheritance or gifts)",
          "Source of wealth",
          "Annual income range (tiered selection)",
          "Whether third-party funding or fund arrangements are involved",
        ],
      },
      {
        number: 2,
        title: "Contact Information & Residential Address",
        description: "Please provide:",
        details: [
          "Mobile phone number capable of receiving verification codes",
          "Current actual residential address (P.O. Box not accepted)",
        ],
        addressNote: "Address information must include: Street, City/Region, Postal code, and Country.",
        proofNote:
          "During the subsequent review stage, you will need to provide proof of address within the last 3 months, such as a utility bill or bank statement.",
      },
      {
        number: 3,
        title: "Tax Residency Declaration",
        description: "To comply with international tax requirements, you need to:",
        details: [
          "Declare whether you are a Hong Kong tax resident",
          "Provide Tax Identification Number (if applicable)",
          "Declare tax residency status in other countries or regions",
        ],
        note: "Tax residency status is determined according to local tax laws and OECD guidelines of each jurisdiction.",
      },
      {
        number: 4,
        title: "Identity Verification",
        description: "You need to complete the following identity verification steps:",
        details: [
          "Upload a valid identity document (such as passport or government-issued ID)",
          "Complete facial recognition and liveness detection",
        ],
        note: "This process is powered by third-party identity verification provider Sumsub to ensure identity authenticity and prevent fraud.",
      },
      {
        number: 5,
        title: "Confirmation & Submission",
        description: "Before submitting your application, please:",
        details: [
          "Carefully review the information you have filled in",
          "Confirm that the information is true, accurate, and complete",
          "Submit the account opening application and complete authorization",
        ],
        note: "Your application will enter the compliance review process after submission.",
      },
    ],

    // Section 4: Important Tips
    tipsSection: "4. Important Tips",
    tipsDesc: "To ensure smooth account opening, we recommend:",
    tipsList: [
      "Prepare a valid identity document in advance",
      "Prepare proof of address from within the last 3 months",
      "Complete identity verification in a well-lit environment",
      "Use a stable internet connection",
      "Try to complete all account opening steps at one time",
    ],

    // Section 5: Information Usage
    complianceSection: "5. Information Usage & Compliance Statement",
    complianceDesc: "FIDERE uses client information only for:",
    complianceList: [
      "Client identification and verification",
      "Anti-money laundering and compliance review",
      "Ongoing monitoring under legal and regulatory requirements",
    ],
    complianceNote: "All client information will be kept strictly confidential in accordance with the law.",
  },
  cn: {
    title: "FIDERE 个人信托账户开户说明",
    subtitle:
      "本说明用于向申请人介绍 FIDERE 个人信托账户的开户流程、所需资料及身份核验要求。所有信息采集均用于履行法律及合规义务，并保障客户资产安全。",

    accountSection: "一、账户说明",
    accountDesc: "个人信托账户用于在信托安排下协助客户进行：",
    accountPurposes: ["资产托管", "资产服务与管理", "托管型或监管型安排", "投资持有及长期资产管理"],
    accountNote: "FIDERE 在信托结构中仅提供管理与合规支持服务，不作为资产实益拥有人或资金使用方。",

    processSection: "二、开户流程概览",
    processDesc: "个人信托账户开户流程共分为 5 个步骤。请您在开始前准备好相关资料，以便一次性顺利完成申请。",

    stepsSection: "三、开户步骤及所需信息",
    steps: [
      {
        number: 1,
        title: "个人信息",
        description: "您需要提供基本身份信息及经济背景，包括：",
        details: [
          "法定姓名（与证件一致）",
          "本地语言姓名或别名（如适用）",
          "出生日期及出生地",
          "国籍（如有双重国籍请一并说明）",
        ],
        subSection: "同时，请您说明：",
        subDetails: [
          "职业、雇主及职位说明",
          "开户目的（如资产托管、投资、信托管理等）",
          "资金来源（如工资收入、储蓄、投资收益、资产出售、继承或赠与）",
          "财富来源",
          "年收入范围（分级选择）",
          "是否涉及第三方出资或资金安排",
        ],
      },
      {
        number: 2,
        title: "联系方式与居住地址",
        description: "请提供：",
        details: ["可接收验证码的手机号码", "当前实际居住地址（不接受邮政信箱）"],
        addressNote: "地址信息需包含：街道、城市/地区、邮政编码及国家。",
        proofNote: "在后续审核阶段，您需要提供近 3 个月内的地址证明文件，例如水电账单或银行对账单。",
      },
      {
        number: 3,
        title: "税务居民声明",
        description: "为符合国际税务合规要求，您需要：",
        details: ["声明是否为香港税务居民", "提供税务识别号码（如适用）", "申报其他国家或地区的税务居民身份"],
        note: "税务居民身份的判断以各司法辖区当地税法及 OECD 指引为准。",
      },
      {
        number: 4,
        title: "身份验证",
        description: "您需完成以下身份核验步骤：",
        details: ["上传有效身份证明文件（如护照或政府签发身份证件）", "完成人脸识别及活体检测"],
        note: "该流程由第三方身份验证服务商 Sumsub 提供技术支持，用于确保身份真实性并防止欺诈。",
      },
      {
        number: 5,
        title: "确认与提交",
        description: "在提交申请前，请您：",
        details: ["仔细核对已填写的信息", "确认资料真实、准确、完整", "提交开户申请并完成授权"],
        note: "您的申请将在提交后进入合规审核流程。",
      },
    ],

    tipsSection: "四、重要提示",
    tipsDesc: "为确保开户顺利完成，建议您：",
    tipsList: [
      "提前准备有效身份证件",
      "准备近 3 个月内的地址证明文件",
      "在光线充足的环境下完成身份验证",
      "使用稳定的网络连接",
      "尽量在同一时间完成全部开户步骤",
    ],

    complianceSection: "五、信息使用与合规说明",
    complianceDesc: "FIDERE 将客户信息仅用于：",
    complianceList: ["客户身份识别与验证", "反洗钱及合规审查", "法律及监管要求下的持续监控"],
    complianceNote: "所有客户信息将依法严格保密。",
  },
  tc: {
    title: "FIDERE 個人信託賬戶開戶說明",
    subtitle:
      "本說明用於向申請人介紹 FIDERE 個人信託賬戶的開戶流程、所需資料及身份核驗要求。所有資訊採集均用於履行法律及合規義務，並保障客戶資產安全。",

    accountSection: "一、賬戶說明",
    accountDesc: "個人信託賬戶用於在信託安排下協助客戶進行：",
    accountPurposes: ["資產託管", "資產服務與管理", "託管型或監管型安排", "投資持有及長期資產管理"],
    accountNote: "FIDERE 在信託結構中僅提供管理與合規支持服務，不作為資產實益擁有人或資金使用方。",

    processSection: "二、開戶流程概覽",
    processDesc: "個人信託賬戶開戶流程共分為 5 個步驟。請您在開始前準備好相關資料，以便一次性順利完成申請。",

    stepsSection: "三、開戶步驟及所需資訊",
    steps: [
      {
        number: 1,
        title: "個人資料",
        description: "您需要提供基本身份資訊及經濟背景，包括：",
        details: [
          "法定姓名（與證件一致）",
          "本地語言姓名或別名（如適用）",
          "出生日期及出生地",
          "國籍（如有雙重國籍請一併說明）",
        ],
        subSection: "同時，請您說明：",
        subDetails: [
          "職業、僱主及職位說明",
          "開戶目的（如資產託管、投資、信託管理等）",
          "資金來源（如工資收入、儲蓄、投資收益、資產出售、繼承或贈與）",
          "財富來源",
          "年收入範圍（分級選擇）",
          "是否涉及第三方出資或資金安排",
        ],
      },
      {
        number: 2,
        title: "聯繫方式與居住地址",
        description: "請提供：",
        details: ["可接收驗證碼的手機號碼", "當前實際居住地址（不接受郵政信箱）"],
        addressNote: "地址資訊需包含：街道、城市/地區、郵政編碼及國家。",
        proofNote: "在後續審核階段，您需要提供近 3 個月內的地址證明文件，例如水電賬單或銀行結單。",
      },
      {
        number: 3,
        title: "稅務居民聲明",
        description: "為符合國際稅務合規要求，您需要：",
        details: ["聲明是否為香港稅務居民", "提供稅務識別號碼（如適用）", "申報其他國家或地區的稅務居民身份"],
        note: "稅務居民身份的判斷以各司法轄區當地稅法及 OECD 指引為準。",
      },
      {
        number: 4,
        title: "身份驗證",
        description: "您需完成以下身份核驗步驟：",
        details: ["上傳有效身份證明文件（如護照或政府簽發身份證件）", "完成人臉識別及活體檢測"],
        note: "該流程由第三方身份驗證服務商 Sumsub 提供技術支持，用於確保身份真實性並防止欺詐。",
      },
      {
        number: 5,
        title: "確認與提交",
        description: "在提交申請前，請您：",
        details: ["仔細核對已填寫的資訊", "確認資料真實、準確、完整", "提交開戶申請並完成授權"],
        note: "您的申請將在提交後進入合規審核流程。",
      },
    ],

    tipsSection: "四、重要提示",
    tipsDesc: "為確保開戶順利完成，建議您：",
    tipsList: [
      "提前準備有效身份證件",
      "準備近 3 個月內的地址證明文件",
      "在光線充足的環境下完成身份驗證",
      "使用穩定的網絡連接",
      "盡量在同一時間完成全部開戶步驟",
    ],

    complianceSection: "五、資訊使用與合規說明",
    complianceDesc: "FIDERE 將客戶資訊僅用於：",
    complianceList: ["客戶身份識別與驗證", "反洗錢及合規審查", "法律及監管要求下的持續監控"],
    complianceNote: "所有客戶資訊將依法嚴格保密。",
  },
}

const stepIcons = [User, Phone, FileText, Shield, ClipboardCheck]

export function PersonalKycGuideContent({ locale }: PersonalKycGuideContentProps) {
  const t = translations[locale as keyof typeof translations] || translations.en

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        {/* Section 1: Account Description */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" />
            {t.accountSection}
          </h2>
          <p className="text-gray-600 mb-4">{t.accountDesc}</p>
          <ul className="space-y-2 mb-4">
            {t.accountPurposes.map((purpose, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>{purpose}</span>
              </li>
            ))}
          </ul>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">{t.accountNote}</p>
          </div>
        </section>

        {/* Section 2: Process Overview */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.processSection}</h2>
          <p className="text-gray-600 mb-6">{t.processDesc}</p>

          {/* Progress Steps Visual */}
          <div className="flex items-center justify-between">
            {t.steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <div className="text-xs text-gray-500 mt-2 text-center max-w-16 md:max-w-24">{step.title}</div>
                {index < t.steps.length - 1 && (
                  <div className="hidden md:block absolute" style={{ left: `${(index + 0.5) * 20}%` }}></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Steps */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{t.stepsSection}</h2>

          <div className="space-y-6">
            {t.steps.map((step, index) => {
              const Icon = stepIcons[index]
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  {/* Step Header */}
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <Icon className="w-5 h-5 text-primary" />
                          {locale === "en" ? `Step ${step.number}: ` : `步骤${step.number}：`}
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{step.description}</p>

                    <ul className="space-y-2 mb-4">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Sub Section (for step 1) */}
                    {"subSection" in step && step.subSection && (
                      <div className="mt-4">
                        <p className="text-gray-600 mb-3">{step.subSection}</p>
                        <ul className="space-y-2">
                          {step.subDetails?.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Address Note (for step 2) */}
                    {"addressNote" in step && step.addressNote && (
                      <div className="mt-4 bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700">{step.addressNote}</p>
                        {"proofNote" in step && step.proofNote && (
                          <p className="text-sm text-gray-700 mt-2">{step.proofNote}</p>
                        )}
                      </div>
                    )}

                    {/* Note */}
                    {"note" in step && step.note && !("addressNote" in step) && (
                      <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-800">{step.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Section 4: Important Tips */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.tipsSection}</h2>
          <p className="text-gray-600 mb-4">{t.tipsDesc}</p>
          <ul className="space-y-3">
            {t.tipsList.map((tip, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm shrink-0">
                  {index + 1}
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 5: Compliance */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            {t.complianceSection}
          </h2>
          <p className="text-gray-600 mb-4">{t.complianceDesc}</p>
          <ul className="space-y-2 mb-4">
            {t.complianceList.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-800">{t.complianceNote}</p>
          </div>
        </section>
      </main>
    </div>
  )
}
