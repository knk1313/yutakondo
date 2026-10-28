'use client'

import { useEffect } from 'react'

// 同じタイミングで画面に入った要素をずらして出す間隔
const STAGGER_MS = 80

/**
 * data-reveal / data-reveal-axis が付いた要素を監視し、画面に入ったら
 * is-visible を付ける。どう出すか（フェードか伸長か）は CSS 側の責務。
 *
 * DOM を一切生やさない（return null）ので、既存の grid / flex / sticky な
 * レイアウトに影響しない。おかげで他のコンポーネントはサーバーコンポーネント
 * のままでよく、クライアントに送る JS はこのファイルぶんだけで済む。
 *
 * スクロールイベントで毎回 getBoundingClientRect() を呼ぶ実装だと
 * 強制同期レイアウトが起きてカクつく。IntersectionObserver は交差判定を
 * ブラウザ側（メインスレッド外）が行うため、スクロール中に JS が走らない。
 */
export function RevealOnScroll() {
    useEffect(() => {
        // 低減設定時は CSS 側で常時表示しているので、監視自体を張らない
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const observer = new IntersectionObserver(
            (entries) => {
                let shown = 0

                for (const entry of entries) {
                    if (!entry.isIntersecting) continue

                    // まとめて入ってきた要素だけを少しずつ遅らせる。
                    // 単独でスクロールインした要素の遅延は 0ms のまま。
                    const el = entry.target as HTMLElement
                    el.style.transitionDelay = `${shown * STAGGER_MS}ms`
                    el.classList.add('is-visible')
                    shown += 1

                    // 一度出したら戻さない（往復のたびに再生されるとうるさい）。
                    // 監視も外すので、以降この要素のコストはゼロになる。
                    observer.unobserve(el)
                }
            },
            // 下端から少し入り込んでから発火させる
            { rootMargin: '0px 0px -10% 0px' }
        )

        // 1ページ構成なので document 全体を一度だけ走査すれば足りる。
        // 動的に要素が増えるページに転用する場合は MutationObserver か、
        // 要素側から登録する形（ref を渡すラッパー）に変える必要がある。
        document
            .querySelectorAll('[data-reveal], [data-reveal-axis]')
            .forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return null
}
