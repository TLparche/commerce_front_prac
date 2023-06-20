import styled from 'styled-components';
import Banner from '@/components/BannerSlide'
import Category from '@/components/Category'
import Nav from '@/components/Nav'

const BoxCategoryDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 224px;
  height: 400px;
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
const AllDiv = styled.div`
  width: 100%;
`

const MainTopDiv = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  min-width: 1200px;

`
const MainTopDivInner = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  padding-left: 224px;
  box-sizing: border-box;

`
const BannerDiv = styled.div`
  visibility: visible;
`
export default function Header() {

    return (
        <AllDiv>
            <Nav />
            <div id={"container"}>
                <MainTopDiv>
                    <MainTopDivInner>
                        <BoxCategoryDiv>
                            <BoxCategoryH2>Every Category</BoxCategoryH2>
                            <SpeCategoryDiv>
                                <SpeCategoryUl>
                                    <Category />
                                </SpeCategoryUl>
                            </SpeCategoryDiv>
                        </BoxCategoryDiv>
                        <BannerDiv id={"Banner"}>
                            <Banner/>
                        </BannerDiv>
                    </MainTopDivInner>
                </MainTopDiv>
            </div>
        </AllDiv>
    );
}
