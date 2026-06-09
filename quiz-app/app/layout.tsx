import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tsindaprovisoire — Rwanda Driving License Quiz",
  description: "Menya Amategeko y'Umuhanda ugize imikino! Learn Rwandan driving laws through interactive gaming.",
  keywords: "Rwanda, driving license, amategeko, umuhanda, quiz, game, imodoka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="rw">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
