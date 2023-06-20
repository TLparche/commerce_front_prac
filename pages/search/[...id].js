import Nav from '@/components/Nav'
import {mongooseConnect} from '@/lib/mongoose'
import {Product} from '@/models/Product'
import styled from 'styled-components'
import {CategorySideBar} from '@/components/Category'

const Wrapper = styled.div`
    position: relative;
  width: 100%;
`
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`
export default function ProductSearch({newProducts}){
    console.log({newProducts})
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

export async function getServerSideProps(){
    await mongooseConnect();
    const newProducts = await Product.find({}, {title:1, images:1, price:1}, {sort: {'_id': 1}})
    return{
        props: {
            newProducts: JSON.parse(JSON.stringify(newProducts))
        }
    }
}