import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        🛒 ヤマナカEC
      </div>

      <nav style={styles.nav}>
        <Link href="/" style={styles.link}>ホーム</Link>
        <Link href="/products" style={styles.link}>商品</Link>
        <Link href="/cart" style={styles.link}>カート</Link>
        <Link href="/login" style={styles.link}>ログイン</Link>
      </nav>
    </header>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "16px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
  },
};