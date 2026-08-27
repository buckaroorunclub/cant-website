import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, Permanent_Marker } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
});

const marker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "CAN'T",
  description:
    "They said you can't. CAN'T exists for the people who built anyway. First drop, first access — no noise.",
  openGraph: {
    title: "CAN'T",
    description: "They said you can't. CAN'T exists for the people who built anyway.",
    images: ["/images/cant-gathering-wide.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${marker.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
