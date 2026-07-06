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
    name: "コードレス掃除機",
    price: "¥29,800",
  },
];

export default function HomePage() {
  return (
    <main className="bg-gray-50">

      {/* メインバナー */}
      <section className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            山中ECサイト
          </h1>

          <p className="text-xl">
            家電・生活用品をお得な価格で販売中
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            商品を見る
          </button>
        </div>
      </section>

      {/* カテゴリー */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">
          カテゴリー
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow hover:shadow-lg p-8 text-center cursor-pointer transition"
            >
              <p className="font-bold">{category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* おすすめ商品 */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">
          おすすめ商品
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
            >
              <div className="bg-gray-200 h-52 flex items-center justify-center">
                商品画像
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg">
                  {product.name}
                </h3>

                <p className="text-red-500 text-xl font-bold mt-3">
                  {product.price}
                </p>

                <button className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  商品を見る
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* お知らせ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            お知らせ
          </h2>

          <div className="space-y-4">
            <div className="border-b pb-4">
              2026/07/07　ECサイトを公開しました。
            </div>

            <div className="border-b pb-4">
              2026/07/07　夏のセールを開催中です。
            </div>

            <div className="border-b pb-4">
              2026/07/07　新商品を追加しました。
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}