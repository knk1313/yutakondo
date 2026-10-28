import Image from 'next/image'
import { Briefcase, Building2, Cake, MapPin } from 'lucide-react'
import type { Profile as ProfileType } from '@/types'
import { GitHubMark } from './GitHubMark'

type Props = {
    profile: ProfileType
}

function formatBirthYearMonth(value: string): string {
    if (!value) return ''
    const [year, month] = value.split('-')
    return `${year}年${Number(month)}月生まれ`
}

export function Profile({ profile }: Props) {
    const meta = [
        { icon: Building2, label: '所属', value: profile.affiliation },
        { icon: Briefcase, label: '肩書き', value: profile.title },
        { icon: MapPin, label: '居住地', value: profile.residence },
        { icon: Cake, label: '生年月', value: formatBirthYearMonth(profile.birthYearMonth) },
    ]

    return (
        <section id="profile" className="scroll-mt-24">
            <h2 data-reveal className="text-2xl font-bold text-fg-high">プロフィール</h2>

            <div data-reveal className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-start">
                <div className="shrink-0">
                    <Image
                        src={profile.avatarSrc}
                        alt={profile.name.ja}
                        width={120}
                        height={120}
                        className="rounded-full bg-surface-muted object-cover"
                    />
                </div>

                <div className="flex-1">
                    <h3 className="text-xl font-bold text-fg-high">{profile.name.ja}</h3>
                    <p className="text-sm text-fg-low">{profile.name.en}</p>

                    <a
                        href={`https://github.com/${profile.githubLogin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub プロフィール (@${profile.githubLogin}) を開く`}
                        className="mt-2 inline-flex items-center gap-1.5 text-sm text-fg-low transition-colors hover:text-fg-high"
                    >
                        <GitHubMark className="h-4 w-4" />
                        <span>@{profile.githubLogin}</span>
                    </a>

                    <ul className="mt-4 flex flex-col gap-2 text-sm">
                        {meta.map(({ icon: Icon, label, value }) => (
                            <li key={label} className="flex items-center gap-2">
                                <Icon className="h-4 w-4 shrink-0 text-fg-high" aria-hidden />
                                <span className="w-16 shrink-0 font-semibold text-fg-high">{label}</span>
                                <span className="text-fg-middle">{value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {profile.bio && (
                <p
                    data-reveal
                    className="mt-6 whitespace-pre-line text-base leading-relaxed text-fg-middle"
                >
                    {profile.bio}
                </p>
            )}
        </section>
    )
}
