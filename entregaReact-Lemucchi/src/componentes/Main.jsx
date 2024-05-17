import CardLibrosContainer from "./subcomponentes/CardLibrosContainer"


function Main (){
    return( 
    <main  className="p-4 grow h-[100dvh]">
        <h1>Nuestros libros</h1>
        <p>Estos son algunos de nuestros libros</p>
          <CardLibrosContainer/>    
    </main>)
  }
export default Main       

