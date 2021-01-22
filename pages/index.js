export default function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col justify-center space-y-12">
        <div className="mx-auto mt-12 rounded-full overflow-hidden shadow-md">
          <a
            href="mailto:contact@anthonydugarte.dev"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="h-64 w-64"
              src="https://www.gravatar.com/avatar/dbe7c7ec5e2e6623c3cfe6272e680b5e?s=2048"
              alt="me"
            />
          </a>
        </div>

        <div className="mx-auto">
          <a
            href="mailto:contact@anthonydugarte.dev"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/email.svg" className="w-12 h-w-12" alt="mail" />
          </a>
        </div>
      </main>
    </>
  )
}
