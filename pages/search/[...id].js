import Nav from '@/components/Nav'
import {mongooseConnect} from '@/lib/mongoose'
import {Product} from '@/models/Product'

export default function ProductSearch({newProducts}){
    console.log({newProducts})
    return(
        <div>
            <Nav/>
        </div>
    )
}

export async function getServerSideProps(){
    await mongooseConnect();
    const newProducts = await Product.find({}, null, {sort: {'_id': 1}})
    return{
        props: {
            newProducts: JSON.parse(JSON.stringify(newProducts))
        }
    }
}