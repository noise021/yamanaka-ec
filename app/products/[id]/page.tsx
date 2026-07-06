const products = [
  {
    id: "1",
    name: "4Kテレビ",
    price: "¥89,800",
    category: "テレビ・映像",
    description:
      "高画質4K対応テレビ。HDR対応で映画やスポーツを美しく楽しめます。",
  },
  {
    id: "2",
    name: "ノートパソコン",
    price: "¥128,000",
    category: "PC・家電",
    description:
      "ビジネス・動画編集にも使える高性能ノートパソコンです。",
  },
  {
    id: "3",
    name: "電子レンジ",
    price: "¥19,800",
    category: "キッチン家電",
    description:
      "シンプルで使いやすい電子レンジ。自動温め機能付き。",
  },
  {
    id: "4",
    name: "コードレス掃除機",
    price: "¥29,800",
    category: "生活用品",
    description:
      "軽量でパワフルなコードレス掃除機。充電式でどこでも使えます。",
  },
];

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-red-600">
          商品が見つかりません。
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-16">

        {/* 商品画像 */}
        <div className="bg-gray-200 rounded-2xl h-[500px] flex items-center justify-center text-2xl">
          商品画像
        </div>

        {/* 商品情報 */}
        <div>

          <p className="text-blue-600 font-semibold mb-3">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          <div className="text-yellow-500 text-xl mt-4">
            ★★★★★
          </div>

          <p className="text-red-500 text-4xl font-bold mt-6">
            {product.price}
          </p>

          <p className="mt-8 leading-8 text-gray-700">
            {product.description}
          </p>

          <button className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-bold">
            カートに追加
          </button>

          <button className="w-full mt-4 border border-gray-300 hover:bg-gray-100 py-4 rounded-xl text-lg">
            お気に入りに追加
          </button>

        </div>

      </div>
    </main>
  );
}