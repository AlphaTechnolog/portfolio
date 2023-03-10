import type { Links, Link } from '../env.d'
import NavLink from './NavLink'

export default function Navbar() {
  const links: Links = [
    {
      label: 'Home',
      icon: 'HomeIcon',
      url: '/'
    },
    {
      label: 'Blog',
      icon: 'HomeIcon',
      url: '/blog'
    }
  ]

  return (
    <nav class="bg-dark-background py-4 px-[30px] lg:px-40 md:px-10 sm:px-[40px] xs:px-[30px]">
      <div className="flex justify-between">
        <h1 class="text-primary text-xl">Gabriel's Website</h1>
        <div className="grid grid-cols-2 gap-5">
          {links.map((link: Link, index: number) => (
            <NavLink key={index} link={link} />
          ))}
        </div>
      </div>
    </nav>
  )
}
