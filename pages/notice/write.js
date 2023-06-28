import Nav from '@/components/Nav'
import {CategorySideBar} from '@/components/Category'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
`
const MainDiv = styled.div`
  position: relative;
  min-height: 500px;
  margin-left: 88px;
  width: 800px;
`
const TitleH2 = styled.h2`
  margin: 50px 0 20px;
`
const WritingBoardDiv = styled.div`
  border-top: 2px solid green;
  border-bottom: 1px solid white;
`
export default function NoticeWrite() {
    return (
        <div>
            <Nav/>
            <Wrapper>
                <Container>
                    <CategorySideBar/>
                    <MainDiv>
                        <div>
                            <TitleH2>
                                게시글 작성
                            </TitleH2>
                        </div>
                        <WritingBoardDiv>

                        </WritingBoardDiv>
                    </MainDiv>
                </Container>
            </Wrapper>
        </div>
    )
}