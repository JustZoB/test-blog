import Link from "next/link"
import styled from "styled-components";

export const Breadcrumbs = ({ title }) => {
  return (
    <BreadcrumbsList>
      <Crumb>
        <Link href={`/`}>
          <StyledLink>
            <p>Главная</p>
          </StyledLink>
        </Link>
      </Crumb>
      <Crumb>
        <p title={title}>{title}</p>
      </Crumb>
    </BreadcrumbsList>
  )
}

const BreadcrumbsList = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const StyledLink = styled.a`
  color: #82b8c2;
  cursor: pointer;
`

const Crumb = styled.div`
  max-width: 300px;

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
  }
  
  &:not(:last-child) {
    position: relative;
    padding-right: 30px;

    &::after {
      content: '>';
      position: absolute;
      top: 0;
      right: 10px;
    }
  }
`
