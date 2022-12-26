import { NavLink } from '@remix-run/react'

export type LinkMakerProps = {
  link: {
    name: string
    href: string
    icon_name: string
  }
  toggle?: () => void
}

export default function LinkMaker({
  link: { name, href, icon_name },
  toggle
}: LinkMakerProps) {
  return (
    <li key={name} className='flex items-center'>
      <NavLink
        to={href}
        className={({ isActive }) =>
          ` ${
            isActive
              ? 'flex flex-col items-center border-b-2 border-black'
              : 'flex flex-col items-center'
          }`
        }
        onClick={toggle}
        prefetch='intent'
      >
        <span className='material-symbols-outlined'>{icon_name}</span>

        {name}
      </NavLink>
    </li>
  )
}
