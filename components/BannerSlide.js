import React, { useState } from 'react';
import styled from 'styled-components'

const BannerEntireDiv = styled.div`
  position: relative;
  height: 400px;
`
const BannerUl = styled.ul`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  box-sizing: content-box;
  transition-property: transform, -webkit-transform;
  list-style: none;
  //포지션 추가할것
`
const BannerFirstLi = styled.li`
  width: 976px;
  height: 400px;
  position: relative;
  flex-shrink: 0;
  transition-property: transform, -webkit-transform;
  //아래부분 수정필요
  pointer-events: auto;
  visibility: visible;
`
const BannerA = styled.a`
  text-decoration: none;
  color: -webkit-link;
  cursor: pointer;
`
const InsideBannerDiv = styled.div`
  height: 400px;
`
const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 0.2s;
  vertical-align: top;
  border: 0 none;
  aspect-ratio: auto 976/400;
  overflow-clip-margin: content-box;
  overflow: clip;
`
const BannerButtonRight = styled.button`
  right: 21px;
  top: 167px;
  width: auto;
  height: auto;
  margin: 0;
  background: none;
  padding: 4px;
  left: auto;
  position: absolute;
  z-index: 10;
  cursor: pointer;
  border:0 none;
  border-radius: 0;
`
const BannerButtonLeft = styled.button`
  left: 21px;
  top: 167px;
  width: auto;
  height: auto;
  margin: 0;
  background: none;
  padding: 4px;
  right: auto;
  position: absolute;
  z-index: 10;
  cursor: pointer;
  border:0 none;
  border-radius: 0;
`
const BannerButtonSvg = styled.svg`
  width: 40px; /* 원하는 크기로 조정 */
  height: 40px; /* 원하는 크기로 조정 */
`
// 슬라이드 컴포넌트
const BannerSlide = ({ index, location, children }) => {
    const style = {
        transform: `translateX(${location * -100}%)`,
        transition: 'transform 0.3s ease',
    };

    return (
        <BannerFirstLi index={index} location={location} style={style}>
            {children}
        </BannerFirstLi>
    );
};

// 슬라이드 쇼 컴포넌트
const Slideshow = ({ images }) => {
    const [bannerLocation, setBannerLocation] = useState(0);
    const bannerNumber = images.length;

    const handleNextSlide = () => {
        setBannerLocation((prev) => (prev + 1) % bannerNumber);
    };

    const handlePrevSlide = () => {
        setBannerLocation((prev) => (prev - 1 + bannerNumber) % bannerNumber);
    };

    return (
        <BannerEntireDiv>
            <BannerUl>
                {images.map((imageUrl, index) => (
                    <BannerSlide key={index} index={index} location={bannerLocation}>
                        <BannerA>
                            <InsideBannerDiv>
                                <BannerImg src={imageUrl} alt="asd" />
                            </InsideBannerDiv>
                        </BannerA>
                    </BannerSlide>
                ))}
            </BannerUl>
            <BannerButtonRight onClick={handleNextSlide}>
                <BannerButtonSvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </BannerButtonSvg>
            </BannerButtonRight>
            <BannerButtonLeft onClick={handlePrevSlide}>
                <BannerButtonSvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </BannerButtonSvg>
            </BannerButtonLeft>
        </BannerEntireDiv>
    );
};

// 사용 예시
const images = [
    'https://i.imgur.com/Db2ucgk.jpg',
    'https://i.imgur.com/6rqrtNq.jpg',
    'https://i.imgur.com/yfdgfh7.jpg',
];

export default function Banner() {
    return <Slideshow images={images} />;
};