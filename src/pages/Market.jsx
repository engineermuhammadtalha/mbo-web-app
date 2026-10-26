import { useState } from 'react'
import { Package, Wrench, Car, Building2, MapPin } from 'lucide-react'
import { Chips, Title, Btn, gbp } from '../ui.jsx'
import { cars, properties, products, services } from '../data.js'

const MODES = { Products: [products, Package], Services: [services, Wrench], AutoTrade: [cars, Car], PropertyTrade: [properties, Building2] }

export default function Market() {
  const [mode, setMode] = useState('Products')
  const [q, setQ] = useState('')
  const [max, setMax] = useState('')
  const [saved, setSaved] = useState({})
  const [data, Icon] = MODES[mode]
  const items = data.filter((i) => (i.title + i.city).toLowerCase().includes(q.toLowerCase())).filter((i) => !max || i.price <= Number(max))
  return (
    <div>
      <Title sub="List products and services to a community that already trusts you">Listings</Title>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by category, name or city" aria-label="Search listings" className="mb-3 w-full rounded-full bg-white px-5 py-3 text-sm ring-1 ring-ink/10 outline-none focus:ring-2 focus:ring-saffron" />
      <Chips items={Object.keys(MODES)} value={mode} onChange={setMode} />
      <input type="number" value={max} onChange={(e) => setMax(e.target.value)} placeholder="Max price (£)" aria-label="Maximum price" className="mt-3 w-40 rounded-full bg-white px-4 py-2 text-sm ring-1 ring-ink/10" />
      {items.length === 0 && <p className="py-10 text-center text-ink/50">No listings match. Clear the search or raise the maximum price.</p>}
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => {
          const k = mode + i.id
          return (
            <div key={k} className="overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5">
              <div className="grid h-32 place-items-center bg-pine-soft text-pine"><Icon size={44} /></div>
              <div className="p-4">
                <div className="flex items-baseline justify-between"><b className="text-lg">{gbp(i.price)}</b>{i.kind && <span className="rounded-full bg-pine-soft px-2 text-xs font-medium">For {i.kind.toLowerCase()}</span>}</div>
                <div className="mt-1 font-medium">{i.title}</div>
                <div className="text-sm text-ink/60">{i.meta}</div>
                <div className="mt-1 flex items-center gap-1 text-xs text-ink/50"><MapPin size={12} /> {i.city}{i.seller && ` · ${i.seller}`}</div>
                <div className="mt-3 flex gap-2">
                  <Btn className="flex-1">Message</Btn>
                  <Btn kind="ghost" onClick={() => setSaved((s) => ({ ...s, [k]: !s[k] }))}>{saved[k] ? 'Saved' : 'Save'}</Btn>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
