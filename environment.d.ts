declare namespace Calendly {
  declare function initPopupWidget({ url: string }): void
}

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>

declare namespace JSX {
  interface IntrinsicElements {
    ['codersrank-work-experience']: CustomElement<any>
  }
}
