import Link from "next/link"
import styled from 'styled-components'
import Center from '@/components/Center'

const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`
const BannerDiv = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
`
const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`
const StyledLogo = styled.img`
  width: 200px;
  height: 100px;
  vertical-align: top;

  overflow: clip;
`

const SearchBarSpan = styled.span`
  border: 3px solid;
  border-radius: 75px;
  margin: 0;
  display: flex;
  padding: 7px 8px 8px;
`
const SearchBarFieldset = styled.fieldset`
  width: 100%;
  display: block;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
`
const SearchBarInput = styled.input`
  display: block;
  width: 90%;
  height: 29px;
  border: 0;
  font-size: 16px;
  color: #222;
  letter-spacing: -0.5px;
  line-height: 29px;
  background-color: transparent;
  border-radius: 24px;
  text-indent: 16px;
  outline: 0;
  -webkit-appearance: none;
`
const SearchBarButton = styled.button`
  width: 32px;
  height: 32px;
  padding: 3px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
export default function Header() {
    return (
        <div>
            <StyledHeader>
                <Center>
                    <Wrapper>
                        <Logo href={"/"}>Ecommerce</Logo>
                        <StyledNav>
                            <NavLink href={"/"}>Home</NavLink>
                            <NavLink href={"/products"}>Products</NavLink>
                            <NavLink href={"/categories"}>Categories</NavLink>
                            <NavLink href={"/account"}>Account</NavLink>
                            <NavLink href={"/cart"}>Cart</NavLink>
                        </StyledNav>
                    </Wrapper>
                </Center>
            </StyledHeader>
            <BannerDiv>
                <StyledLogo src={"https://i.imgur.com/Jvh1OQm.jpeg"} alt={"asd"}/>
                <SearchBarFieldset>
                    <SearchBarSpan>
                        <SearchBarInput/>
                        <SearchBarButton>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                            </svg>
                        </SearchBarButton>
                    </SearchBarSpan>
                </SearchBarFieldset>
            </BannerDiv>
        </div>


    )
}