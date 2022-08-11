import React from "react";
import Head from "next/head"
import styled from "styled-components";

export const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Content>
        <Header>Header</Header>
        <Container>{children}</Container>
        <Footer>Footer</Footer>
      </Content>
    </>
  )
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  background-color: black;
  color: white;
`

export const Container = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  flex: auto;
`

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  background-color: black;
  color: white;
`
