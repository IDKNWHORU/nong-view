import localFont from "next/font/local";
import Script from 'next/script'

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "농뷰",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script id="microsoft-clarity-script" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_TAG_ID}");
        `}
      </Script>
      {children}
    </html>
  );
}
