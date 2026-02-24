import type { Metadata } from "next";
import { Inter, Calistoga} from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans'});
const calistoga = Calistoga({ subsets: ["latin"], variable: '--font-serif', weight:["400"],});


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={twMerge(inter.variable, calistoga.variable,"bg-white dark:bg-gray-900 text-gray-900 dark:text-white antialiased font-sans transition-colors duration-300")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
