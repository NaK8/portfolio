import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

// const PPmori = localFont({
//   src: [
//     {
//       path: "./fonts/PPMori-Regular.woff2",
//       weight: "400",
//     },

//     {
//       path: "./fonts/PPMori-SemiBold.woff2",
//       weight: "700",
//     },
//   ],
//   display: "swap",
//   variable: "--font-ppmori",
// });

export const metadata: Metadata = {
  title: "Nabeel Ahmed",
  description: "Under Construction",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 font-sans text-white antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
