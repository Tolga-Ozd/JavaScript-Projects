//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

import birdBlue from "./img/bird-blue.jpeg"


const Content = () => {

    //!local style objesi
    const parStyle ={
        fontFamily :"tahoma",
        fontSize : "1.4rem" ,
        textAlign : "justify",
    }

    const imgStyle = {
      borderRadius: "20px",
      width : "400px",
      cursor : "pointer",
      display:"block",
      margin:"auto",
    }

  return (
  <main>
    {/* Inline CSS (Cift suslu ile key-value yapisi ile stil verilebilir) */}
    <h2 style={{color : "white" , backgroundColor : "red"}}>React JS</h2>

    <h2 style={parStyle}>React JS</h2>

    <p style={parStyle}>Lorem ipsum dolor sit amet.</p>

    <h4 style={parStyle}>Bu bir H4</h4>

    <img 
    style={imgStyle}
    src="https://media.istockphoto.com/id/1409131170/tr/foto%C4%9Fraf/diasy-border-on-blue-wood.jpg?s=612x612&w=0&k=20&c=Zb5BeHOXqMwyBXLKNvHlsxZ1QWJl6sXGOcb5eMxIAsY=" alt="papatya" />

    <img 
    style={imgStyle} src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_1280.jpg" alt="kelebek" />

    {/* <img src="./img/bird-blue" alt="bird-blue" /> */}
    {/* Node Js src altındaki resimlere bu şekilde ulaşımı engeller o yüzden import yapmamız gerekir */}
    <img src={birdBlue} alt="bird-blue" />

    <img src="./assets/pink.jpg" alt="pink" />
    {/*public klasörü içindeki resimlere doğrudan erişilebilir yukarıdaki gibi  */}
  </main>
  )
}

export default Content
