import {BrowserRouter,Route,Routes} from "react-router-dom"
import Bollywood from "./components/Bollywood"
import Fitness from "./components/Fitness"
import Food from "./components/Food"
import Hollywood from "./components/Hollywood"
import Home from "./components/Home"
import Technology from "./components/Technology"
import Header from "./components/Header"
import { Component } from "react/cjs/react.production.min"
import content from "./components/content.json"

class App extends Component {
    state={
        articleContent:content
        
    }
    render(){
        
    
    return(
            <>
        
           <BrowserRouter>
           <Header/>
           <Routes>
               <Route path="/" element={<Home articleContent={this.state.articleContent} />}></Route>
               <Route path="/bollywood" element={<Bollywood/>}></Route>
               <Route path="/technology" element={<Technology/>}></Route>
               <Route path="/hollywood" element={<Hollywood/>}></Route>
               <Route path="/fitness" element={<Fitness/>}></Route>
               <Route path="/food" element={<Food/>}></Route>
           </Routes>
           </BrowserRouter>
           </>
    )
    }
}
export default App