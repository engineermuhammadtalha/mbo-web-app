import { CalendarDays, MapPin } from 'lucide-react'
import { Avatar, Btn } from '../ui.jsx'
import { people, events } from '../data.js'

const FEATURES = [['Marketplace', 'market'], ['Communities', 'communities'], ['Businesses', 'businesses'], ['Sunnah Points', 'points']]

export default function Home({ go }) {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <section className="rounded-3xl bg-forest p-6 text-white md:p-8">
        <h1 className="text-3xl font-bold md:text-4xl">One app. One ummah.</h1>
        <p className="mt-2 max-w-sm text-white/75">Feed, communities, chats and business in one place. Share, connect, inspire.</p>
        <Btn className="mt-5" onClick={() => go('social')}>View feed</Btn>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold">Explore features</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {FEATURES.map(([l, id]) => (
            <button key={id} onClick={() => go(id)} className="rounded-2xl bg-pine-soft px-4 py-5 text-left text-sm font-semibold text-pine-dark hover:ring-2 hover:ring-pine">{l}</button>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-bold">Global connections</h2>
          <button onClick={() => go('network')} className="text-sm font-semibold text-pine">See all</button></div>
        <div className="flex gap-4 overflow-x-auto pb-1">
          {people.map((p) => (
            <div key={p.id} className="flex w-16 shrink-0 flex-col items-center gap-1 text-center"><Avatar name={p.name} size={56} /><span className="w-full truncate text-xs">{p.name.split(' ')[0]}</span></div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold">Upcoming events</h2>
        <ul className="space-y-2">
          {events.map((e) => (
            <li key={e.id} className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-ink/5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-pine-soft text-pine-dark"><CalendarDays size={20} /></span>
              <span className="text-sm leading-snug"><b>{e.title}</b><span className="flex items-center gap-1 text-ink/55">{e.date} <MapPin size={12} /> {e.place}</span></span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
