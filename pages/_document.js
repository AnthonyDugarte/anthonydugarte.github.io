import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="min-h-full flex flex-col">
        <Head />

        <body className="flex-1 flex flex-col">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
