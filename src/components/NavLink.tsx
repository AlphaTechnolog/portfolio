import { useState, useEffect } from 'preact/hooks'
import type { Link } from '../env.d'

export default function NavLink({ link }: { link: Link }) {
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    setActive(window.location.pathname === link.url)
  })

  return (
    <a class={`text-${isActive ? 'primary' : 'foreground'} text-md`} href={link.url}>
      {link.label || 'Cannot get link label'}
    </a>
  )
}
