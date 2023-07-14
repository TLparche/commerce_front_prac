import Nav from '@/components/Nav'
import {CategorySideBar} from '@/components/Category'
import styled from 'styled-components'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import WriteNotice from '@/components/WriteNotice'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
`

export default function NoticeWrite() {
    const [notice, setNotice] = useState(null)
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
        const fetchNotice = async () => {
            const response = await axios.get(`/api/getNotice?id=${id}`);
            setNotice(response.data);
        };
        if (id) {
            fetchNotice();
        }
    }, [id]);

    return (
        <div>
            <Nav/>
            <Wrapper>
                <Container>
                    <CategorySideBar/>
                    {notice && (
                        <WriteNotice {...notice[0]}/>
                    )}
                </Container>
            </Wrapper>
        </div>
    )
}