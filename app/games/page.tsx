import MoonWalkersKeyvisual from "@/public/moonwalkers-keyvisual.jpg";
import UltemistKeyvisual from "@/public/ultemist-keyvisual.png";
import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import PageTitleSection from "../components/PageTitleSection";

interface GameCardProps {
  title: string;
  tagline: string;
  imageUrl?: StaticImageData;
  specs: Record<string, string>;
  officialSiteUrl?: string;
}

const GameCard = ({
  title,
  tagline,
  imageUrl,
  specs,
  officialSiteUrl,
}: GameCardProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-2xl font-bold text-black dark:text-white mb-1">
          {title}
        </h3>
        <div className="h-[0.2rem] w-[95%] bg-primary dark:bg-primary-dark" />
      </div>
      <div className="mb-8 flex flex-col md:flex-row gap-4 md:gap-8 md:items-center">
        {/* Game Image */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="max-w-[400px] aspect-[4/3] h-auto flex items-center justify-center">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-gray-400 dark:text-gray-300 text-sm">
                画像準備中
              </div>
            )}
          </div>
        </div>

        {/* Game Info */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl text-black dark:text-white mb-2">
            {tagline}
          </h3>

          {/* Specs Table */}
          <div className="mb-6">
            <table className="w-full text-xs">
              <tbody>
                {Object.entries(specs).map(([key, value]) => (
                  <tr
                    key={key}
                    className="border-b border-gray-200 dark:border-gray-600"
                  >
                    <td className="py-2 text-gray-600 dark:text-gray-300 w-24">
                      {key}
                    </td>
                    <td className="py-2 text-black dark:text-gray-100">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {officialSiteUrl && (
            <a
              href={officialSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex font-bold items-center bg-primary-dark text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-colors text-sm md:text-base"
            >
              公式サイトはこちら
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const GamesPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Main Content */}
      <div className="pt-24 pb-16">
        <PageTitleSection title="ゲーム事業" />
        <div>
          <h1 className="px-4 md:px-8 text-lg md:text-xl font-bold text-center text-black dark:text-white">
            Instansysでは挑戦事業として、2026年リリース開始を目指し、ゲーム開発を精力的に進めています。
          </h1>
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 mt-16">
          {/* Game Cards */}
          <div className="space-y-0">
            <GameCard
              title="聖痕のアルテミスト"
              tagline="繰り返して強くなる！運命を変える新感覚タワーディフェンスRPG"
              imageUrl={UltemistKeyvisual}
              specs={{
                プラットフォーム: "iOS / Android",
                ジャンル: "ロールプレイング／タワーディフェンス／ハクスラ",
                "企画・開発": "合同会社Instansys",
                発売: "2026年春予定",
                価格: "基本プレイ無料",
              }}
            />

            <GameCard
              title="月と踊ろう"
              tagline="さみしさに寄り添う群像劇ビジュアルノベル"
              imageUrl={MoonWalkersKeyvisual}
              officialSiteUrl="https://dance-with-the-moon.com"
              specs={{
                プラットフォーム: "iOS / Android / Steam(Windows)",
                ジャンル: "ビジュアルノベル",
                "企画・シナリオ・ディレクション": "遊木さく",
                開発: "ハミングウェイ",
                販売: "合同会社Instansys",
                発売: "2027年予定",
                価格: "未定",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "GAMES | Instansys",
  description: "Instansysが開発するゲーム作品一覧",
};

export default GamesPage;
