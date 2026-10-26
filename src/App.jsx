import { useState } from 'react'
import { Home, MessagesSquare, Users2, ShoppingBag, LayoutGrid, Users, Store, MessageCircle, Bell, User, Star, X } from 'lucide-react'
import { Avatar, Logo } from './ui.jsx'
import { me } from './data.js'
import HomePage from './pages/Home.jsx'
import Feed from './pages/Feed.jsx'
import Communities from './pages/Communities.jsx'
import Market from './pages/Market.jsx'
import Network from './pages/Network.jsx'
import Businesses from './pages/Businesses.jsx'
import Chat from './pages/Chat.jsx'
import Points from './pages/Points.jsx'
import Alerts from './pages/Alerts.jsx'
import Profile from './pages/Profile.jsx'

const PAGES = [
  { id: 'home', label: 'Home', icon: Home, view: HomePage },
  { id: 'social', label: 'Social', icon: MessagesSquare, view: Feed },
  { id: 'communities', label: 'Communities', icon: Users2, view: Communities },
  { id: 'market', label: 'Marketplace', icon: ShoppingBag, view: Market },
  { id: 'network', label: 'Connections', icon: Users, view: Network },
  { id: 'businesses', label: 'Businesses', icon: Store, view: Businesses },
  { id: 'chat', label: 'Messages', icon: MessageCircle, view: Chat },
  { id: 'points', label: 'Sunnah Points', icon: Star, view: Points },
  { id: 'alerts', label: 'Notifications', icon: Bell, view: Alerts },
  { id: 'profile', label: 'Profile', icon: User, view: Profile },
]
const BOTTOM = ['home', 'social', null, 'communities', 'market']

export default function App() {
  const [tab, setTab] = useState('home')
  const [sheet, setSheet] = useState(false)
  const View = PAGES.find((p) => p.id === tab).view
  const go = (id) => { setTab(id); setSheet(false) }

  return (
    <div className="min-h-screen md:flex">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-forest p-5 text-white md:flex">
        <div className="mb-8"><Logo light /></div>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
          {PAGES.map(({ id, label, icon: I }) => (
            <button key={id} onClick={() => go(id)} aria-current={tab === id ? 'page' : undefined}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-left font-medium transition ${tab === id ? 'bg-pine text-white' : 'text-white/75 hover:bg-white/10'}`}>
              <I size={20} /> {label}
            </button>
          ))}
        </nav>
        <button onClick={() => go('profile')} className="flex items-center gap-3 rounded-xl bg-pine-dark p-3 text-left">
          <Avatar name={me.name} size={36} />
          <span className="text-sm leading-tight"><b>{me.name}</b><br /><span className="text-white/60">{me.city}</span></span>
        </button>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-10 flex items-center justify-between bg-mist/95 px-4 py-2 backdrop-blur md:hidden" style={{ paddingTop: 'max(0.5rem, env(safe-area-inset-top))' }}>
          <Logo size={30} />
          <div className="flex items-center gap-4 text-ink">
            <button aria-label="Messages" onClick={() => go('chat')}><MessageCircle size={22} /></button>
            <button aria-label="Notifications" onClick={() => go('alerts')}><Bell size={22} /></button>
            <button aria-label="Profile" onClick={() => go('profile')}><Avatar name={me.name} size={30} /></button>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 pb-28 pt-4 md:px-8 md:pb-10 md:pt-8"><View go={go} /></main>

        <nav className="pb-safe fixed inset-x-0 bottom-0 z-10 grid grid-cols-5 items-end border-t border-ink/10 bg-white md:hidden">
          {BOTTOM.map((id, i) => {
            if (!id) return (
              <button key="fab" aria-label="All features" onClick={() => setSheet(true)} className="mx-auto -mt-6 mb-2 grid h-14 w-14 place-items-center rounded-full bg-saffron text-white shadow-lg">
                <LayoutGrid size={26} />
              </button>
            )
            const { label, icon: I } = PAGES.find((p) => p.id === id)
            return (
              <button key={id} onClick={() => go(id)} aria-current={tab === id ? 'page' : undefined}
                className={`flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium ${tab === id ? 'text-pine' : 'text-ink/50'}`}>
                <I size={22} strokeWidth={tab === id ? 2.4 : 1.8} /> {label}
              </button>
            )
          })}
        </nav>
      </div>

      {sheet && (
        <div className="fixed inset-0 z-30 flex items-end bg-black/40 md:hidden" onClick={() => setSheet(false)}>
          <div role="dialog" aria-label="All features" onClick={(e) => e.stopPropagation()} className="pb-safe w-full rounded-t-3xl bg-white p-5">
            <div className="mb-3 flex items-center justify-between"><b className="font-display text-lg">All features</b><button aria-label="Close" onClick={() => setSheet(false)}><X /></button></div>
            <div className="grid grid-cols-3 gap-3">
              {PAGES.map(({ id, label, icon: I }) => (
                <button key={id} onClick={() => go(id)} className="flex flex-col items-center gap-1.5 rounded-2xl bg-pine-soft p-3 text-xs font-medium text-pine-dark"><I size={22} />{label}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
