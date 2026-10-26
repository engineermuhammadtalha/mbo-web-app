export const initials = (n) => n.split(' ').map((w) => w[0]).slice(0, 2).join('')

export function Logo({ light = false, size = 36 }) {
  return (
    <div className="flex items-center gap-2" aria-label="MBO – One app, one ummah">
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="#00A3A5" strokeWidth="3" aria-hidden>
        <circle cx="22" cy="24" r="16" /><ellipse cx="22" cy="24" rx="7" ry="16" /><path d="M6 24h32M9 15h26M9 33h26" strokeWidth="2" />
        <path d="M38 16h6M38 24h8M38 32h6" strokeWidth="2" /><circle cx="44" cy="16" r="2" fill="#00A3A5" /><circle cx="46" cy="24" r="2" fill="#00A3A5" /><circle cx="44" cy="32" r="2" fill="#00A3A5" />
      </svg>
      <div className="leading-none">
        <div className={`font-display text-2xl font-bold ${light ? 'text-white' : 'text-ink'}`}>MBO</div>
        <div className={`text-[8px] font-semibold tracking-wide ${light ? 'text-white/70' : 'text-ink/70'}`}>ONE APP - <span className="text-pine">ONE UMMAH</span></div>
      </div>
    </div>
  )
}

export function Avatar({ name, size = 40 }) {
  return (
    <div style={{ width: size, height: size }} className="grid shrink-0 place-items-center rounded-full bg-pine-soft font-display font-bold text-pine-dark" aria-hidden>
      {initials(name)}
    </div>
  )
}

export function Chips({ items, value, onChange }) {
  return (
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0" role="tablist">
      {items.map((c) => (
        <button key={c} role="tab" aria-selected={value === c} onClick={() => onChange(c)}
          className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition ${value === c ? 'bg-pine text-white' : 'bg-white text-ink/70 ring-1 ring-ink/10 hover:ring-pine'}`}>
          {c}
        </button>
      ))}
    </div>
  )
}

export const Title = ({ children, sub }) => (
  <div className="mb-4">
    <h1 className="text-2xl font-bold">{children}</h1>
    {sub && <p className="text-sm text-ink/60">{sub}</p>}
  </div>
)

export const Btn = ({ kind = 'solid', className = '', ...p }) => (
  <button {...p} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${kind === 'solid' ? 'bg-pine text-white hover:bg-pine-dark' : 'bg-white text-pine-dark ring-1 ring-pine/40 hover:bg-pine-soft'} ${className}`} />
)

export const gbp = (n) => '£' + n.toLocaleString('en-GB')
