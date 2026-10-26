import { useState } from 'react'
import { ArrowLeft, Send } from 'lucide-react'
import { Avatar, Title } from '../ui.jsx'
import { chats as seed } from '../data.js'

export default function Chat() {
  const [chats, setChats] = useState(seed)
  const [sel, setSel] = useState(null)
  const [text, setText] = useState('')
  const active = chats.find((c) => c.id === sel)

  const send = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    setChats(chats.map((c) => (c.id === sel ? { ...c, last: text, msgs: [...c.msgs, { from: 'me', text }] } : c)))
    setText('')
  }

  return (
    <div>
      <div className={active ? 'hidden md:block' : ''}><Title sub="Direct messages and group discussions">Messages</Title></div>
      <div className="grid overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5 md:h-[70vh] md:grid-cols-[300px_1fr]">
        <ul className={`divide-y divide-ink/5 overflow-y-auto ${active ? 'hidden md:block' : ''}`}>
          {chats.map((c) => (
            <li key={c.id}>
              <button onClick={() => setSel(c.id)} className={`flex w-full items-center gap-3 p-4 text-left hover:bg-mist ${sel === c.id ? 'bg-pine-soft' : ''}`}>
                <Avatar name={c.name} />
                <span className="min-w-0 leading-tight"><b className="text-sm">{c.name}</b><span className="block truncate text-sm text-ink/50">{c.last}</span></span>
              </button>
            </li>
          ))}
        </ul>
        <section className={`flex min-h-[60vh] flex-col ${active ? '' : 'hidden md:flex'}`}>
          {active ? (
            <>
              <div className="flex items-center gap-3 border-b border-ink/5 p-3">
                <button className="md:hidden" aria-label="Back to chats" onClick={() => setSel(null)}><ArrowLeft /></button>
                <Avatar name={active.name} size={32} /><b className="text-sm">{active.name}</b>
              </div>
              <div className="flex-1 space-y-2 overflow-y-auto p-4">
                {active.msgs.map((m, i) => (
                  <div key={i} className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm ${m.from === 'me' ? 'ml-auto bg-pine text-white' : 'bg-mist'}`}>{m.text}</div>
                ))}
              </div>
              <form onSubmit={send} className="flex gap-2 border-t border-ink/5 p-3">
                <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a message" aria-label="Message" className="flex-1 rounded-full bg-mist px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-saffron" />
                <button aria-label="Send" className="grid h-10 w-10 place-items-center rounded-full bg-pine text-white"><Send size={18} /></button>
              </form>
            </>
          ) : <p className="m-auto text-sm text-ink/50">Pick a conversation to start.</p>}
        </section>
      </div>
    </div>
  )
}
