import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pet Care LP",
  description: "Pet Care LP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
