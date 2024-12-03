export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 py-2">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold dark:text-white">Instansys</div>
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                会社概要
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                サービス
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
