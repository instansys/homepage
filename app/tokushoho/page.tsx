import type { Metadata } from "next";

const rows = [
  { label: "販売業者", value: "合同会社Instansys" },
  { label: "代表責任者", value: "松尾 弥玖人" },
  {
    label: "所在地",
    value: "〒153-0065 東京都目黒区中町1-8-22",
  },
  {
    label: "電話番号",
    value: "請求があったら遅滞なく開示いたします",
  },
  {
    label: "メールアドレス",
    value: "mikuto.matsuo@instansys.co.jp",
    href: "mailto:mikuto.matsuo@instansys.co.jp",
  },
  {
    label: "URL",
    value: "https://instansys.co.jp",
    href: "https://instansys.co.jp",
  },
  {
    label: "商品の名称",
    value:
      "表情差分生成サービス、Discord向け議事録作成bot等のデジタルサービス",
  },
  {
    label: "販売価格",
    value: "各サービスの申込みページに記載された価格に準じます",
  },
  {
    label: "商品代金以外の必要料金",
    value:
      "インターネット接続料金、通信料金等はお客様のご負担となります",
  },
  {
    label: "支払方法",
    value: "クレジットカード",
  },
  {
    label: "支払時期",
    value:
      "サブスクリプション契約時および各更新日に決済されます",
  },
  {
    label: "サービスの提供時期",
    value: "代金決済手続完了後、速やかにご利用いただけます",
  },
  {
    label: "返品・キャンセルについて",
    value:
      "デジタルサービスの性質上、サービス提供開始後の返金は原則として行いません。サブスクリプションの解約は次回更新日の前日までにお手続きください。解約後も当該請求期間の終了まではサービスをご利用いただけます。",
  },
  {
    label: "解約方法",
    value:
      "各サービスのマイページまたはお問い合わせ窓口にて解約手続きが可能です",
  },
  {
    label: "動作環境",
    value:
      "最新版のGoogle Chrome、Safari、Firefox、Microsoft Edgeを推奨します。詳細は各サービスページをご確認ください。",
  },
];

const TokushohoPage = () => (
  <div className="mx-auto max-w-screen-md px-8 pt-32 pb-20">
    <h1 className="font-bold text-2xl">特定商取引法に基づく表記</h1>
    <div className="mt-8">
      <table className="w-full border-collapse">
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <th className="py-4 pr-4 text-left align-top font-bold text-sm md:text-base w-1/3 dark:text-white">
                {row.label}
              </th>
              <td className="py-4 text-sm md:text-base text-gray-600 dark:text-gray-400">
                {"href" in row && row.href ? (
                  <a
                    href={row.href}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline break-all"
                    {...(row.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="mt-20">【2025年3月1日制定】</div>
  </div>
);

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description:
    "合同会社Instansysの特定商取引法に基づく表記です。",
};

export default TokushohoPage;
