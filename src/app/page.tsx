import { Activities } from '@/components/Activities'
import { Header } from '@/components/Header'
import { Profile } from '@/components/Profile'
import { activities } from '@/data/activities'
import { profile } from '@/data/profile'

export default function Home() {
    return (
        <>
            <Header />
            <main className="mx-auto flex max-w-3xl flex-col gap-16 px-4 py-12 sm:px-6 sm:py-16">
                <Profile profile={profile} />
                <Activities activities={activities} />
            </main>
        </>
    )
}
