import { Inter } from "next/font/google";

import "@/styles/globals.scss";
import "@/styles/tailwindinclude.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HeuristicBuilder",
  description: "Learn how to make intuitive and usable user interfaces!",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-usability-700 text-white">
        {children}
      </body>
    </html>
  );
}
