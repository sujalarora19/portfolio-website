import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import TransitionProvider from "../components/TransitionProvider";
import { Analytics } from "@vercel/analytics/react"


export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
        <Analytics />
      </body>
    </html>
  );
}
