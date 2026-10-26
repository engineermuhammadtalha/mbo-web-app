import { useState } from 'react'
import { Heart, Clock } from 'lucide-react'
import { Avatar, Title, Btn } from '../ui.jsx'
import { posts as seed, me } from '../data.js'

export default function Feed() {
  const [posts, setPosts] = useState(seed)
  const [text, setText] = useState('')
  const [liked, setLiked] = useState({})

  const submit = () => {
    if (!text.trim()) return
    setPosts([{ id: Date.now(), author: me.name, role: me.title, time: 'now', text, likes: 0, pending: true }, ...posts])
    setText('')
  }
  const like = (id) => setLiked((l) => ({ ...l, [id]: !l[id] }))

  return (
    <div className="mx-auto max-w-2xl">
      <Title sub="Post, react and talk with Muslims across the world">Social</Title>


      <div className="mb-5 rounded-2xl bg-white p-4 ring-1 ring-ink/5">
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={2} placeholder="What's on your mind?"
          className="w-full resize-none rounded-xl bg-mist p-3 text-sm outline-none focus:ring-2 focus:ring-saffron" />
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-ink/50">Posts are reviewed before they go live.</span>
          <Btn onClick={submit}>Post update</Btn>
        </div>
      </div>

      <div className="space-y-3">
        {posts.map((p) => (
          <article key={p.id} className="rounded-2xl bg-white p-4 ring-1 ring-ink/5">
            <div className="flex items-center gap-3">
              <Avatar name={p.author} />
              <div className="leading-tight"><b className="text-sm">{p.author}</b><div className="text-xs text-ink/50">{p.role} · {p.time}</div></div>
              {p.pending && <span className="ml-auto flex items-center gap-1 rounded-full bg-saffron-soft px-2 py-0.5 text-xs font-medium"><Clock size={12} /> In review</span>}
            </div>
            <p className="mt-3 text-[15px] leading-relaxed">{p.text}</p>
            <button onClick={() => like(p.id)} className={`mt-3 flex items-center gap-1.5 text-sm ${liked[p.id] ? 'text-pine' : 'text-ink/50'}`}>
              <Heart size={18} fill={liked[p.id] ? 'currentColor' : 'none'} /> {p.likes + (liked[p.id] ? 1 : 0)}
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}
