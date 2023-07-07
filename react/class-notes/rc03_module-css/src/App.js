import Card from "./components/card/Card"
import data from "./data"

function App() {

  console.log(data)
  return (
    <div >
      <h1>LANGUAGES</h1>

      { data.map(( {id , language , img , btnName }) => (
        <Card key ={id} lang= {language} img={img} btn = {btnName} />
      ))}

      {/* Birden fazla statement kullanılacaksa o zaman fonsksiyonun süslü ve return keywordü kullanması gerekir */}

      {/* < Card
       id = {data.id} 
       lang = {data.language} 
       img = {data.img} 
       btn = {data.btnName} /> */}

    </div>
  )
}

export default App
