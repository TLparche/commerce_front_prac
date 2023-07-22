import Nav from '@/components/Nav'
import {CategorySideBar} from '@/components/Category'
import styled from 'styled-components'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Link from 'next/link'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
`
const BoardWrap = styled.div`
  width: 900px;
  margin: 50px 40px 0 40px;
`

const BoardTitle = styled.div`
  margin-bottom: 30px;

  strong {
    font-size: 2rem;
  }

  p {
    margin-top: 5px;
    font-size: 1.2rem;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 0;
`

const Button = styled.button`
  display: inline-block;
  min-width: 80px;
  margin-left: 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 2px;
  font-size: 1.4rem;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &.on {
    background: #000;
    color: #fff;
  }
`

const BoardList = styled.div`
  width: 100%;
  border-top: 2px solid #000;

  > div {
    border-bottom: 1px solid #ddd;
    font-size: 0;
  }

  > div.top {
    border-bottom: 1px solid #999;
  }

  > div:last-child {
    border-bottom: 1px solid #000;
  }

  > div > div {
    display: inline-block;
    padding: 10px 0;
    text-align: center;
    font-size: 1.1rem;
  }

  > div.top > div {
    font-weight: 600;
  }

  .num {
    width: 10%;
  }

  .title {
    width: 60%;
    text-align: left;
    a{
      text-decoration: none;
      color: inherit;
    }
  }

  .top .title {
    text-align: center;
  }

  .writer {
    width: 10%;
    font-size:15px;
  }

  .date {
    width: 10%;
    font-size: 8px;
  }

  .count {
    width: 10%;
  }
`

const BoardPage = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 0;

  a {
    display: inline-block;
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    vertical-align: middle;
    border: 1px solid #ddd;
    border-left: 0;
    line-height: 100%;
    text-decoration: none;
    color: inherit;
  }

  a.bt {
    padding-top: 10px;
    font-size: 1.2rem;
    letter-spacing: -1px;

  }

  a.num {
    padding-top: 9px;
    font-size: 1.4rem;
  }

  a.num.on {
    border-color: #000;
    background: #000;
    color: #fff;
  }

  a:first-child {
    border-left: 1px solid #ddd;
  }
`
export default function Notice() {
    const [noticeList, setNoticeList] = useState([])
    let currentDate = new Date().toISOString().slice(0, 10);
    useEffect(() => {
        axios.get("/api/getNotice").then(result => {
            const updatedNoticeList = result.data.map(element => {
                if (element.date) {
                    const currentDate = new Date().toISOString().slice(0, 10);
                    console.log(element.date)
                    console.log(currentDate)
                    if (element.date === currentDate) {
                        element.date = element.time
                    }
                }
                return element;
            });
            currentDate = new Date().toISOString().slice(0, 10);
            setNoticeList(updatedNoticeList);
        });
    }, []);

    return (
        <div>
            <Nav/>
            <Wrapper>
                <Container>
                    <CategorySideBar/>
                    <BoardWrap>
                        <BoardTitle>
                            <strong>공지사항</strong>
                            <p>공지사항을 빠르고 정확하게 안내해드립니다.</p>
                        </BoardTitle>
                        <div>
                            <BoardList>
                                <div className="top">
                                    <div className="num">번호</div>
                                    <div className="title">제목</div>
                                    <div className="writer">글쓴이</div>
                                    <div className="date">작성일</div>
                                    <div className="count">조회</div>
                                </div>
                                <div>
                                    <div className="num">1</div>
                                    <div className="title">글 제목이 들어갑니다.</div>
                                    <div className="writer">김이름</div>
                                    <div className="date">2021.1.15</div>
                                    <div className="count">33</div>
                                </div>
                                {noticeList.length > 0 && noticeList.map(element => (
                                    <div>
                                        <div className="num">{element.id}</div>
                                        <div className="title">
                                            <Link href={`/notice/view/${element.id}`}>{element.title}</Link></div>
                                        <div className="writer">{element.name}</div>
                                        <div className="date">{element.date}</div>
                                        <div className="count">null</div>
                                    </div>
                                ))}
                            </BoardList>
                            <BoardPage>
                                <a href="#" className="bt first">&lt;&lt;</a>
                                <a href="#" className="bt prev">&lt;</a>
                                <a href="#" className="num on">1</a>
                                <a href="#" className="num">2</a>
                                <a href="#" className="num">3</a>
                                <a href="#" className="num">4</a>
                                <a href="#" className="num">5</a>
                                <a href="#" className="bt next">&gt;</a>
                                <a href="#" className="bt last">&gt;&gt;</a>
                            </BoardPage>
                            <ButtonWrapper>
                                <Link href={"/notice/write"}>
                                    <Button>등록</Button>
                                </Link>
                            </ButtonWrapper>
                        </div>
                    </BoardWrap>
                </Container>
            </Wrapper>
        </div>
    )
}