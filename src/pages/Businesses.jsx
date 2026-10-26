import { useState } from 'react'
import { MapPin, Phone, X } from 'lucide-react'
import { Chips, Title, Btn } from '../ui.jsx'
import { businesses, categories } from '../data.js'

export default function Businesses() {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(null)
  const list = businesses.filter((b) => (cat === 'All' || b.cat === cat) && (b.name + b.city).toLowerCase().includes(q.toLowerCase()))

  return (
    <div>
      <Title sub="Muslim-owned businesses, listed by the community">Businesses</Title>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search businesses or cities" aria-label="Search businesses"
        className="mb-3 w-full rounded-full bg-white px-5 py-3 text-sm ring-1 ring-ink/10 outline-none focus:ring-2 focus:ring-saffron" />
      <Chips items={categories} value={cat} onChange={setCat} />
      {list.length === 0 && <p className="py-10 text-center text-ink/50">Nothing in this category yet. Clear the search or pick another category.</p>}
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((b) => (
          <button key={b.id} onClick={() => setOpen(b)} className="overflow-hidden rounded-2xl bg-white text-left ring-1 ring-ink/5 hover:ring-pine">
            <div className="grid h-24 place-items-center bg-pine font-display text-4xl font-bold text-saffron">{b.name[0]}</div>
            <div className="p-4">
              <b>{b.name}</b>
              <div className="mt-0.5 flex items-center gap-1 text-xs text-ink/50"><MapPin size={12} /> {b.city} · {b.cat}</div>
              <p className="mt-2 line-clamp-2 text-sm text-ink/70">{b.about}</p>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-30 grid place-items-end bg-black/40 sm:place-items-center" onClick={() => setOpen(null)}>
          <div role="dialog" aria-label={open.name} onClick={(e) => e.stopPropagation()} className="w-full max-w-md rounded-t-3xl bg-white p-6 sm:rounded-3xl">
            <div className="flex items-start justify-between"><h2 className="text-xl font-bold">{open.name}</h2>
              <button aria-label="Close" onClick={() => setOpen(null)}><X /></button></div>
            <p className="mt-1 text-sm text-ink/50">{open.cat} · {open.city}</p>
            <p className="mt-4">{open.about}</p>
            <p className="mt-4 flex items-center gap-2 text-sm"><Phone size={16} /> {open.phone}</p>
            <Btn className="mt-5 w-full">Message owner</Btn>
          </div>
        </div>
      )}
    </div>
  )
}
