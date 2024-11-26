const getcolor=()=>{
    //hex code
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode ="#"+randomNumber.toString(16);
    // console.log(randomNumber ,randomCode)
    document.body.style.background=randomCode
    document.getElementById("color-code").innerHTML=randomCode;
    navigator.clipboard.writeText(randomCode)

}
//event call
document.getElementById("btn").addEventListener("click" , getcolor)
//initial call
getcolor()
