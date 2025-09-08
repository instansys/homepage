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
}

const GameCard = ({ title, tagline, imageUrl, specs }: GameCardProps) => {
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
              tagline="人間の少年と吸血鬼の少女の物語を軸にした、夜に悩む人々の群像劇"
              imageUrl={MoonWalkersKeyvisual}
              specs={{
                プラットフォーム: "iOS / Android / PC・macOS(Steam)",
                ジャンル: "ビジュアルノベル",
                "原作・ディレクション": "遊木さく",
                開発: "合同会社Instansys／ハミングウェイ",
                発売: "2026年四半期予定",
                価格: "スマートフォン版：基本プレイ無料、PC版：未定",
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
