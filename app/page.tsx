export default function HomePage() {
  const categories = [
    "テレビ・映像",
    "PC・家電",
    "キッチン家電",
    "生活用品",
  ];

  const products = [
    {
      id: 1,
      name: "4Kテレビ",
      price: "¥89,800",
    },
    {
      id: 2,
      name: "ノートパソコン",
      price: "¥128,000",
    },
    {
      id: 3,
      name: "電子レンジ",
      price: "¥19,800",
    },
    {
      id: 4,
      name: "掃除機",
      price: "¥29,800",
    },
  ];

  return (
    <main>
      {/* メインバナー */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            山中ECサイト
          </h1>

          <p className="text-xl">
            家電・生活用品をお得に購入
          </p>
        </div>
      </section>

      {/* カテゴリー */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">
          カテゴリー
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="border rounded-lg p-6 text-center hover:shadow-lg cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* おすすめ商品 */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">
          おすすめ商品
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg"
            >
              <div className="h-48 bg-gray-200" />

              <div className="p-4">
                <h3 className="font-bold">
                  {product.name}
                </h3>

                <p className="text-red-500 mt-2">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* お知らせ */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            お知らせ
          </h2>

          <ul className="space-y-4">
            <li>2026/07/07 サイトを公開しました。</li>
            <li>2026/07/07 夏のセール開催中です。</li>
            <li>2026/07/07 新商品を追加しました。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}