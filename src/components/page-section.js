import * as React from "react"
import styled from 'styled-components'

const SectionWrapper = styled.section.attrs({
  className: `
    py-8
    lg:py-10
  `
})``

const Container = styled.div.attrs({
  className: `
    container
    mx-auto
    justify-center

    max-w-md
    sm:max-w-lg
    md:max-w-screen-md
    lg:max-w-screen-lg
    xl:max-w-screen-xl
    2xl:max-w-screen-2xl
  `
})``

const SectionHeader = styled.h2.attrs({
  className: `
    text-3xl
    font-light
    mb-8
  `
})``

class PageSection extends React.Component {
  render() {
    var label = ''
    if (this.props.title) {
      label = <SectionHeader>{this.props.title}</SectionHeader>
    }

    return (
      <SectionWrapper className={this.props.className}>
        <Container>
          {label}
          {this.props.children}
        </Container>
      </SectionWrapper>
    )
  }
}

export default PageSection