import Footer from "./Footer"
import Header from "./Header"
const shoots = (v) => {
  console.log(v);
}
const App = () => {
  return (
    <>
      <Header/>
      <h1>This is the app container {5+5}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore doloribus numquam reiciendis accusantium temporibus, dolorum minus autem ullam voluptas excepturi placeat voluptatem quia eveniet similique amet quas voluptates illo mollitia.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore doloribus numquam reiciendis accusantium temporibus, dolorum minus autem ullam voluptas excepturi placeat voluptatem quia eveniet similique amet quas voluptates illo mollitia.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore doloribus numquam reiciendis accusantium temporibus, dolorum minus autem ullam voluptas excepturi placeat voluptatem quia eveniet similique amet quas voluptates illo mollitia.
      </p>
      <Footer/>
      <button onClick={()=>shoots("Goal!")}>OK</button>
    </>
  )
}

export default App