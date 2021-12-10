import Image from 'next/image'
import Link from 'next/link'

import CalendlyPopup from '@components/calendly-popup'
import CodersRankWorkExperience from '@components/codersrank-work-experience'

export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center space-y-12 pb-4">
      <div className="mx-auto mt-12 rounded-full overflow-hidden shadow-md w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
        <Link href="mailto:hello@anthonydugarte.dev">
          <a target="_blank" rel="noreferrer">
            <Image
              src="https://www.gravatar.com/avatar/dbe7c7ec5e2e6623c3cfe6272e680b5e?s=1024"
              alt="me"
              width={1024}
              height={1024}
              layout="responsive"
              className="transform transition-transform ease-in-out duration-500 hover:scale-105"
            />
          </a>
        </Link>
      </div>

      <div className="mx-auto">
        <CalendlyPopup />
      </div>

      <div className="mx-auto px-2">
        <CodersRankWorkExperience />
      </div>
    </main>
  )
}
