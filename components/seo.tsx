import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

export interface SEOProps {
  title?: string
  description?: string
  image?: string
  article?: boolean
}
export default function SEO({ title, description, image, article }: SEOProps) {
  const seo = {
    title: title || 'Anthony Dugarte',
    description: description || 'Software Engineer',
    // image: `${siteUrl}${image || defaultImage}`,
    // url: `${siteUrl}${pathname}`,
  }

  return (
    <>
      <Head>
        <title key="title">{seo.title}</title>
        <meta key="description" name="description" content={seo.description} />
        {/* <meta key="image" name="image" content={seo.image} /> */}

        {/* {seo.url && <meta key="og:url" property="og:url" content={seo.url} />} */}
        {!!article && (
          <meta key="og:type" property="og:type" content="article" />
        )}
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
      </Head>

      {/* Google Tag Manager */}
      <Script
        id="g-tag_manager"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5QS7WKQ');`,
        }}
      />
      {/* End Google Tag Manager */}
    </>
  )
}
