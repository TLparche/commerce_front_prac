import Link from "next/link";
import styled, {css} from 'styled-components';
import {useState} from 'react'
import Banner from '@/components/BannerSlide'

const AllDiv = styled.div`
  width: 100%;
`
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
    /*&::before{
    content: '';
    width: 26px;
    height: 21px;
    margin: -4px 11px 0 23px;
    background-position: -252px -40px;
    vertical-align: middle;
    display: inline-block;
    background-size: 400px auto;
    text-indent: -9999px;
  }
  ${({isClicked}) => isClicked && css`
    &::before {
      background-position: -308px -40px;
    }
  `}*/
`
const CategorySvg = styled.svg`
  width: 40px; /* 원하는 크기로 조정 */
  height: 40px; /* 원하는 크기로 조정 */
  margin: 10px
`
const SpeCategoryDiv = styled.div`
  position: relative;
  height: 400px;
  z-index: 100;
  display: block;
`
const SpeCategoryUl = styled.ul`
  position: relative;
  width: 224px;
  z-index: 100;
  list-style: none;
  padding: 0;
  margin: 0;
`
const CategoryA = styled.a`
  position: relative;
  display: block;
  height: 44px;
  font-size: 15px;
  letter-spacing: -1px;
  color: #fff;
  background-color: #0abb26;
  text-indent: 24px;
  line-height: 42px;
  cursor: pointer;
`
const CategoryDiv = styled.div`
  display: none;
  position: absolute;
  left: 224px;
  top: 0;
  width: 976px;
  height: 400px;
`
const CategoryDivOverflow = styled.div`
  overflow: hidden;
`
const InnerCategoryDiv = styled.div`
  float: left;
  width: 192px;
  height: 332px;
`
const CategorySpan = styled.span`
  display: block;
  padding: 22px 0 0 35px;
  font-size: 14px;
  font-weight: 700;
  line-height: 28px;
  color: #222;
  letter-spacing: -1px;
`
const CategoryUl = styled.ul`
  padding: 5px 0 0 35px;
`
const SpeCategoryA = styled.a`
  font-size: 14px;
  line-height: 29px;
  letter-spacing: -1px;
  color: #777;
`
const MainTopDiv = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  min-width: 1200px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.05);
  }
`
const MainTopDivInner = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  padding-left: 224px;
  box-sizing: border-box;

  &::after {
    display: block;
    content: '';
    clear: both;
  }
`
const BoxCategoryDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 224px;
  height: 400px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    z-index: 10;
    left: -25px;
    width: 25px;
    height: 400px;
  }
`
const BoxCategoryH2 = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
  text-indent: -5000em;
`
const BannerDiv = styled.div`
    visibility: visible;
`
const CategoryListBorderBottom = styled.li`
  border-top: 1px solid #65C466;
  background-color: #fff;
  box-sizing: border-box;
