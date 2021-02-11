import React from "react";
import styled from 'styled-components'

import SiteHeader from "../components/header/header"
import SiteFooter from "../components/footer"

import '../pages/index.css';


const Wrapper = styled.div.attrs({
  className: "w-full bg-gray-800"
})``

// 393E46
// 34, 40, 49

export default function Layout({ children }) {
  return (
    <Wrapper>

      <SiteHeader />

      {children}

      <SiteFooter />
      {/* <footer className="flex flex-row text-center justify-center mt-4 py-4 bg-blue-100">
        <div>
          footer things
        </div>
      </footer> */}
    </Wrapper>
  )
}