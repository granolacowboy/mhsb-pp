import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MHSB - Legal Tech Consultants | CRM & AI Solutions for Law Firms",
  description: "Expert legal tech consultants specializing in CRM implementation, case management systems, practice management software, and AI solutions for law firms. Transform your legal practice with cutting-edge technology.",
  keywords: "legal tech, law firm CRM, case management, practice management, legal AI, law firm technology, legal software consultants",
  authors: [{ name: "MHSB Legal Tech Consultants" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/logo-icon.svg",
  },
  openGraph: {
    title: "MHSB - Legal Tech Consultants | CRM & AI Solutions",
    description: "Transform your legal practice with expert technology consulting services. Specializing in CRM, case management, and AI solutions for law firms.",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MHSB Legal Tech Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MHSB - Legal Tech Consultants",
    description: "Transform your legal practice with expert technology consulting services.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          id="lm-embedded-script"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,a,s,c,i){if(!e[s]){i=e[s]=function(){i.process?i.process.apply(i,arguments):i.queue.push(arguments)},i.queue=[],i.t=1*new Date;var o=t.createElement(n);o.async=1,o.src=a+"?t="+Math.ceil(new Date/c)*c;var r=t.getElementsByTagName(n)[0];r.parentNode.insertBefore(o,r)}}(window,document,"script","https://navi.lawmatics.com/intake.min.js","lm_intake",864e5);
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
