import React from "react"

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module "*.scss" {
  const content: Record<string, string>
  export default content
}
declare module "*.module.scss" {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module "*.module.css" {
  const classes: { readonly [key: string]: string }
  export default classes
}
