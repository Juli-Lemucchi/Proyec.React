import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar(){
    return ( <div className="h-[100dvh]">
        <nav className="flex">
            <div className=" flex-col md:flex md:gap-4 ">

                <Link to="/">Home</Link>

                <Link to="/Libros">Libros</Link>

                <Link to="/category/Terror">Terror</Link>

                <Link to="/category/Fantasia">Fantasia</Link>

                <Link to="/carrito">
                    <CartWidget />
                </Link>
            </div>
        </nav>
        </div>
    )
}
export default NavBar