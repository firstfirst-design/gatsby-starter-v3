import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const HomeStyle = styled.div``

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title></title>
        <link rel="canonical" href="" />
      </Helmet>
      Hello world!
    </div>
  )
}
