import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col justify-center space-y-12">
        <div className="mx-auto mt-12 rounded-full overflow-hidden shadow-md w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
          <Link href="mailto:contact@anthonydugarte.dev">
            <a target="_blank" rel="noreferrer">
              <Image
                src="https://www.gravatar.com/avatar/dbe7c7ec5e2e6623c3cfe6272e680b5e?s=1024"
                alt="me"
                width={1024}
                height={1024}
                layout="responsive"
              />
            </a>
          </Link>
        </div>

        <div className="mx-auto">
          <Link href="https://calendly.com/anthonydugarte">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center transition-transform hover:scale-110"
            >
              <img src="/icons/phone.svg" className="w-8 h-8" alt="mail" />
              &nbsp;
              <span className="font-mono text-lg font-semibold">
                Let's talk
              </span>
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}
