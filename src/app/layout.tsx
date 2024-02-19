import { Inter } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ArchiDesk",
  description: "Helsinki metropolitan area lookup",
  icons: [
    {
      name: "favicon",
      url: "/favicon.png"
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}