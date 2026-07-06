const products = [
  {
    id: 1,
    name: "4Kテレビ",
    price: "¥89,800",
    category: "テレビ・映像",
  },
  {
    id: 2,
    name: "ノートパソコン",
    price: "¥128,000",
    category: "PC・家電",
  },
  {
    id: 3,
    name: "電子レンジ",
    price: "¥19,800",
    category: "キッチン家電",
  },
  {
    id: 4,
    name: "コードレス掃除機",
    price: "¥29,800",
    category: "生活用品",
  },
];

export default function ProductsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-10 text-gray-900">
        商品一覧
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white border rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition"
          >

            <div className="h-56 bg-gray-200 flex items-center justify-center">
              商品画像
            </div>

            <div className="p-5">

              <p className="text-sm text-blue-600 mb-2">
                {product.category}
              </p>

              <h2 className="font-bold text-lg text-gray-900">
                {product.name}
              </h2>

              <p className="text-red-500 text-2xl font-bold mt-3">
                {product.price}
              </p>

              <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
                商品詳細を見る
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}