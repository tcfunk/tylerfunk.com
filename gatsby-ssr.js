import React from "react"

export function onRenderBody (
  { setBodyAttributes, setHeadComponents }
) {
  setBodyAttributes({
    className: `
    `
  })
  setHeadComponents([
    <script async={true} src="https://viewer.marmoset.co/main/marmoset.js" />
  ])
}
