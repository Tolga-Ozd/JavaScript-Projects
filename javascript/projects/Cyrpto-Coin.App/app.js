const form = document.querySelector(".container form")
const input = document.querySelector(".container input")

// const API_KEY = "coinranking13ce8b3dba6cb739a55c5abc7a51dd7e32851e9951fee766";

// localStorage.setItem("apiKey" , EncryptStringAES("coinranking13ce8b3dba6cb739a55c5abc7a51dd7e32851e9951fee766"))

form.addEventListener("submit" , (e) =>{
    e.preventDefault()

    getCoinDataFromAi()

})



const getCoinDataFromAi = () =>{

    const API_KEY = DecryptStringAES(localStorage.getItem("apiKey"))

    const options = {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': API_KEY ,
        },
      };
      
      fetch(`https://api.coinranking.com/v2/coins?search=${input.value}&limit=1`, options)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((err) =>console.log(err);)
}