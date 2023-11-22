import "./globals.css";

export const metadata = {
  title: "ShopGO",
  description: "Technical Test Fullstack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
}
