import styled from 'styled-components'
import Link from 'next/link'

const SearchResultDiv = styled.div`
  position: relative;
  margin: 0 0 70px 30px;
  width: 976px;
`
const TopDiv = styled.div`
  margin: 30px 0 0;
  line-height: 10px;
`
const TopP = styled.p`
  font-size: 12px;
`
const ProductUl = styled.ul`
  width: 100%;
  padding: 0;
`
const ProductBoxDiv = styled.div`
  width: 24%;
  position: relative;
  display: inline-block;
  min-height: 400px;
  vertical-align: top;
  padding-right: 1%;
`
const ProductBoxContainer = styled.div`
  width: 100%;
  padding: 40px 0 15px 0;
  display: block;
  min-height: 100%;
  height: auto;
  background-color: #F5F5EF;
`
const ProductImageDiv = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  text-align: center;
`
const ProductImg = styled.img`
  width: 192px;
  height: 192px;
  margin: 10px;
`
const ProductInformation = styled.div`
  width: 100%;
  position: relative;
  min-height: 80px;
  padding: 10px 0 10px;
`
const ProductInformationInner = styled.div`
  margin-left: 10%;
  width: 100%;
  position: relative;
`
const ProductTitle = styled.div`
  margin-bottom: 6px;
  padding-right: 30px;
  max-height: 45px;
`
const TitleSpan = styled.span`
  font-size: 15px;
`
const ProductPrice = styled.div`
  margin-top: 5px;
`
const PriceSpan = styled.span`
  font-size: 18px;
`


export default function SearchResult({products}) {
    console.log(products)
    return (
        <SearchResultDiv>
            <TopDiv>
                <TopP>
                    {products.length > 0 ? products.length + "개 검색되었습니다" : "검색된게 없습니다"}
                </TopP>
            </TopDiv>
            <div>
                <ProductUl>
                    {products.length > 0 && products.map(product => (
                        <ProductBoxDiv>
                            <ProductBoxContainer>
                                <ProductImageDiv>
                                    <Link href={"/product/" + product._id}>
                                        <ProductImg src={product.images[0]}/>
                                    </Link>
                                </ProductImageDiv>
                                <ProductInformation>
                                    <ProductInformationInner>
                                        <ProductTitle>
                                            <TitleSpan>{product.title}</TitleSpan>
                                        </ProductTitle>
                                        <ProductPrice>
                                            <PriceSpan>{product.price}원</PriceSpan>
                                        </ProductPrice>
                                    </ProductInformationInner>
                                </ProductInformation>
                            </ProductBoxContainer>
                        </ProductBoxDiv>
                    ))}
                </ProductUl>
            </div>
        </SearchResultDiv>
    )
}

