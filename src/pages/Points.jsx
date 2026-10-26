import { useState } from 'react'
import { Star, Copy } from 'lucide-react'
import { Title, Btn } from '../ui.jsx'
import { points } from '../data.js'

export default function Points() {
  const [copied, setCopied] = useState(false)
  const invite = async () => {
    try { await navigator.clipboard.writeText(`Join me on MBO with code ${points.code}`) } catch {}
    setCopied(true)
  }
  return (
    <div className="mx-auto max-w-xl">
      <Title sub="Earn points for inviting friends and showing up">Sunnah Points</Title>
      <div className="rounded-3xl bg-pine-soft p-8 text-center">
        <Star className="mx-auto text-pine" fill="currentColor" />
        <div className="mt-2 font-display text-6xl font-bold text-pine-dark">{points.total}</div>
        <div className="text-sm text-pine-dark/70">Points</div>
      </div>
      <div className="mt-4 rounded-2xl bg-white p-5 ring-1 ring-ink/5">
        <h2 className="mb-2 font-bold">Points breakdown</h2>
        {points.breakdown.map(([t, d, n]) => (
          <div key={t} className="flex items-center justify-between border-t border-ink/5 py-3 first:border-0"><span className="text-sm"><b>{t}</b><span className="block text-ink/50">{d}</span></span><b className="text-pine">+{n}</b></div>
        ))}
      </div>
      <Btn className="mt-4 flex w-full items-center justify-center gap-2 py-3" onClick={invite}><Copy size={16} /> {copied ? 'Invite copied' : 'Invite friends to join MBO'}</Btn>
      <div className="mt-4 rounded-2xl bg-white p-5 ring-1 ring-ink/5">
        <h2 className="mb-2 font-bold">How it works</h2>
        <ol className="list-inside list-decimal space-y-1.5 text-sm text-ink/75">
          <li>Invite friends with your link or code <b>{points.code}</b>.</li>
          <li>Your friend downloads MBO and signs up.</li>
          <li>You both earn points when they join.</li>
        </ol>
      </div>
    </div>
  )
}
