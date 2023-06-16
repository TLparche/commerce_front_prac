import Link from "next/link"
import styled from 'styled-components'
import Center from '@/components/Center'

const StyledHeader = styled.header`
  background-color: white;
`;
const Logo = styled(Link)`
  color: black;
  text-decoration: none;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const BannerDiv = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  align-items: center;
`
const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`
const StyledLogo = styled.img`
  width: 200px;
  height: 100px;
  flex: 1 0 auto;
  vertical-align: top;
  overflow: clip;
`

const SearchBarSpan = styled.span`
  border: 3px solid;
  border-radius: 75px;
  display: flex;
  padding: 7px 20px 8px;
  height: 32px;
  width: 100%;
`
const SearchBarFieldset = styled.fieldset`
  display: flex;
  min-inline-size: min-content;
  border: 0;
  flex: 6 0 auto;
`
const SearchBarInput = styled.input`
  display: block;
  flex: 1 0 auto;
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
const SearchButton = styled.button`
  width: 32px;
  height: 32px;
  padding: 3px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
const BannerButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 3px;
  margin: 5px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
const BannerButtonDiv = styled.div`
  flex: 1 0 auto;
  margin: 5px;
  text-align: center;
`
const TopHeader = styled.div`
  background-color: gray;
  padding: 25px;
  text-align: center;

`
export default function Header() {
    return (
        <div>
            <div>
                <TopHeader>
                    text here
                </TopHeader>
            </div>
            <BannerDiv>
                <StyledLogo src={"https://i.imgur.com/Jvh1OQm.jpeg"} alt={"asd"}/>
                <SearchBarFieldset>
                    <SearchBarSpan>
                        <SearchBarInput/>
                        <SearchButton>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                            </svg>
                        </SearchButton>
                    </SearchBarSpan>
                </SearchBarFieldset>
                <BannerButtonDiv>
                    <BannerButton>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                        </svg>
                    </BannerButton>
                    <BannerButton>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                        </svg>
                    </BannerButton>
                    <BannerButton>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                        </svg>
                    </BannerButton>
                </BannerButtonDiv>
            </BannerDiv>
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
        </div>


    )
}