import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {/* Navbar and children should sit side by side */}
          <div className="flex flex-1 p-4">
            {/* Todo: Add Nav bar for addtional menu items */}
            {/* <Navbar /> */}
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
