import Link from 'next/link'
import SEO from '@components/seo'

import '@css/index.css'

const contacts = [
  {
    src: '/icons/email.svg',
    href: 'mailto:contact@anthonydugarte.dev',
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
  {
    src: '/icons/gitlab.svg',
    href: 'https://gitlab.com/AnthonyDugarte',
    alt: 'gitlab',
  },
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
  //   href: 'https://wa.me/584121060750',
  //   alt: 'whatsapp',
  // },
]

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO />

      <div className="flex-1 flex flex-col from-gray-50 via-blue-50 to-yellow-50 bg-gradient-to-br">
        {/* <header /> */}

        <main className="flex-1 flex flex-col">
          <Component {...pageProps} />
        </main>

        <footer className="shadow-inner bg-gray-50 pt-3 pb-4 flex flex-row justify-between px-8">
          <div className="hidden md:block">
            <span>{new Date().getFullYear()}</span>
          </div>

          <div className="mx-auto md:mx-0 flex space-x-8">
            {contacts.map(({ src, href, alt }) => (
              <Link href={href} key={href}>
                <a target="_blank" rel="noreferrer">
                  <img src={src} className="w-6 h-6" alt={alt} />
                </a>
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </>
  )
}

export default MyApp
