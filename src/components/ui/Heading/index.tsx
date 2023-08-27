import { type VariantProps, cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const headingVariants = cva('font-semibold relative text-black', {
  variants: {
    lineLeft: {
      pink: 'border-l-4 border-l-primary pl-1',
      blue: 'border-l-4 border-l-accent pl-1',
    },
    lineBottom: {
      pink: "pb-1.5 after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:w-6 after:bg-primary after:content-['']",
      blue: "pb-1.5 after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:w-6 after:bg-accent after:content-['']",
      pinkLarge:
        "pb-1.5 after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:w-10 after:bg-primary after:content-['']",
      blueLarge:
        "pb-1.5 after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:w-10 after:bg-accent after:content-['']",
    },
  },
})

type HeadingProps = ComponentProps<'h1'> & VariantProps<typeof headingVariants>

export function Heading({
  children,
  lineLeft,
  lineBottom,
  className,
}: HeadingProps) {
  return (
    <h1 className={cn(headingVariants({ className, lineLeft, lineBottom }))}>
      {children}
    </h1>
  )
}
