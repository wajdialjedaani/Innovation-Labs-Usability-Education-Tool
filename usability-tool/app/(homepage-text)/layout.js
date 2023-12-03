import { Inter } from "next/font/google";
import "@/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Usability Education Tool",
  description: "Learn how to make intuitive and accessible user interfaces!",
};

export default function RootLayout({ children, pageProps }) {
  const bodyClass = pageProps.bodyClass ? pageProps.bodyClass : null;

  return (
    <html lang="en">
      <body className={`${bodyClass}`}>{children}</body>
    </html>
  );
}
