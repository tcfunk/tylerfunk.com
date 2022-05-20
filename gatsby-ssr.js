import React from "react"

export function onRenderBody (
  { setBodyAttributes, setHeadComponents }
) {
  setBodyAttributes({
    className: `
      bg-gray-800
      min-h-screen
    `
  })
  setHeadComponents([
    <script async="true" src="https://viewer.marmoset.co/main/marmoset.js" />
  ])
}
