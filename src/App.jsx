
import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
const App = ()=> {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between mb-5">
          <h1 className="uppercase text-white text-2xl font-bold tracking-widest">Todo</h1>
          <button><MoonIcon fill="#ccc"/></button>
        </div>      
        <form action="" className="bg-white rounded-md overflow-hidden py-4 px-4 flex gap-3 items-center">
          <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
          <input type="text" placeholder="Create a new todo..." className="w-full outline-none text-gray-400" />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="flex justify-between gap-4 items-center border-b-gray-300 border-b">
            <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Complete online JavaScript course</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>
          <article className="flex justify-between gap-4 items-center border-b-gray-300 border-b">
            <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Complete online JavaScript course</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>
          <article className="flex justify-between gap-4 items-center border-b-gray-300 border-b">
            <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Complete online JavaScript course</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>     
          <article className="flex justify-between gap-4 items-center border-b-gray-300 border-b">
            <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Complete online JavaScript course</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>  
          <section className="px-4 py-4 flex justify-between">
          <span className="text-gray-400">5 items left</span>
          <button className="text-gray-400">Clear Completed</button>
        </section>                        
        </div> 
        <section className="container mx-auto px-4 mt-8"> 

          <div className="bg-white px-4 py-4 rounded-md flex justify-center gap-4">
            <button className="text-blue-600">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
          </div>
        </section> 
        <p className="text-center mt-8">
          Drag and drop to reorder list
        </p>             
      </main>
    </div>
  )
}
export default App;