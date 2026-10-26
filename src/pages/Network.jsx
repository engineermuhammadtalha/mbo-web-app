import { useState } from 'react'
import { Avatar, Title, Btn } from '../ui.jsx'
import { people } from '../data.js'

export default function Network() {
  const [q, setQ] = useState('')
  const [sent, setSent] = useState({})
  const list = people.filter((p) => (p.name + p.title + p.city).toLowerCase().includes(q.toLowerCase()))

  return (
    <div>
      <Title sub="Find and connect with Muslim professionals worldwide">Network</Title>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, business or city" aria-label="Search people"
        className="mb-4 w-full rounded-full bg-white px-5 py-3 text-sm ring-1 ring-ink/10 outline-none focus:ring-2 focus:ring-saffron" />
      {list.length === 0 && <p className="py-10 text-center text-ink/50">No one matches “{q}”. Try a different name or city.</p>}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <div key={p.id} className="flex flex-col items-center rounded-2xl bg-white p-5 text-center ring-1 ring-ink/5">
            <Avatar name={p.name} size={64} />
            <b className="mt-3">{p.name}</b>
            <span className="text-sm text-ink/60">{p.title}</span>
            <span className="mb-4 text-xs text-ink/40">{p.city}</span>
            <Btn kind={sent[p.id] ? 'ghost' : 'solid'} onClick={() => setSent((s) => ({ ...s, [p.id]: !s[p.id] }))}>
              {sent[p.id] ? 'Request sent' : 'Connect'}
            </Btn>
          </div>
        ))}
      </div>
    </div>
  )
}
