import Link from "next/link";
import { Fragment } from "react";
import { OrderedList } from "../components/terms-and-policies/terms/OrderedList";
import { SecondOrderedList } from "../components/terms-and-policies/terms/SecondOrderedList";
import { TermSection } from "../components/terms-and-policies/terms/TermSection";
import { ThirdOrderedList } from "../components/terms-and-policies/terms/ThirdOrderedList";
import type { Metadata } from "next";

const TermsPage = () => (
  <div className="mx-auto max-w-screen-md px-8 pt-32 pb-20">
    <h1 className="font-bold text-2xl">利用規約</h1>
    <div className="mt-4">
      本利用規約（以下「本規約」と言います。）には、合同会社Instansys（以下「当社」と言います）が提供する「進撃のアルテミスト」という名前のサービス(以下「本サービス」と言います)の提供条件及び当社と登録ユーザーの皆様との間の権利義務関係が定められています。本サービスの利用に際しては、本規約の全文をお読みいただいたうえで、本規約に同意いただく必要があります。
    </div>
    <div className="mt-16 space-y-16">
      <TermSection title="第1条（適用）">
        <OrderedList
          listItems={[
            "本規約は、本サービスの提供条件及びジョンの利用に関する当社と登録ユーザーとの間の権利義務関係を定めることを目的とし、登録ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。",
            "当社が本ウェブサイト上で掲載する本サービス利用に関するルールは、本規約の一部を構成するものとします。",
            "本規約の内容と、前項のルールその他の本規約外における本サービスの説明等とが異なる場合は、本規約の規定が優先して適用されるものとします。",
          ]}
        />
      </TermSection>
      <TermSection title="第2条（定義）">
        本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。
        <SecondOrderedList
          listItems={[
            "「サービス利用契約」とは、本規約を契約条件として当社と登録ユーザーの間で締結される、本サービスの利用契約を意味します。",
            "「知的財産権」とは、著作権、特許権、実用新案権、意匠権、商標権その他の知的財産権（それらの権利を取得し、またはそれらの権利につき登録等を出願する権利を含みます。）を意味します。",
            "「当社」とは、本サービスの当社を意味します。",
            "「本ウェブサイト」とは、当社が提供するウェブサイト（理由の如何を問わず、当社のウェブサイトの内容が変更された場合は、当該変更後のウェブサイトを含みます。）を意味します。",
            "「登録ユーザー」とは、第3条（登録）に基づいて本サービスの利用者としての登録がなされた個人または法人を意味します。",
          ]}
        />
      </TermSection>
      <TermSection title="第3条（登録）">
        <OrderedList
          listItems={[
            "本サービスの利用を希望する者（以下「登録希望者」といいます。）は、本規約を遵守することに同意し、かつ当社の定める一定の情報（以下「登録事項」といいます。）を当社の定める方法で当社に提供することにより、当社に対し、本サービスの利用の登録を申請することができます。",
            "登録申請者の登録ユーザーとしての登録は、登録申請者の登録ユーザーとしての登録は、本サービスへの初回のログインをもって完了したものとします。",
            "前項に定める登録の完了時に、サービス利用契約が登録ユーザーと当社の間に成立し、登録ユーザーは本サービスを本規約に従い利用することができるようになります。",
            <Fragment key="item">
              当社は、登録申請者が、以下の各号のいずれかの事由に該当する場合は、登録及び再登録を拒否することがあり、またその理由について一切開示義務を負いません。
              <SecondOrderedList
                listItems={[
                  "当社に提供した登録事項の全部または一部につき虚偽、誤記または記載漏れがあった場合",
                  "反社会的勢力等（暴力団、暴力団員、右翼団体、反社会的勢力、その他これに準ずる者を意味します。以下同じ。）である、または資金提供その他を通じて反社会的勢力等の維持、運営もしくは経営に協力もしくは関与する等反社会的勢力等との何らかの交流もしくは関与を行っていると当社が判断した場合",
                  "過去当社との契約に違反した者またはその関係者であると当社が判断した場合",
                  "第9条に定める措置を受けたことがある場合",
                  "その他、登録を適当でないと当社が判断した場合",
                ]}
              />
            </Fragment>,
          ]}
        />
      </TermSection>
      <TermSection title="第4条（パスワード及びメールアドレス、SNSアカウントの管理）">
        <OrderedList
          listItems={[
            "登録ユーザーは、自己の責任において、本サービスに関するパスワード及びメールアドレス、SNSアカウントを適切に管理及び保管するものとし、これを第三者に利用させ、または貸与、譲渡、名義変更、売買等をしてはならないものとします。",
            "パスワード及びメールアドレス、SNSアカウントの管理不十分、使用上の過誤、第三者の使用等によって生じた損害に関する責任は登録ユーザーが負うものとします。",
          ]}
        />
      </TermSection>
      <TermSection title="第5条（料金及び支払方法）">
        <OrderedList
          listItems={[
            "登録ユーザーは別途当社が定め、本ウェブサイトに表示する利用料金を、当社が指定する支払方法により当社に支払うことによって、本サービスの一部の追加機能を利用できるものとします。",
            "定額の有料機能をご利用頂く場合において、登録ユーザーが利用料金の支払を遅滞した場合に当社は登録ユーザーのサービスの機能の一部を停止する場合があります。",
          ]}
        />
      </TermSection>
      <TermSection title="第6条（禁止事項）">
        登録ユーザーは、本サービスの利用にあたり、以下の各号のいずれかに該当する行為または該当すると当社が判断する行為をしてはなりません。
        <SecondOrderedList
          listItems={[
            "法令に違反する行為または犯罪行為に関連する行為",
            "当社、本サービスの他の利用者またはその他の第三者に対する詐欺または脅迫行為",
            "公序良俗に反する行為",
            "当社、本サービスの他の利用者またはその他の第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利または利益を侵害する行為",
            <Fragment key="item">
              本サービスを通じ、以下に該当し、または該当すると当社が判断する情報を当社または本サービスの他の利用者に送信すること
              <ThirdOrderedList
                listItems={[
                  "過度に暴力的または残虐な表現を含む情報",
                  "コンピューターウィルスその他の有害なコンピュータープログラムを含む情報",
                  "当社、本サービスの他の利用者またはその他の第三者の名誉または信用を毀損する表現を含む情報",
                  "過度にわいせつな表現を含む情報",
                  "差別を助長する表現を含む情報",
                  "自殺、自傷行為を助長する表現を含む情報",
                  "薬物の不適切な利用を助長する表現を含む情報",
                  "反社会的な表現を含む情報",
                  "チェーンメール等の第三者への情報の拡散を求める情報",
                  "他人に不快感を与える表現を含む情報",
                ]}
              />
            </Fragment>,
            "本サービスのネットワークまたはシステム等に過度な負荷をかける行為",
            "当社が提供するソフトウェアその他のシステムに対するリバースエンジニアリングその他の解析行為",
            "本サービスの運営を妨害するおそれのある行為",
            "当社のネットワークまたはシステム等への不正アクセス",
            "第三者に成りすます行為",
            "本サービスの他の利用者のメールアドレスまたはパスワードを利用する行為",
            "当社が事前に許諾しない本サービス上での宣伝、広告、勧誘、または営業行為",
            "本サービスの他の利用者の情報の収集",
            "当社、本サービスの他の利用者またはその他の第三者に不利益、損害、不快感を与える行為",
            "本ウェブサイト上で掲載する本サービス利用に関するルールに抵触する行為",
            "反社会的勢力等への利益供与",
            "前各号の行為を直接または間接に惹起し、または容易にする行為",
            "前各号の行為を試みること",
            "その他、当社が不適切と判断する行為",
          ]}
        />
      </TermSection>
      <TermSection title="第7条（本サービスの停止等）">
        当社は、以下のいずれかに該当する場合には、登録ユーザーに事前に通知することなく、本サービスの全部または一部の提供を停止または中断することができるものとします。
        <SecondOrderedList
          listItems={[
            "本サービスに係るコンピューター・システムの点検または保守作業を緊急に行う場合",
            "コンピューター、通信回線等の障害、誤操作、過度なアクセスの集中、不正アクセス、ハッキング等により本サービスの運営ができなくなった場合",
            "地震、落雷、火災、風水害、停電、天災地変などの不可抗力により本サービスの運営ができなくなった場合",
            "その他、当社が停止または中断を必要と判断した場合",
          ]}
        />
      </TermSection>
      <TermSection title="第8条（権利帰属）">
        <OrderedList
          listItems={[
            "本ウェブサイト及び本サービスに関する知的財産権は全て当社に帰属しており、本規約に基づく本サービスの利用許諾は、本ウェブサイトまたは本サービスに関する当社の知的財産権の使用許諾を意味するものではありません。",
            "本サービスを利用して保存されたデータの著作権及びその他の権利は、該当のデータを作成したユーザーに帰属するものとします。",
          ]}
        />
      </TermSection>
      <TermSection title="第9条（登録抹消等）">
        <OrderedList
          listItems={[
            <Fragment key="item">
              当社は、登録ユーザーが、以下の各号のいずれかの事由に該当する場合は、事前に通知または催告することなく、サービスの利用を停止または中断することができます。
              <SecondOrderedList
                listItems={[
                  "本規約のいずれかの条項に違反した場合",
                  "登録事項に虚偽の事実があることが判明した場合",
                  "当社からの問い合わせその他の回答を求める連絡に対して30日間以上応答がない場合",
                  "第3条第4項各号に該当する場合",
                  "その他、当社が本サービスの利用または登録ユーザーとしての登録の継続を適当でないと判断した場合",
                ]}
              />
            </Fragment>,
            "前項各号のいずれかの事由に該当した場合、当社が登録ユーザーに提供する義務を負っていた利益を即時失うものとします。",
          ]}
        />
      </TermSection>
      <TermSection title="第10条（退会）">
        <OrderedList
          listItems={[
            "登録ユーザーは、当社所定の手続の完了により、本サービスから退会し、自己の登録ユーザーとしての登録を抹消することができます。",
            "退会にあたり、登録ユーザーは当社が提供する義務を負っていた利益を即時失うものとします。",
            "退会後の利用者情報の取扱いについては、第14条の規定に従うものとします。",
          ]}
        />
      </TermSection>
      <TermSection title="第11条（本サービスの内容の変更、終了）">
        <OrderedList
          listItems={[
            "当社は、当社の都合により、本サービスの内容を変更し、または提供を終了することができます。",
            "当社が本サービスの提供を終了する場合、当社は登録ユーザーに事前に通知するものとします。",
          ]}
        />
      </TermSection>
      <TermSection title="第12条（保証の否認及び免責）">
        <OrderedList
          listItems={[
            "当社は、本サービスが登録ユーザーの特定の目的に適合すること、期待する機能・商品的価値・正確性・有用性を有すること、登録ユーザーによる本サービスの利用が登録ユーザーに適用のある法令または業界団体の内部規則等に適合すること、継続的に利用できること、及び不具合が生じないことについて、明示又は黙示を問わず何ら保証するものではありません。",
            "当社は、本サービスに関して登録ユーザーが被った損害につき、過去12ヶ月間に登録ユーザーが当社に支払った対価の金額を超えて賠償する責任を負わないものとし、また、付随的損害、間接損害、特別損害、将来の損害及び逸失利益にかかる損害については、賠償する責任を負わないものとします。",
            "本サービスまたは本ウェブサイトに関連して登録ユーザーと他の登録ユーザーまたは第三者との間において生じた取引、連絡、紛争等については、登録ユーザーが自己の責任によって解決するものとします。",
          ]}
        />
      </TermSection>
      <TermSection title="第13条（秘密保持）">
        登録ユーザーは、本サービスに関連して当社が登録ユーザーに対して秘密に取扱うことを求めて開示した非公知の情報について、当社の事前の書面による承諾がある場合を除き、秘密に取扱うものとします。
      </TermSection>
      <TermSection title="第14条（利用者情報の取扱い）">
        <OrderedList
          listItems={[
            <Fragment key="item">
              当社による登録ユーザーの利用者情報の取扱いについては、別途当社
              <Link
                href="/privacy-policy"
                className="text-support-indigo-6 hover:text-support-indigo-5 hover:underline"
              >
                プライバシーポリシー
              </Link>
              の定めによるものとし、登録ユーザーはこのプライバシーポリシーに従って当社が登録ユーザーの利用者情報を取扱うことについて同意するものとします。
            </Fragment>,
            "当社は、登録ユーザーが当社に提供した情報、データ等を、個人を特定できない形での統計的な情報として、当社の裁量で、利用及び公開することができるものとし、登録ユーザーはこれに異議を唱えないものとします。",
          ]}
        />
      </TermSection>
      <TermSection title="第15条（本規約等の変更）">
        当社は、当社が必要と認めた場合は、本規約を変更できるものとします。本規約を変更する場合、変更後の本規約の施行時期及び内容を本ウェブサイト上での掲示その他の適切な方法により周知し、または登録ユーザーに通知します。但し、法令上登録ユーザーの同意が必要となるような内容の変更の場合は、当社所定の方法で登録ユーザーの同意を得るものとします。
      </TermSection>
      <TermSection title="第16条（連絡／通知）">
        <OrderedList
          listItems={[
            "本サービスに関する問い合わせその他登録ユーザーから当社に対する連絡または通知、及び本規約の変更に関する通知その他当社から登録ユーザーに対する連絡または通知は、当社の定める方法で行うものとします。",
            "当社が登録事項に含まれるメールアドレスその他の連絡先に連絡または通知を行った場合、登録ユーザーは当該連絡または通知を受領したものとみなします。",
          ]}
        />
      </TermSection>
      <TermSection title="第17条（サービス利用契約上の地位の譲渡等）">
        <OrderedList
          listItems={[
            "登録ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。",
            "当社は本サービスにかかる事業を他社に譲渡した場合には、当該事業譲渡に伴い利用契約上の地位、本規約に基づく権利及び義務並びに登録ユーザーの登録事項その他の顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、登録ユーザーは、かかる譲渡につき本項において予め同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。",
          ]}
        />
      </TermSection>
      <TermSection title="第18条（分離可能性）">
        本規約のいずれかの条項またはその一部が、消費者契約法その他の法令等により無効または執行不能と判断された場合であっても、本規約の残りの規定及び一部が無効または執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。
      </TermSection>
      <TermSection title="第19条（準拠法及び管轄裁判所）">
        <OrderedList
          listItems={[
            "本規約及びサービス利用契約の準拠法は日本法とします。",
            "本規約またはサービス利用契約に起因し、または関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
          ]}
        />
      </TermSection>
    </div>
    <div className="mt-20">【2025年3月1日制定】</div>
  </div>
);

export const metadata: Metadata = {
  title: "利用規約",
  description:
    "Instansysのサービスを利用していただくにあたり、利用規約のご確認をお願いします。",
};

export default TermsPage;
