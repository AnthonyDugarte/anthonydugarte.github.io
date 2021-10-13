import Script from 'next/script'
import Head from 'next/head'

export default function CalendlyPopup() {
  return (
    <>
      {/* calendly gadget load */}
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      {/* end of calendly gadget load */}

      <button
        onClick={() =>
          Calendly.initPopupWidget({
            url: 'https://calendly.com/anthonydugarte?hide_landing_page_details=1',
          })
        }
        className="flex flex-row items-center transform transition-transform ease-in-out duration-300 hover:scale-110"
      >
        <img src="/icons/phone.svg" className="w-8 h-8" alt="mail" />
        &nbsp;
        <span className="font-mono text-lg font-semibold">Let's talk</span>
      </button>
    </>
  )
}
