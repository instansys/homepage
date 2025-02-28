"use client";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 py-2">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold dark:text-white">Instansys</div>

        {/* ハンバーガーメニューボタン（モバイル用） */}
        <button
          type="button"
          className="lg:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          onClick={toggleMenu}
          aria-label="メニューを開閉"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
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
          <ul className="flex space-x-8 text-lg">
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
          <nav className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md py-4 shadow-lg">
            <ul className="flex flex-col space-y-4 px-6">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick("#about")}
                  className="w-full text-left block py-2 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  会社概要
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick("#services")}
                  className="w-full text-left block py-2 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  サービス
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick("#contact")}
                  className="w-full text-left block py-2 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
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
