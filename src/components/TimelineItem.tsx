import type { Activity } from '@/types'
import { Badge } from './Badge'

type Props = {
    activity: Activity
}

function formatYearMonth(value: string): string {
    const [year, month] = value.split('-')
    return `${year}年${Number(month)}月`
}

function formatPeriod(period: Activity['period']): string {
    const { start, end } = period
    if (start && end) {
        if (start === end) return formatYearMonth(start)
        return `${formatYearMonth(start)} - ${formatYearMonth(end)}`
    }
    if (start && !end) return `${formatYearMonth(start)} - 現在`
    if (!start && end) return `- ${formatYearMonth(end)}`
    return ''
}

export function TimelineItem({ activity }: Props) {
    const isOngoing = !!activity.period.start && !activity.period.end
    const links = activity.links ?? []
    const tags = activity.tags ?? []

    return (
        <li
            data-reveal
            className="relative grid grid-cols-[1fr] gap-x-6 pb-8 pl-8 sm:grid-cols-[var(--tl-axis)_1fr] sm:pl-0"
        >
            <span
                aria-hidden
                className={
                    isOngoing
                        ? 'absolute left-2 top-1.5 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-fg-high bg-surface sm:left-[var(--tl-axis)]'
                        : 'absolute left-2 top-1.5 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-fg-high sm:left-[var(--tl-axis)]'
                }
            />

            <p className="whitespace-nowrap text-sm text-fg-low sm:pr-6 sm:text-right">
                {formatPeriod(activity.period)}
            </p>

            <div className="mt-1 sm:mt-0 sm:pl-6">
                <h3 className="font-bold text-fg-high">{activity.title}</h3>
                <p className="font-medium text-fg-middle">{activity.subtitle}</p>

                <p className="mt-2 whitespace-pre-line text-base leading-relaxed text-fg-middle">
                    {activity.description}
                </p>

                {links.length > 0 && (
                    <p className="mt-2 text-sm">
                        <span className="text-fg-low">関連リンク: </span>
                        {links.map((link, index) => (
                            <span key={link.label}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-link underline underline-offset-2 transition-colors hover:text-fg-high"
                                >
                                    {link.label}
                                </a>
                                {index < links.length - 1 && (
                                    <span className="text-fg-low">, </span>
                                )}
                            </span>
                        ))}
                    </p>
                )}

                {tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Badge key={tag} label={tag} />
                        ))}
                    </div>
                )}
            </div>
        </li>
    )
}
