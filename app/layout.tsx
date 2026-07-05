import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "ヤマナカEC",
  description: "スーパーのオンラインECサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}