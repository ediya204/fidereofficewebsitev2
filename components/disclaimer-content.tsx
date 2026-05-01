"use client"

import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    title: "Terms of Use",
    lastUpdated: "Last Updated: November 1, 2024",
    intro: `Welcome to the FIDERE Trust website. The terms "we", "us" and "our" in these Terms of Use refer to FIDERE Trust Limited and its parent companies, subsidiaries, affiliates and associated companies. The term "you" in these Terms of Use refers to any user of this website.

Please read these Terms of Use carefully before using this website. If you do not agree to these Terms of Use, do not use this website.

By accessing, using or merely browsing the website, you agree to be legally bound by these Terms and all terms, policies and guidelines incorporated herein by reference. If you do not agree to all of these Terms, you may not use the website.

In these Terms, users of this website are collectively referred to as "Users".

FIDERE Trust reserves the right to change or modify any of the terms and conditions in these Terms, or any policies or guidelines of the website, at any time in its sole discretion.

Unless otherwise specified, any changes or modifications will take effect immediately upon posting on the website, and your continued use of the website after such time will constitute acceptance of such changes or modifications. You should review the Terms and any policies and documents incorporated therein from time to time to understand the terms and conditions applicable to your use of the website. The Terms will always display a "Last Updated" date at the top. If you do not agree to any revised Terms, you must stop using this website. If you have any questions about the Terms, please email us at: info@fideretrust.com.`,
    sections: [
      {
        title: "1. Privacy Policy",
        content: `Please refer to FIDERE Trust's Privacy Policy to understand how FIDERE Trust collects, uses and discloses personal data that can identify users. By using the website, you agree that we may use, collect and disclose personally identifiable information in accordance with our Privacy Policy.`,
      },
      {
        title: "2. Registration Data; Account Security",
        content: `By registering an account on the website, you agree to (a) enter accurate, current and complete information as indicated on the website's registration form ("Registration Data"); (b) keep your password secure; (c) maintain and promptly update the Registration Data and any other information you provide to FIDERE Trust and keep the Registration Data accurate, current and complete; and (d) assume all risks associated with unauthorized access to the Registration Data and any other information you provide to FIDERE Trust. You are responsible for all activities that occur in your FIDERE Trust account and all charges incurred by your FIDERE Trust account.`,
      },
      {
        title: "3. Intellectual Property",
        content: `All information, data, text, music, sounds, photographs, images, software, videos, information or other materials (collectively "Content") displayed or made available on this website are owned by us or licensed to us and are protected by copyright, trademarks, service marks, patents or other proprietary rights and laws. We and/or our licensors own copyrights in the selection, coordination, arrangement and enhancement of such Content as well as in the original Content. Although you may download or print such Content for the uses specified in these Terms or for personal non-commercial use, you do not own any rights in such Content. Unless otherwise specified in these Terms, you may not modify, alter, publish, transmit, redistribute, participate in the transfer or sale of, create derivative works from, or in any way exploit any Content in whole or in part without our prior written permission.`,
      },
      {
        title: "4. Limited License to Content",
        content: `FIDERE Trust grants you a limited, revocable and non-exclusive license to access the website and view, copy and print portions of the Content made available to you. This license is subject to these Terms and is specifically subject to the following conditions: (i) you may only view, copy and print such portions of the Content for your own use; (ii) you may not modify or otherwise make derivative works of the website or Content, or copy, distribute or display the website or any Content (other than page caching) except as expressly permitted in these Terms; (iii) you may not remove or modify any copyright, trademark or other proprietary notices placed on the Content; (iv) you may not use any data mining, robots or similar data gathering or extraction methods; and (v) you may not use the website or Content for purposes other than their intended purpose. Except as expressly permitted above, use of any part of the Content without the prior written permission of the Content owner is strictly prohibited and will terminate the license granted in this section, this Agreement and any account you have opened with us. Any such unauthorized use may also violate applicable laws, including but not limited to copyright and trademark laws. Nothing in these Terms and Conditions may be construed as granting any license to any intellectual property rights (whether by estoppel, implication or otherwise) except as expressly provided in these Terms. FIDERE Trust may revoke the license in this section at any time.`,
      },
      {
        title: "5. Providing Reliable and Secure Services",
        content: `We take security seriously. We strive to maintain a reliable and secure environment for your information. However, no system is completely secure or reliable, and the Internet itself is an insecure medium with no guarantee of the reliability of hosting services, Internet intermediaries, your Internet service provider and other service providers. In using this website, you accept these risks and are responsible for choosing to use technology that does not provide perfect security or reliability.`,
      },
      {
        title: "6. Links to Other Websites",
        content: `This website contains links to third-party websites ("Third-Party Websites") and third-party content ("Third-Party Content") as a service to those interested in such information. Third-Party Websites include social networking platforms, subscriber and sponsor websites, payment processors and other payment intermediaries that you may use when using this website. You use links to Third-Party Websites and any Third-Party Content or services provided therein at your own risk. FIDERE Trust does not monitor or control Third-Party Content or Third-Party Websites and makes no representations or warranties about Third-Party Content or Third-Party Websites. FIDERE Trust provides such links solely for convenience, and a link to a Third-Party Website or Third-Party Content does not imply FIDERE Trust's endorsement, adoption or sponsorship of, or affiliation with, such Third-Party Website or Third-Party Content. FIDERE Trust is not responsible for reviewing changes or updates to Third-Party Content, Third-Party Websites or websites linked to this website, nor is it responsible for their quality, content, policies, nature or reliability. When you leave this website, our terms and policies will no longer apply. You should review the applicable terms and policies, including any Third-Party Website's privacy and data collection practices, and should make such inquiries as you deem necessary or appropriate before entering into any transactions with any third party.`,
      },
      {
        title: "7. Disclaimer",
        content: `THIS WEBSITE, THE CONTENT AND SERVICES PROVIDED ON THIS WEBSITE ARE PROVIDED TO YOU ON AN "AS IS" BASIS AND FIDERE TRUST MAKES NO WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. FIDERE TRUST EXPRESSLY DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. FIDERE TRUST MAKES NO REPRESENTATIONS OR WARRANTIES THAT THE CONTENT IS ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE AND EXPRESSLY DISCLAIMS ANY WARRANTY OR REPRESENTATION AS TO THE ACCURACY OR PROPRIETARY CHARACTER OF THIS WEBSITE, THE CONTENT OR ANY PART THEREOF. ALTHOUGH FIDERE TRUST ENDEAVORS TO ENSURE YOUR ACCESS TO AND USE OF THIS WEBSITE IS SECURE, FIDERE TRUST MAKES NO REPRESENTATION OR WARRANTY THAT THIS WEBSITE OR ANY CONTENT IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.`,
      },
      {
        title: "8. Limitation of Liability; Indemnification",
        content: `You waive and will not assert against FIDERE Trust, its affiliates or subsidiaries, its sponsors, contractors, advertisers, vendors or other partners, any of their successors or assigns, or any of their respective officers, directors, agents or employees (collectively, the "Released Parties") any claims or allegations of any nature arising out of or in any way related to your use of the website or Content, including but not limited to any claims or allegations relating to alleged infringement of proprietary rights, alleged inaccuracy of Content, or any allegation that any Released Party has or should have indemnified, defended or held you or any third party harmless for any claims or allegations arising from your use or other exploitation of this website. Your use of this website is at your own risk. Without limiting the foregoing, neither FIDERE Trust nor any other Released Party shall be liable for any direct, special, indirect or consequential damages or any other type of damages arising out of or in any way connected with the use of this website or Content, including but not limited to loss of use, loss of profits or loss of data, whether in contract, tort (including but not limited to negligence) or other legal action. You irrevocably waive all rights to seek injunctive or other equitable relief, or to enjoin or restrain the operation of this website, the exploitation of any advertising or other materials related thereto, or the exploitation of any content or other materials used or displayed on or through this website, and agree that your claims shall be limited to monetary damages within the scope determined by this Agreement.`,
      },
      {
        title: "9. Communications",
        content: `When notices are posted on this website, we will post them in the appropriate areas of this website. You are responsible for regularly checking this website for notices.`,
      },
      {
        title: "10. Other Terms",
        content: `If any provision of these Terms is deemed illegal, invalid or unenforceable for any reason, such provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions. FIDERE Trust may assign any or all of its rights under this Agreement to any party without your consent. You may not assign any of your rights or obligations under this Agreement without the prior written consent of FIDERE Trust, and any attempted assignment shall be void and unenforceable. These Terms constitute the entire agreement between you and FIDERE Trust regarding your use of the website and supersede all prior or contemporaneous electronic, oral or written communications between you and FIDERE Trust regarding your use of the website.`,
      },
      {
        title: "11. Questions and Comments",
        content: `If you have any questions about these Terms or your use of this website, please contact us at info@fideretrust.com.`,
      },
    ],
  },
  "zh-CN": {
    title: "使用条款",
    lastUpdated: "最后更新：2024年11月1日",
    intro: `欢迎浏览FIDERE Trust网站。此等使用条款内所用的「我们」、「吾等」及「我们的」等字眼均指FIDERE Trust Limited及其母公司、子公司、附属公司及关联公司。此等使用条款内所用的「阁下」指任何本网站使用者。

使用本网站前，请小心阅读此等使用条款。倘若阁下并不同意此等使用条款，则切勿使用本网站。

存取、使用或仅浏览网站，即表示您同意受本条款以及借提述而纳入本条款的所有条款、政策及指引的法律约束。如果您不同意本条款的全部内容，则您不得使用网站。

在本条款中，本网站的用户被统称为「用户」。

FIDERE Trust保留权利随时绝对酌情更改或修改本条款中的任何条款及条件，或网站的任何政策或指引。

除另有规定外，任何更改或修改将在网站上公布修订内容后立即生效，而您在该时间后继续使用网站，即表示接受该等更改或修改。您应该不时查看条款以及纳入其中的任何政策和文件，以了解适用于您对网站之使用的条款及条件。条款将始终在顶部显示「最后更新」日期。如果您不同意任何经修订的条款，您必须停止使用本网站。如对条款有任何疑问，请给我们发电子邮件，地址为：info@fideretrust.com.`,
    sections: [
      {
        title: "1. 私隐政策",
        content: `请参阅FIDERE Trust的私隐政策，了解FIDERE Trust如何收集、使用与披露其足以辨识用户身分的个人资料。使用网站，即表示您同意我们根据我们的私隐政策使用、收集与披露足以辨识用户身分的个人资料。`,
      },
      {
        title: "2. 注册资料；账户安全",
        content: `在网站上注册账户，即表示您同意(a)按网站注册表格所示，输入准确、最新及完整资料（「注册资料」）；(b)确保密码安全；(c)维护并及时更新注册资料以及您向FIDERE Trust提供的任何其他资讯，并保持注册资料准确、最新及完整；及(d)就未经授权存取注册资料以及您向FIDERE Trust提供的任何其他资讯，承担所有有关风险。您对您的FIDERE Trust账户中发生的所有活动负责以及FIDERE Trust账户产生的所有费用负责。`,
      },
      {
        title: "3. 知识产权",
        content: `本网站所展示或提供的一切资料、数据、文字、音乐、声音、照片、图像、软件、录像、信息或其他材料(统称「该等内容」)均属于我们所有，或已授权给予我们使用，并受版权、商标、服务商标、专利或其他专有权利及法例所保护。我们及/或我们的特许商在挑选、联系、安排及加强该等内容以及原有内容方面均拥有版权。尽管阁下可下载或印制该等内容，以作本条款所指定用途或个人非商业用途，惟阁下就该等内容并不拥有任何权利。除非本条款另有订明，否则在未经我们书面许可之前，阁下不得修订、更改、发布、传送、重新分发、参与转让或出售、创立衍生作品或以任何方式开发任何该等内容的全部或任何部份。`,
      },
      {
        title: "4. 我们向您授予内容的有限许可",
        content: `FIDERE Trust授予您一项有限、可撤销以及非专属的许可，以存取网站并查看、复制及列印网站提供给您的部分内容。该许可受本条款规限，且尤其受以下条件的限制：(i)您仅能查看、复制及列印该部分内容用于自身用途；(ii)除本条款明确允许外，您不得修改或以其他方式制作网站或内容的衍生作品，或复制、分发或展示网站或任何内容（页面缓存除外）；(iii)您不得删除或修改置于内容中的任何版权、商标或其他所有权声明；(iv)您不得使用任何资料挖掘、机器人或类似的资料收集或提取方法；及(v)您不得将网站或内容用于其预期目的之外的用途。除上述明确允许的情况外，未经内容所有者事先书面许可，严禁使用内容的任何部分，否则将终止本节授予的许可、本协议以及您向我们开立的账户。任何此类未经授权的使用亦可能违反适用法律，包括但不限于版权和商标法律。FIDERE Trust可随时撤销本节中的许可。`,
      },
      {
        title: "5. 提供可靠和安全的服务",
        content: `我们认真对待安全问题。我们努力为您的资料维持可靠和安全的环境。然而，没有任何系统完全安全或可靠，互联网本身就是不安全的媒介，无法保证托管服务、互联网中介、您的互联网服务供应商及其他服务供应商的可靠性。使用本网站时，您接受该等风险，并对选择使用未提供完美安全性或可靠性的技术负责。`,
      },
      {
        title: "6. 其他网站的连结",
        content: `本网站包含第三方网站（「第三方网站」）及第三方内容（「第三方内容」）的连结，作为对有关资讯感兴趣者的一项服务。第三方网站包括社交网络平台、订阅者及赞助商网站、支付处理商及您在使用本网站时可能使用的其他支付中介。您使用第三方网站的连结以及其中提供的任何第三方内容或服务，由您自行承担风险。FIDERE Trust概无监控或控制第三方内容或第三方网站，并无对第三方内容或第三方网站作出任何声明或陈述。FIDERE Trust仅为方便起见提供该等连结，连结至第三方网站或第三方内容并不表示FIDERE Trust认可、采用或赞助该第三方网站或第三方内容，或与其存在关系。FIDERE Trust概不负责审查第三方内容、第三方网站或连结至本网站的网站的变化或更新，亦不对其质素、内容、政策、性质或可靠性负责。您离开本网站时，我们的条款及政策将不再适用。`,
      },
      {
        title: "7. 免责声明",
        content: `本网站、本网站提供的内容及服务按「原样」提供予您，FIDERE Trust不提供任何形式的明示或默示保证。FIDERE Trust明确表示概不作出所有其他明示或默示保证，包括但不限于对适销性、适合于特定目的的适宜性、权属及非侵权的暗示保证。FIDERE Trust概不声明或保证内容准确、完整、可靠、最新或无错误，并明确表示概不对本网站、内容或其任何部分的准确性或专有性作出任何保证或声明。尽管FIDERE Trust努力确保您存取及使用本网站的安全，FIDERE Trust概不声明或保证本网站或任何内容不存在病毒或其他有害部分。`,
      },
      {
        title: "8. 责任限制；弥偿",
        content: `您放弃亦不得对FIDERE Trust、其联属公司或附属公司、其赞助商、承办商、广告商、供应商或其他合作伙伴、彼等任何继承人或受让人、或彼等各自的高级职员、董事、代理或雇员（统称「获豁免方」）提出因您使用本网站或内容而引起或在任何方面与之相关的任何性质的索偿或指控，包括但不限于与指称侵犯所有权、指称内容不准确有关的任何索偿或指控。您使用本网站须自行承担风险。在不限制前述规定的情况下，FIDERE Trust或任何其他获豁免方均不对因使用本网站或内容而引起或以任何方式与之相关的任何直接、特殊、间接或相应损害或任何其他类型的损害负责。您不可撤销地放弃寻求禁制令或其他衡平法救济的所有权利，并同意您的索偿仅限本协议确定范围内的金钱赔偿。`,
      },
      {
        title: "9. 通讯",
        content: `在本网站发布通知时，我们将在本网站的合适区域发布通知。您有责任定期查阅本网站的通知。`,
      },
      {
        title: "10. 其他条款",
        content: `若该等条款的任何规定被视为违法、无效或因任何原因不可执行，则该规定应被视为可与该等条款分割，且不影响任何其余条款的有效性及可执行性。FIDERE Trust可在未经您同意的情况下，将其于本协议下的任何或所有权利转让予任何一方。未经FIDERE Trust事先书面同意，您不得转让您于本协议下的任何权利或义务，任何企图转让的行為將無效及不可執行。该等条款构成您与FIDERE Trust之间有关您使用本网站的全部协议，并取代您与FIDERE Trust之间有关您使用本网站的所有先前或同期电子、口头或书面通讯。`,
      },
      {
        title: "11. 问题及意见",
        content: `若您对该等条款或您使用本网站有任何疑问，请透过 info@fideretrust.com 联络我们。`,
      },
    ],
  },
  "zh-TW": {
    title: "使用條款",
    lastUpdated: "最後更新：2024年11月1日",
    intro: `歡迎瀏覽FIDERE Trust網站。此等使用條款內所用的「我們」、「吾等」及「我們的」等字眼均指FIDERE Trust Limited及其母公司、子公司、附屬公司及關聯公司。此等使用條款內所用的「閣下」指任何本網站使用者。

使用本網站前，請小心閱讀此等使用條款。倘若閣下並不同意此等使用條款，則切勿使用本網站。

存取、使用或僅瀏覽網站，即表示您同意受本條款以及藉提述而納入本條款的所有條款、政策及指引的法律約束。如果您不同意本條款的全部內容，則您不得使用網站。

在本條款中，本網站的用戶被統稱為「用戶」。

FIDERE Trust保留權利隨時絕對酌情更改或修改本條款中的任何條款及條件，或網站的任何政策或指引。

除另有規定外，任何更改或修改將在網站上公佈修訂內容後立即生效，而您在該時間後繼續使用網站，即表示接受該等更改或修改。您應該不時查看條款以及納入其中的任何政策和文件，以了解適用於您對網站之使用的條款及條件。條款將始終在頂部顯示「最後更新」日期。如果您不同意任何經修訂的條款，您必須停止使用本網站。如對條款有任何疑問，請給我們發電子郵件，地址為：info@fideretrust.com.`,
    sections: [
      {
        title: "1. 私隱政策",
        content: `請參閱FIDERE Trust的私隱政策，了解FIDERE Trust如何收集、使用與披露其足以辨識用戶身分的個人資料。使用網站，即表示您同意我們根據我們的私隱政策使用、收集與披露足以辨識用戶身分的個人資料。`,
      },
      {
        title: "2. 註冊資料；賬戶安全",
        content: `在網站上註冊賬戶，即表示您同意(a)按網站註冊表格所示，輸入準確、最新及完整資料（「註冊資料」）；(b)確保密碼安全；(c)維護並及時更新註冊資料以及您向FIDERE Trust提供的任何其他資訊，並保持註冊資料準確、最新及完整；及(d)就未經授權存取註冊資料以及您向FIDERE Trust提供的任何其他資訊，承擔所有有關風險。您對您的FIDERE Trust賬戶中發生的所有活動負責以及FIDERE Trust賬戶產生的所有費用負責。`,
      },
      {
        title: "3. 知識產權",
        content: `本網站所展示或提供的一切資料、數據、文字、音樂、聲音、照片、圖像、軟件、錄像、信息或其他材料(統稱「該等內容」)均屬於我們所有，或已授權給予我們使用，並受版權、商標、服務商標、專利或其他專有權利及法例所保護。我們及/或我們的特許商在挑選、聯繫、安排及加強該等內容以及原有內容方面均擁有版權。儘管閣下可下載或印製該等內容，以作本條款所指定用途或個人非商業用途，惟閣下就該等內容並不擁有任何權利。除非本條款另有訂明，否則在未經我們書面許可之前，閣下不得修訂、更改、發佈、傳送、重新分發、參與轉讓或出售、創立衍生作品或以任何方式開發任何該等內容的全部或任何部份。`,
      },
      {
        title: "4. 我們向您授予內容的有限許可",
        content: `FIDERE Trust授予您一項有限、可撤銷以及非專屬的許可，以存取網站並查看、複製及列印網站提供給您的部分內容。該許可受本條款規限，且尤其受以下條件的限制：(i)您僅能查看、複製及列印該部分內容用於自身用途；(ii)除本條款明確允許外，您不得修改或以其他方式製作網站或內容的衍生作品，或複製、分發或展示網站或任何內容（頁面緩存除外）；(iii)您不得刪除或修改置於內容中的任何版權、商標或其他所有權聲明；(iv)您不得使用任何資料挖掘、機器人或類似的資料收集或提取方法；及(v)您不得將網站或內容用於其預期目的之外的用途。除上述明確允許的情況外，未經內容所有者事先書面許可，嚴禁使用內容的任何部分，否則將終止本節授予的許可、本協議以及您向我們開立的賬戶。任何此類未經授權的使用亦可能違反適用法律，包括但不限於版權和商標法律。FIDERE Trust可隨時撤銷本節中的許可。`,
      },
      {
        title: "5. 提供可靠和安全的服務",
        content: `我們認真對待安全問題。我們努力為您的資料維持可靠和安全的環境。然而，沒有任何系統完全安全或可靠，互聯網本身就是不安全的媒介，無法保證託管服務、互聯網中介、您的互聯網服務供應商及其他服務供應商的可靠性。使用本網站時，您接受該等風險，並對選擇使用未提供完美安全性或可靠性的技術負責。`,
      },
      {
        title: "6. 其他網站的連結",
        content: `本網站包含第三方網站（「第三方網站」）及第三方內容（「第三方內容」）的連結，作為對有關資訊感興趣者的一項服務。第三方網站包括社交網絡平台、訂閱者及贊助商網站、支付處理商及您在使用本網站時可能使用的其他支付中介。您使用第三方網站的連結以及其中提供的任何第三方內容或服務，由您自行承擔風險。FIDERE Trust概無監控或控制第三方內容或第三方網站，並無對第三方內容或第三方網站作出任何聲明或陳述。FIDERE Trust僅為方便起見提供該等連結，連結至第三方網站或第三方內容並不表示FIDERE Trust認可、採用或贊助該第三方網站或第三方內容，或與其存在關係。FIDERE Trust概不負責審查第三方內容、第三方網站或連結至本網站的網站的變化或更新，亦不對其質素、內容、政策、性質或可靠性負責。您離開本網站時，我們的條款及政策將不再適用。`,
      },
      {
        title: "7. 免責聲明",
        content: `本網站、本網站提供的內容及服務按「原樣」提供予您，FIDERE Trust不提供任何形式的明示或默示保證。FIDERE Trust明確表示概不作出所有其他明示或默示保證，包括但不限於對適銷性、適合於特定目的的適宜性、權屬及非侵權的暗示保證。FIDERE Trust概不聲明或保證內容準確、完整、可靠、最新或無錯誤，並明確表示概不對本網站、內容或其任何部分的準確性或專有性作出任何保證或聲明。儘管FIDERE Trust努力確保您存取及使用本網站的安全，FIDERE Trust概不聲明或保證本網站或任何內容不存在病毒或其他有害部分。`,
      },
      {
        title: "8. 負責限制；彌償",
        content: `您放棄亦不得對FIDERE Trust、其聯屬公司或附屬公司、其贊助商、承辦商、廣告商、供應商或其他合作夥伴、彼等任何繼承人或受讓人、或彼等各自的高級職員、董事、代理或僱員（統稱「獲豁免方」）提出因您使用本網站或內容而引起或在任何方面與之相關的任何性質的索償或指控，包括但不限於與指稱侵犯所有權、指稱內容不准確有關的任何索償或指控。您使用本網站須自行承擔風險。在不限制前述規定的情況下，FIDERE Trust或任何其他獲豁免方均不對因使用本網站或內容而引起或以任何方式與之相關的任何直接、特殊、間接或相應損害或任何其他類型的損害負責。您不可撤銷地放棄尋求禁制令或其他衡平法救濟的所有權利，並同意您的索償僅限本協議確定範圍內的金錢賠償。`,
      },
      {
        title: "9. 通訊",
        content: `在本網站發佈通知時，我們將在本網站的合適區域發佈通知。您有責任定期查閱本網站的通知。`,
      },
      {
        title: "10. 其他條款",
        content: `若該等條款的任何規定被視為違法、無效或因任何原因不可執行，則該規定應被視為可與該等條款分割，且不影響任何其餘條款的有效性及可執行性。FIDERE Trust可在未經您同意的情況下，將其於本協議下的任何或所有權利轉讓予任何一方。未經FIDERE Trust事先書面同意，您不得轉讓您於本協議下的任何權利或義務，任何企圖轉讓的行為將無效及不可執行。該等條款構成您與FIDERE Trust之間有關您使用本網站的全部協議，並取代您與FIDERE Trust之間有關您使用本網站的所有先前或同期電子、口頭或書面通訊。`,
      },
      {
        title: "11. 問題及意見",
        content: `若您對該等條款或您使用本網站有任何疑問，請透過 info@fideretrust.com 聯絡我們。`,
      },
    ],
  },
}

export function DisclaimerContent() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h1>
        <p className="text-gray-500 mb-12">{t.lastUpdated}</p>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">{t.intro}</p>
        </div>

        {/* Sections */}
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
