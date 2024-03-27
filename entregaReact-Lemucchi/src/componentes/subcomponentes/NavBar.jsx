import { Ellipsis } from "lucide-react"

function NavBar(){
    return ( <div className="flex justify-end">
        <nav>
            <div className="items-center hidden md:flex md:gap-4 ">
                <a href="#">Usuario</a>
                <a href="#">Categorias</a>
                <a href="#">Comunidad</a>
                <Ellipsis width={20} height={20}/>
            </div>
        </nav>
        </div>
    )
}
export default NavBar