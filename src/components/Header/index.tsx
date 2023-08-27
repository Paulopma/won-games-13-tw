import {
  Kanban,
  ShoppingCart,
  Search,
  UserCircle2,
  ChevronDown,
} from 'lucide-react'
import Image from 'next/image'
import logo from 'public/logo_white.webp'
import { NavLink } from '../ui/NavLink'

export default function Header() {
  return (
    <nav className="relative flex justify-between p-6 lg:px-24 lg:py-16">
      <button className="lg:hidden" title="Menu" aria-label="Menu">
        <Kanban size={28} color="#FAFAFA" className="-rotate-90" />
      </button>
      <section className="flex items-center gap-x-8">
        <div className="absolute inset-0 m-auto h-11 w-[58px] lg:relative lg:m-0 lg:h-[33px] lg:w-[110px]">
          <Image
            src={logo}
            fill
            objectFit="cover"
            objectPosition="left"
            alt="won games"
          />
        </div>
        <NavLink
          href={'/'}
          className="ml-4 hidden font-medium text-white lg:block"
        >
          Home
        </NavLink>
        <NavLink
          href={'/store'}
          className="hidden font-medium text-white lg:block"
        >
          Store
        </NavLink>
      </section>
      <div className="flex gap-3 lg:gap-8">
        <button
          className="hover:brightness-75"
          title="Pesquisar"
          aria-label="Pesquisar"
        >
          <Search color="#FAFAFA" />
        </button>
        <button
          className="hover:brightness-75"
          title="Carrinho de compras"
          aria-label="Carrinho de compras"
        >
          <ShoppingCart color="#FAFAFA" />
        </button>
        <button
          className="hidden items-center gap-2 hover:brightness-75 lg:flex"
          title="Opções de usuário"
          aria-label="Opções de usuário"
        >
          <UserCircle2 strokeWidth={1.5} color="#FAFAFA" />
          <span className="font-medium text-white">John</span>
          <ChevronDown color="#FAFAFA" />
        </button>
      </div>
    </nav>
  )
}
