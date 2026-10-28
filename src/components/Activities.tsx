import type { Activity } from '@/types'
import { TimelineItem } from './TimelineItem'

type Props = {
    activities: Activity[]
}

export function Activities({ activities }: Props) {
    return (
        <section id="activities" className="scroll-mt-24">
            <h2 data-reveal className="text-2xl font-bold text-fg-high">活動</h2>

            <ol className="relative mt-8">
                <span
                    aria-hidden
                    data-reveal-axis
                    className="absolute left-2 top-2 bottom-8 w-px bg-stroke-high sm:left-[var(--tl-axis)]"
                />
                {activities.map((activity, index) => (
                    <TimelineItem key={`${activity.title}-${index}`} activity={activity} />
                ))}
            </ol>
        </section>
    )
}
