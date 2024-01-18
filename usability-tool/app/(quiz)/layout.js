import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import Navbar from "/app/(main)/components/Navbar";

//import { ContextProvider } from "./components/ContextProvider";

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
