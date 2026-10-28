const NAV_ITEMS = [
    { href: '#profile', label: 'プロフィール' },
    { href: '#activities', label: '活動' }
]

export function Header() {
    return (
        <header className="sticky top-0 z-20 bg-surface/80 backdrop-blur">
            <nav
                aria-label="サイト内ナビゲーション"
                className="mx-auto flex max-w-3xl items-center justify-center px-4 py-4 sm:px-6"
            >
                <ul className="flex items-center gap-x-6 text-sm sm:gap-x-8">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="font-semibold text-fg-middle transition-colors hover:text-fg-high"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
