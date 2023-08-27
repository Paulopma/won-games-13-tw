import { cn } from '@/lib/utils'
import type { LinkProps } from 'next/link'
import Link from 'next/link'

type NavLinkProps = {
  href: string
  children: string
  className?: string
} & LinkProps

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link
      className={cn(
        "relative after:absolute after:inset-x-0 after:-bottom-2 after:h-1 after:w-full after:scale-x-0 after:transform after:bg-primary after:transition-all after:duration-300 after:content-[''] after:hover:scale-x-100",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
