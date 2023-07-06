import Header from "./Header"
import { Footer } from "./Footer"
import Content from "./Content"

//!Css dosyaları doğrudan import edilir Export edilmelerine gerek yoktur.
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
