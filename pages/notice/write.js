import Nav, {BottomBar} from '@/components/Nav'
import {CategorySideBar} from '@/components/Category'
import styled from 'styled-components'
import {useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'

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
const WritingTitleDiv = styled.div`
  display: flex;
  padding: 30px 30px 20px 30px;
  height: 40px;
  align-items: center;
`
const TitleSpan = styled.span`
  font-size: 14pt;
`
const TitleInput = styled.input`
  width: 90%;
  margin-left: 30px;
  height: 20px;
`
const DescriptionWriteDiv = styled.div`
  display: grid;
  padding: 10px 30px 20px 30px;
  height: 100%;
  align-items: center;
  overflow: auto;
`
const DescriptionTextarea = styled.textarea`
  margin-top: 20px;
  width: 100%;
  height: 720px;
  resize: none;
`
const PasswordInput = styled.input`
  width: 25%;
  margin-left: 30px;
  height: 20px;
`
const WritingPasswordDiv = styled.div`
  display: flex;
  padding: 10px 30px 20px 30px;
  height: 40px;
  align-items: center;
`
export default function NoticeWrite() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/posts', { title, description, password});
            console.log(response.data); // API 응답 데이터 처리
            await router.push("/notice")
        } catch (error) {
            console.error(error); // 오류 처리
        }
        setTitle("")
        setDescription("")
        setPassword("")
    };

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
                            <form onSubmit={handleSubmit}>
                                <WritingTitleDiv>
                                    <TitleSpan>제목</TitleSpan>
                                    <TitleInput type="text" name={"title"} placeholder={"제목을 입력해주세요."} value={title}
                                                onChange={(event) => setTitle(event.target.value)}/>
                                </WritingTitleDiv>
                                <DescriptionWriteDiv>
                                    <TitleSpan>내용</TitleSpan>
                                    <DescriptionTextarea name={"description"} placeholder={"내용을 입력해주세요."}
                                                         value={description}
                                                         onChange={(event) => setDescription(event.target.value)}></DescriptionTextarea>
                                </DescriptionWriteDiv>
                                <WritingPasswordDiv>
                                    <TitleSpan>비밀번호</TitleSpan>
                                    <PasswordInput type="text" name={"password"} placeholder={"최대 10자리"}
                                                   value={password}
                                                   onChange={(event) => setPassword(event.target.value)}/>
                                </WritingPasswordDiv>
                                <button type={"submit"}>submit</button>
                            </form>
                        </WritingBoardDiv>
                    </MainDiv>
                </Container>
            </Wrapper>
            <BottomBar/>
        </div>
    )
}