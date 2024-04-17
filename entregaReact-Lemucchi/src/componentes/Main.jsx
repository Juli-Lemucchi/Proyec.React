import CardLibros from "./subcomponentes/CardLibros"


function Main (){
    return( 
    <main  className="p-4 grow h-[100dvh]">
              <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></section>
              <CardLibros/>
            </main>)
  }
export default Main       
