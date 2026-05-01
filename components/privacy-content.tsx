"use client"

import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: November 1, 2024",
    intro:
      "This Privacy Policy Statement (the 'Privacy Policy') is formulated by FIDERE and its affiliated companies (collectively 'we') in accordance with the Personal Data (Privacy) Ordinance (Cap. 486) of the Laws of Hong Kong (the 'Privacy Ordinance'), to inform you of our policies and practices regarding the collection, use, retention, disclosure, transfer, protection and access of personal data.",
    sections: [
      {
        title: "1. Our Commitment to Privacy",
        content:
          "We are committed to complying with the requirements of the Privacy Ordinance regarding the management of personal data to protect the privacy, confidentiality and security of the personal data we hold. We are equally committed to ensuring that all our staff and agents fulfill these obligations. If we ask you to provide certain information to identify you when using our services, you can rest assured that we will only use it in accordance with this Privacy Policy.\n\nOur commitment to comply with the Privacy Ordinance is based on the following principles:\n\n• We only collect personal data that we believe is relevant and necessary for providing our services and products\n• Personal data will only be used for specified purposes and will not be used for other purposes without your consent\n• We will not disclose personal data to any third party unless we (i) obtain your consent or (ii) are required by law, and we will only disclose under appropriate authorization\n• We will take all practicable steps to ensure your personal data is secure, confidential and accurate. This data will not be retained longer than necessary\n• Only authorized persons may access or process your personal data\n• You have the right to access or correct your personal data",
      },
      {
        title: "2. Collection of Personal Data",
        content:
          "We will collect your personal data through various means, including but not limited to when you use our website and applications, contact us and apply for our services. Where appropriate, you may be asked to provide your name, address, phone number and email address. Providing us with your personal data is optional, but without your personal data, we may not be able to process your request or provide the services you request.\n\nWhen you browse our website and applications, certain data may be automatically collected. For example, your web browser will automatically send data to each website you visit, including our website, which is a standard feature. This data includes your Internet Protocol (IP) address, domain name, browser type and configuration, language settings, geographic location, operating system, time/duration and previously visited websites (visitor data). We may also collect data about your usage and activities on the website and applications. We use this data, which does not identify individual users, to analyze trends, administer the website and applications, track user activities around the website and applications, and collect demographic information about our entire user base.",
      },
      {
        title: "3. Use of Personal Data",
        content:
          "We use your personal data to provide you with our services, operate and improve the website and applications, send you information, and for other purposes described in this Privacy Policy or disclosed to you on the website or in connection with our services.\n\nYou agree and understand that any and all data provided to and collected by us may be used for the following purposes:\n\n• To provide and improve our services\n• To personalize and improve your experience on the website and applications\n• To process your applications or requests\n• To register an account with us to create applications\n• To apply to become a partner\n• To respond to and follow up on your inquiries and provide customer service\n• To provide service information and other services and content you request, and to send account and service-related information, including confirmations, invoices, technical notices, updates, security alerts, and support and administrative information\n• To conduct statistical analysis, research, surveys, quality assurance and reviews\n• To notify you of changes that may affect your services\n• To send you information about new promotions, products and services offered by FIDERE and our selected partners\n• To conduct comprehensive analysis of promotional performance\n• To maintain internal records\n• To fulfill regulatory and/or compliance obligations\n• For other purposes directly related to any of the above",
      },
      {
        title: "4. Transfer of Personal Data",
        content:
          "When you register to use our services, we may share the personal data you provide with the following third parties only when necessary for the third party to provide the service:\n\n• Credit card processing companies and payment providers to charge you for services\n• Email service providers to send emails on our behalf\n• Employment resource companies to process your job applications\n• Business partners, joint venture partners, service providers, suppliers, agents, consultants and independent contractors who provide administrative or other services to us in the normal course and scope of our business\n• To comply with any applicable laws, regulations, government orders or court orders, or respond to any lawful requests and legal proceedings\n• To protect the rights and property of FIDERE, our agents, members and others, including enforcing our agreements, policies and terms of use\n• Based on our good faith belief that disclosure is necessary to respond to emergencies or protect the personal safety of any person\n• In connection with any merger, sale of company assets, financing or acquisition of all or part of our business\n\nWe also reserve the right to disclose your personal data to our related companies, including FIDERE Group affiliates and associated companies in Hong Kong and outside Hong Kong.\n\nIn any such case, if your data is transferred and subject to a different privacy policy, we will provide notice.",
      },
      {
        title: "5. Direct Marketing",
        content:
          "We may from time to time use data collected or held by us, including your name, address, phone number and email address, for direct marketing purposes. We will not transfer or disclose your personal data to any third party for direct marketing purposes unless we obtain your consent or indication of no objection. However, we may transfer and disclose your name, address, phone number and email address to companies in our group in Hong Kong or overseas for direct marketing of products related to payment services. To conduct the above direct marketing, we may engage third-party data processors or service providers to complete tasks.\n\nWhen you give us consent or indicate no objection for the above purposes, it means you have agreed to our use of your personal data for the above purposes. You have the right to withdraw consent for such use. You can also contact us at info@fideretrust.com to change your preferences for using your data in direct marketing at any time.",
      },
      {
        title: "6. Security",
        content:
          "The security of your personal data is very important to us. We take reasonable security measures to protect your personal data from loss, misuse, unauthorized access, disclosure, modification and destruction. When you enter sensitive data (such as credit card numbers) on our online registration or order forms, we will encrypt that data using Secure Socket Layer (SSL) technology.\n\nIf you use a password on our website or applications, you are responsible for keeping it confidential and should not share it with others. If you believe your password has been misused, please notify us immediately.\n\nWe have also established appropriate procedures to maintain and protect data we collect offline.\n\nHowever, please note that despite our efforts, no security measures are impenetrable.",
      },
      {
        title: "7. Cookies",
        content:
          "We may automatically collect certain data through the use of 'cookies'. Cookies are small data files that can track and collect your browsing data from your web browser. Among other things, the use of cookies helps us improve the website, applications and your experience. We use cookies to see the most popular areas and features, count the number of computers visiting our website and applications, personalize your experience and remember your preferences. Cookies will also use this data during your future visits to the website and applications so that the server can immediately recognize that you have previously visited the website and applications. We will also link data stored in cookies to any personally identifiable data you submit on the website and applications. Cookies never allow us to access your computer or any data about you other than the data you choose to share with us.\n\nYou can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually change your browser settings to decline cookies if you prefer. However, if your browser is set to not accept cookies or you decline cookies, you may not be able to access certain features or services of the website or applications. Our Privacy Policy does not cover the use of cookies by our service providers, and we cannot access or control these cookies.",
      },
      {
        title: "8. Hyperlinks",
        content:
          "The website and applications may contain links to other websites. If you provide any data while browsing those websites, we cannot be responsible for the protection and privacy of that data, and those websites are not governed by this Privacy Policy. We encourage you to carefully read the privacy policies applicable to those websites.",
      },
      {
        title: "9. Retention of Personal Data",
        content:
          "We will retain all personal data in accordance with the guidelines set out in the Privacy Ordinance. We will only retain and use your personal data for as long as your account is active or as needed to provide you with services, and for as long as necessary to achieve the purposes for which such data is used (including any directly related purposes), fulfill our legal obligations, resolve disputes and enforce our agreements.",
      },
      {
        title: "10. Monitoring Your Personal Data",
        content:
          "You have the following rights regarding your personal data:\n\n• To know and access personal data held by us\n• To supplement, change or delete your personal data\n• To restrict or object to the processing of personal data\n• Data portability, i.e., to receive your personal data in a structured, commonly used and machine-readable format and transmit that personal data directly to another data user\n• To lodge a complaint with the relevant data protection authority\n\nYou may choose to restrict the collection or use of your personal data in the following ways:\n\n• Whenever you are asked to fill out a form on the website or applications, look for a box you can click to indicate that you do not want the data to be used for direct marketing purposes\n• If you have previously agreed to our use of your personal data for direct marketing purposes, you can change your mind at any time and notify us by sending an email to info@fideretrust.com\n\nIf you wish to exercise any of the above rights, please contact our Data Protection Officer by sending an email to info@fideretrust.com. To protect your privacy and identity, we will take reasonable steps to verify your identity before allowing you to access or correct your personal data. Please note that we have the right to charge a reasonable fee for processing any data access request in accordance with the Privacy Ordinance.",
      },
      {
        title: "11. Amendments to Privacy Policy",
        content:
          "We will revise the terms of this Privacy Policy from time to time, and we encourage you to review this Privacy Policy from time to time to ensure you are aware of the latest version.",
      },
      {
        title: "12. English Version Prevails",
        content:
          "In case of any conflict or ambiguity between the Chinese and English versions of this Privacy Policy, the English version shall prevail.",
      },
      {
        title: "13. Inquiries",
        content:
          "If you have any questions about this Privacy Policy, please contact us by sending an email to info@fideretrust.com.",
      },
    ],
  },
  "zh-CN": {
    title: "隐私政策",
    lastUpdated: "最后更新：2024年11月1日",
    intro:
      "本隐私政策声明（下称「本隐私政策声明」）是由FIDERE及其关联公司（统称「我们」）根据香港法例第486章《个人资料（隐私）条例》（下称「隐私条例」）制定的，旨在告知阁下我们在收集、使用、保留、披露、转移、保障和查阅个人资料方面的政策及措施。",
    sections: [
      {
        title: "1. 我们对隐私之承诺",
        content:
          "我们承诺遵守《隐私条例》中有关管理个人资料的规定，以保障我们持有的个人资料的隐私、保密性和安全性。我们同样致力于确保我们所有的员工和代理人履行这些义务。如果我们要求您提供某些资料，以便在使用我们的服务时识别您的身份，您可以放心，我们保证只会按照本隐私政策声明使用这些资料。\n\n我们遵守《隐私条例》的承诺是基于以下原则：\n\n• 我们只收集我们认为与提供我们的服务和产品相关并需要的个人资料\n• 个人资料只会用于指定的目的，除非得到您的同意，否则不会用于其他目的\n• 我们不会向任何第三方披露个人资料，除非我们（i）获得您的同意或（ii）法律要求，但我们只会在适当的授权下披露\n• 我们会采取一切切实可行的步骤，确保您的个人资料安全、保密及准确。这些资料将不会保留超过必要的时间\n• 只有授权人士才能查阅或处理您的个人资料\n• 您有权查阅或更正您的个人资料",
      },
      {
        title: "2. 收集个人资料",
        content:
          "我们将通过多种方式收集您的个人资料，包括但不限于当您使用我们的网站（下称「网站」）和应用程序（下称「应用程序」）、联系我们和申请我们的服务时。在适当情况下，您可能会被要求提供您的姓名、地址、电话号码和电邮地址。向我们提供您的个人资料是可选择的，但没有您的个人资料，我们可能无法处理您的请求或提供您要求的服务。\n\n当您浏览网站和应用程序时，可能会自动收集一些资料。例如，您的网页浏览器将自动发送资料到您浏览的每个网站，包括我们的网站，这是一种标准功能。这些资料包括您的互联网协议（IP）地址、域名、浏览器类型和配置、语言设定、地理位置、操作系统、时间/持续时间及以前浏览过的网站（浏览者数据）。我们也可能会收集有关您在网站和应用程序上的使用情况和活动的资料。我们使用这些不识别个人用户的资料来分析趋势、管理网站和应用程序、���踪用户在网站和应用程序周围的活动及收集有关我们整个用户群的人口统计资料。",
      },
      {
        title: "3. 个人资料的使用",
        content:
          "我们使用您的个人资料为您提供我们的服务、操作及改进网站和应用程序，向您发送信息以及用于本隐私政策声明所述或在网站上向您披露或与我��的服务有关的其他目的。\n\n您同意并明白，提供给我们并由我们收集的任何和所有资料都可以用于下列目的：\n\n• 为您提供并改善我们的服务\n• 个性化和改善您在网站和应用程序上的体验\n• 处理您的申请或要求\n• 在我们这里注册帐户来建立申请\n• 申请成为合作伙伴\n• 回应及跟进您的查询并提供客户服务\n• 提供服务信息和您请求的其他服务和内容，并发送与帐户和服务相关的信息，包括确认、发票、技术通知、更新、安全警报以及支援和行政信息\n• 进行统计分析、研究、问卷调查、质量保证和检讨\n• 通知您可能会影响您的服务变更\n• 向您发送有关FIDERE及我们所选的合作伙伴提供的新推广、产品和服务的信息\n• 对促销业绩进行综合分析\n• 以保留内部记录\n• 履行监管及/或合规责任\n• 用于与上述任何一項直接有关的其他目的",
      },
      {
        title: "4. 个人资料的转移",
        content:
          "当您注册使用我们的服务时，我们可能仅在有关第三方提供该服务时必要时，与以下第三方分享您提供的个人资料：\n\n• 信用卡处理公司和支付供应商，以向您收取服务费用\n• 电子邮件服务供应商，代表我们发送电子邮件\n• 就业资源公司，以处理您的工作申请\n• 在我们的正常业务过程和范畴内向我们提供行政或其他服务的商业伙伴、合资伙伴、服务供应商、供应商、代理人、顾问和独立承包商\n• 以遵守任何适用的法律、法规、政府命令或法庭命令，或回应任何合法要求和法律程序\n• 为了保护FIDERE、我们的代理人、成员和其他人的权利和财产，包括执行我们的协议、政策和使用条款\n• 基于我们真诚地认为，披露是需要以应对紧急情况或保护任何人的人身安全\n• 与任何合并、出售公司资产、融资或收购我们公司的全部或部份业务有关的问题\n\n我们亦保留权利向我们的相关公司，包括FIDERE集团在香港及香港以外的附属及关联公司披露您的个人资料。\n\n在任何此类情况下，如果您的资料被转移并受不同的隐私政策约束，我们将提供通知。",
      },
      {
        title: "5. 直接促销",
        content:
          "我们可能会不时使用由我们收集或保存的资料，包括您的姓名、地址、电话号码和电邮地址，作直接促销之用。除非我们得到您的同意或表示不反对，否则我们不会将您的个人资料传送或披露予任何第三方作直接促销之用。不过，我们可能会将您的姓名、地址、电话号码及电邮地址转交及披露予我们集团在香港或海外的公司，以便直接推销与支付服务相关的产品。为了进行上述直接促销，我们可能会聘请第三方资料处理者或服务供应商完成任务。\n\n当您就上述用途向我们给予同意或表示不反对时，即表示您已同意我们为上述目的而使用您的个人资料。您有权撤回同意此类使用。您也可以通过info@fideretrust.com与我们联系，随时更改在直接促销中使用您的资料的偏好。",
      },
      {
        title: "6. 安全性",
        content:
          "您的个人资料的安全对我们非常重要。我们采取合理的保安措施保护您的个人资料，以防止丢失、误用、未经授权的查阅、披露、修改和销毁。当您在我们的线上注册或订单表上输入敏感资料（如信用卡号码）时，我们将使用安全通讯端层（SSL）技术对该资料进行加密。\n\n如果您在我们的网站或应用程序上使用密码，则有责任对其保密，并不应与其他人分享。如果您认为您的密码被误用，请立即通知我们。\n\n我们亦制定了适当的程序来维护和保障我们在线下收集的资料。\n\n然而，请注意，尽管我们作出了努力，但没有安全措施是牢不可破的。",
      },
      {
        title: "7. Cookies",
        content:
          "我们可能会通过使用'cookies'自动收集某些资料。Cookies是一种小型数据档案，可以从您的网页浏览器中跟踪和收集您的浏览资料。除了其他方面，cookies的使用有助於我们改善网站、应用程序和您的体验。我们使用cookies来查看最受歡迎的范畴和功能、計算瀏覽我們網站和應用程式的電腦數量、個性化您的體驗並記住您的偏好。Cookies還將在您將來瀏覽網站和應用程式期間使用這些資料，以便伺服器能夠立即識別您以前曾經瀏覽過網站和應用程式。我們亦會將存儲在cookies中的資料連接到您在網站和應用程式上提交的任何個人身份資料。除了您選擇與我們共享的資料外，cookies絕不允許我們接觸您的電腦或任何有關您的資料。\n\n您可以選擇接受或拒絕cookies。大多數網頁瀏覽器會自動接受cookies，但您通常可以根據需要更改瀏覽器的設定為不接受cookies。不過，如果您的瀏覽器被設置為不接受cookies或您拒絕cookies，您可能無法接觸網站或應用程式的某些功能或服務。我們的私隱政策聲明並不涵蓋我們的服務供應商對cookies的使用，並且我們無法接觸或控制這些cookies。",
      },
      {
        title: "8. 超連結",
        content:
          "網站和應用程式可能會包含連接其他網站的連結。如果您在瀏覽那些網站時提供任何資料，我們不能對該等資料的保護和私隱負責，而該等網站亦不受本私隱政策聲明所監管。我們鼓勵您細閱適用於有關網站的私隱政策。",
      },
      {
        title: "9. 個人資料的保留",
        content:
          "我們會根據《私隱條例》所訂的指引保存所有個人資料。我們只會在您的帳戶有效或為您提供服務所需的時間內，以及在達致使用此類資料的目的（包括任何直接相關目的）、履行我們的法律責任、解決爭議和執行我們的協議所需的時間內，保留和使用您的個人資料。",
      },
      {
        title: "10. 监控您的个人资料",
        content:
          "您对您的个人资料享有以下权利：\n\n• 了解及查阅我们持有的个人资料\n• 补充、更改或删除您的个人资料\n• 限制或反对个人资料的处理\n• 资料的可携性，即以结构化、常用和机器可读的格式接收您的个人资料，并将该个人资料直接传送给另一个资料使用者\n• 向有关资料保障当局提出投诉\n\n您可以选择通过以下方式限制收集或使用您的个人资料：\n\n• 每当您被要求在网站或应用程序上填写表格时，寻找您可以点击的方框，以表明您不想将资料用于直接促销目的\n• 如果您先前已同意我们将您的个人资料作直接促销用途，您可以随时改变主意并发送电邮至info@fideretrust.com通知我们\n\n如果您想行使上述任何权利，请发送电邮至info@fideretrust.com与我们的资料保障主任联络。为保护您的隐私和身份，我们将以合理的步骤核实您的身份，然后才會让您查阅或更正您的个人资料。请注意，我们有權根據《私隱條例》，就處理任何查阅资料要求收取合理的費用。",
      },
      {
        title: "11. 隐私政策声明之修订",
        content: "我们会不时修订本隐私政策声明���条款，并鼓励您不时浏览本隐私政策声明，以确保您得悉最新版本。",
      },
      {
        title: "12. 以英文版本为准",
        content: "如本隐私政策声明的中、英文版本有任何抵触或不明確之處，應以英文版本為準。",
      },
      {
        title: "13. 查询",
        content: "如果您对本隐私政策声明有任何疑问，请发送电邮至info@fideretrust.com与我们联系。",
      },
    ],
  },
  "zh-TW": {
    title: "私隱政策",
    lastUpdated: "最後更新：2024年11月1日",
    intro:
      "本隱私政策聲明（下稱「本隱私政策聲明」）是由FIDERE及其關聯公司（統稱「我們」）根據香港法例第486章《個人資料（私隱）條例》（下稱「私隱條例」）制定的，旨在告知閣下我們在收集、使用、保留、披露、轉移、保障和查閱個人資料方面的政策及措施。",
    sections: [
      {
        title: "1. 我們對私隱之承諾",
        content:
          "我們承諾遵守《私隱條例》中有關管理個人資料的規定，以保障我們持有的個人資料的私隱、保密性和安全性。我們同樣致力於確保我們所有的員工和代理人履行這些義務。如果我們要求您提供某些資料，以便在使用我們的服務時識別您的身份，您可以放心，我們保證只會按照本私隱政策聲明使用這些資料。\n\n我們遵守《私隱條例》的承諾是基於以下原則：\n\n• 我們只收集我們認為與提供我們的服務和產品相關並需要的個人資料\n• 個人資料只會用於指定的目的，除非得到您的同意，否則不會用於其他目的\n• 我們不會向任何第三方披露個人資料，除非我們（i）獲得您的同意或（ii）法律要求，但我們只會在適當的授權下披露\n• 我們會採取一切切實可行的步驟，確保您的個人資料安全、保密及準確。這些資料將不會保留超過必要的時間\n• 只有授權人士才能查閱或處理您的個人資料\n• 您有權查閱或更正您的個人資料",
      },
      {
        title: "2. 收集個人資料",
        content:
          "我們將通過多種方式收集您的個人資料，包括但不限於當您使用我們的網站（下稱「網站」）和應用程式（下稱「應用程式」）、聯繫我們和申請我們的服務時。在適當情況下，您可能會被要求提供您的姓名、地址、電話號碼和電郵地址。向我們提供您的個人資料是可選擇的，但沒有您的個人資料，我們可能無法處理您的請求或提供您要求的服務。\n\n當您瀏覽網站和應用程式時，可能會自動收集一些資料。例如，您的網頁瀏覽器將自動發送資料到您瀏覽的每個網站，包括我們的網站，這是一種標準功能。這些資料包括您的互聯網協議（IP）地址、域名、瀏覽器類型和配置、語言設定、地理位置、操作系統、時間/持續時間及以前瀏覽過的網站（瀏覽者數據）。我們也可能會收集有關您在網站和應用程式上的使用情況和活動的資料。我們使用這些不識別個人用戶的資料來分析趨勢、管理網站和應用程式、跟蹤用戶在網站和應用程式周圍的活動及收集有關我們整個用戶群的人口統計資料。",
      },
      {
        title: "3. 個人資料的使用",
        content:
          "我們使用您的個人資料為您提供我們的服務、操作及改進網站和應用程式，向您發送信息以及用於本私隱政策聲明所述或在網站上向您披露或與我們的服務有關的其他目的。\n\n您同意並明白，提供給我們並由我們收集的任何和所有資料都可以用於下列目的：\n\n• 為您提供並改善我們的服務\n• 個性化和改善您在網站和應用程式上的體驗\n• 處理您的申請或要求\n• 在我們這裡註冊帳戶來建立申請\n• 申請成為合作夥伴\n• 回應及跟蹤您的查詢並提供客戶服務\n• 提供服務信息和您請求的其他服務和內容，並發送與帳戶和服務相關的信息，包括確認、發票、技術通知、更新、安全警報以及支援和行政信息\n• 進行統計分析、研究、問卷調查、質量保證和檢討\n• 通知您可能會影響您的服務變更\n• 向您發送有關FIDERE及我們所選的合作夥伴提供的新推廣、產品和服務的信息\n• 對促銷業績進行綜合分析\n• 以保留內部記錄\n• 履行監管及/或合規責任\n• 用於與上述任何一項直接有關的其他目的",
      },
      {
        title: "4. 個人資料的轉移",
        content:
          "當您註冊使用我們的服務時，我們可能僅在有關第三方提供該服務時必要時，與以下第三方分享您提供的個人資料：\n\n• 信用卡處理公司和支付供應商，以向您收取服務費用\n• 電子郵件服務供應商，代表我們發送電子郵件\n• 就業資源公司，以處理您的工作申請\n• 在我們的正常業務過程和範疇內向我們提供行政或其他服務的商業夥伴、合資夥伴、服務供應商、供應商、代理人、顧問和獨立承包商\n• 以遵守任何適用的法律、法規、政府命令或法庭命令，或回應任何合法要求和法律程序\n• 為了保護FIDERE、我們的代理人、成員和其他人的權利和財產，包括執行我們的協議、政策和使用條款\n• 基於我們真誠地認為，披露是需要以應對緊急情況或保護任何人的人身安全\n• 與任何合併、出售公司資產、融資或收購我們公司的全部或部份業務有關的問題\n\n我們亦保留權利向我們的相關公司，包括FIDERE集團在香港及香港以外的附屬及關聯公司披露您的個人資料。\n\n在任何此類情況下，如果您的資料被轉移並受不同的私隱政策約束，我們將提供通知。",
      },
      {
        title: "5. 直接促銷",
        content:
          "我們可能會不時使用由我們收集或保存的資料，包括您的姓名、地址、電話號碼和電郵地址，作直接促銷之用。除非我們得到您的同意或表示不反對，否則我們不會將您的個人資料傳送或披露予任何第三方作直接促銷之用。不過，我們可能會將您的姓名、地址、電話號碼及電郵地址轉交及披露予我們集團在香港或海外的公司，以便直接推銷與支付服務相關的產品。為了進行上述直接促銷，我們可能會聘請第三方資料處理者或服務供應商完成任務。\n\n當您就上述用途向我們給予同意或表示不反對時，即表示您已同意我們為上述目的而使用您的個人資料。您有權撤回同意此類使用。您也可以通過info@fideretrust.com與我們聯繫，隨時更改在直接促銷中使用您的資料的偏好。",
      },
      {
        title: "6. 安全性",
        content:
          "您的個人資料的安全對我們非常重要。我們採取合理的保安措施保護您的個人資料，以防止丟失、誤用、未經授權的查閱、披露、修改和銷毀。當您在我們的線上註冊或訂單表上輸入敏感資料（如信用卡號碼）時，我們將使用安全通訊端層（SSL）技術對該資料進行加密。\n\n如果您在我們的網站或應用程式上使用密碼，則有責任對其保密，並不應與其他人分享。如果您認為您的密碼被誤用，請立即通知我們。\n\n我們亦制定了適當的程序來維護和保障我們在線下收集的資料。\n\n然而,請注意，盡管我們作出了努力，但沒有安全措施是牢不可破的。",
      },
      {
        title: "7. Cookies",
        content:
          "我們可能會通過使用'cookies'自動收集某些資料。Cookies是一種小型數據檔案，可以從您的網頁瀏覽器中跟蹤和收集您��瀏覽資料。除了其他方面，cookies的使用有助於我們改善網站、應用程式和您的體驗。我們使用cookies來查看最受歡迎的範疇和功能、計算瀏覽我們網站和應用程式的電腦數量、個性化您的體驗並記住您的偏好。Cookies還將在您將來瀏覽網站和應用程式期間使用這些資料，以便伺服器能夠立即識別您以前曾經���覽過網站和應用程式。我們亦會將存儲在cookies中的資料連接到您在網站和應用程式上提交的任何個人身份資料。除了您選擇與我們共享的資料外，cookies絕不允許我們接觸您的電腦或任何有關您的資料。\n\n您可以選擇接受或拒絕cookies。大多數網頁瀏覽器會自動接受cookies，但您通常可以根據需要更改瀏覽器的設定為不接受cookies。不過，如果您的瀏覽器被設置為不接受cookies或您拒絕cookies，您可能無法接觸網站或應用程式的某些功能或服務。我們的私隱政策聲明並不涵蓋我們的服務供應商對cookies的使用，並且我們無法接觸或控制這些cookies。",
      },
      {
        title: "8. 超連結",
        content:
          "網站和應用程式可能會包含連接其他網站的連結。如果您在瀏覽那些網站時提供任何資料，我們不能對該等資料的保護和私隱負責，而該等網站亦不受本私隱政策聲明所監管。我們鼓勵您細閱適用於有關網站的私隱政策。",
      },
      {
        title: "9. 個人資料的保留",
        content:
          "我們會根據《私隱條例》所訂的指引保存所有個人資料。我們只會在您的帳戶有效或為您提供服務所需的時間內，以及在達致使用此類資料的目的（包括任何直接相關目的）、履行我們的法律責任、解決爭議和執行我們的協議所需的時間內，保留和使用您的個人資料。",
      },
      {
        title: "10. 监控您的个人资料",
        content:
          "您对您的个人资料享有以下权利：\n\n• 了解及查閱我們持有的個人資料\n• 補充、更改或刪除您的個人資料\n• 限制或反對個人資料的處理\n• 資料的可攜性，即以結構化、常用和機器可讀的格式接收您的個人資料，並將該個人資料直接傳送給另一個資料使用者\n• 向有關資料保障當局提出投訴\n\n您可選擇通過以下方式限制收集或使用您的個人資料：\n\n• 每當您被要求在網站或應用程式上填寫表格時，尋找您可以點擊的方框，以表明您不想將資料用於直接促銷目的\n• 如果您先前已同意我們將您的個人資料作直接促銷用途，您可以隨時改變主意並發送電郵至info@fideretrust.com通知我們\n\n如果您想行使上述任何權利，請發送電郵至info@fideretrust.com與我們的資料保障主任聯絡。為保護您的私隱和身份，我們將以合理的步驟核實您的身份，然後才會讓您查閱或更正您的個人資料。請注意，我們有權根據《私隱條例》，就處理任何查閱資料要求收取合理的費用。",
      },
      {
        title: "11. 私隱政策聲明之修訂",
        content: "我們會不時修訂本私隱政策聲明的條款，並鼓勵您不時瀏覽本私隱政策聲明，以確保您得悉最新版本。",
      },
      {
        title: "12. 以英文版本為準",
        content: "如本私隱政策聲明的中、英文版本有任何抵觸或不明確之處，應以英文版本為準。",
      },
      {
        title: "13. 查詢",
        content: "如果您對本私隱政策聲明有任何疑問，請發送電郵至info@fideretrust.com與我們聯繫。",
      },
    ],
  },
}

export function PrivacyContent() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
        <p className="text-gray-500 mb-12">{t.lastUpdated}</p>

        <p className="text-gray-600 leading-relaxed mb-12">{t.intro}</p>

        <div className="space-y-10">
          {t.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
