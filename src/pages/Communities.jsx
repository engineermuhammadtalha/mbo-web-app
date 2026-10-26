import { useState } from 'react'
import { BadgeCheck } from 'lucide-react'
import { Chips, Title, Btn } from '../ui.jsx'
import { communities } from '../data.js'

export default function Communities() {
  const [tab, setTab] = useState('MBO Communities')
  const [joined, setJoined] = useState({ 1: true })
  const list = communities.filter((c) => (tab === 'MBO Communities' ? c.official : tab === 'Joined' ? joined[c.id] : !c.official))
  return (
    <div>
      <Title sub="Groups for faith, business, football, fashion, and whatever you are into">Communities</Title>
      <Chips items={['MBO Communities', 'Joined', 'Discover']} value={tab} onChange={setTab} />
      {list.length === 0 && <p className="py-10 text-center text-ink/50">You have not joined any communities yet. Open Discover to find one.</p>}
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <div key={c.id} className="overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5">
            <div className="grid h-24 place-items-center bg-forest font-display text-3xl font-bold text-pine">{c.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}</div>
            <div className="p-4">
              <div className="flex items-center gap-1 font-semibold">{c.name}{c.official && <BadgeCheck size={16} className="text-pine" aria-label="Official MBO community" />}</div>
              <div className="text-xs text-ink/50">{c.cat} · {c.members.toLocaleString()} members</div>
              <Btn kind={joined[c.id] ? 'ghost' : 'solid'} className="mt-3 w-full" onClick={() => setJoined((j) => ({ ...j, [c.id]: !j[c.id] }))}>{joined[c.id] ? 'Joined' : 'Join community'}</Btn>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
