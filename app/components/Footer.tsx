import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-4 text-xs md:text-sm">
            <Link href="/privacy-policy" className="hover:text-gray-300">
              プライバシーポリシー
            </Link>
          </div>
          <p className="text-xs md:text-sm">
            &copy; 2024~ Instansys, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
