import { Inter } from "next/font/google";
import "@/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Usability Education Tool",
  description: "Learn how to make intuitive and accessible user interfaces!",
};

export default function RootLayout({ children }) {
  return <div className="body_Builder vsc-initialized">{children}</div>;
}
