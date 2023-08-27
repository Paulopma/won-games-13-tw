import Image from 'next/image'
import { Heading } from '../ui/Heading'
import logo from 'public/logo_black.webp'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white pb-6 pl-6 pt-20 diagonal-clip">
      <main className="container mx-auto max-w-5xl">
        <Image className="mb-6" width={107} alt="won games" src={logo} />
        <section className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          <section className="mb-6 flex min-w-fit flex-col gap-1">
            <Heading className="mb-2 text-base" lineBottom={'blue'}>
              CONTACT
            </Heading>
            <a
              href={'mailto:suporte@wongames.gg'}
              className="text-sm text-gray-500"
            >
              suporte@wongames.gg
            </a>
            <a href={'tel:+552133283719'} className="text-sm text-gray-500">
              +55 21 33283719
            </a>
          </section>
          <section className="flex flex-col gap-1">
            <Heading className="mb-2 text-base" lineBottom={'blue'}>
              FOLLOW US
            </Heading>
            <a href={'https://instagram.com'} className="text-sm text-gray-500">
              Instagram
            </a>
            <a href={'https://twitter.com'} className="text-sm text-gray-500">
              Twitter
            </a>
            <a href={'https://youtube.com'} className="text-sm text-gray-500">
              YouTube
            </a>
            <a href={'https://facebook.com'} className="text-sm text-gray-500">
              Facebook
            </a>
          </section>
          <section className="flex flex-col gap-1">
            <Heading className="mb-2 text-base" lineBottom={'blue'}>
              LINKS
            </Heading>
            <Link
              href={'https://instagram.com'}
              className="text-sm text-gray-500"
            >
              Loja
            </Link>
            <Link
              href={'https://twitter.com'}
              className="text-sm text-gray-500"
            >
              Explorar
            </Link>
            <Link
              href={'https://youtube.com'}
              className="text-sm text-gray-500"
            >
              Buscar
            </Link>
            <Link
              href={'https://facebook.com'}
              className="text-sm text-gray-500"
            >
              FAQ
            </Link>
          </section>
          <section className="flex flex-col gap-1">
            <Heading lineBottom={'blue'}>LOCATION</Heading>
            <p className="text-sm text-gray-500">Rua 7 de Maio</p>
            <p className="text-sm text-gray-500">527 - 89020330</p>
            <p className="text-sm text-gray-500">Rio de Janeiro, Brasil</p>
          </section>
        </section>
      </main>
    </footer>
  )
}
