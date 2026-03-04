import Navbar from "@/components/Navbar";
import "./globals.css";
import Hero from "@/components/Hero";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}