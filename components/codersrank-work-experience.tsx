import Script from 'next/script'

export default function CodersRankWorkExperience() {
  return (
    <>
      {/* codersrank widget load */}
      <Script
        src="https://unpkg.com/@codersrank/work-experience@x.x.x/codersrank-work-experience.min.js"
        strategy="lazyOnload"
      />
      {/* end of codersrank widget load */}

      <codersrank-work-experience
        username="anthonydugarte"
        logos
        branding={false}
      />
    </>
  )
}
