import CartWidget from "./CartWidget"

function NavBar(){
    return ( <div className="flex justify-end bg-red-300 p-4">
        <nav>
            <div className="items-center hidden md:flex md:gap-4 ">
                <a href="#">Usuario</a>
                <a href="#">Compras</a>
                <a href="#">Comunidad</a>
                <a href="#">
                    <CartWidget />
                </a>
            </div>
        </nav>
        </div>
    )
}
export default NavBar