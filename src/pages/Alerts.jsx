import { useState } from 'react'
import { Bell } from 'lucide-react'
import { Title, Btn } from '../ui.jsx'
import { notifications } from '../data.js'

export default function Alerts() {
  const [items, setItems] = useState(notifications)
  return (
    <div className="mx-auto max-w-2xl">
      <Title sub="Real-time updates from your network">Notifications</Title>
      {items.length === 0 ? <p className="py-10 text-center text-ink/50">You are all caught up.</p> : (
        <>
          <Btn kind="ghost" className="mb-3" onClick={() => setItems([])}>Clear all</Btn>
          <ul className="space-y-2">
            {items.map((n) => (
              <li key={n.id} className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-ink/5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-saffron-soft text-saffron"><Bell size={18} /></span>
                <span className="text-sm">{n.text}<span className="block text-xs text-ink/40">{n.time} ago</span></span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
