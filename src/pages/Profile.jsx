import { useState } from 'react'
import { Avatar, Title, Btn } from '../ui.jsx'
import { me, skills } from '../data.js'

const Toggle = ({ label, on, set }) => (
  <label className="flex items-center justify-between py-3">
    <span className="text-sm">{label}</span>
    <button type="button" role="switch" aria-checked={on} onClick={() => set(!on)} className={`h-6 w-11 rounded-full p-0.5 transition ${on ? 'bg-pine' : 'bg-ink/20'}`}>
      <span className={`block h-5 w-5 rounded-full bg-white transition ${on ? 'translate-x-5' : ''}`} />
    </button>
  </label>
)

export default function Profile() {
  const [form, setForm] = useState(me)
  const [saved, setSaved] = useState(false)
  const [push, setPush] = useState(true)
  const [priv, setPriv] = useState(false)
  const field = (k, l) => (
    <label className="block text-sm font-medium">{l}
      <input value={form[k]} onChange={(e) => { setForm({ ...form, [k]: e.target.value }); setSaved(false) }} className="mt-1 w-full rounded-xl bg-mist px-3 py-2.5 font-normal outline-none focus:ring-2 focus:ring-saffron" />
    </label>
  )
  return (
    <div className="mx-auto max-w-xl">
      <Title>Profile and settings</Title>
      <div className="mb-4 flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-ink/5">
        <Avatar name={form.name} size={64} />
        <div><b className="text-lg">{form.name}</b> <span className="rounded-full bg-pine-soft px-2 py-0.5 text-xs font-medium text-pine-dark">Supporting member</span><div className="text-sm text-ink/60">{form.title}</div><div className="text-xs text-pine">72 connections</div></div>
      </div>
      <div className="mb-4 rounded-2xl bg-white p-5 ring-1 ring-ink/5">
        <h2 className="mb-2 font-bold">Top skills</h2>
        <div className="flex flex-wrap gap-2">{skills.map((k) => <span key={k} className="rounded-full bg-pine-soft px-3 py-1 text-sm text-pine-dark">{k}</span>)}</div>
        <h2 className="mb-1 mt-4 font-bold">Posts</h2><p className="text-sm text-ink/50">You have not posted yet. Share an update from Social.</p>
      </div>
      <div className="space-y-3 rounded-2xl bg-white p-5 ring-1 ring-ink/5">
        {field('name', 'Full name')}{field('title', 'Role and business')}{field('city', 'Location')}{field('email', 'Email')}
        <Btn onClick={() => setSaved(true)}>Save changes</Btn>
        {saved && <span className="ml-3 text-sm text-pine" role="status">Saved</span>}
      </div>
      <div className="mt-4 divide-y divide-ink/5 rounded-2xl bg-white px-5 ring-1 ring-ink/5">
        <Toggle label="Push notifications" on={push} set={setPush} />
        <Toggle label="Hide my profile from search" on={priv} set={setPriv} />
      </div>
      <div className="mt-4 flex gap-3">
        <Btn kind="ghost">Request data deletion</Btn><Btn kind="ghost">Sign out</Btn>
      </div>
    </div>
  )
}
