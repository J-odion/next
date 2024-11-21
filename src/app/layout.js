import localFont from "next/font/local";
import "./globals.css";

const figtree = localFont({
  src: "./fonts/Figtree.ttf",
  variable: "--font-figtree",
  weight: "100 900",
});


export const metadata = {
  title: "Next",
  description: "Empowering Nigerian entrepreneurs and small businesses with accessible financing solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
