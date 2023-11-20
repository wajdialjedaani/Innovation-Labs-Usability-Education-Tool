import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Usability Education Tool",
  description: "Learn how to make intuitive and accessible user interfaces!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="global">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
