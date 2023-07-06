
//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.

const Events = () => {

let message = "EVENTS"

const handleClick = () =>{
    alert ("Hi")
}

const handleChange = ()=> {
    message = "State"
}

  return (
    <div>

    <h1>{message}</h1>

    <button onClick={handleClick}>Click</button>

       {/* Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
      takdirde event fonksiyonu event gerceklesmeden cagirilir */}
      <button onClick={() => alert("Deneme")}>Save</button>

    <button onClick={handleChange}>Change</button>

    </div>
  )
}

export default Events
