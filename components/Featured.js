import styled from 'styled-components'
import Center from '@/components/Center'

const Bg = styled.div`
    background-color: #FEC7EF;
  color: #FEC7EF;
  padding: 50px 0;
`
const Title = styled.h1`
    margin: 0;
  font-weight: normal;
`
const Desc = styled.p`
  color: #aaa;
  font-size: .8rem;
`
const Wrapper = styled.div`
    display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 40px;
  img{
    max-width: 100%;
  }
`
const Column = styled.div`
    display: flex;
  align-items: center;
`
export default function Featured(){
    return(
        <Bg>
            <Center>
                <Wrapper>
                    <Column>
                        <div>
                            <Title>Cat Everywhere</Title>
                            <Desc>blaaa</Desc>
                        </div>
                    </Column>
                    <Column>
                        <img src={"https://i.imgur.com/w9NORXB.jpeg"} alt={"pic"}/>
                    </Column>
                </Wrapper>
            </Center>
        </Bg>
    )
}