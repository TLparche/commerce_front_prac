import {useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {useRouter} from 'next/router'

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  align-items: center;
`;


const StyledLogo = styled.img`
  width: 200px;
  height: 100px;
  flex: 1 0 auto;
  vertical-align: top;
  overflow: clip;
`;

const SearchBarSpan = styled.span`
  border: 3px solid;
  border-radius: 75px;
  display: flex;
  padding: 7px 20px 8px;
  height: 32px;
  width: 100%;
`;

const SearchBarFieldset = styled.fieldset`
  display: flex;
  min-inline-size: min-content;
  border: 0;
  margin-left: 100px;
  flex: 6 0 auto;
`;

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
`;

const SearchButton = styled.button`
  width: 32px;
  height: 32px;
  padding: 3px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const BannerButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 3px;
  margin: 5px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const BannerButtonDiv = styled.div`
  flex: 1 0 auto;
  margin: 5px;
  text-align: center;
`;

const TopHeader = styled.div`
  background-color: gray;
  padding: 25px;
  text-align: center;
  width: 100%;
`;

const TopLayout = styled.div`
  position: relative;
  height: 259px;
  z-index: 5000;
`
const TopLayoutInner = styled.div`
  position: relative;
  height: 259px;
  margin: 0 auto;
  z-index: 5000;
`
const BoxHeaderDiv = styled.div`
  position: relative;
  width: 100%;
  min-width: 1200px;
  height: 259px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`
const BoxHeaderDivInner = styled.div`
  position: relative;
  width: 1200px;
  height: 190px;
  margin: 0 auto;
`
const EveryCategoryButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 224px;
  height: 60px;
  padding: 17px 0 20px;
  line-height: 21px;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  letter-spacing: -1px;
  text-align: left;
  background-color: #10af29;
  box-sizing: border-box;
  cursor: pointer;
  border: 0 none;
`
const CategorySvg = styled.svg`
  width: 40px; /* 원하는 크기로 조정 */
  height: 40px; /* 원하는 크기로 조정 */
  margin: 10px
`
const CategoryBarDiv = styled.div`
  width: 1200px;
  height: 60px;
  display: flex;
`
const ServiceDiv = styled.div`
  margin-left: auto;
  padding-right: 30px;
`
const ServiceSpecDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 10px 0 10px;

  
`
const ServiceSpecLink = styled(Link)`
  padding-left: 20px;
  font-size: 16pt;
  color: black;
`

const BottomBarDiv = styled.div`
 height: 200px;
  width: 100%;
  
`


export default function Nav() {
    const [categorySelect, setCategorySelect] = useState(false)
    const [searchText, setSearchText] = useState("")
    const router = useRouter()
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            router.push("/search/" + searchText)
            setSearchText("")
        }
    };
    return (
        <TopLayout id={"header"}>
            <TopLayoutInner>
                <BoxHeaderDiv>
                    <TopHeader>text here</TopHeader>
                    <BoxHeaderDivInner>
                        <div>
                            <HeaderDiv>
                                <NavLink href={"/"}>
                                    <StyledLogo src={"https://i.imgur.com/Jvh1OQm.jpeg"} alt={"asd"}/>
                                </NavLink>
                                <SearchBarFieldset>
                                    <SearchBarSpan>
                                        <SearchBarInput value={searchText}
                                                        onChange={(event) => setSearchText(event.target.value)}
                                                        onKeyPress={handleKeyPress}/>
                                        <Link href={"/search/" + searchText}>
                                            <SearchButton onClick={() => setSearchText("")}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                                    />
                                                </svg>
                                            </SearchButton>
                                        </Link>
                                    </SearchBarSpan>
                                </SearchBarFieldset>
                                <BannerButtonDiv>
                                    <NavLink href={"/account"}>
                                        <BannerButton>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                />
                                            </svg>
                                        </BannerButton>
                                    </NavLink>
                                    <BannerButton>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                            />
                                        </svg>
                                    </BannerButton>
                                    <NavLink href={"/cart"}>
                                        <BannerButton>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                                />
                                            </svg>
                                        </BannerButton>
                                    </NavLink>
                                </BannerButtonDiv>
                            </HeaderDiv>
                            <CategoryBarDiv>
                                <EveryCategoryButton
                                    isClicked={categorySelect}
                                    onClick={() => (categorySelect ? setCategorySelect(false) : setCategorySelect(true))}>
                                    {categorySelect ? (
                                        <CategorySvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M6 18L18 6M6 6l12 12"/>
                                        </CategorySvg>) : (
                                        <CategorySvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                                        </CategorySvg>
                                    )}
                                    Category
                                </EveryCategoryButton>
                                <ServiceDiv>

                                    <ServiceSpecDiv>
                                        <ServiceSpecLink href={"/notice"} style={{textDecoration: "none"}}>
                                            Notice
                                        </ServiceSpecLink>
                                        <ServiceSpecLink href={"/login"} style={{textDecoration: "none"}}>
                                            Login
                                        </ServiceSpecLink>
                                    </ServiceSpecDiv>
                                </ServiceDiv>
                            </CategoryBarDiv>
                        </div>
                    </BoxHeaderDivInner>
                </BoxHeaderDiv>
            </TopLayoutInner>
        </TopLayout>
    )
}

export function BottomBar() {
    return(
        <BottomBarDiv>
        </BottomBarDiv>
    )
}