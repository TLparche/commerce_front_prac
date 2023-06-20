import Nav from '@/components/Nav'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import {CategorySideBar} from '@/components/Category'
import SearchResult from '@/components/SearchResult'
import {mongooseConnect} from '@/lib/mongoose'
import {Product} from '@/models/Product'


const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
`
export default function ProductSearch({newProducts}) {
    const router = useRouter();
    const {id} = router.query;
    const productList = newProducts.filter(product => product.title.toLowerCase().includes(String(id).toLowerCase()) || product.title.includes(id))
    return (
        <div>
            <Nav/>
            <Wrapper>
                <Container>
                    <CategorySideBar/>
                    <SearchResult products={productList}/>
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
