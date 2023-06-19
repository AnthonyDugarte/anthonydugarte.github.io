import CalendlyPopup from '@/components/calendly-popup'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Anthony Dugarte',
  description: 'Software Engineer',
  openGraph: {
    title: 'Anthony Dugarte',
    description: 'Software Engineer',
  },
  twitter: {
    title: 'Anthony Dugarte',
    card: 'summary_large_image',
    description: 'Software Engineer',
  },
}

export default function Home() {
  return (
    <main className="flex-1 flex flex-col space-y-12 pb-4 justify-center mb-32">
      <div className="mx-auto mt-12 rounded-full overflow-hidden shadow-md w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
        <Link
          href="mailto:hello@anthonydugarte.dev"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="https://www.gravatar.com/avatar/dbe7c7ec5e2e6623c3cfe6272e680b5e?s=1024"
            alt="me"
            width={1024}
            height={1024}
            className="transition-transform ease-in-out duration-500 hover:scale-105"
          />
        </Link>
      </div>

      <div className="mx-auto">
        <CalendlyPopup />
      </div>
    </main>
  )
}
