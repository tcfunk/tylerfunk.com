import React from "react"

export function onRenderBody (
  { setBodyAttributes, setHeadComponents }
) {
  setBodyAttributes({
    className: `
    `
  })
  setHeadComponents([
    <script async={true} src="https://viewer.marmoset.co/main/marmoset.js" key={"marmoset_viewer"} />,
    <script data-goatcounter="https://tcfunk.goatcounter.com/count" async src="//gc.zgo.at/count.js" key="goatcounter" />
  ])
}
