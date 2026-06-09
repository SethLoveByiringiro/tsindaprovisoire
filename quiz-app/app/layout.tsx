import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tsinda Provisoire",
    template: "%s | Tsinda Provisoire",
  },
  description: "Menya Amategeko y'Umuhanda ugize imikino! Learn Rwandan driving laws through interactive gaming.",
  keywords: "Rwanda, driving license, amategeko, umuhanda, quiz, game, imodoka",
  applicationName: "Tsinda Provisoire",
  appleWebApp: {
    capable: true,
    title: "Tsinda Provisoire",
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Tsinda Provisoire",
    description: "Menya amategeko y'imihanda w'u Rwanda ukigira imikino.",
    siteName: "Tsinda Provisoire",
  },
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
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </head>
      <body className="antialiased">
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
