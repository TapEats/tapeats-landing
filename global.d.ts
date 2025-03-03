// global.d.ts
import React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
      span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
      a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
      p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
      h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
      h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
      h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
      h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
      button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
      svg: React.SVGProps<SVGSVGElement>
      path: React.SVGProps<SVGPathElement>
      footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>
      li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
      // Add any other HTML elements you use
    }
  }
}