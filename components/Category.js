import styled from 'styled-components'

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
const CategoryListBorderBottom = styled.li`
  border-top: 1px solid #65C466;
  background-color: #fff;
  box-sizing: border-box;
`

function SpecCategoryList(){
    return(
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
    )
}
export default function Category(){
    return(
        <BoxCategoryDiv>
            <BoxCategoryH2>Every Category</BoxCategoryH2>
            <div id={"category"}>
                <SpeCategoryDiv>
                    <SpeCategoryUl>
                        <li><CategoryA>Snack</CategoryA></li>
                        <CategoryListBorderBottom>
                            <li><CategoryA>Snack</CategoryA></li>
                        </CategoryListBorderBottom>
                        <CategoryListBorderBottom>
                            <li><CategoryA>Snack</CategoryA></li>
                        </CategoryListBorderBottom>
                        <CategoryListBorderBottom>
                            <li><CategoryA>Snack</CategoryA></li>
                        </CategoryListBorderBottom>
                        <CategoryListBorderBottom>
                            <li><CategoryA>Snack</CategoryA></li>
                        </CategoryListBorderBottom>
                        <CategoryListBorderBottom>
                            <li><CategoryA>Snack</CategoryA></li>
                        </CategoryListBorderBottom>
                        <CategoryListBorderBottom>
                            <li><CategoryA>Snack</CategoryA></li>
                        </CategoryListBorderBottom>
                        <CategoryListBorderBottom>
                            <li><CategoryA>Snack</CategoryA></li>
                        </CategoryListBorderBottom>
                    </SpeCategoryUl>
                </SpeCategoryDiv>
            </div>
        </BoxCategoryDiv>
    )
}