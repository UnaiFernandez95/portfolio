import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unai Fernandez",
  description: "Portafolio Unai Fernandez",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
