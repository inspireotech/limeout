import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Limeout Services",
  description:
    "Design & Branding | Content Creation | Web Development | Social Media Marketing | SEO | Ads & Ppc | Event Management | Catering | Graphic Designing",
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
          href="https://firebasestorage.googleapis.com/v0/b/inspireotech-logo.appspot.com/o/Screenshot%202024-07-23%20145632.png?alt=media&token=f6a45ac9-f095-4038-92f2-68503dafe78f"
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
