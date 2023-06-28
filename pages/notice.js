import Nav from '@/components/Nav'
import {CategorySideBar} from '@/components/Category'
import styled from 'styled-components'
import {useEffect} from 'react'
import connection from '@/pages/api/posts'

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
    useEffect(() => {
        // MySQL 연결 사용 예시
        connection.query('SELECT * FROM your_table', (err, rows) => {
            if (err) {
                console.error('Error executing query:', err);
                return;
            }
            console.log('Query result:', rows);
        });
    }, []);
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