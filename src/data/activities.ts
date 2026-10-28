import type { Activity } from '@/types'

export const activities: Activity[] = [
    {
        period: { start: '2026-08', end: '2026-08' },
        title: '株式会社日本経済新聞社',
        subtitle: '短期インターン・就業体験',
        description:
            '二人一組で日経電子版の新機能・デジタル事業の新サービスを提案\n' +
            '日経の記事データなどの各種 API 基盤、BigQuery に蓄積された社内データを活用し、開発に取り組む',
        links: [
            { label: '日経 サマーインターン2026', url: 'https://hack.nikkei.com/internJobs/2026_summer/' },
        ],
        tags: ['Python', 'LLM', 'BigQuery'],
    },
    {
        period: { start: '2026-04', end: null },
        title: '筑波大学',
        subtitle: '自然言語処理グループ',
        description:
            '自然言語処理について研究を行う',
        links: [
            { label: '自然言語処理グループ', url: 'http://www.nlp.mibel.cs.tsukuba.ac.jp/' },
        ],
        tags: ['Docker', 'Python'],
    },
    {
        period: { start: '2025-11', end: null },
        title: '株式会社dele',
        subtitle: 'ソフトウェアエンジニア',
        description:
            '業務システムの開発・テストを担当',
        tags: ['Laravel', 'Next.js'],
    },
    {
        period: { start: '2025-09', end: '2025-09' },
        title: '株式会社TOKIUM',
        subtitle: '短期サマーインターン',
        description:
            'ハッカソン形式でアプリケーション開発を学ぶインターンシップに参加\n' +
            'AIツール n8n を用いて自動化ツールを開発した',
        links: [
            { label: 'TOKIUM サマーインターン2025', url: 'https://careerselect.jp/event_offers/event_detail/1273/' },
        ],
        tags: ['Docker', 'Python'],
    }
]
