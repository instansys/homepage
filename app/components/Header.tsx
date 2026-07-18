"use client";
import DarkLogo from "@/public/logo-dark.svg";
import LightLogo from "@/public/logo-light.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);

    // 現在のパスがホームページでない場合は、ホームページに遷移してからスクロール
    if (window.location.pathname !== "/") {
      window.location.href = `/${sectionId}`;
      return;
    }

    // ホームページにいる場合は通常のスクロール
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav fixed left-0 right-0 top-0 z-50 rounded-full bg-white/60 py-2 backdrop-blur-md dark:bg-gray-900/80">
      <div className="mx-auto flex items-center justify-between px-3 py-3">
        <Link href="/" className="block w-[100px] md:w-[130px]">
          <div className="dark:hidden">
            <Image
              src={LightLogo}
              alt="Instansys"
              height={50}
              className="h-auto w-full"
            />
          </div>
          <div className="hidden dark:block">
            <Image
              src={DarkLogo}
              alt="Instansys"
              height={50}
              className="h-auto w-full"
            />
          </div>
        </Link>

        {/* ハンバーガーメニューボタン（モバイル用） */}
        <button
          type="button"
          className="text-gray-600 hover:text-gray-900 lg:hidden dark:text-gray-300 dark:hover:text-white"
          onClick={toggleMenu}
          aria-label="メニューを開閉"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            role="img"
          >
            <title>メニューアイコン</title>
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* デスクトップ用ナビゲーション */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8 text-[15px] font-semibold">
            <li>
              <button
                type="button"
                onClick={() => handleNavClick("#about")}
                className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                会社概要
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNavClick("#services")}
                className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                サービス
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNavClick("#products")}
                className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                自社サービス
              </button>
            </li>
            <li>
              <Link
                href="/games"
                className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                ゲーム事業
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNavClick("#contact")}
                className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                お問い合わせ
              </button>
            </li>
          </ul>
        </nav>

        {/* モバイル用ナビゲーション */}
        {isMenuOpen && (
          <nav className="absolute left-0 right-0 top-full bg-white/95 py-4 shadow-lg backdrop-blur-md lg:hidden dark:bg-gray-900/95">
            <ul className="flex flex-col space-y-4 px-6">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick("#about")}
                  className="block w-full py-2 text-left hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  会社概要
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick("#services")}
                  className="block w-full py-2 text-left hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  サービス
                </button>
              </li>
              <li>
                <Link
                  href="/games"
                  className="block w-full py-2 text-left hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ゲーム事業
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick("#contact")}
                  className="block w-full py-2 text-left hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  お問い合わせ
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
