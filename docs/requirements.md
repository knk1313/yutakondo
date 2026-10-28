# 要件定義書

個人のポートフォリオサイト。

## 1. 機能要件

### 1.1 プロフィールセクション

- 氏名（漢字 / ローマ字）、所属、肩書き、自己紹介文
- アバター画像
- 技術スタック（バッジ表示、カテゴリ分け）
- SNS / GitHub / Email リンク

### 1.2 Activities（職歴・受賞・参加歴）

- 期間（開始・終了）
- タイトル / サブタイトル（会社名 + プロジェクト名 など）
- 説明文（複数行対応）
- 関連リンク（複数可）
- 技術スタックタグ
- 縦のタイムラインUI、現在進行中は中抜き丸で表現

### 1.3 Contact

- GitHub / Email

## 2. データモデル決定事項

| 項目 | 決定 |
|---|---|
| 期間 (`start`, `end`) | 両方 nullable。`end === null` で「現在進行中」を表現 |
| 連絡先リンク | GitHub と Email の2種類のみ |
| アバター画像配置 | `public/images/avatar.png`（NULL時は初期アイコン） |
| 技術スタックのカテゴリ分け | ロール別: `Frontend` / `Backend` / `Infra` / `Other` |

## 3. 技術スタック

- フレームワーク: Next.js
- 言語: TypeScript
- スタイリング: Tailwind CSS
- アイコン: lucide-react
- データ管理: TS定数ファイル（`src/data/`）
- デプロイ: Vercel