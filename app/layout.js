import Link from "next/link";
import "./globals.css";
import LoginBtn from "./LoingBtn";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/" className="logo">
            Appleforum
          </Link>
          <Link href="/list">List</Link>
          <Link href="/write">Write</Link>
          <LoginBtn />
        </div>
        {children}
      </body>
    </html>
  );
}
