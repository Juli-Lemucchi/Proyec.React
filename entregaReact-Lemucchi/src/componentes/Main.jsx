import CardLibros from "./subcomponentes/CardLibros"


function Main (){
    return( <main  className="p-4 grow">
              <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <CardLibros 
                titulo="Libro 1" 
                precio={24500} />
                <CardLibros 
                titulo="Libro 2" 
                precio={27000} />
                <CardLibros 
                titulo="Libro 3" 
                precio={33000} />
                <CardLibros 
                titulo="Libro 4" 
                precio={22000} />
                <CardLibros 
                titulo="Libro 5" 
                precio={26800} />
                <CardLibros 
                titulo="Libro 6" 
                precio={22500} />
                <CardLibros 
                titulo="Libro 7" 
                precio={25000} />
                <CardLibros 
                titulo="Libro 8" 
                precio={19900} />
              </section>
            </main>)
  }
export default Main       
