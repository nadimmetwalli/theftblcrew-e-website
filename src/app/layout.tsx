import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tw-merge";


const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Official Ecommerce Website of theftblcrew",
  description: "Created by Nadim Metwalli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
