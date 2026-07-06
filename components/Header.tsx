export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-md">

      {/* 上部 */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6">

        {/* ロゴ */}
        <h1 className="text-2xl font-extrabold text-blue-700 whitespace-nowrap">
          山中EC
        </h1>

        {/* 検索 */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="商品を検索..."
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* メニュー */}
        <nav className="flex gap-6 text-sm font-medium text-gray-700 whitespace-nowrap">
          <a href="#" className="hover:text-blue-600">
  ログイン
</a>
         <a href="#" className="hover:text-blue-600">
  会員登録
</a>
          <a href="#" className="hover:text-blue-600">
  カート(0)
</a>
        </nav>

      </div>

      {/* ナビゲーション */}
      <div className="border-t bg-gray-50">

        <div className="max-w-7xl mx-auto px-4">

          <nav className="flex gap-8 py-3 text-sm font-semibold text-gray-800">

            <a href="/" className="hover:text-blue-600">
  ホーム
</a>

            <a href="/" className="hover:text-blue-600">
  商品概要
</a>

            <a href="/" className="hover:text-blue-600">
  ランキング
</a>

            <a href="/" className="hover:text-blue-600">
  お問い合わせ
</a>

          </nav>

        </div>

      </div>

    </header>
  );
}