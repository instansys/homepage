import MoonWalkersKeyvisual from "@/public/moonwalkers-keyvisual.png";
import UltemistKeyvisual from "@/public/ultemist-keyvisual.png";
import type { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
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
        <h3 className="text-2xl font-bold text-black mb-1">{title}</h3>
        <div className="h-[0.2rem] w-[95%] bg-primary" />
      </div>
      <div className="bg-white mb-8 flex gap-8 items-center">
        {/* Game Image */}
        <div className="w-1/2 flex-shrink-0">
          <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-gray-400 text-sm">画像準備中</div>
            )}
          </div>
        </div>

        {/* Game Info */}
        <div className="w-1/2">
          <h3 className="text-2xl text-black mb-2">{tagline}</h3>

          {/* Specs Table */}
          <div className="mb-6">
            <table className="w-full text-xs">
              <tbody>
                {Object.entries(specs).map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-200">
                    <td className="py-2 text-gray-600 w-24">{key}</td>
                    <td className="py-2 text-black">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400">© Instansys, Inc.</p>
        </div>
      </div>
    </div>
  );
};

const GamesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="pt-24 pb-16">
        <PageTitleSection title="ゲーム事業" />
        <div>
          <h1 className="px-8 text-xl font-bold text-center">
            Instansysでは挑戦事業として、2026年リリース開始を目指し、ゲーム開発を精力的に進めています。
          </h1>
        </div>
        <div className="max-w-4xl mx-auto px-4 mt-16">
          {/* Game Cards */}
          <div className="space-y-0">
            <GameCard
              title="聖痕のアルテミスト"
              tagline="繰り返して強くなる！運命を変える新感覚タワーディフェンスRPG"
              imageUrl={UltemistKeyvisual}
              specs={{
                プラットフォーム: "iOS / Android",
                ジャンル: "ローププレイング／タワーディフェンス／ハクスラ",
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
                原作: "遊木さく",
                開発: "合同会社Instansys／ハミングウェイ",
                発売: "2026年四半期予定",
                価格: "スマートフォン版：基本プレイ無料、PC版：未定",
              }}
            />
          </div>

          {/* Pagination placeholder */}
          <div className="flex justify-center mt-12 space-x-2">
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
              1
            </div>
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
