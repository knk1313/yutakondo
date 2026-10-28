# My Web

ポートフォリオサイト。

## Tech Stack

- [Next.js 16](https://nextjs.org) 
- React 19
- TypeScript
- Tailwind CSS v4

## Getting Started

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開く。

## Scripts

| Command | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | プロダクションビルド |
| `npm run start` | ビルド済みサーバー起動 |
| `npm run lint` | ESLint 実行 |

## Project Structure

```
src/
├── app/         # App Router (page.tsx, layout.tsx)
├── components/  # UI コンポーネント
├── data/        # プロフィール / 活動データ
└── types/       # 型定義
```

サイトに表示する内容は `src/data/` 配下を編集する。
