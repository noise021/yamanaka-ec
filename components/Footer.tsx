export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold text-white mb-8">
          山中EC
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          <div>
            <h3 className="font-bold text-white mb-3">
              サイト情報
            </h3>

            <ul className="space-y-2">
              <li><a href="#">会社概要</a></li>
              <li><a href="#">採用情報</a></li>
              <li><a href="#">店舗一覧</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">
              ご利用案内
            </h3>

            <ul className="space-y-2">
              <li><a href="#">ご利用ガイド</a></li>
              <li><a href="#">配送について</a></li>
              <li><a href="#">返品・交換</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">
              サポート
            </h3>

            <ul className="space-y-2">
              <li><a href="#">お問い合わせ</a></li>
              <li><a href="#">よくある質問</a></li>
              <li><a href="#">お知らせ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">
              法律関連
            </h3>

            <ul className="space-y-2">
              <li><a href="#">利用規約</a></li>
              <li><a href="#">プライバシーポリシー</a></li>
              <li><a href="#">特定商取引法</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">
              SNS
            </h3>

            <ul className="space-y-2">
              <li><a href="#">X</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © 2026 Yamanaka EC. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}