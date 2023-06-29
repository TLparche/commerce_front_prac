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
const TitleTable = styled.table`
  width: 100%;
  border-spacing: 0;
`
const TitleTagTh = styled.th`
  padding: 11px 16px 11px;
  background: #fafafa;
  font-size: 14px;
  text-align: center;
  font-weight: normal;
  border-bottom: 1px solid #c4c4c4;
  color: #666;
`
const TitleTh = styled.th`
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 11px 16px 11px 15px;
  background: #fafafa;
  font-size: 14px;
  font-weight: normal;
  border-bottom: 1px solid #c4c4c4;
  color: #666;
`
const TitleTimeSpan = styled.span`
  font-size: 12px;
  color: #666;
`
const TitleCol = styled.col`
  width: ${props => props.width};
`
const DescriptionTd = styled.td`
  padding: 30px 16px 50px 16px;
  font-size: 13px;
  color: #666;
  line-height: 25px;
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
                                게시글 조회
                            </TitleH2>
                        </div>
                        <WritingBoardDiv>
                            <TitleTable>
                                <colgroup>
                                    <TitleCol width="10%"/>
                                    <TitleCol width="75%"/>
                                    <TitleCol width="15%"/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <TitleTagTh>
                                        제목
                                    </TitleTagTh>
                                    <TitleTh>
                                        임시제목
                                    </TitleTh>
                                    <TitleTagTh>
                                        <TitleTimeSpan>
                                            임시시간
                                        </TitleTimeSpan>
                                    </TitleTagTh>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <DescriptionTd colspan="3">
                                        <p>test</p>
                                    </DescriptionTd>
                                </tr>
                                </tbody>
                            </TitleTable>
                        </WritingBoardDiv>
                    </MainDiv>
                </Container>
            </Wrapper>
        </div>
    )
}