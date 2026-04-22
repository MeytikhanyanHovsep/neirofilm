import type { Metadata } from "next";
import "./globals.css";
import Components from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` font-manrope h-full antialiased`}>
      <body className="min-h-min snap-y snap-mandatory h-screen overflow-y-auto text-white max-w-screen overflow-x-hidden  flex flex-col">
        <Components>{children}</Components>
      </body>
    </html>
  );
}
