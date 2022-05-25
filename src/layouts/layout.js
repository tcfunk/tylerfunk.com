import React from "react";
import styled from 'styled-components'

import SiteHeader from "../components/header/header"
import SiteFooter from "../components/footer"

import '../pages/index.css';


const Wrapper = styled.div.attrs({
  className: "w-full min-h-screen bg-tsbg"
})``

export default function Layout({ children }) {
  return (
    <Wrapper>

      <SiteHeader />

      {children}

      <SiteFooter />

    </Wrapper>
  )
}