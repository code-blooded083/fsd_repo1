import ImageApp from "./ImageApp"
import CounterApp from "./CounterApp"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from "./MainLayout"

const App=()=>{
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route path="/counterapp" element={<CounterApp/>}/>
        <Route path="/imageapp" element={<ImageApp/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;