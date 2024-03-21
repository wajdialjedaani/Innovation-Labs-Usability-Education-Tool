import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";

import BootstrapClient from "@/components/BootstrapClient";

import { AuthContextProvider } from "./(main)/components/AuthContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Usability Education Tool",
  description: "Learn how to make intuitive and accessible user interfaces!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body className="global">
        <AuthContextProvider>
          {children}
          <BootstrapClient />
        </AuthContextProvider>
      </body>
    </html>
  );
}