`
export default function Header() {
    const [categorySelect, setCategorySelect] = useState(false)
    const [bannerLocation, setBannerLocation] = useState(0)
    const bannerNumber = 3;

    return (
        <AllDiv>
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
                                            <SearchBarInput/>
                                            <SearchButton>
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
                                    )
                                    }
                                    Category
                                </EveryCategoryButton>
                            </div>
                        </BoxHeaderDivInner>
                    </BoxHeaderDiv>
                </TopLayoutInner>
            </TopLayout>
            <div id={"container"}>
                <div>
                    <MainTopDiv>
                        <MainTopDivInner>
                            <BoxCategoryDiv>
                                <BoxCategoryH2>Every Category</BoxCategoryH2>
                                <div id={"category"}>
                                    <SpeCategoryDiv>
                                        <SpeCategoryUl>
                                            <li>
                                                <CategoryA>Snack</CategoryA>
                                                <CategoryDiv>
                                                    <CategoryDivOverflow>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Biscuit</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <SpeCategoryA>Chocolate</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Butter</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Vanilla</SpeCategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Strawberry</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>Cracker</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>Potato</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Mango</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>bar</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>frozen</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                    </CategoryDivOverflow>
                                                </CategoryDiv>
                                            </li>
                                            <CategoryListBorderBottom>
                                                <CategoryA>Snack</CategoryA>
                                                <CategoryDiv>
                                                    <CategoryDivOverflow>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Biscuit</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <SpeCategoryA>Chocolate</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Butter</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Vanilla</SpeCategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Strawberry</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>Cracker</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>Potato</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Mango</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>bar</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>frozen</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                    </CategoryDivOverflow>
                                                </CategoryDiv>
                                            </CategoryListBorderBottom>
                                            <CategoryListBorderBottom>
                                                <CategoryA>Snack</CategoryA>
                                                <CategoryDiv>
                                                    <CategoryDivOverflow>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Biscuit</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <SpeCategoryA>Chocolate</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Butter</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Vanilla</SpeCategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Strawberry</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>Cracker</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>Potato</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Mango</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>bar</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>frozen</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                    </CategoryDivOverflow>
                                                </CategoryDiv>
                                            </CategoryListBorderBottom>
                                            <CategoryListBorderBottom>
                                                <CategoryA>Snack</CategoryA>
                                                <CategoryDiv>
                                                    <CategoryDivOverflow>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Biscuit</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <SpeCategoryA>Chocolate</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Butter</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Vanilla</SpeCategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Strawberry</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>Cracker</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>Potato</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Mango</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>bar</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>frozen</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                    </CategoryDivOverflow>
                                                </CategoryDiv>
                                            </CategoryListBorderBottom>
                                            <CategoryListBorderBottom>
                                                <CategoryA>Snack</CategoryA>
                                                <CategoryDiv>
                                                    <CategoryDivOverflow>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Biscuit</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <SpeCategoryA>Chocolate</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Butter</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Vanilla</SpeCategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Strawberry</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>Cracker</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>Potato</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Mango</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>bar</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>frozen</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                    </CategoryDivOverflow>
                                                </CategoryDiv>
                                            </CategoryListBorderBottom>
                                            <CategoryListBorderBottom>
                                                <CategoryA>Snack</CategoryA>
                                                <CategoryDiv>
                                                    <CategoryDivOverflow>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Biscuit</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <SpeCategoryA>Chocolate</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Butter</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Vanilla</SpeCategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Strawberry</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>Cracker</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>Potato</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Mango</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>bar</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>frozen</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                    </CategoryDivOverflow>
                                                </CategoryDiv>
                                            </CategoryListBorderBottom>
                                            <CategoryListBorderBottom>
                                                <CategoryA>Snack</CategoryA>
                                                <CategoryDiv>
                                                    <CategoryDivOverflow>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Biscuit</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <SpeCategoryA>Chocolate</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Butter</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Vanilla</SpeCategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Strawberry</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>Cracker</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>Potato</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Mango</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>bar</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>frozen</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                    </CategoryDivOverflow>
                                                </CategoryDiv>
                                            </CategoryListBorderBottom>
                                            <CategoryListBorderBottom>
                                                <CategoryA>Snack</CategoryA>
                                                <CategoryDiv>
                                                    <CategoryDivOverflow>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Biscuit</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <SpeCategoryA>Chocolate</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Butter</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Vanilla</SpeCategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Strawberry</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>Cracker</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>Potato</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Mango</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>bar</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>frozen</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                    </CategoryDivOverflow>
                                                </CategoryDiv>
                                            </CategoryListBorderBottom>
                                            <CategoryListBorderBottom>
                                                <CategoryA>Snack</CategoryA>
                                                <CategoryDiv>
                                                    <CategoryDivOverflow>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Biscuit</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <SpeCategoryA>Chocolate</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Butter</SpeCategoryA>
                                                                </li>
                                                                <li>
                                                                    <SpeCategoryA>Vanilla</SpeCategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Strawberry</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>Cracker</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>Potato</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                        <InnerCategoryDiv>
                                                            <CategorySpan>Mango</CategorySpan>
                                                            <CategoryUl>
                                                                <li>
                                                                    <CategoryA>bar</CategoryA>
                                                                </li>
                                                                <li>
                                                                    <CategoryA>frozen</CategoryA>
                                                                </li>
                                                            </CategoryUl>
                                                        </InnerCategoryDiv>
                                                    </CategoryDivOverflow>
                                                </CategoryDiv>
                                            </CategoryListBorderBottom>
                                        </SpeCategoryUl>
                                    </SpeCategoryDiv>
                                </div>
                            </BoxCategoryDiv>
                            <BannerDiv id={"Banner"}>
                                <Banner />
                            </BannerDiv>
                        </MainTopDivInner>
                    </MainTopDiv>

                </div>

            </div>

        </AllDiv>
    );
}
