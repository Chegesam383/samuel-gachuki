import Link from "next/link";
import { Mynerve } from "next/font/google";

const mynerve = Mynerve({
  variable: "--font-mynerve",
  subsets: ["latin"],
  weight: ["400"],
});
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className={`text-2xl font-extrabold  ${mynerve.className}`}
            >
              Samuel Gachuki
            </Link>
          </div>
          <div className="text-sm">
            <p>&copy; {currentYear} Samuel Chege. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
