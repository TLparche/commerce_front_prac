import Link from "next/link"
export default function Header(){
    return(
        <header >
            <Link href={"/"}>Ecommerce</Link>
            <nav>
                <Link href={"/"}>Home</Link>
                <Link href={"/products"}>Products</Link>
                <Link href={"/categories"}>Categories</Link>
                <Link href={"/account"}>Account</Link>
                <Link href={"/cart"}>Cart</Link>
            </nav>
        </header>
    )
}