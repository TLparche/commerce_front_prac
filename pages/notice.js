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

export default function Notice() {
    return(
        <div>
            <Nav/>
            <Wrapper>
                <Container>
                    <CategorySideBar/>
                </Container>
            </Wrapper>
        </div>
    )
}