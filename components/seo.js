import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

// eslint-disable-next-line no-unused-vars
export default function SEO({ title, description, image, article }) {
  const seo = {
    title: title || 'Anthony Dugarte',
    description: description || 'Software Developer',
    // image: `${siteUrl}${image || defaultImage}`,
    // url: `${siteUrl}${pathname}`,
  }

  return (
    <Head>
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5QS7WKQ');`,
        }}
      />
      {/* End Google Tag Manager */}

      <title key="title">{seo.title}</title>
      <meta key="description" name="description" content={seo.description} />
      {/* <meta key="image" name="image" content={seo.image} /> */}

      {/* {seo.url && <meta key="og:url" property="og:url" content={seo.url} />} */}
      {!!article && <meta key="og:type" property="og:type" content="article" />}
      {seo.title && (
        <meta key="og:title" property="og:title" content={seo.title} />
      )}
      {seo.description && (
        <meta
          key="og:description"
          property="og:description"
          content={seo.description}
        />
      )}
      {/* {seo.image && <meta key="og:image" property="og:image" content={seo.image} />} */}

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      {/* {twitterUsername && (
                <meta key="twitter:creator" name="twitter:creator" content={twitterUsername} />
            )} */}
      {seo.title && (
        <meta key="twitter:title" name="twitter:title" content={seo.title} />
      )}
      {seo.description && (
        <meta
          key="twitter:description"
          name="twitter:description"
          content={seo.description}
        />
      )}
      {/* {seo.image && <meta key="twitter:image"name="twitter:image" content={seo.image} />} */}

      {/* Google analytics */}
      {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GMDSNYHR5E"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GMDSNYHR5E');
        `,
        }}
      /> */}
    </Head>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}
