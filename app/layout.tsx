import SEO from '@/components/seo'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import '@/assets/css/index.css'
import Image from 'next/image'

const contacts = [
  {
    src: '/icons/email.svg',
    href: 'mailto:hello@anthonydugarte.dev',
    alt: 'mail',
  },
  // {
  //   src: '/icons/facebook.svg',
  //   href: 'https://www.facebook.com/AnthonyDugarte8',
  //   alt: 'facebook',
  // },
  {
    src: '/icons/linkedin.svg',
    href: 'https://www.linkedin.com/in/anthonydugarte',
    alt: 'linkedin',
  },
  {
    src: '/icons/github.svg',
    href: 'https://github.com/AnthonyDugarte',
    alt: 'github',
  },
  // {
  //   src: '/icons/gitlab.svg',
  //   href: 'https://gitlab.com/AnthonyDugarte',
  //   alt: 'gitlab',
  // },
  // {
  //   src: '/icons/instagram.svg',
  //   href: 'https://www.instagram.com/anthonydugarte8',
  //   alt: 'instagram',
  // },
  // {
  //   src: '/icons/twitter.svg',
  //   href: 'https://twitter.com/AnthonyDugarte8',
  //   alt: 'twitter',
  // },
  // {
  //   src: '/icons/telegram.svg',
  //   href: 'https://t.me/AnthonyDugarte',
  //   alt: 'telegram',
  // },
  // {
  //   src: '/icons/whatsapp.svg',
  //   href: 'https://wa.me/584122666975',
  //   alt: 'whatsapp',
  // },
]

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en" className="min-h-full flex flex-col">
      <body className="flex-1 flex flex-col">
        <SEO />

        <div className="flex-1 flex flex-col from-gray-50 via-blue-50 to-amber-50 bg-gradient-to-br">
          <main className="flex-1 flex flex-col">{children}</main>

          <footer className="shadow-inner bg-gray-50 pt-3 pb-4 flex flex-row justify-between px-8 sticky bottom-0">
            <div className="hidden md:block">
              <span>{new Date().getFullYear()}</span>
            </div>

            <div className="mx-auto md:mx-0 flex space-x-8">
              {contacts.map(({ src, href, alt }) => (
                <Link href={href} key={href} target="_blank" rel="noreferrer">
                  <Image
                    src={src}
                    className="w-6 h-6 transition-transform ease-out duration-300 hover:scale-110"
                    width={24}
                    height={24}
                    alt={alt}
                  />
                </Link>
              ))}
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
