"use client"

import { useLanguage } from "@/contexts/language-context"
import { Zap, Globe, Shield, Clock, Code, Headphones } from "lucide-react"

export function TrustAccountTechnology() {
  const { language } = useLanguage()

  const content = {
    en: {
      label: "Our Technology",
      title: "Built for Security, Speed & Scale",
      subtitle:
        "Our API-powered platform makes it easy for you to manage trust assets with enterprise-grade security and reliability.",
      features: [
        {
          icon: Code,
          title: "Simple Integration",
          points: [
            "Simple and flexible data messaging model",
            "Multiple markets and endpoints in single integration",
            "RESTful API with comprehensive documentation",
          ],
        },
        {
          icon: Headphones,
          title: "24/7 Global Support",
          points: [
            "Process transfers in real-time",
            "Access to competitive real-time FX rates",
            "Real-time monitoring and reporting",
          ],
        },
        {
          icon: Shield,
          title: "High Availability",
          points: ["Platform availability 99.9%", "Powered by cloud infrastructure", "Self-healing with auto-failover"],
        },
        {
          icon: Zap,
          title: "Automated Processes",
          points: [
            "Remove manual processing overheads",
            "Automate reconciliation and back office",
            "Streamlined compliance workflows",
          ],
        },
        {
          icon: Globe,
          title: "Global Network",
          points: ["Access 50+ countries worldwide", "Multi-currency support", "Local payment rails integration"],
        },
        {
          icon: Clock,
          title: "Fast Time to Market",
          points: ["Regular feature releases", "No downtime to customers", "Automated testing and QA"],
        },
      ],
    },
    "zh-CN": {
      label: "我们的技术",
      title: "为安全、速度和规模而构建",
      subtitle: "我们的API驱动平台让您轻松管理信托资产，提供企业级安全性和可靠性。",
      features: [
        {
          icon: Code,
          title: "简单集成",
          points: ["简单灵活的数据消息模型", "单次集成即可访问多个市场和端点", "完善文档的RESTful API"],
        },
        {
          icon: Headphones,
          title: "7x24全球支持",
          points: ["实时处理转账", "获取有竞争力的实时汇率", "实时监控和报告"],
        },
        {
          icon: Shield,
          title: "高可用性",
          points: ["平台可用性99.9%", "云基础设施驱动", "自动故障转移的自愈系统"],
        },
        {
          icon: Zap,
          title: "自动化流程",
          points: ["消除手工处理开销", "自动化对账和后台流程", "简化合规工作流程"],
        },
        {
          icon: Globe,
          title: "全球网络",
          points: ["覆盖全球50多个国家", "多币种支持", "本地支付通道集成"],
        },
        {
          icon: Clock,
          title: "快速上市",
          points: ["定期功能发布", "客户零停机", "自动化测试和QA"],
        },
      ],
    },
    "zh-TW": {
      label: "我們的技術",
      title: "為安全、速度和規模而構建",
      subtitle: "我們的API驅動平台讓您輕鬆管理信託資產，提供企業級安全性和可靠性。",
      features: [
        {
          icon: Code,
          title: "簡單集成",
          points: ["簡單靈活的數據消息模型", "單次集成即可訪問多個市場和端點", "完善文檔的RESTful API"],
        },
        {
          icon: Headphones,
          title: "7x24全球支持",
          points: ["實時處理轉賬", "獲取有競爭力的實時匯率", "實時監控和報告"],
        },
        {
          icon: Shield,
          title: "高可用性",
          points: ["平台可用性99.9%", "雲基礎設施驅動", "自動故障轉移的自癒系統"],
        },
        {
          icon: Zap,
          title: "自動化流程",
          points: ["消除手工處理開銷", "自動化對賬和後台流程", "簡化合規工作流程"],
        },
        {
          icon: Globe,
          title: "全球網絡",
          points: ["覆蓋全球50多個國家", "多幣種支持", "本地支付通道集成"],
        },
        {
          icon: Clock,
          title: "快速上市",
          points: ["定期功能發布", "客戶零停機", "自動化測試和QA"],
        },
      ],
    },
  }

  const t = content[language] || content.en

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium rounded-full mb-4">
            {t.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a0a1a] mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-[#f8f9fb] hover:bg-[#0a0a1a] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#2563EB]/10 group-hover:bg-[#2563EB] flex items-center justify-center mb-6 transition-colors">
                <feature.icon className="w-7 h-7 text-[#2563EB] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#0a0a1a] group-hover:text-white mb-4 transition-colors">
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start gap-3 text-gray-600 group-hover:text-white/70 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
