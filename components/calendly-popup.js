import Script from 'next/script'
import Head from 'next/head'

export default function CalendlyPopup() {
  return (
    <>
      {/* calendly widget load */}
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      {/* end of calendly widget load */}

      <button
        onClick={() =>
          // eslint-disable-next-line no-undef
          Calendly.initPopupWidget({
            url: 'https://calendly.com/anthonydugarte?hide_landing_page_details=1',
          })
        }
        className="flex flex-row items-center transition-transform ease-in-out duration-300 hover:scale-110"
        type="button"
      >
        <img src="/icons/calendar.svg" className="w-8 h-8" alt="mail" />
        &nbsp;
        <span className="font-mono text-lg font-semibold">Let&apos;s talk</span>
      </button>
    </>
  )
}
