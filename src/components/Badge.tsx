type Props = {
    label: string
}

export function Badge({ label }: Props) {
    return (
        <span className="inline-block rounded-md border border-stroke-high px-2 py-1 text-xs text-fg-middle">
            {label}
        </span>
    )
}
