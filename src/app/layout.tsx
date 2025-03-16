import type { Metadata } from "next";
import "./globals.css";
import NavMenu from "@/UI/organisms/NavMenu";

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
    <NavMenu />
  );
};

export default RootLayout;
