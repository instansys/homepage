import LunaEditorImage from "@/public/luna-editor.png";
import Image from "next/image";
import { Section } from "./components/Section";
import { SectionTitle } from "./components/SectionTitle";
import { GradientLinkButton } from "./components/atoms/GradientLinkButton";
import { ServicesSection } from "./components/services-section";

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-gray-900">
      {/* ヒーローセクション */}

      <section className="bg-color bg-[#d8ecf3]">
        <div className="container h-[360px] bg-[url('/top-bg.jpg')] bg-cover bg-center bg-no-repeat md:h-[420px]">
          <div className="pt-36">
            <h1 className="mb-4 text-2xl font-bold">
              すべての人が瞬時に
              <br />
              アイデアを具現化できる未来へ。
            </h1>

            <div className="flex items-center gap-1 md:gap-2">
              {/* SYSTEM */}
              <div className="flex flex-col items-start">
                <span className="text-xs text-slate-500 md:text-sm">
                  システムを
                </span>
                <span className="font-oswald text-xl font-semibold tracking-wide text-slate-800 md:text-3xl">
                  SYSTEM
                </span>
              </div>

              {/* × */}
              <span className="text-xl font-light text-slate-400 md:text-5xl">
                ×
              </span>

              {/* INSTANTLY */}
              <div className="flex flex-col items-start">
                <span className="text-xs text-slate-500 md:text-sm">
                  迅速に
                </span>
                <span className="font-oswald text-xl font-semibold tracking-wide text-slate-800 md:text-3xl">
                  INSTANTLY
                </span>
              </div>

              {/* × */}
              <span className="text-xl font-light text-slate-400 md:text-5xl">
                ×
              </span>

              {/* INSTANTIATE */}
              <div className="flex flex-col items-start">
                <span className="text-xs text-slate-500 md:text-sm">
                  立ち上げ
                </span>
                <span className="font-oswald text-xl font-semibold tracking-wide text-slate-800 md:text-3xl">
                  INSTANTIATE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* Left: Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/top-ai-bg.jpg"
                alt="AI"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>

            {/* Right: Content (placeholder) */}
            <div className="w-full">
              <h2 className="mb-4 text-2xl font-bold">
                余計な時間・コストをかけずに
                <br />
                システム開発いたします。
              </h2>

              <p className="pb-4">
                アイデアと目的があれば、専門知識がなくてもシステムが作れる。
                <br />
                生成AI技術の進化により、そんな未来が目前に迫っています。
                <br />
                私たちは、その未来を創るために、開発し続けます。
              </p>

              <p>
                AI技術を使いこなす少数精鋭のメンバーによって、
                <br />
                余計な時間・コストをかけずに最適なプランでシステムを開発いたします。
                <br />
                ぜひ、お気軽にお問い合わせください。
              </p>

              <div className="mt-6">
                <GradientLinkButton href="#contact">CONTACT</GradientLinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <Section id="about">
        <SectionTitle>会社概要</SectionTitle>
        <div className="mx-auto max-w-3xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-bold dark:text-white">会社名</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                合同会社Instansys
              </p>
              <h3 className="mb-2 font-bold dark:text-white">設立日</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                2024年11月13日
              </p>
              <h3 className="mb-2 font-bold dark:text-white">代表者</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                松尾 弥玖人
              </p>
              <h3 className="mb-2 font-bold dark:text-white">役員</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                松尾 弥玖人
                <br />
                フォーデザイン合同会社
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-bold dark:text-white">所在地</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                〒153-0065 東京都目黒区中町1-8-22
              </p>
              <h3 className="mb-2 font-bold dark:text-white">資本金</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                1,000,000円
              </p>
              <h3 className="mb-2 font-bold dark:text-white">事業内容</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
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
      <Section className="bg-gradient-to-r from-[#daecf4] to-[#dcedea]">
        <SectionTitle>代表者略歴</SectionTitle>
        <div className="mx-auto max-w-5xl px-4">
          <div className="space-y-8">
            <div className="flex flex-col items-start gap-8 md:flex-row">
              <div className="flex flex-col gap-4 md:w-2/3">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  代表社員
                </div>
                <h3 className="mb-4 text-xl font-bold dark:text-white">
                  松尾 弥玖人
                </h3>
                <h4 className="text-base md:text-lg dark:text-gray-200">
                  AIの進化が波及していない現場は未だ多くあります
                  <br />
                  そこに対する応用の最適解を見つけ、提供していきます
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 md:text-base dark:text-gray-400">
                  2019年、大学在籍中に、株式会社Cysharpのインターンを通してOSS開発とゲームエンジン向けツールの開発を経験。同時にフリーランスとして活動を開始し、中小企業のDX支援や社内システムの開発を一手に担う。2022年にトヨクモ株式会社でフルスタックエンジニアとして、大規模な認証基盤の開発に従事。2023年10月からMiletos株式会社のシニアエンジニアとして、大手企業が使う経費精算システムの開発にインフラ・バックエンド・フロントエンド等、様々な方面から携わる。
                  その経験を活かし、2024年11月に合同会社Instansysを設立。AIの性能が加速度的に向上する中で、AIがまだ活用できていないブルーオーシャンの開拓に挑戦していく。
                  教師として小学生にプログラミングを教えたり、声優学校に通っていたりという一面を持っている
                </p>
              </div>
              <div className="relative aspect-[4/5] w-full md:w-1/3">
                <Image
                  src="/mikuto-matsuo.jpg"
                  alt="松尾 弥玖人"
                  className="rounded-lg object-cover object-top antialiased"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* サービス */}
      <Section id="services">
        <SectionTitle>サービス</SectionTitle>
        <ServicesSection />
      </Section>

      {/* 自社サービス */}
      <Section
        id="products"
        className="bg-[url('/top-services/luna-editor-background.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <SectionTitle>自社サービス</SectionTitle>
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-8 flex overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
            <div className="p-8">
              <Image
                src={LunaEditorImage}
                alt="Luna Editor"
                height={200}
                className="h-auto w-full rounded-lg shadow-md"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-800 md:text-2xl dark:text-white">
                Luna Editor
              </h3>
              <p className="mb-4 text-sm leading-loose text-gray-600 md:text-base dark:text-gray-400">
                高機能なゲームのシナリオをこれ１つで。
                <br />
                あなただけのオーダーメイドエディタ
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                現在は法人のお客様向けに開発しています。詳しくはお問い合わせください。
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ゲーム事業 */}
      <Section id="games">
        <SectionTitle>ゲーム事業</SectionTitle>
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-8 text-center">
            <p className="mb-6 text-sm leading-relaxed text-gray-600 md:text-base dark:text-gray-400">
              Instansysでは挑戦事業として、2026年リリース開始を目指し、ゲーム開発を精力的に進めています。
            </p>
          </div>

          <div className="text-center">
            <a
              href="/games"
              className="inline-flex items-center rounded-full bg-primary-dark px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark md:text-base"
            >
              詳しくはこちら
              <svg
                className="ml-2 h-4 w-4"
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
          </div>
        </div>
      </Section>

      {/* お問い合わせ */}
      <Section id="contact">
        <SectionTitle>お問い合わせ</SectionTitle>
        <div className="mx-auto max-w-xl px-4">
          <p className="mb-8 text-center text-sm text-gray-600 md:text-base dark:text-gray-400">
            サービスに関するお問い合わせは、以下のメールアドレスまでご連絡ください。
          </p>
          <div className="text-center">
            <a
              href="mailto:mikuto.matsuo@instansys.co.jp"
              className="break-all text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              mikuto.matsuo@instansys.co.jp
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
