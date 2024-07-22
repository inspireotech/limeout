import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InspireoTech Solutions",
  description:
    "Discover Inspireotech Solutions: Experts in custom software development, website design, and mobile app creation for Android and iOS. We deliver innovative solutions tailored to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/inspireotech-logo.appspot.com/o/download.png?alt=media&token=d9b68622-75ee-4334-9097-df84ef5735fd"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
