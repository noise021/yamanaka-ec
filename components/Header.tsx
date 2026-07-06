export default function Header() {
  return (
    <header className="shadow bg-white sticky top-0 z-50">

      {/* 上部 */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6">

        {/* ロゴ */}
        <h1 className="text-2xl font-bold text-blue-600 whitespace-nowrap">
          山中EC
        </h1>

        {/* 検索 */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="商品を検索..."
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* メニュー */}
        <nav className="flex gap-6 text-sm whitespace-nowrap">
          <a href="#">ログイン</a>
          <a href="#">会員登録</a>
          <a href="#">カート(0)</a>
        </nav>

      </div>

      {/* ナビゲーション */}
      <div className="border-t bg-gray-50">

        <div className="max-w-7xl mx-auto px-4">

          <nav className="flex gap-8 py-3 text-sm font-semibold">

            <a href="/">ホーム</a>

            <a href="#">商品一覧</a>

            <a href="#">ランキング</a>

            <a href="#">お問い合わせ</a>

          </nav>

        </div>

      </div>

    </header>
  );
}