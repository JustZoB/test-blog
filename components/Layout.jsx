import React from "react"
import Link from "next/link"
import Image from 'next/image'
import Head from "next/head"
import styled from "styled-components"
import logo from "../public/logo.png"
import { Search } from "./Search"

export const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Content>
        <Header>
          <Link href={`/`}>
            <LogoContainer>
              <Image
                src={logo}
                alt="logo"
                width={60}
                height={60}
              />
            </LogoContainer>
          </Link>
          <Search />
        </Header>
        <Container>
          {children}
        </Container>
        <FooterWrap>
          <Footer>
            <Copyright>© 2022, Footer</Copyright>
          </Footer>
        </FooterWrap>
      </Content>
    </>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Header = styled.header`
  width: 1000px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  color: #101010;
  margin: auto;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    cursor: pointer;
  }
`

const Container = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  flex: 1;
  justify-content: center;
  background-color: #F0F0F0;
  color: #333;
  padding-bottom: 40px;
`
const FooterWrap = styled.footer`
  width: 100%;
  padding: 30px;
  background-color: #181818;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`

const Copyright = styled.p`
  font-size: 16px;
  color: #FFFFFF;
`
