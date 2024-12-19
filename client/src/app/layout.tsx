import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "../styles/globals.scss";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Sport nutrition",
  description: "Sport nutrition",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable}`}>
        {children}
      </body>
    </html>
  );
}
