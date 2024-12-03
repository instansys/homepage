import Image from "next/image";
import { CiMicrophoneOn } from "react-icons/ci";
import { GoGear } from "react-icons/go";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineAutoMode } from "react-icons/md";
import { Header } from "./components/Header";
import { SectionTitle } from "./components/SectionTitle";
import { ServiceCard } from "./components/ServiceCard";
import { Section } from "./components/Section";

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-gray-900">
      <Header />

      {/* ヒーローセクション */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-12">
            <Image
              src="/logo-light.svg"
              alt="Instansys"
              width={400}
              height={100}
              className="dark:hidden"
            />
            <Image
              src="/logo-dark.svg"
              alt="Instansys"
              width={400}
              height={100}
              className="hidden dark:block"
            />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-bold">
            すべての人がシステムで世の中を改善出来る未来へ
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 whitespace-pre leading-8">
            {`アイデアと目的があれば、専門知識がなくてもシステム開発は可能です。
            生成AI技術の進化により、あなたの思い描く改善案を実現できる時代が始まっています。
            私たちは、その可能性を誰もが活用できる環境を創ります。`}
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors dark:bg-emerald-600 dark:hover:bg-emerald-700"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <Section id="about">
        <SectionTitle>会社概要</SectionTitle>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-2 dark:text-white">会社名</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                合同会社Instansys
              </p>
              <h3 className="font-bold mb-2 dark:text-white">設立日</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                2024年11月13日
              </p>
              <h3 className="font-bold mb-2 dark:text-white">代表者</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                松尾 弥玖人
              </p>
              <h3 className="font-bold mb-2 dark:text-white">役員</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                松尾 弥玖人
                <br />
                フォーデザイン合同会社
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 dark:text-white">所在地</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                〒153-0065 東京都目黒区中町1-8-22
              </p>
              <h3 className="font-bold mb-2 dark:text-white">資本金</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                1,000,000円
              </p>
              <h3 className="font-bold mb-2 dark:text-white">事業内容</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li>システム開発</li>
                <li>ITコンサルティング</li>
                <li>DX、自動化支援</li>
                <li>声優事務所</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 代表者略歴 */}
      <Section>
        <SectionTitle>代表者略歴</SectionTitle>
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-4 dark:text-white">
                  松尾 弥玖人
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  2019年、大学在籍中に、株式会社Cysharpのインターンを通してOSS開発とゲームエンジン向けツールの開発を経験。同時にフリーランスとして独立し、中小企業のDX支援や社内システムの開発を一手に担う。2022年にトヨクモ株式会社でフルスタックエンジニアとして、大規模な認証基盤の開発に従事。2023年10月からMiletos株式会社のシニアエンジニアとして、大手企業が使う経費精算システムの開発にインフラ・バックエンド・フロントエンド等、様々な方面から携わる。
                  その経験を活かし、2024年11月に合同会社Instansysを設立。AIの性能が加速度的に向上する中で、その性能に追いつけるAIアプリケーションを開発することを目指している。
                  教師として小学生にプログラミングを教えているという一面も持っている。
                </p>
              </div>
              <div className="relative w-auto flex-1 aspect-[4/5]">
                <Image
                  src="/mikuto-matsuo.jpg"
                  alt="松尾 弥玖人"
                  className="rounded-lg object-cover object-top antialiased"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* サービス */}
      <Section id="services">
        <SectionTitle>サービス</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={GoGear}
            title="システム開発"
            description="お客様のニーズに合わせ、最適なお値段で最適なシステムを要件定義からメンテナンスまで開発担当いたします。"
          />
          <ServiceCard
            icon={FaRegLightbulb}
            title="ITコンサルティング"
            description="技術選定から運用まで、幅広くサポートいたします。"
          />
          <ServiceCard
            icon={MdOutlineAutoMode}
            title="DX支援"
            description="デジタル化による業務効率化をサポートします。"
          />
          <ServiceCard
            icon={CiMicrophoneOn}
            title="CV・ナレーション"
            description="代表者 松尾 弥玖人がナレーションやCVを担当いたします。"
          />
        </div>
      </Section>

      {/* お問い合わせ */}
      <Section id="contact">
        <SectionTitle>お問い合わせ</SectionTitle>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            サービスに関するお問い合わせは、以下のメールアドレスまでご連絡ください。
          </p>
          <div className="text-center">
            <a
              href="mailto:mikuto.matsuo@instansys.co.jp"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              mikuto.matsuo@instansys.co.jp
            </a>
          </div>
        </div>
      </Section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm">
              &copy; 2024~ Instansys, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
